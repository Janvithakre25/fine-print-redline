# FINDINGS.md — Fine-Print Redline

## What I built

A Chrome extension that finds a site's Terms of Service or Privacy Policy,
pulls out the clean text, and flags risky clauses across 6 categories using
a free AI model (Groq), with every flag showing the exact quote it's based
on. I hand-labeled 15 real policies — e-commerce, streaming, fintech,
ed-tech, fashion, and a few others — and used that to check how accurate
the tool actually is.

## Results

- **Precision:** 100% (20 out of 20 AI-flagged clauses I checked were
  correct and genuinely real)
- **Recall:** 95% (the AI caught 20 out of the 21 clauses I found myself
  by reading the policies directly)
- **Hallucination rate:** 0% (I couldn't find a single quote that wasn't
  actually in the real document, across everything I measured)

Full breakdown by site is in `metrics.md`. I'll be honest — a clean 100%
made me double check myself. Going through each flag one by one, I really
couldn't find anything wrong with any of them. I think it comes down to a
fairly small sample (20 flags across 7 sites) and a tightly written prompt
— six named categories, a strict "quote it word-for-word" rule, nothing
open-ended. I'd expect this number to come down if I tested this at a
bigger scale or on messier, longer policies. I'm reporting what I actually
measured, not claiming it holds up everywhere.

## Five hardest boilerplate-vs-predatory calls

### 1. Flipkart — pulling Buyer Protection with no notice
> "Flipkart reserves its right to modify / discontinue Buyer Protection
> Program without any prior notice period to its Users."

**My call: risky.** At first glance this is just another "we can change
our terms" clause — I'd seen a dozen versions of that by this point. What
actually makes it risky is *what's* being changed: not some minor detail,
but an active consumer protection feature people might be relying on,
removable with zero warning.

### 2. Netflix — the class-action waiver
> "You and Netflix agree that each may bring claims against the other only
> in your or its individual capacity, and not as a plaintiff or class
> member in any purported class or representative proceeding."

**My call: boilerplate.** This one sounded serious the first time I read
it — you're giving up the right to join a class action. But once I found
near-identical wording at Amazon and basically every other major platform
I checked, it was obviously just the industry default now, not something
specific to Netflix. Calling it "risky" would technically be true, but it
would flag every big company the same way, which doesn't actually help
anyone tell them apart.

### 3. Coursera — data reaching your employer
> "Coursera may share your course progress, completion status, and other
> analytics or usage information with OpenAI (who may in turn share this
> Analytics Data with your employer)..."

**My call: risky, even though it's unusually transparent.** This was the
hardest one to sit with. Coursera actually names who gets the data (OpenAI)
and even where it goes after that (your employer) — way more upfront than
most policies I read. But being clear about a risky practice doesn't make
the practice itself okay. Your employer seeing your course activity is a
real consequence someone might not expect, disclosed or not.

### 4. Vague data retention (Myntra, WhatsApp, Google Pay) vs. Prada's 7-year figure

> "We will retain your information for as long as necessary to fulfill the
> purposes outlined in this Privacy Policy." (near-identical wording at
> all three)

**Verdict: risky.**

At first I wanted to call this boilerplate — three different companies use
almost the exact same vague phrase, so it seemed like "just how the
industry writes retention clauses," not something specific to any one of
them.

Then I checked Prada's policy, and it does something none of the others
do: it gives an actual number. Personal data kept for 7 years, purchase
data kept for 7 years — a real, specific figure, not a vague phrase.

That changed my mind. If Prada can commit to a real number, then "as long
as necessary" isn't an unavoidable industry limitation — it's a choice
other companies are making not to be specific. So instead of excusing the
vague wording as "everyone does it," I'm flagging it as risky: a clear,
better alternative already exists, and most companies just aren't using it.

### 5. Zomato — making the user responsible for noticing changes
> "Zomato may vary or amend or change or update these Terms... You shall be
> responsible for checking these Terms from time to time... Your use of
> Zomato Platform after any such amendment... shall be deemed as your
> express acceptance."

**My call: risky.** "We can change terms without telling you" alone is the
industry standard at this point — I'd already called that boilerplate at
Myntra, Spotify, and Infosys. What pushes Zomato further is the extra
step: it's not just silence, it's making the *user* responsible for
checking, and treating not noticing as agreement. Same basic clause type,
meaningfully worse execution.

## Improvements I made, and what actually changed

### Fixing missed indirect data-sharing language

While checking recall, I noticed the classifier missed a real clause on
Spotify — a softer, disclaimer-style sentence ("clicking on such links may
allow third parties to collect or share data about you") rather than a
direct "we share your data" statement. My guess was the prompt was steering
the model toward more explicit phrasing and missing the quieter stuff.

I added a line to the prompt in `llm.js` explicitly telling it that
indirect disclaimers count as data_sharing too, not just direct statements,
with an example.

**Before:** Spotify — 3 out of 4 of my hand-found clauses caught.
**After:** re-ran it, and it picked up the missed clause. 4 out of 4 now.

### Cutting down false-positive tags on things that aren't clauses

The bigger issue I found was the opposite problem — the classifier was
tagging sentences that weren't actually clauses at all. On Zomato it
flagged a plain content definition. On Infosys it flagged a severability
clause. Both got real category and risk labels even though neither one
actually describes a data-sharing, arbitration, or terms-change practice.
It felt like the model was defaulting to finding *something* in every
chunk instead of being okay with finding nothing.

I rewrote the prompt to explicitly list what not to flag — definitions,
headings, unrelated legal boilerplate like severability clauses — and made
it clear that returning nothing for a chunk is a completely normal,
expected outcome, not a failure.

**Before:** re-running the old prompt on Zomato and Infosys reproduced the
same mislabeled quotes I'd caught by hand earlier.
**After:** re-ran it with the new prompt — the false tags are gone on both
sites. It's noticeably cleaner now, only flagging things that are actually
clauses.

## The one thing that surprised me most

How often something that looked alarming on its own turned out to be
completely normal once I'd read enough policies to compare it against —
and the opposite too. Vague data retention looked unavoidable until Prada
proved otherwise with an actual number. I don't think I could have made
any of these calls confidently by reading just one policy in isolation —
it only started making sense once I had enough of them side by side to
tell what's actually standard versus what's a company choosing to do
something worse.

### There was a second, sneakier version of the same problem

Even after that fix, I kept testing and found the classifier was still
doing something similar — just in a subtler way. It would flag sentences
that only *mentioned* something data-related, like "personalization" or
"infrastructure," without actually saying anything concrete — no who,
no what, no rule. It just saw a topic word and decided that was enough.

I tried fixing this the same way as before, by adding more instructions
and examples to the prompt. It didn't really work. And honestly, that
taught me something useful: a small, free model just isn't reliable enough
to follow an abstract rule like "only flag it if it states a real policy."
No matter how clearly I worded it, it kept slipping.

So instead of fighting the prompt further, I added a check in the code
itself, after the AI responds. Every quote now has to pass a simple test —
is it at least a full sentence, and does it actually contain a word like
"share," "retain," "notify," or "modify"? If it doesn't, it gets dropped,
no matter what the AI decided to call it. This way it doesn't matter if
the model gets confused again — the rule is enforced outside of it.

Honestly, this was a good lesson. Prompting only gets you so far. For
something this basic — telling a real clause apart from a sentence that
just mentions a related word — a hard rule in the code ended up being way
more reliable than just asking the model nicely, again and again.

## How I used AI for this

I used Claude for basically the whole build — the extension code, the
classifier logic, debugging things like the Groq rate limit, and cleaning
up formatting for this write-up. The actual reading of the 15 policies,
the risky-vs-boilerplate calls, and the reasoning behind each one are mine.
Claude helped me organize what I found and catch a few places where I'd
mislabeled something (like force-fitting a quote into a category it didn't
actually belong to), but the judgment calls themselves came from actually
reading the documents.

## What doesn't work perfectly yet

- Link-scanning is a keyword + footer-position guess — it can still miss a
  policy that's linked with unusual wording, or one that genuinely never
  loads into the page at all (a retry mechanism now handles the "loads
  late" case, but not the "isn't there" case)
- Text extraction uses a manual cleanup approach, not a proper library like
  Readability.js — quality varies from site to site
- Groq's free tier caps out at 6000 tokens per minute, which I hit on
  longer policies — I added a delay between chunks plus a retry-once on
  rate-limit errors, which works but makes longer policies slower to
  process
- I measured accuracy on 7 of the 15 policies, not all 15, because of time
  — it's a reasonably representative slice, but not exhaustive
- The false-positive tagging issue was real and is fixed now, but I only
  validated the fix on the two sites where I originally caught it — it's
  possible a similar issue shows up somewhere in the other 13 policies
  that I haven't specifically gone back and rechecked


