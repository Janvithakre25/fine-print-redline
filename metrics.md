# Measurement — Fine-Print Redline

## Method

Compared the AI classifier's output ("Classify ALL chunks") against my own
hand-labeled corpus.md entries for 7 policies: Flipkart, Coursera, Google Pay,
Spotify, Netflix, Myntra, and Zomato. For each AI-flagged quote, I checked:
(1) is it a real, verbatim quote from the extracted text, or a hallucination,
(2) do I agree with its category and risk label, and (3) does it match
something I found myself while reading the policy directly.

## What I found, in plain terms

The AI's total output was **smaller than what I found by reading the
policies myself** — in other words, it didn't over-flag; if anything it was
somewhat conservative. But the count of findings it *did* return was close
to the count I collected by hand, and almost everything it did flag matched
something I'd independently identified as worth noting. So the overlap
between "what I found" and "what the AI found" was high, even though the
AI's raw count came in a bit under mine.

I did not find any hallucinated or misquoted text across these 7 sites —
every quote the AI returned checked out as real, word-for-word text from
the extracted page.

## Results by site

### Flipkart
- My hand-found clauses: 4
- AI findings: 4 (close match, roughly same count)
- Overlap: all 4 of my findings were also caught by the AI
- Hallucinations: none

### Coursera
- My hand-found clauses: 3
- AI findings: 3
- Overlap: all 3 matched
- Hallucinations: none

### Google Pay
- My hand-found clauses: 3
- AI findings: 3
- Overlap: all 3 matched
- Hallucinations: none

### Spotify
- My hand-found clauses: 4
- AI findings: 3 (AI missed one — the "third-party link disclaimer" clause, likely because it's a weaker/less clause-like sentence than the others)
- Overlap: 3 of 4 matched
- Hallucinations: none

### Netflix
- My hand-found clauses: 4
- AI findings: 4
- Overlap: all 4 matched
- Hallucinations: none

### Myntra
- My hand-found clauses: 2
- AI findings: 2
- Overlap: both matched
- Hallucinations: none

### Zomato
- My hand-found clauses: 1
- AI findings: 1
- Overlap: matched
- Hallucinations: none

## Overall numbers

| Metric | Result |
|---|---|
| Total hand-found clauses (across 7 sites) | 21 |
| Total AI-flagged clauses (across 7 sites) | 20 |
| Clauses found by both | 20 |
| **Recall** (my clauses the AI also caught) | 20 / 21 = **95%** |
| **Precision** (AI flags that were correct & real) | 20 / 20 = **100%** |
| **Hallucination rate** | 0 / 20 = **0%** |

## What this means

The classifier is accurate but slightly conservative — across these 7
sites, it missed only one clause I'd found by reading directly (Spotify's
third-party link disclaimer), likely because that particular sentence reads
more like a general disclaimer than a clearly-structured clause. Everything
it *did* flag was real and correctly categorized — no hallucinated or
misquoted text turned up anywhere in this sample. This suggests the tool
errs on the side of caution rather than over-flagging, which is a
reasonable tradeoff for a first version, though it does mean a user
shouldn't treat a "nothing found" result as a guarantee nothing risky
exists in the document.

## Note on methodology

Measured against 7 of the 15 hand-labeled policies rather than all 15, given
time constraints — a reasonable, representative subset covering a spread of
company types (e-commerce, streaming, ed-tech, fintech, food delivery).
Extending this same comparison to the remaining 8 sites would be the
natural next step if more time were available.