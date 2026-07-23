// llm.js
async function callGroq(apiKey, prompt) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Groq error ${res.status}: ${errText}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "(no content returned)";
}

async function callOllama(prompt, model = "llama3.1") {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, prompt, stream: false }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Ollama error ${res.status}: ${errText}`);
  }

  const data = await res.json();
  return data.response ?? "(no content returned)";
}

async function callLLM({ provider, apiKey, prompt }) {
  if (provider === "groq") {
    if (!apiKey) throw new Error("Missing Groq API key");
    return callGroq(apiKey, prompt);
  }
  if (provider === "ollama") {
    return callOllama(prompt);
  }
  throw new Error(`Unknown provider: ${provider}`);
}
// Builds the prompt that asks the AI to classify ONE chunk into our 6 risk
// categories, returning strict JSON so we can combine results across chunks.
function buildClassifyPrompt(chunk) {
  return [
    "You are analyzing a fragment of a website's Terms of Service or Privacy Policy.",
    "",
    "Find clauses in this fragment that fall into ANY of these 6 categories:",
    "1. data_sharing - data sold or shared with third parties/partners",
    "2. arbitration - forced arbitration or class-action waiver",
    "3. auto_renewal - charges continue unless user actively cancels",
    "4. broad_license - company can reuse/sublicense/train on user content",
    "5. unilateral_change - company can change terms anytime, often without notice",
    "6. data_retention - vague or indefinite data retention period",
    "",
    "For EACH clause you find, return an object with these exact fields:",
    "- category: one of the 6 category names above (exactly as written)",
    "- risk_label: either \"risky\" or \"boilerplate\" (your best guess — boilerplate",
    "  means standard/common industry language, risky means unusually harsh or vague)",
    "- quote: the EXACT text from the fragment, word-for-word, no paraphrasing",
    "- reasoning: one short sentence explaining your call",
    "",
    "If you find NOTHING relevant in this fragment, return an empty array: []",
    "",
    "Return ONLY a valid JSON array. No preamble, no explanation outside the JSON,",
    "no markdown code fences — just the raw JSON array, starting with [ and ending with ].",
    "",
    "--- POLICY FRAGMENT START ---",
    chunk,
    "--- POLICY FRAGMENT END ---",
  ].join("\n");
}

// Sends ALL chunks to the AI one by one, parses each JSON response, and
// combines everything into one flat list of findings. This is the real
// classifier — what buildTestPrompt() in popup.js was a rough draft of.
async function classifyAllChunks(chunks, { provider, apiKey }, onProgress) {
  const allFindings = [];

  for (let i = 0; i < chunks.length; i++) {
    if (onProgress) onProgress(i + 1, chunks.length);
    if (i > 0) await new Promise((resolve) => setTimeout(resolve, 3000));

    const prompt = buildClassifyPrompt(chunks[i]);

    let raw;
    try {
      raw = await callLLM({ provider, apiKey, prompt });
    } catch (err) {
      if (err.message.includes("429")) {
        // Rate limited — wait longer and try once more.
        await new Promise((resolve) => setTimeout(resolve, 8000));
        try {
          raw = await callLLM({ provider, apiKey, prompt });
        } catch (err2) {
          allFindings.push({ chunkIndex: i, error: `LLM call failed twice on chunk ${i + 1}: ${err2.message}` });
          continue;
        }
      } else {
        allFindings.push({ chunkIndex: i, error: `LLM call failed on chunk ${i + 1}: ${err.message}` });
        continue;
      }
    }

    const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      allFindings.push({
        chunkIndex: i,
        error: `Could not parse JSON from chunk ${i + 1}. Raw response: ${raw.slice(0, 200)}`,
      });
      continue;
    }

    for (const finding of parsed) {
      allFindings.push({ ...finding, chunkIndex: i });
    }
  }

  return allFindings;
}