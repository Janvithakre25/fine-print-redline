let lastExtraction = null;
let lastChunks = [];

const logEl = document.getElementById("log");
function log(msg) { console.error(msg); logEl.textContent = String(msg); }
function clearLog() { logEl.textContent = ""; }

const providerSelect = document.getElementById("provider");
const apiKeyInput = document.getElementById("apiKey");
const apiKeyRow = document.getElementById("apiKeyRow");
const settingsStatus = document.getElementById("settingsStatus");

function toggleApiKeyRow() {
  apiKeyRow.style.display = providerSelect.value === "groq" ? "block" : "none";
}
providerSelect.addEventListener("change", toggleApiKeyRow);

document.getElementById("saveSettings").addEventListener("click", async () => {
  await chrome.storage.local.set({ provider: providerSelect.value, apiKey: apiKeyInput.value });
  settingsStatus.textContent = "Saved.";
  setTimeout(() => (settingsStatus.textContent = ""), 1500);
});

async function loadSettings() {
  const { provider, apiKey } = await chrome.storage.local.get(["provider", "apiKey"]);
  if (provider) providerSelect.value = provider;
  if (apiKey) apiKeyInput.value = apiKey;
  toggleApiKeyRow();
}

const linkList = document.getElementById("linkList");
const currentPageNote = document.getElementById("currentPageNote");

document.getElementById("scanBtn").addEventListener("click", async () => {
  clearLog();
  linkList.innerHTML = "Scanning...";
  currentPageNote.textContent = "";
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { type: "FIND_POLICY_LINKS" });
    linkList.innerHTML = "";
    if (response.currentPageIsPolicy) {
      currentPageNote.textContent = `This page itself looks like a policy page: "${response.currentTitle}"`;
      linkList.appendChild(renderLinkButton({ text: "Use current page", href: response.currentUrl, score: 99 }));
    }
    if (!response.links.length) {
      const li = document.createElement("li");
      li.textContent = "No obvious ToS/Privacy links found. Paste a URL manually below.";
      linkList.appendChild(li);
      return;
    }
    for (const link of response.links) linkList.appendChild(renderLinkButton(link));
  } catch (err) {
    log("Could not message the content script. Reload the target tab after installing the extension, then try Scan again.\n\n" + err);
  }
});

function renderLinkButton(link) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.innerHTML = `${escapeHtml(link.text || link.href)} <span class="score-tag">(score ${link.score}) — ${escapeHtml(link.href)}</span>`;
  btn.addEventListener("click", () => runExtraction(link.href));
  li.appendChild(btn);
  return li;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.getElementById("manualExtractBtn").addEventListener("click", () => {
  const url = document.getElementById("manualUrl").value.trim();
  if (!url) return;
  runExtraction(url);
});

const resultSection = document.getElementById("result");
const extractStats = document.getElementById("extractStats");
const extractPreview = document.getElementById("extractPreview");

async function runExtraction(url) {
  clearLog();
  extractStats.textContent = `Fetching ${url} ...`;
  resultSection.hidden = false;
  extractPreview.textContent = "";
  try {
    const extraction = await fetchAndExtract(url);
    lastExtraction = extraction;
    lastChunks = chunkText(extraction.text);
    extractStats.innerHTML = `<strong>${escapeHtml(extraction.title)}</strong><br/>${extraction.charCount.toLocaleString()} chars extracted &middot; ${lastChunks.length} chunk(s)`;
    extractPreview.textContent = extraction.text.slice(0, 4000);
  } catch (err) {
    extractStats.textContent = "Extraction failed — see error below.";
    log(err);
  }
}

const llmOutput = document.getElementById("llmOutput");

document.getElementById("testLlmBtn").addEventListener("click", async () => {
  clearLog();
  if (!lastChunks.length) { log("Run an extraction first."); return; }
  llmOutput.textContent = "Calling LLM...";
  const { provider, apiKey } = await chrome.storage.local.get(["provider", "apiKey"]);
  const prompt = buildTestPrompt(lastChunks[0]);
  try {
    const output = await callLLM({ provider: provider || "groq", apiKey, prompt });
    llmOutput.textContent = output;
  } catch (err) {
    llmOutput.textContent = "";
    log(err);
  }
});

function buildTestPrompt(chunk) {
  return [
    "You are reviewing a fragment of a website's Terms of Service or Privacy Policy.",
    "This is a wiring test, not the final classifier — just prove you can read the text.",
    "",
    "Return: (1) a one-sentence plain-language summary of what this fragment covers,",
    "and (2) up to 3 direct quotes (verbatim, short) that look like they could relate",
    "to data sharing, arbitration, auto-renewal, broad content licensing, unilateral",
    "changes, or vague data retention. If none apply, say so plainly.",
    "",
    "--- POLICY FRAGMENT START ---",
    chunk,
    "--- POLICY FRAGMENT END ---",
  ].join("\n");
}

// ---------- Classify ALL chunks (the real analysis) ----------

const classifyProgress = document.getElementById("classifyProgress");
const classifyResults = document.getElementById("classifyResults");

document.getElementById("classifyAllBtn").addEventListener("click", async () => {
  clearLog();
  if (!lastChunks.length) {
    log("Run an extraction first.");
    return;
  }

  classifyResults.innerHTML = "";
  classifyProgress.textContent = "Starting...";

  const { provider, apiKey } = await chrome.storage.local.get(["provider", "apiKey"]);

  try {
    const findings = await classifyAllChunks(
      lastChunks,
      { provider: provider || "groq", apiKey },
      (done, total) => {
        classifyProgress.textContent = `Processing chunk ${done} of ${total}...`;
      }
    );
    classifyProgress.textContent = `Done. ${findings.length} finding(s) across ${lastChunks.length} chunks.`;
    renderFindings(findings);
    window.lastFindings = findings; // stash for easy access/inspection later
  } catch (err) {
    classifyProgress.textContent = "";
    log(err);
  }
});

function renderFindings(findings) {
  classifyResults.innerHTML = "";
  for (const f of findings) {
    const div = document.createElement("div");
    div.style.border = "1px solid #ddd";
    div.style.padding = "6px";
    div.style.marginBottom = "6px";
    div.style.fontSize = "11px";

    if (f.error) {
      div.style.background = "#ffe8e8";
      div.textContent = f.error;
    } else {
      div.innerHTML = `
        <strong>${escapeHtml(f.category || "unknown")}</strong>
        — <span style="color:${f.risk_label === "risky" ? "#b00" : "#666"}">${escapeHtml(f.risk_label || "?")}</span>
        (chunk ${f.chunkIndex + 1})<br/>
        <em>"${escapeHtml(f.quote || "")}"</em><br/>
        <span style="color:#666">${escapeHtml(f.reasoning || "")}</span>
      `;
    }
    classifyResults.appendChild(div);
  }
}

loadSettings();