// extract.js
const NOISE_SELECTORS = [
  "script", "style", "noscript", "svg", "iframe",
  "nav", "header",
  "[role='navigation']", "[role='banner']",
  ".cookie-banner", "#cookie-banner",
  ".nav", ".navbar", ".menu", ".breadcrumb", ".breadcrumbs",
];

async function fetchAndExtract(url) {
  const res = await fetch(url, { credentials: "omit" });
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  for (const sel of NOISE_SELECTORS) {
    doc.querySelectorAll(sel).forEach((el) => el.remove());
  }

  const container =
    doc.querySelector("main") ||
    doc.querySelector("article") ||
    doc.querySelector("[role='main']") ||
    doc.body;

  let text = container ? container.innerText : doc.body.innerText;

  text = text
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return {
    url,
    title: doc.title || "",
    text,
    charCount: text.length,
    extractedAt: new Date().toISOString(),
  };
}

function chunkText(text, chunkSize = 3000, overlap = 300) {
  const paragraphs = text.split(/\n{2,}/);
  const chunks = [];
  let current = "";

  for (const para of paragraphs) {
    if ((current + "\n\n" + para).length > chunkSize && current.length > 0) {
      chunks.push(current.trim());
      const tail = current.slice(-overlap);
      current = tail + "\n\n" + para;
    } else {
      current = current ? current + "\n\n" + para : para;
    }
  }
  if (current.trim()) chunks.push(current.trim());

  return chunks;
}