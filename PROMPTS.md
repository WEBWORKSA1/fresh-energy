# Fresh.Energy — Phase-wise build prompts

The concept, and the prompts used to build this repo. Run them in order with any capable AI coding assistant to rebuild, extend or clone the site. Every phase ends with a checkpoint that must pass before you start the next one.

---

## Concept (the decision)

**Fresh.Energy is an independent home clean-energy and bill-savings hub.** It covers solar, home batteries, heat pumps, EV home charging, efficiency, electricity rates and rebates. It makes money four ways:

1. **Lead generation (primary revenue).** Homeowners request quotes for solar, batteries, heat pumps, EV chargers and insulation. Consented leads go to up to 3 vetted installers, who pay per lead or for an exclusive territory. In this niche, solar and heat-pump leads are among the most valuable consumer leads.
2. **Google AdSense.** Energy, solar, HVAC and finance keywords pay some of the highest CPCs in consumer advertising.
3. **Installer and sponsor partnerships.** Exclusive territories, labelled sponsored listings, and calculator, newsletter and contest sponsorships.
4. **Reader support.** Donations and pledges fund operations, promotion, hiring and contest prizes.

**Why not a "personal energy" or wellness angle?** That route means lower CPCs, no high-value lead product and heavier competition from health publishers. Home energy has buying intent on every page.

---

## Phase 0: Research and positioning

> Act as a product strategist for **Fresh.Energy**, an independent consumer website about cutting home energy bills and switching to clean energy. Audit at least 35 world-class sites in the niche: EnergySage, SolarReviews, Solar.com, Project Sunroof, NREL PVWatts, Energy Saver (DOE), ENERGY STAR, Rewiring America, DSIRE, NRCan, Energy Saving Trust, Ofgem, Which?, MoneySavingExpert, Octopus, Sunrun, Tesla Energy, Enphase, Palmetto, Arcadia, WattBuy, EnergyBot, ChooseEnergy, SaveOnEnergy, CleanTechnica, Electrek, Canary Media, Carbon Brief, IEA, Ember, This Old House, Sense, Emporia, SolarQuotes, Clean Energy Reviews, YourHome AU, Green Building Advisor and Inspire. For each site, record its tools, lead-form design (steps, fields, trust signals, CTA text), monetization and standout UX. Synthesize 40+ must-have features grouped as lead-gen, tools, content/SEO, trust/E-E-A-T, design and monetization. Then verify the current status of home energy incentives (US 25D/25C/30D/30C, HOMES/HEAR, Canada, UK, Australia, India, EU) with official source URLs. Find 10+ embeddable YouTube explainers from reputable channels and confirm each ID with YouTube oEmbed.
>
> **Checkpoint:** `RESEARCH.md` exists with the feature table, the synthesized feature list, the incentive table (with sources) and the verified video IDs.

## Phase 1: Foundation, design system and compliance shell

> Build a static site for GitHub Pages (free plan, `main` branch, root folder). Use no framework: write a small Python generator in `_build/` that outputs plain HTML to the repo root, and add `.nojekyll`.
>
> **Design.** Create a distinctive "fresh energy" system: deep ink green `#0B2B26`, electric lime `#B8F02E`, solar amber `#FFB21E`, mint background, Archivo (expanded) headings and Instrument Sans body. Support light and dark themes, rounded cards and accessible focus states. Respect reduced motion.
>
> **Every page must include:**
> - A top strip reading "Contact, if you are interested in this website / domain name / Sponsorship / Advertisement / Partnership" that links to `https://web.works/contact`.
> - A sticky header with a mobile menu.
> - The AdSense loader in `<head>`: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6620975821265271" crossorigin="anonymous"></script>`, plus `<meta name="google-adsense-account" content="ca-pub-6620975821265271">`.
> - Canonical, Open Graph and Twitter tags, plus Organization and Breadcrumb JSON-LD.
> - A footer with a newsletter form, link columns and a trademark notice saying the site is independent and not affiliated with anyone using "Fresh Energy"/"FreshEnergy".
> - A cookie notice with "Accept all" and "Essential only". Essential only sets `requestNonPersonalizedAds = 1`.
>
> **Forms.** All forms post via AJAX to a FormSubmit relay. The destination address must never appear in HTML, JS strings or the repo in plain text: store it encoded (reversed base64, split in two) in `assets/js/config.js` and assemble it at runtime. Every form gets a honeypot field, inline status messages and an optional redirect to `thank-you.html`.
>
> **Ad slots.** Add reserved, labelled slots that render a manual `<ins class="adsbygoogle">` only when a slot ID is set in `config.js`. Auto ads cover everything else.
>
> **Checkpoint:** home page renders at 390px and 1280px, there are no console errors, and searching the repo for the plain address finds nothing.

## Phase 2: Lead-generation engine (the money page)

> Build `quotes.html` as a 4-step form with a progress bar, "Step X of 4" and a "Free · No obligation" label.
> 1. **Services.** Multi-select tiles: solar, battery, heat pump, heat pump water heater, EV charger, insulation, energy audit, community solar.
> 2. **Home.** Country, ZIP/postal code, own/rent tiles, property type, roof shade, and a monthly bill slider that drives a **live savings estimate** (system kW, year-1 savings, 25-year savings), shown before any contact details are asked for. Choosing "I rent" reveals a renter branch pointing to community solar and portable upgrades.
> 3. **Timing and budget.** Timeline tiles, payment preference, roof age and notes.
> 4. **Contact.** Name, email, optional phone, preferred contact method and time, a separate newsletter opt-in, and an **unticked consent checkbox** (TCPA-style): Fresh.Energy may contact the person and share their details with up to three vetted providers; consent is not a condition of purchase.
>
> Prefill from the URL (`?type=solar&zip=…&bill=…`) so every calculator and quick-start widget feeds the funnel. The sidebar shows why homeowners use the service, a "run the numbers first" box and the renter note. Below the form, add "What happens next" (3 steps) and an FAQ with FAQPage schema. **No manual ads on this page.**
>
> Also build `pros.html`, the installer partner application (B2B revenue): partnership models table (pay per lead, exclusive territory, sponsored listing, sponsor), a public homeowner code, and a form collecting company, contacts, website, country, service areas, services, years in business, monthly capacity, model of interest and a licence/insurance attestation.
>
> **Checkpoint:** you can step through the whole funnel, prefill works, and required-field validation blocks each step until it is complete.

## Phase 3: Interactive calculators

> Build six client-side calculators in `assets/js/tools.js`. Each one must have a currency picker ($ £ € ₹), update live, show its assumptions under the result, link to the quote funnel with prefilled parameters, and carry WebApplication and FAQ schema. Each page also needs 500+ words of methodology with a worked example.
> 1. **Solar savings.** Bill, rate, peak sun hours, offset %, $/W, incentive %, export credit %, self-consumption %, price escalation. Outputs: kW, panels, net cost, year-1 savings, payback, 25-year profit, CO₂, roof area, and an SVG cumulative cash-flow chart.
> 2. **Heat pump vs current fuel.** Gas, oil, propane or resistance heat; quantity, price, AFUE, climate COP, electricity rate, install cost. Outputs: annual costs, savings, payback, CO₂, break-even electricity price, and a 15-year chart.
> 3. **EV vs gas.** US or metric units, home/public charging split, 10% charging losses, maintenance. Outputs: per-distance cost, annual and 10-year savings, break-even rate, and a dual-line chart.
> 4. **Appliance cost.** 26 presets plus custom rows, ranked table with share bars.
> 5. **Battery sizer.** Essential-load tiles, backup days, solar recharge. Outputs: kWh, peak kW, battery count and a cost range.
> 6. **Home Energy Score.** A 12-question weighted quiz giving a 0–100 score ring, a grade and the top 6 actions linked to guides, plus an optional "email me my plan" form with a quote opt-in.
>
> **Checkpoint:** no page shows NaN, undefined or Infinity, and every result changes when its inputs change.

## Phase 4: Content engine (AdSense approval and SEO)

> Write 18 original, people-first guides of 900–1,400 words each. **Solar:** cost, worth it, comparing quotes, lease/loan/cash/PPA, home batteries, community solar. **Heat & Home:** heat pumps, HPWH, DIY audit, insulation and air sealing, smart thermostats, induction. **EV:** home charging, EV vs gas cost. **Bills & Rates:** net metering, time-of-use, 30 ways to lower your bill, standby power.
>
> Each guide needs: a key-facts box, at least one worked numeric example, at least one table, a callout, two in-article ad markers, an FAQ (4 items), internal links to related guides and calculators, at most two authoritative external links, and incentive statements verified or routed to the rebates page. No fabricated statistics; illustrative numbers are labelled.
>
> Build the guide hub with category filters and search, plus a sticky table of contents, a mini lead form and related guides on every article. Use Article and FAQ schema.
>
> Also build:
> - `incentives.html`: country tables with status chips (Open / Limited / Ended), key dates, official sources and a "last verified" date, plus a rebate-alert signup.
> - `videos.html`: lite YouTube embeds with category filter, privacy-enhanced loading on click, and original summaries.
> - `glossary.html`: 45+ terms with A–Z navigation, search and DefinedTermSet schema.
>
> **Checkpoint:** every internal link resolves, and every guide has a title, a 130–155 character description and FAQ schema.

## Phase 5: Monetization and community pages

> - **`support.html`:** donation tiers ($5 / $15 / $50 / $150), a custom amount, frequency, and a purpose selector (operations, promotion and marketing, hiring talent, contests and prizes). Add a pledge form, plus PayPal, Stripe and Buy Me a Coffee buttons that appear automatically when links are set in `config.js`. Show an allocation bar chart and a "not tax-deductible" disclosure.
> - **`contests.html`:** three skill-judged contests (Bill Cut Challenge, Fresh Ideas Prize, Clean Energy Photo Contest) with prizes, an entry form (18+ and rules checkboxes, a link field for photos) and official rules: no purchase necessary, eligibility, dates, judging, prizes, winner notification, licence, privacy, and a skill-testing question for Canada. Include a sponsor-a-prize CTA.
> - **`careers.html`:** six roles (writer, technical reviewer, video creator, partnerships, community/contest manager, developer) and an application form.
> - **`advertise.html`:** sponsorship formats, editorial standards, a media-kit request form and the owner link for website or domain purchase.
>
> **Checkpoint:** every form posts through the relay and shows a success state or redirect.

## Phase 6: Trust, legal and AdSense readiness

> Write About (mission, independence, calculator methodology with sources, editorial policy, how we make money, corrections), Contact (form plus owner link), Privacy (AdSense and third-party cookie disclosure, opt-out links, partner sharing by consent, GDPR/CCPA/PIPEDA rights, retention, children), Terms, Disclaimer (advertising, lead-sharing, affiliate, calculator, incentive, safety and donation disclosures) and Trademark & Copyright.
>
> Add `ads.txt` (`google.com, pub-6620975821265271, DIRECT, f08c47fec0942fa0`), `robots.txt`, `sitemap.xml`, an HTML sitemap, a manifest, favicon and icons, an OG image, a 404 page and a noindex thank-you page.
>
> **Checkpoint:**
> - every page has unique title and description tags;
> - there are no empty ad boxes;
> - ads sit apart from buttons and forms;
> - there is no copied content;
> - the contact and privacy pages are linked in the footer.

## Phase 7: QA and deploy

> 1. Run an automated crawl with Playwright across all pages. Check for console errors, broken internal links and NaN text. Take screenshots at 390px and 1280px and review them visually.
> 2. Search the entire repo for the plain email address and its domain; this must return nothing.
> 3. Commit to `main` in `WEBWORKSA1/fresh-energy`.
> 4. In GitHub, go to **Settings → Pages**, set Source to "Deploy from a branch", choose `main` and `/ (root)`, and save.
> 5. The `CNAME` file is set to `fresh.energy`. At the registrar, add `A` records for `@` pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, and a `CNAME` record for `www` pointing to `webworksa1.github.io`. Then tick **Enforce HTTPS**.
> 6. Submit the first FormSubmit message and click the activation email so all forms start delivering.
>
> **Checkpoint:** https://fresh.energy loads over HTTPS and a test quote request arrives in the inbox.

## Phase 8: Post-launch growth (next 90 days)

> 1. In AdSense, add the site and enable **Privacy & messaging → a Google-certified CMP** for EEA, UK and Swiss visitors. Turn on Auto ads, then create display, in-article and multiplex units and paste their slot IDs into `config.js`.
> 2. Add Google Search Console and submit `sitemap.xml`.
> 3. Wire the solar calculator to the NREL PVWatts API (free key) for address-level production.
> 4. Build programmatic "Solar cost in [State/Province]" and "Electricity rates in [State]" pages from public EIA data.
> 5. Sign the first 3–5 installer partners per metro. Set lead pricing by product and a refund policy for invalid leads.
> 6. Launch Round 1 of the contests and the Fresh Fortnightly newsletter. Add named expert reviewers to guides (E-E-A-T).
