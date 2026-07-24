## Five hardest boilerplate-vs-predatory calls

Deciding whether a clause is genuinely risky or just standard industry
language turned out to be the hardest part of this whole project — not
because the categories are unclear, but because "common" and "fair" aren't
the same thing, and a clause can look alarming in isolation while actually
being harmless once you've seen the same wording everywhere else. These are
the five calls I found hardest to make, and why I landed where I did.

### 1. Flipkart — discontinuing Buyer Protection without notice
> "Flipkart reserves its right to modify / discontinue Buyer Protection
> Program without any prior notice period to its Users."

**Verdict: risky.** On the surface this is just another "we can change our
terms" clause, and I'd already seen a dozen versions of that across the
corpus. What tips this into risky territory is what's actually being
changed — not a minor policy detail, but an active consumer protection
feature users may be relying on right now, removable with zero warning.
The category is common; the stakes of this particular instance aren't.

### 2. Netflix — the class-action waiver
> "You and Netflix agree that each may bring claims against the other only
> in your or its individual capacity, and not as a plaintiff or class
> member in any purported class or representative proceeding."

**Verdict: boilerplate.** Read on its own, this sounds serious — you're
giving up the right to join a class action. But after finding near-identical
wording at Amazon and effectively every major platform I checked, it's
clear this is the industry default, not something specific to Netflix.
Labeling it "risky" would be technically true but practically useless —
it would flag literally every major company identically, giving a user no
way to tell Netflix apart from anyone else on this point.

### 3. Coursera — data sharing with OpenAI, reaching your employer
> "Coursera may share your course progress, completion status, and other
> analytics or usage information with OpenAI (who may in turn share this
> Analytics Data with your employer)..."

**Verdict: risky, despite the transparency.** This was the hardest call to
reason through, because the disclosure itself is unusually clear — Coursera
names the exact recipient (OpenAI) and even the downstream one (your
employer), which is more transparent than almost every other data-sharing
clause I read. But transparency about a risky practice doesn't make the
practice itself safe. An employer seeing your course engagement data is a
real, specific consequence a user might not expect, even if it's disclosed
in full.

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

### 5. Zomato — shifting the burden of vigilance onto the user
> "Zomato may vary or amend or change or update these Terms... You shall be
> responsible for checking these Terms from time to time... Your use of
> Zomato Platform after any such amendment... shall be deemed as your
> express acceptance."

**Verdict: risky.** "We can change terms without notice" alone is the
industry default — I'd already seen this at Myntra, Spotify, and Infosys
and called all three boilerplate. What makes Zomato's version different is
the extra step: it doesn't just skip notifying users, it explicitly makes
*them* responsible for checking, and treats silence as agreement. Same
underlying clause type, meaningfully harsher execution — which is exactly
the kind of distinction that gets lost if you treat "unilateral_change" as
a single risky/boilerplate bucket instead of reading each instance on its
own terms.