// content.js
// Runs on every page. Its only job right now: find candidate links to the
// site's Terms of Service / Privacy Policy, and score how likely each one is
// to actually be the policy page (vs. some unrelated footer link).

const POLICY_KEYWORDS = [
  { re: /privacy policy/i, weight: 10 },
  { re: /privacy notice/i, weight: 9 },
  { re: /^privacy$/i, weight: 8 },
  { re: /terms of service/i, weight: 10 },
  { re: /terms of use/i, weight: 10 },
  { re: /terms & conditions/i, weight: 9 },
  { re: /terms and conditions/i, weight: 9 },
  { re: /^terms$/i, weight: 7 },
  { re: /user agreement/i, weight: 8 },
  { re: /legal/i, weight: 3 },
  { re: /cookie policy/i, weight: 5 },
];

function scoreLink(a) {
  const text = (a.innerText || a.textContent || "").trim();
  const href = a.getAttribute("href") || "";
  if (!text && !href) return 0;

  let score = 0;
  for (const { re, weight } of POLICY_KEYWORDS) {
    if (re.test(text)) score += weight;
    if (re.test(href)) score += weight * 0.6;
  }

  if (a.closest("footer")) score += 2;

  return score;
}

function findPolicyLinks() {
  const anchors = Array.from(document.querySelectorAll("a[href]"));
  const scored = anchors
    .map((a) => ({
      text: (a.innerText || a.textContent || "").trim().slice(0, 80),
      href: new URL(a.getAttribute("href"), document.baseURI).href,
      score: scoreLink(a),
    }))
    .filter((x) => x.score > 0 && x.href.startsWith("http"));

  const byHref = new Map();
  for (const item of scored) {
    if (!byHref.has(item.href) || byHref.get(item.href).score < item.score) {
      byHref.set(item.href, item);
    }
  }

  return Array.from(byHref.values()).sort((a, b) => b.score - a.score).slice(0, 8);
}

function currentPageLooksLikePolicy() {
  const title = document.title || "";
  const url = location.href;
  return POLICY_KEYWORDS.some(({ re }) => re.test(title) || re.test(url));
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "FIND_POLICY_LINKS") {
    sendResponse({
      links: findPolicyLinks(),
      currentPageIsPolicy: currentPageLooksLikePolicy(),
      currentUrl: location.href,
      currentTitle: document.title,
    });
  }
  return true;
});