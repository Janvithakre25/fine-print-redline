# Hand-Labeled Corpus — Fine-Print Redline

## How I labeled these

For each clause, I read the actual policy myself and decided whether it counts as **risky** (unusually harsh, vague, or one-sided compared to what I saw elsewhere) or **boilerplate** (standard industry language, seen almost everywhere, not something specific to that company). I made these calls by comparing similar clauses across companies, not by judging each one in isolation — a clause that looked concerning on its own sometimes turned out to be completely standard once I'd seen the same wording on three other sites, and vice versa.

---

## Site 1: Netflix — Terms of Use
**URL:** https://help.netflix.com/legal/termsofus
**Date checked:** 21 July 2026 · **Prior familiarity:** I've used Netflix before, never read the full Terms

**1. unilateral_change — boilerplate**
> "We may, from time to time, change these Terms of Use. In case of material changes we will notify you at least one month before such changes apply to you."

Almost every company reserves the right to change terms, but Netflix's version stands out — a full month's advance notice is stronger than what most companies offer.

**2. arbitration — boilerplate**
> "You and Netflix agree that each may bring claims against the other only in your or its individual capacity, and not as a plaintiff or class member in any purported class or representative proceeding."

This is a class-action waiver. It sounds serious the first time you read it, but nearly every major platform uses almost identical wording now — it's become standard, not something specific to Netflix.

**3. auto_renewal — boilerplate**
> "Your Netflix subscription will continue until terminated. To purchase a Netflix subscription, you will need to add one or more Payment Methods to your account."

Standard continuous-billing language, matches virtually every subscription service out there.

**4. broad_license — risky**
> "We may use any comments, information, ideas, concepts, reviews, or techniques or any other material contained in any communication you may send to us ('Feedback')."

A common type of "feedback license" clause, but still worth flagging as risky — there's no limit on how Netflix can use anything you send them, and no mention of compensation. Being common doesn't automatically make it fair.

---

## Site 2: Spotify — Privacy Policy
**URL:** https://www.spotify.com/in-en/legal/privacy-policy/
**Date checked:** 21 July 2026 · **Prior familiarity:** I use Spotify regularly, never read this policy before

**1. data_sharing — boilerplate**
> "We may process and share your personal data to comply with a request from courts, authorities, parties to litigation, or other authorized third parties."

A legal-compliance clause — this reflects an obligation under law rather than a business choice to share data, and I saw near-identical wording elsewhere too.

**2. data_sharing — boilerplate**
> "In some cases, we may use a third party application to help you verify your address, such as Google Maps."

More specific than most data-sharing clauses I read — Spotify actually names the third party and the exact purpose, which is more transparent than the vague "we share with partners" language most sites use.

**3. unilateral_change — risky**
> "We may occasionally make changes to this Policy."

No notice period is mentioned at all — compared to Netflix's one-month commitment, this gives users zero warning before a change takes effect.

**4. data_sharing — boilerplate**
> "Clicking on such links may allow third parties to collect or share data about you."

This is Spotify disclaiming responsibility for external sites, not describing its own sharing practice — low-stakes, standard wording.

---

## Site 3: Flipkart — Terms of Use
**URL:** https://www.flipkart.com/pages/terms
**Date checked:** 22 July 2026 · **Prior familiarity:** I use Flipkart regularly as a customer, never read this policy before

**1. unilateral_change — risky**
> "Flipkart reserves the right to change its Fee Policy from time to time... Changes to the Fee Policy shall be posted on the Platform and such changes shall automatically become effective immediately after they are posted."

Genuinely risky, not just standard practice — most companies at least promise some notice period. Here, changes apply the moment they're posted, with no warning and no chance to react beforehand.

**2. unilateral_change — risky**
> "Flipkart may at its sole discretion introduce new services/fees and modify some or all of the existing services/fees offered on the Platform."

Same pattern as above — broad, one-sided control over pricing, with no obligation to inform users in advance.

**3. unilateral_change — risky**
> "Flipkart reserves its right to modify / discontinue Buyer Protection Program without any prior notice period to its Users."

This is the clearest risky-vs-boilerplate case in my whole corpus — an actual consumer protection feature can be pulled entirely, with zero warning, even though users may be actively relying on it.

**4. unilateral_change — boilerplate**
> "The manner, mode, and extent of such advertising are subject to change without specific notice."

Low-stakes by comparison — this is just about how ads are displayed, not fees or protections. Standard, minor-impact wording.

---

## Site 4: Myntra — Terms of Use
**URL:** https://www.myntra.com/termsofuse
**Date checked:** 23 July 2026

**1. unilateral_change — boilerplate**
> "We may modify or update these Terms of Service at any time without prior notice to you."

On its own this looked risky, but after seeing the same "no notice" pattern at Flipkart and Spotify too, it's clearly the industry default — Netflix's one-month notice is the actual exception, not this.

**2. data_retention — risky**
> "We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy."

This is exactly the "vague, undefined retention period" pattern worth flagging — no concrete duration is given anywhere, so there's no real way to know how long your data is kept. Being common across companies doesn't make it any less of a transparency gap.

---

## Site 5: GitHub — Privacy Policy
**URL:** https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
**Date checked:** 23 July 2026

**1. data_sharing — boilerplate**
> "When you use third-party extensions, integrations, or follow references and links within our Services, the privacy policies of these third parties apply to any Personal Data you provide or consent to share with them."

Standard disclaimer — once you leave GitHub's own systems, GitHub reasonably can't be responsible for what happens next.

**2. data_sharing — boilerplate**
> "We may disclose Personal Data to authorized law enforcement, regulators, courts, or other public authorities in response to lawful requests or to protect our rights and safety."

Same legal-compliance pattern I saw at Spotify — standard practice across almost every company I checked, not something unusual to GitHub.

---

## Site 6: Zoom — Privacy Statement
**URL:** https://www.zoom.com/en/trust/privacy/privacy-statement/
**Date checked:** 23 July 2026

**1. unilateral_change — boilerplate**
> "We may update this Privacy Statement periodically to account for changes in our collection and/or processing of personal data, and will post the updated Privacy Statement on our website, with a 'Last Updated' date at the top and an Update Note at the bottom."

One of the more transparent versions of this clause I found — no formal advance notice like Netflix, but a visible "Last Updated" date and a specific note about what changed gives users a real way to check.

**2. data_sharing — boilerplate**
> "We process your personal data to comply with the legal obligations to which we are subject... for responses to requests from... competent EEA public, governmental, judicial, or other regulatory authorities."

Same legal-compliance disclosure pattern seen at Spotify and GitHub — consistent across the industry.

---

## Site 7: Coursera — Privacy Notice
**URL:** https://www.coursera.org/about/privacy
**Date checked:** 23 July 2026

**1. data_sharing — risky**
> "Coursera may share your course progress, completion status, and other analytics or usage information ('Analytics Data') with OpenAI (who may in turn share this Analytics Data with your employer), for the purposes of monitoring the App's performance..."

Unusually specific compared to most data-sharing clauses — it names OpenAI directly, and more importantly, discloses that the data can reach your employer. That's a concrete, real consequence someone could reasonably object to, not just vague "we share with partners" language.

**2. data_sharing —  risky**
> "Coursera will provide limited personal information (name, email address and badge metadata) to its third party digital credentialing platform (Credly) to allow you to set up an account with Credly to receive your OpenAI course completion badge."

Names the third party directly (Credly), which is more transparent than most. Less concerning than the clause above since this sharing is needed to deliver a feature the user opted into, and the data involved is limited — but still an external platform the user didn't choose directly, so keeping this as risky.

**3. unilateral_change — boilerplate**
> "We will notify you of any material change to this Privacy Notice by posting a notice on our Site's homepage for a reasonable period of time... or by sending an email to the email address associated with your user account, and by changing the effective date."

The strongest unilateral_change protection in the whole corpus — two separate notification channels (homepage and email) plus a visible effective-date change. Comparable to, maybe even better than, Netflix's one-month notice.

---

## Patterns I noticed across sites

**On unilateral_change**, there's a real spread once you compare companies side by side:
- **Best:** Coursera (homepage + email notice, visible effective date)
- **Also strong:** Netflix (one month's advance notice)
- **Decent:** Zoom (no advance notice, but a visible "Last Updated" + change note)
- **Weak but standard:** Myntra, Spotify (no notice at all — but this turned out to be the industry default, not unusual)
- **Worst:** Flipkart (fee and protection-program changes apply immediately upon posting, no notice whatsoever)

**On data_sharing**, most companies fall back on the same handful of "safe" justifications — legal compliance, third-party links, integrations — and those are genuinely boilerplate. The real risky cases showed up only when a company named a *specific* destination for the data with a *real consequence* attached, like Coursera disclosing that course data can reach a user's employer.