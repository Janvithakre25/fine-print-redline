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

**3. unilateral_change — boilerplate**
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

**2. data_sharing — risky**
> "Coursera will provide limited personal information (name, email address and badge metadata) to its third party digital credentialing platform (Credly) to allow you to set up an account with Credly to receive your OpenAI course completion badge."

Names the third party directly (Credly), which is more transparent than most. Less concerning than the clause above since this sharing is needed to deliver a feature the user opted into, and the data involved is limited — but still an external platform the user didn't choose directly, so keeping this as risky.

**3. unilateral_change — boilerplate**
> "We will notify you of any material change to this Privacy Notice by posting a notice on our Site's homepage for a reasonable period of time... or by sending an email to the email address associated with your user account, and by changing the effective date."

The strongest unilateral_change protection in the whole corpus — two separate notification channels (homepage and email) plus a visible effective-date change. Comparable to, maybe even better than, Netflix's one-month notice.

---

## Site 8: WhatsApp — Privacy Policy
**URL:** https://www.whatsapp.com/legal/privacy-policy
**Date checked:** 24 July 2026

**1. data_sharing — boilerplate**
> "When we share information with third-party service providers and other Meta Companies in this capacity, we require them to use your information on our behalf in accordance with our instructions and terms."

Matches the same "sharing within corporate family + service providers" pattern seen at GitHub and Zoom — standard for a company this size, and it at least commits to instructions/terms governing how the data can be used.

**2. data_retention — risky**
> "We store information for as long as necessary for the purposes identified in this Privacy Policy, including to provide our Services or for other legitimate purposes, such as complying with legal obligations, enforcing and preventing violations of our Terms, or protecting or defending our rights, property, and users."

Same "vague, undefined duration" pattern already flagged at Myntra — no concrete number or maximum given, just an open-ended "as necessary." This is now the third site using nearly this exact wording, which points to an industry-wide gap rather than something specific to WhatsApp.

**3. unilateral_change — boilerplate (favorable)**
> "We may amend or update our Privacy Policy. We will provide you notice of amendments to this Privacy Policy, as appropriate, and update the 'Effective Date' at the top of this Privacy Policy."

Similar tier to Zoom's version — no fixed advance-notice period like Netflix's month, but a stated commitment to notify users plus a visible effective-date change, rather than silently updating with no signal at all.

---

## Site 9: Google Pay — Privacy Policy
**URL:** https://policies.google.com/privacy
**Date checked:** 24 July 2026

**1. data_sharing — boilerplate**
> "We may share your information with third parties who provide services to us, such as website hosting, maintenance, and improvement, infrastructure, IT services, customer service, email delivery, auditing and processing payments."

Unusually specific for a data-sharing clause — rather than a vague "partners," it lists concrete service categories. More transparent than most sharing clauses in the corpus, even though the underlying practice (sharing with vendors) is standard.

**2. data_retention — risky**
> "We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law."

Nearly word-for-word the same vague-duration pattern seen at Myntra and WhatsApp — keeping this consistent with those two rather than treating it as a special case, since the underlying transparency gap is identical.

**3. unilateral_change — boilerplate**
> "We may change this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Google website."

Standard notice-by-posting pattern, similar tier to Myntra/Spotify — no advance warning before the change applies, just a promise to publish the update somewhere.

---

## Site 10: Zomato — Terms of Use
**URL:** https://www.zomato.com/terms-of-use
**Date checked:** 24 July 2026

**1. unilateral_change — risky**
> "Zomato may vary or amend or change or update these Terms, from time to time entirely at its own discretion... You shall be responsible for checking these Terms from time to time... Your use of Zomato Platform after any such amendment... shall be deemed as your express acceptance to such amended/changed terms."

This goes further than most unilateral_change clauses in the corpus — it's not just "we can change terms without notice," it actively places the burden on the user to keep checking, and treats silence or continued use as agreement. A meaningfully harsher pattern than Flipkart's or Myntra's versions.

---

## Site 11: Adobe — Terms of Use
**URL:** https://www.adobe.com/legal/terms.html
**Date checked:** 24 July 2026

**1. data_sharing — risky**
> "Adobe may provide your personal information to such Business. Access to complimentary Entitlements... may be provided to any users added to a Business's Admin Console... and such users would be considered Business Users."

Similar concern to Coursera's employer-visibility clause — if added under a Business/enterprise account, an admin can see your data. A concrete, specific consequence rather than vague sharing language.

**2. broad_license — risky**
> "you grant us a non-exclusive, worldwide, royalty-free license to... reproduce, distribute, create derivative works, publicly display, publicly perform, and sublicense the foregoing rights to third parties acting on our behalf" [regarding your Cloud Content]

One of the broadest license clauses in the whole corpus — public display/performance rights plus the ability to sublicense to third parties, applied to actual creative work, given Adobe's core user base of designers and photographers.

**3. arbitration — boilerplate (favorable)**
> "If either party files a Claim in arbitration that could have been brought in small claims court, the other party may provide notice that it wants the case decided in small claims court before the appointment of an arbitrator..."

Actually consumer-protective — preserves a path to small claims court instead of forcing arbitration for smaller disputes. Comparable tier to Netflix's notice period.

---

## Site 12: Blinkit — Privacy Policy
**URL:** https://blinkit.com/privacy
**Date checked:** 25 July 2026

**1. data_sharing — risky**
> "...you expressly consent to the sharing of your information with third-party payment processors, and other third-party service providers (including but not limited to service providers who provide fraud detection services to us and other third parties)."

Payment processing sharing is functionally necessary, but the "including but not limited to... and other third parties" phrasing is genuinely open-ended — there's no real ceiling on who else might receive this data. That vagueness is what pushes this to risky rather than boilerplate.

---

## Site 13: Infosys — Terms of Use
**URL:** https://www.infosys.com/terms-of-use.html
**Date checked:** 25 July 2026

**1. unilateral_change — boilerplate**
> "Your continued use of the Website after any changes to these Terms of Use are posted will be considered acceptance of those changes."

Same "continued use = acceptance" pattern as Zomato — but without the added burden-shifting language ("you must check"), so this version is milder. Labeling boilerplate rather than risky for comparison.

---

## Site 14: TVS Motor — Privacy Policy
**URL:** [TVS privacy link]
**Date checked:** 25 July 2026

**1. data_sharing — boilerplate**
> "We may disclose your Personal Data to: i. Our Parent Company for business and operational purposes; ... To respond to court orders, or legal process, or to establish our legal rights or defend against legal claims."

Two standard categories combined — sharing within a corporate group, and legal-compliance disclosure. Matches the exact same pattern already seen at WhatsApp (corporate family) and Spotify/GitHub/Zoom (legal compliance). Nothing unusual to TVS specifically.

---

## Site 15: Prada — Privacy Policy
**URL:** [Prada privacy link]
**Date checked:** 25 July 2026

**1. data_sharing — boilerplate**
> "Whenever necessary and/or instrumental to the above purposes, your Personal Data may be processed on behalf of PRADA by other entities engaged by PRADA... including: Related Companies... Service Providers: third party service providers, consultants and firms providing advisory and/or consulting activities... including website analytic services, hosting, transaction and payment processing, promotional campaign management, fraud prevention, shipping of goods, IT maintenance, etc."

Long list, but genuinely more specific and itemized than most data-sharing clauses in the corpus — actually naming categories (analytics, hosting, payments, shipping) rather than a vague "partners."

**2. data_sharing — boilerplate (favorable)**
> "Your Personal Data will not be used for third-party advertising purposes or for the promotion of products, services or initiatives by entities other than the Prada Group, nor shall they be disclosed to unknown persons under any circumstances."

The first explicitly protective data-sharing commitment in the whole corpus — most policies only describe what they can do; this one explicitly rules out third-party advertising use.

**3. data_retention — boilerplate (favorable)**
> "Personal Data of your membership account are kept for a period of 7 years from the date of your last interaction with the Prada Group or otherwise until you withdraw... Purchase details are kept for a period of 7 years from the date of purchase."

The single most important find in the whole corpus for this category — every other data_retention clause found (Myntra, WhatsApp, Google Pay) used vague "as long as necessary" language with no real number. Prada is the only site that commits to a concrete duration, which shows a specific number is achievable in practice — making the vague versions elsewhere look like an avoidable gap rather than an unavoidable industry constraint.

**4. unilateral_change — boilerplate**
> "PRADA reserves the right to amend this Privacy Policy at any time. The Privacy Policy currently in force is the one published on our website."

Standard, minimal-commitment version — no notice mechanism described at all, similar tier to Myntra/Spotify.

