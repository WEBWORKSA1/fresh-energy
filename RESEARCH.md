# Fresh.Energy — Research Notes

Compiled 2026-10-30. All sites were fetched live (WebFetch) unless marked otherwise. "Not stated" means the fetched page did not show it. It does not mean the feature is absent.

> **Brand flag:** "Fresh Energy" is also the name of an established Minnesota clean-energy nonprofit (fresh-energy.org). Its staff are quoted in national coverage of the DOE rebate changes in June 2026 (e.g. "Fresh Energy's Sam Friesen, managing director for buildings"). Expect brand confusion in search and press. Consider a clear "independent, not affiliated" line in the footer/About page and run a trademark check.

---

## PART 1 — Feature audit (40 sites)

Abbreviations: LG = lead-gen, CTA = call to action, TPO = third-party-owned (lease/PPA).

### A. Marketplaces / lead-gen / comparison

| # | Site | What it is | Key tools / calculators | Lead-gen form design | Monetization | Standout features |
|---|---|---|---|---|---|---|
| 1 | **EnergySage** (energysage.com) | US clean-energy quote marketplace (solar, batteries, heat pumps, EV charging, electricity plans). Owned by Schneider Electric. | Solar calculator (address + property type + monthly bill + map pin on roof, "Powered by Google Project Sunroof"; loading screen checks roof size/orientation, shading, rates, incentives, market pricing). Panel/inverter/battery comparison, battery price checker, installer comparison, electricity plan finder. | ZIP field in hero, repeated across the page. Separate ZIP/address flows per product ("Get free solar quotes", "Check battery prices", "Shop local offers"). Partner docs describe a **13-question registration**: full street address, real name, validated email, ownership, single-family home, roof visible on satellite, room for 8+ panels, monthly bill $50–$600 ($75–$600 in CA), kWh, shading ≤50%. Every lead is manually approved before installers see it. Microcopy: "Your information is safe with us." | Installer subscription/lead fees, utility/corporate partners (inferred, plus partner docs) | "Choose with an expert" (free Energy Advisor). Press-logo bar (NYT, Forbes, Bloomberg). Social proof "60,000+ homeowners" (the meta description says 50,000, so the figure is inconsistent). DOE-funding badge. Editorial bylines with read times. Mega-menu by project type. |
| 2 | **SolarReviews** | Installer reviews plus expert equipment reviews. | Home Solar Calculator: ZIP, utility, roof direction, pitch, NEM toggle, cash/loan, battery sizing, EV comparison. Outputs: panel count, kW, payback, 25-yr savings, NPV/IRR, monthly bill comparison, local price ranges. "Ask Ozzy" AI estimator. | Calculator needs **no personal info**, then "Compare Local Prices" → "Continue To See Prices" (gated contact step). Separate phone lines for homeowners and installers. | Lead sales to a "700+ pre-screened solar pros" network (inferred) | "Why you can trust us" and "How we rank companies" pages. Press logos (CNBC, NPR, CNN). Zillow "+4.0% home value" stat. Calculator page dated Dec 2022, so the data is stale (a weakness to exploit). |
| 3 | **Solar.com** | Address-based installer-bid marketplace ("Solar without the sales pitch"), powered by Electrum. | Address → roof/records analysis → winning installer bid → named advisor. Payment-option comparison table (Prepaid TPO, loan, cash, lease) with a highlighted "Recommended" column. | **One field (home address) + "See my price"**, repeated top and bottom. "Free, 90 seconds." $100 refundable deposit only to lock a price. | Installer bids, financing, deposit (inferred) | Best Price Guarantee. "Covered by Solar.com" production promise, 10-yr roof-leak cover, workmanship warranty. Stats: 40,000+ installs, $1B+ quoted, 155,000+ reviews. Numbered 3-step explainer. |
| 4 | **Modernize** (substitute/extra) | Multi-trade home-improvement lead marketplace. | Cost guides. | ZIP + Go → project dropdown → service tile → ZIP again → Next. **Exit-intent modal** ("Don't stop now, your progress will be lost!"). Duplicate-submission check. Post-submit "limited time promotions" offer wall. | Sells leads/calls to contractors ("Home Improvement Leads For Sale"), financing referrals | BBB badge, star testimonials, "Editorial Integrity" and "How We Calculate Project Costs" pages, E-Sign Consent page. |
| 5 | **SolarQuotes** (AU) | Independent AU advice + quotes for solar, batteries, heat-pump hot water, EV chargers (since 2009). | Rebate/STC calculator, solar calculator, battery calculator, federal battery rebate calculator, heat-pump STC calculator, EV charging cost calculator, electricity plan comparison, state price explorer. | "GET MY QUOTES" ("only takes 2 minutes"). Pick product → postcode → **deliberately longer form** "so only serious buyers make it through to our serious installers." User chooses **1–3 quotes**. Promise that a real person follows up by email/SMS. | Installer network fees ("Installers Join Now") | Founder-led E-E-A-T (Finn Peacock, engineer, ex-CSIRO). 102,797 installer reviews of 3,254 companies. 4.74/5 from 3,981 reviews; Trustpilot 4.6 from 11,319. 676 vetted installers. "Good Installer Guarantee". |
| 6 | **Palmetto** | Clean-energy installer/financier (solar, battery, HVAC, water heater), with the LightReach TPO products. | Solar savings calculator, HVAC advisor, Energy Advisor monitoring, app with usage tracking. | **Two fields: "How much was your last energy bill?" + address → "Let's cut it."** (strong benefit CTA). | Installs/financing, partner marketplace, contractor network, API | Rewards points offsetting upgrade costs. Partner-discount marketplace. |
| 7 | **Sunrun** | Largest US residential solar/storage TPO provider. | "Price of Power" utility rate-increase tool (5-yr). No savings calculator; a Solar Advisor estimates savings. | **Step 1: ZIP + "Do you own your home?" (Y/N)**. Step 2: first/last name, address, email, phone. Step 3: TCPA consent + Submit. Renters get "You must own your home…" plus a referral prompt. Thank-you: "a solar advisor will call". | Leases/PPAs/subscriptions | Awards row (Fortune 1000, TIME, Good Housekeeping). "Refer and Earn $1,000". Subscription framing ("locked-in rates"). License link. |
| 8 | **SunPower** (us.sunpower.com) | Revived SunPower brand (Orem, UT). The page doesn't name the owner; it links an acquisition notice for former SunPower Corp. customers. Reported elsewhere as Complete Solaria — **not confirmed on page**. | None visible. | "Save by Going Solar" form with phone + SMS consent, "Get a Quote" / "Start Your Quote". | Install sales | BBB, 25-yr warranty, "heritage" messaging. |
| 9 | **EnergyBot** | Deregulated electricity plan marketplace (TX etc.), moving into solar. | Plan comparison using real usage data, Compare My Bill, Rate Tracker charts, Energy X-Ray, ESID lookup, "Should I Switch?", usage calculator. | Residential/Business toggle → ZIP → "Get Started". Option to link usage data. "Talk to a real person in Texas now". | Referral fee from providers and solar ("free for consumers") — disclosed | BBB A+, Google/Reviews.io 4.8, 2,000+ five-star reviews, Lowest Rate Guarantee. Programmatic state/city/provider rate pages (big SEO play). |
| 10 | **ChooseEnergy** (Red Ventures) | Electricity/gas plan comparison. | ZIP lookup with "moving?" toggle, 3-step compare, solar estimator (via SaveOnEnergy). | ZIP + Moving Y/N → compare → sign up instantly. "Shop now", "Find savings". | Commissions — **Monetization Disclosure + Editorial Guidelines links in footer** | Trustpilot 4.6 (2,057). PUCT registration number. Resource hubs ("no-deposit plans", "free nights"). |
| 11 | **SaveOnEnergy** (Red Ventures) | Electricity plans + solar installer comparisons. | ZIP availability, usage calculator, Texas rate comparisons, solar guides. | "Enter your ZIP code to get started" → Check availability → shop → sign up online or by phone. | Provider relationships (not explicitly explained) | Phone-hours block, license info. Trustpilot widget rendered "NaN" (a broken trust widget hurts trust — avoid). |
| 12 | **WattBuy** (now Schneider Electric) | Personalized electricity plans + solar/storage recommendations. Mostly API-embedded (Redfin, Opendoor, Veterans United). | Address/usage-based plan and solar recommendations. | Not observable: **site geo-blocks Europe** ("unavailable for residents in Europe"). Described from secondary source (Solar Builder, Aug 2025 acquisition). | Referral/API | Embedded "powered by" model reaching 100M+ households. |
| 13 | **Octopus Energy** (UK) | Energy supplier + heat pumps, solar, batteries, EV tariffs. | Postcode quote. Product flows for heat pumps/solar/EV (not on homepage). | **Single postcode field** in hero, repeated mid-page. CTAs "Get a quote", "Get a heat pump", "Get an instant quote". | Energy supply + installs | Trustpilot 4.8 from ~907k reviews shown inline. "Which? Recommended Provider 9 years running". Mascot (Constantine). Named smart tariffs as cards. Mentions £7,500 heat-pump grant. FCA credit-broker footer. |
| 14 | **Inspire Clean Energy** | Flat-rate clean-electricity subscription (REC-matched), for owners and renters. | None. | "Sign up in minutes". No install. | Subscription supply plans | "Phone-plan" framing. Comparison claims ("5x more effective than going vegetarian"). No signup/cancel fees. |
| 15 | **Arcadia** | Now a B2B energy-data/utility-bill platform (not consumer community solar any more; community solar spun out in 2025). | Utility data and tariff APIs, solar/storage analysis. | "Request demo" only. | Enterprise SaaS | Logo wall plus huge stats. Lesson: Arcadia's **utility-tariff API** is a possible data source for bill calculators. |

### B. Manufacturers / installers / hardware

| # | Site | What it is | Tools | Lead-gen | Monetization | Standout |
|---|---|---|---|---|---|---|
| 16 | **Tesla Powerwall** | Home battery product page. | None on page (no configurator). | "Learn More" to lease offer. | Hardware/lease | Feature storytelling: Storm Watch, vehicle-backup (Model 3/Y/Cybertruck), Heat Mode to −4°F, flood-tested in 2 ft of water. "1 millionth Powerwall in 2025". Doesn't list kWh/kW on the page. |
| 17 | **Enphase** (homeowners) | Microinverters, IQ Batteries, IQ EV Charger, Enphase Air. | System estimator, installer locator, app. | Links to start.enphase.com form. "Get Enphase", "Find an EV charger". | Hardware via installers | 5.3M+ systems in 165 countries. Explains per-panel microinverters well. IQ EV Charger solar-aware charging (1 A steps, up to 19.2 kW). |
| 18 | **Sense** | Home energy monitor + utility smart-meter software. | App with real-time device detection. | Email "Get Sense updates". | Hardware + utility licensing | Quantified outcomes ("4–8% average annual energy savings"). Press logos. |
| 19 | **Emporia Energy** | Energy monitors, EV chargers (incl. V2X coming), smart plugs, home battery. | Vue circuit monitoring, AI Energy Assistant, excess-solar EV charging. | E-commerce "Shop Now". | Hardware, install services ($100 credit), TX electricity plans | Wirecutter/MotorTrend awards. Claim: "Pro charger up to 9x faster than Level 1 without panel upgrade" (load management). |
| 20 | **Palmetto / LightReach** | See #6. | | | | |

### C. Government / non-profit / data

| # | Site | What it is | Tools | Lead-gen | Funding | Standout |
|---|---|---|---|---|---|---|
| 21 | **Google Project Sunroof** | Roof solar-potential estimator + city/ZIP data explorer. | Address → roof heat map, savings estimate. Data Explorer (share of solar-viable roofs, median roof area per city/ZIP). | Historically referred to installers. **Live page returned only metadata to fetcher (JS app)**. EnergySage notes the changelog hasn't been updated since 2018 and estimates are ±20%. | Google | Data used by EnergySage's calculator ("Powered by Google Project Sunroof"). Google Solar API is the modern equivalent for developers. |
| 22 | **NREL PVWatts** (v8) | Free PV production estimator. | Location, system size, module type (incl. bifacial), losses, monthly soiling/snow losses, tilt/azimuth. NSRDB PSM V3 TMY 2020 weather. | None. | DOE/NREL (note: NREL is now styled "National Laboratory of the Rockies" per EnergySage) | **Has a free API** — ideal engine for a Fresh.Energy solar calculator. |
| 23 | **Energy.gov Energy Saver** | DOE consumer energy guidance. | None visible (topic hubs). | Newsletter. | Federal | Clear topic taxonomy: Audits, Heating & Cooling, Water Heating, Weatherization, Appliances & Lighting, Buying & Making Electricity, Efficient Home Design, Transportation. Downloadable Energy Saver Guide. |
| 24 | **ENERGY STAR** | EPA efficiency-label program. | Product Finder, **Rebate Finder (ZIP)**, "Find Savings" (incentives + eligible products + installers by ZIP), Find a Builder, Ask the Experts. | ZIP-driven local lookups. | Federal | ENERGY STAR Home Upgrade ("six high-impact improvements") is a good content framework. |
| 25 | **Rewiring America** | Electrification non-profit (501(c)(3)). | Personal Electrification Planner, Savings Calculator (homes.rewiringamerica.org; JS-rendered, inputs not visible to fetcher), **Incentive API** (free/partner). | Audience CTAs (households, contractors, funders). | Donations | Incentive API is the best US incentive data source to integrate. Homepage shows no federal-credit status note. |
| 26 | **DSIRE** (NC State) | Canonical database of US state/federal incentives since 1995. | ZIP search, state browse, summary maps, **DSIRE API**, glossary. | Shows a sponsored "solar quote" CTA (EnergySage-supported). | **Sponsorships, partner ads, API access, consulting, donations, DSIRE Insight (paid)** | Shows a non-profit data site monetizing with sponsor logos and an embedded quote CTA. |
| 27 | **NRCan Home Energy Efficiency** (Canada) | Federal home-efficiency hub. | Program directory, find a service provider, EnerGuide info. | None. | Federal | Program "Closed:" prefixes on page titles are a good pattern for showing status. |
| 28 | **Energy Saving Trust** (UK) | Independent advice org (home energy + low-carbon travel). | No calculator on homepage. | "Find out now" bill-saving CTA. | Grants/contracts (not stated) | Policy explainers and topical "renovation" content. |
| 29 | **Ofgem** (UK) | GB energy regulator. | Price-cap explainer, unit rates/standing charges, scheme pages (BUS, Warm Home Discount, SEG), switching/complaints help. | None. | Regulator | Authoritative source to cite for UK rate/scheme facts. Welsh version. |
| 30 | **Your Home** (AU gov) | Sustainable home design guide. | "Design For Place" free architect plans. | None. | Federal (book sales) | Structure: Passive design / Materials / Energy / Water / Live & adapt. Climate-zone-specific advice. |
| 31 | **IEA** | Intergovernmental energy agency. | Fetched page was a news listing; data explorers/policy DB not visible on it. | None. | Member govts | Authoritative stats for context pieces. |
| 32 | **Ember** | Energy think tank, CC-BY-4.0 data. | Electricity Data Explorer, EU price tool, 2030 renewables tracker, India explorer, **open API + downloads**. | None. | Not stated (philanthropic) | Free embeddable/linkable charts; 8 languages. |

### D. Media / editorial / consumer advice

| # | Site | What it is | Tools | Lead-gen | Monetization | Standout |
|---|---|---|---|---|---|---|
| 33 | **Which?** (UK) | Consumer org. Energy-supplier ratings. | Best/worst supplier rankings, ~17 supplier reviews, "Which? Recommended Provider" badge program. | Account/join. | Membership (paywall), badge licensing | Ratings = customer survey + expert verdict. The "Recommended Provider" badge is widely reused by suppliers (e.g. Octopus). |
| 34 | **MoneySavingExpert** | UK consumer-finance site. | **Cheap Energy Club** (whole-of-market comparison), **Energy Price Cap Calculator**, **"Should you fix?" calculator**. | Cheap Energy Club signup. | Switching commissions, **shared back as cashback**. Explicitly shows tariffs that don't pay MSE. | Named reviewer + "legally binding" editorial code. Price-cap predictions content is a recurring traffic driver. |
| 35 | **CleanTechnica** | Cleantech news. | None. | Newsletter. | **Donations, display ads, affiliate, merch** | Multi-part explainer series (home solar, EV charging, home efficiency). Podcast + YouTube. |
| 36 | **Electrek** | EV/energy news (9to5 network). | EV price guide. | Newsletter. | **AdSense/display, affiliate "Green Deals", sponsored video, merch** | Deal roundups (power stations, e-bikes). Embedded YouTube reviews. No solar-quote widget was visible on the fetched page. |
| 37 | **Canary Media** | Non-profit clean-energy journalism. | "Chart of the week". | Newsletters. | **Donations/membership, sponsorships (clearly labeled), ticketed events** | ~70-tag topic index (heat pumps, EV charging…), regional sections. |
| 38 | **Carbon Brief** | Climate science/policy outlet. | Interactive trackers, factchecks, Q&As. | 6 newsletters. | Foundation-funded ("Support us") | Factcheck and explainer formats; CC BY-NC-ND licensing. |
| 39 | **This Old House** | Home-improvement media brand. | Cost calculators ("Estimate Your Costs"), "Best [Service] Companies" pages incl. solar by state, **Ask+ AI** answers only from TOH content. | "Find The Right Help" → company review pages (partner-driven). | Ads, Insider membership (ad-free), partner reviews, merch | "Expert Reviewed/Verified" labels. Named expert cast (Richard Trethewey = heating). State-level "Best Solar Companies in [State]" SEO pages. |
| 40 | **Green Building Advisor** | Building-science site (Fine Homebuilding family). | 1,000+ downloadable construction details (PDF/DWG), Q&A forum, courses. | Newsletter. | **GBA Prime membership (paywall), magazine subs, ads** | Deep expert authority on air sealing/insulation. Paywall model. |
| 41 | **Heat Pumped** (heatpumped.org) | Heat-pump newsletter/community (beehiiv). | **HVAC Quote Database** (crowdsourced real quotes), AI chatbot, online heat-pump class, podcast, EIA RECS mirror. | Newsletter (biweekly). Links to **group-buy program**. | Not stated | Crowdsourced price transparency directly attacks quote opacity. Group-buys. |
| 42 | **Clean Energy Reviews** (AU) | Independent panel/inverter/battery reviews. | Links to photonik.solar tools (savings/payback, string voltage, off-grid load, panel placement). | Sister site installer listings. | Not stated (likely affiliate/referral) | Rankings cite PVEL third-party test data. "New to Solar? Start Here" path. |

Notes: Sites #21 (Sunroof) and #12 (WattBuy) could not be rendered by the fetcher (JS app / EU geo-block). Their descriptions use secondary sources. Excluding them, 38 sites were audited directly from live pages.

### Typical solar quote-form fields (observed + industry)

| Field | Who asks | Purpose |
|---|---|---|
| ZIP / postal code | Everyone (step 1) | Routing, service area, rates/incentives |
| Street address | EnergySage, Solar.com, Palmetto | Satellite roof analysis; real-lead validation |
| Own vs rent | Sunrun (step 1 with ZIP), EnergySage | Hard disqualifier for owned solar |
| Average monthly electric bill ($) | EnergySage, SolarReviews, Palmetto (headline field) | System sizing + savings; EnergySage accepts $50–$600 |
| Monthly kWh (optional) | EnergySage | Accuracy |
| Utility provider | SolarReviews | Tariff / net-metering rules |
| Property type (single-family, condo, commercial) | EnergySage | Eligibility |
| Roof shading (none/some/a lot) | EnergySage (≤50% accepted) | Feasibility |
| Roof type / age / direction / pitch | SolarReviews, industry | Feasibility; reroof upsell |
| Credit score band (e.g. >680) | Industry lead forms (Dolead) | Financing pre-qual |
| Timeline (ASAP / 1–3 mo / 6+ / researching) | Industry | Lead scoring |
| Interest: battery / EV charger / heat pump | EnergySage, Enphase | Cross-sell |
| HOA, plans to sell within 3 yrs | Industry | Feasibility / payback |
| Name, email, phone | Final step everywhere | Contact; validated email; real name |
| TCPA express written consent checkbox | Sunrun, SunPower | Legal requirement for calls/SMS (timestamp + IP log) |

**What converts best (observed patterns):**
1. **One- or two-field entry** above the fold: ZIP only (Octopus, Modernize), address only (Solar.com), or bill + address (Palmetto "Let's cut it"). Collect contact details last.
2. **Value before contact.** Show an estimate first (SolarReviews: "no personal info" calculator), then gate the local prices or quotes.
3. **Disqualify early and kindly.** Put own/rent in step 1 (Sunrun) and route renters to community solar or clean-electricity plans instead of a dead end.
4. **Lead quality beats volume.** EnergySage manually approves each lead. SolarQuotes deliberately uses a longer form and lets the user choose 1–3 installers ("no spam" promise).
5. **Visible step count and timing** ("2 minutes", "90 seconds"), plus an exit-intent save (Modernize) and a "real person will follow up" promise.
6. **Speed-to-lead** is critical. Industry sources recommend an automated acknowledgment within 1 minute and a call within 5 minutes; waiting 5 minutes is claimed to cut conversion >80% (uncited claim).

---

### Must-have features for Fresh.Energy (synthesized)

**Lead-gen conversion**
1. Hero entry with **ZIP/postal code + project picker** (Solar · Battery · Heat pump · EV charger · Energy audit), auto-detecting country (US ZIP / CA postal / UK postcode / AU postcode).
2. **Multi-step form, one question per screen**, with a progress bar and "takes ~2 minutes". Order: project → postal code → own/rent → monthly bill slider → home type → roof shade (solar) / heating fuel (heat pump) / panel amps + vehicle (EV) → timeline → name/email/phone → consent.
3. **Renter branch**: don't reject. Offer community solar, plan comparison, portable/plug-in measures, and a newsletter.
4. Show an **instant ballpark estimate before the contact step** (system size, cost range, payback), then "Get up to 3 vetted quotes".
5. **User chooses 1–3 installers**, with an explicit "we never sell your number to 10 companies" promise.
6. **TCPA/CASL/GDPR-compliant consent**: an unticked checkbox for calls/SMS, with timestamp and IP stored. A separate marketing opt-in.
7. Basic lead validation (phone format, email MX check, address autocomplete) plus a duplicate check.
8. Exit-intent save ("we'll email your estimate") to capture partial leads.
9. Instant confirmation page and email with "what happens next" (timeline, who calls).
10. **Installer partner signup page**: service areas, products, licenses/insurance upload, certifications (NABCEP, MCS, CEC/SAA, TECA/HRAI), lead pricing and terms. Show "Vetted installer" criteria publicly.

**Calculators / tools**
11. **Solar savings calculator** on the NREL PVWatts API (inputs: address/ZIP, bill, roof direction/pitch, shade). Outputs: kW, panels, kWh/yr, cost range, payback, 25-yr savings, with an NPV/IRR "advanced" toggle.
12. **Battery sizing / backup calculator** (essential loads → kWh, hours of backup).
13. **Heat pump savings calculator** (current fuel and price, climate zone, COP/HSPF2, electricity rate).
14. **EV home-charging cost calculator** (miles/yr, kWh rate, TOU off-peak vs gas). Include a "Do I need a 48A charger?" amperage helper (Technology Connections' "overkill" point; Emporia load-management angle).
15. **Incentive finder by postal code**: Rewiring America Incentive API / DSIRE API for the US, plus curated tables for CA/UK/AU/IN. Every incentive gets a **status badge (Open / Closing / Closed / Expired) and a "last verified" date**.
16. **Electricity rate pages** per state/province/region (programmatic SEO, like EnergyBot) with a rate-trend chart.
17. "Should I switch/fix?"-style decision tools (MSE pattern), e.g. "Is solar still worth it after the 25D credit ended?"
18. Appliance energy-cost calculator (induction vs gas, heat-pump water heater vs tank, dryer).

**Content / SEO**
19. Hub-and-spoke topic architecture mirroring Energy Saver: Solar · Batteries · Heat Pumps · EV Charging · Efficiency/Insulation · Rates & Bills · Incentives.
20. **Country-specific incentive guides**, updated monthly, with change logs. 2025–2026 incentive churn (25D/25C ended, HOMES/HEEHR rewritten, Canada's new $2B heat-pump rebate, AU battery rebate tiers) is a big freshness-traffic opportunity.
21. "Cost of X in [State/City]" and "Best installers in [State]" programmatic pages (TOH and EnergyBot pattern), with real data, not boilerplate.
22. Explainer series and myth-busting/factcheck format (Carbon Brief / CleanTechnica).
23. Embedded vetted YouTube explainers (Part 3) with summaries and key takeaways.
24. Newsletter with an incentive-change alert ("Get notified when rebates change in your area").
25. FAQ schema, HowTo schema, Article schema with author, and a "last updated" date on every page.

**Trust / E-E-A-T**
26. Named authors with credentials and bios, plus an "Expert reviewed by" line (TOH, SolarReviews).
27. Public **"How we make money" disclosure** and an editorial-independence policy (ChooseEnergy, MSE, EnergyBot footer pattern).
28. "How we vet installers" and "How our calculator works" methodology pages (SolarReviews, Modernize).
29. Sources cited inline to primary documents (IRS, NRCan, gov.uk, CER, MNRE).
30. Real-review integration (Trustpilot/Google) only once there are genuine reviews. **Never show a broken widget** (SaveOnEnergy "NaN").
31. Privacy microcopy beside each form field ("Your information is safe with us"). No-spam promise.
32. Independence/non-affiliation note (brand overlap with Fresh Energy MN).

**Design / UX**
33. One primary CTA per screen, repeated at top and bottom (Solar.com, Octopus). Benefit-led CTA text ("See my savings", "Let's cut my bill", "Get my quotes").
34. Numbered "How it works: 1-2-3" section.
35. Comparison tables with a highlighted recommended column (Solar.com payment options).
36. Mobile-first, sticky bottom CTA on mobile. Fast static pages.
37. Status chips and date stamps on all policy content. "Closed:" prefixes (NRCan pattern).
38. Product pages that lead with features homeowners care about (Tesla Storm Watch / backup framing).
39. Accessibility: skip links, contrast, form labels (EnergySage).

**Monetization**
40. AdSense **only on content pages**. Keep ads off the quote funnel and calculators' result step to protect conversion.
41. Lead sales: per-lead pricing by product/region, or exclusive vs shared. Lead quality audit plus refund policy for bad leads.
42. Installer partner subscriptions / featured listings, clearly labeled "Sponsored" (Canary Media labeling pattern).
43. Affiliate links for products (EV chargers, monitors, smart thermostats, induction hobs), with disclosure.
44. Donations ("Support independent energy advice", DSIRE/CleanTechnica/Canary pattern) plus a sponsor wall.
45. Contests/giveaways (e.g. "Win an energy monitor / home energy audit"). Run official rules, no-purchase-necessary, and region eligibility. Use them as a newsletter-growth lever.
46. Data/API or embeddable-calculator licensing later (DSIRE API, Arcadia, WattBuy "powered-by" model).

---

## PART 2 — Incentive status (verified Oct 2026)

| Program | Status | Amount | Key date(s) | Source |
|---|---|---|---|---|
| **US 25D Residential Clean Energy Credit** (solar, batteries ≥3 kWh, geothermal, etc.) | **ENDED** by the One Big Beautiful Bill Act (P.L. 119-21, signed 4 Jul 2025) | Was 30% | Not allowed for "expenditures made after December 31, 2025". IRS treats the expenditure as made when installation is complete. IRS page: "not available for any property placed in service after December 31, 2025." | https://www.irs.gov/credits-deductions/residential-clean-energy-credit ; https://www.currentfederaltaxdevelopments.com/blog/2025/8/21/key-modifications-to-energy-credits-and-deductions-under-the-one-big-beautiful-bill-act |
| **US 25C Energy Efficient Home Improvement Credit** | **ENDED** | Was up to $3,200/yr ($2,000 heat pumps/HPWH + $1,200 other) | Property placed in service after 31 Dec 2025 not eligible | https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit |
| **US 30D New Clean Vehicle Credit** | **ENDED** | Was up to $7,500 | Vehicles "acquired after September 30, 2025" not eligible | currentfederaltaxdevelopments (above), summarizing IRS FS-2025-05 |
| **US 25E Previously-Owned Clean Vehicle Credit** | **ENDED** | Was up to $4,000 | Acquired after 30 Sep 2025 | same |
| **US 45W Commercial Clean Vehicle** | **ENDED** | — | Acquired after 30 Sep 2025 | same |
| **US 30C Alt-Fuel Refueling Property (home EV chargers in eligible census tracts)** | **ENDED** | Was 30% up to $1,000 (residential) | Property placed in service after 30 Jun 2026 | same |
| **US 45L New Energy Efficient Home (builders)** | **ENDED** | — | Homes acquired after 30 Jun 2026 | same |
| **US 48E for leased/TPO residential solar** | **Still usable in limited form — FLAG** | 30%+ to the owner (lessor), passed through in lease/PPA pricing | Solar.com: leases/PPAs eligible "through 2027". Projects commencing construction by ~4 Jul 2026 get a 4-yr placed-in-service window. FEOC sourcing rules apply. **Storage under 48E believed to have a longer runway — verify before publishing.** | https://www.solar.com/learn/faqs-about-solar-and-trumps-one-big-beautiful-bill/ ; https://www.energysage.com/news/trumps-tax-changes-impact-tpo-solar/ |
| **US HOMES + HEEHR/HEAR rebates ($8.8B IRA)** | **Rewritten; patchy rollout.** Paused Feb 2025; state-suit injunction Mar 2025; DOE final guidance 1 Jun 2026 **eliminated fuel-switching** (heat-pump funding only for new construction or already-electric homes); insulation required before appliance rebates; Justice40 removed. Launched states had until 31 Aug 2026 to conform. ~12 states + DC launched as of Jun 2026; S&P (15 Oct 2026) says most states still waiting on DOE. | HEEHR up to $14,000/household (GA/NC advertise up to $16,000 combined) | 1 Jun 2026 guidance; 31 Aug 2026 conformity deadline | https://building-performance.org/wp-content/uploads/2026/06/06.2026-State-Home-Energy-Rebates-Factsheet.pdf ; https://insideclimatenews.org/news/01062026/energy-department-restarts-home-efficiency-rebates/ ; https://www.spglobal.com/market-intelligence/en/news-insights/articles/2026/10/doe-energy-efficiency-rebates-delayed-as-winter-heating-season-begins-106906796 |
| **Canada Greener Homes Grant** | **CLOSED** | Was up to $5,000 + $600 audit | Final document deadline 31 Dec 2025 | https://natural-resources.canada.ca/energy-efficiency/home-energy-efficiency/canada-greener-homes-initiative (modified 2026-08-04) |
| **Canada Greener Homes Loan** | **CLOSED** to new applications | Was up to $40,000 interest-free (amount from prior program terms — not re-confirmed on current page) | Last day to apply 1 Oct 2025 | https://www.efficiencycanada.org/canada-greener-homes-loan-program-closes-applications/ ; NRCan "Closed: Canada Greener Homes Loan" |
| **Canada Oil to Heat Pump Affordability (OHPA)** | **Closing/closed** in federally delivered provinces | Up to $10,000 (federal-only) or up to $25,000 co-delivered, + $250 | Last day to apply 31 Jul 2026 in AB, MB, NT, QC, SK. Other co-delivered regions vary (e.g. NS strengthened program) — check per province | NRCan Greener Homes Initiative page (above) |
| **Canada Greener Homes Affordability Program (CGHAP)** | **OPEN** | Covers full cost of recommended retrofits for eligible low-to-median-income owners/tenants | Delivered via provinces/utilities | NRCan page (above) |
| **NEW Canada national heat pump rebate** (announced 8 Oct 2026) | **ANNOUNCED, not yet live** | $2B. Up to $10,000 (low-to-median income), up to $2,000 above median | Target launch early 2027. Retroactive eligibility "being explored". Online portal with 24-h eligibility confirmation; receipts uploaded post-install; direct deposit | https://www.bnnbloomberg.ca/business/politics/2026/10/08/2b-heat-pump-rebate-program-unveiled-by-federal-government/ |
| **Ontario Home Renovation Savings** (provincial example) | **OPEN** | Cold-climate ASHP up to $7,500; ground-source up to $12,000; solar + battery up to $10,000; attic insulation $1,250; HPWH $500; assessment $600 | No end date on page | https://saveonenergy.ca/For-Your-Home/Home-Renovation-Savings |
| **Québec LogisVert** (Hydro-Québec) | **OPEN** ("still available… processed normally") | Amounts not shown on page (heat pumps, ETS, induction ranges, heat-pump dryers, roof insulation; no rooftop PV listed) | — | https://www.hydroquebec.com/residential/energy-wise/financial-assistance/logisvert/ |
| **UK Boiler Upgrade Scheme** (England & Wales) | **OPEN** | £7,500 ASHP (air-to-water) / GSHP; **£2,500 air-to-air heat pump**; £5,000 biomass. **+£1,500** extra for oil/LPG off-gas homes until Mar 2027 | No end date for main grant on gov.uk | https://www.gov.uk/apply-boiler-upgrade-scheme/what-you-can-get |
| **UK Smart Export Guarantee** | **OPEN** (since 1 Jan 2020) | Supplier-set rates, must be > 0p/kWh | Up to 5 MW (50 kW micro-CHP); GB only. MCS requirement not stated on Ofgem page — **verify** | https://www.ofgem.gov.uk/environmental-and-social-schemes/smart-export-guarantee-seg |
| **UK 0% VAT on energy-saving materials** | **IN FORCE** | 0% on solar PV, heat pumps, batteries (batteries added 1 Feb 2024) in residential | **Until 31 Mar 2027**, reduced rate (5%) from 1 Apr 2027 | https://www.gov.uk/hmrc-internal-manuals/vat-energy-saving-materials-and-grant-funded-heating-supplies/vensav2083 |
| **Australia SRES (STCs)** | **OPEN** | STCs per deemed MWh (solar PV, SWH, ASHP water heaters; batteries via CHB). Deeming declines yearly | Scheme ends 2030. Next value step-down 1 Jan 2027 | https://cer.gov.au/schemes/renewable-energy-target/small-scale-renewable-energy-scheme |
| **Australia Cheaper Home Batteries** | **OPEN, reformed 1 May 2026** | ~30% discount. STC factor 6.8 (May–Dec 2026). Tiered: first 14 kWh 100%, 14–28 kWh 60%, 28–50 kWh 15%. 5–100 kWh systems; must be VPP-capable | Started 1 Jul 2025; reduces again 1 Jan 2027 (exact post-2027 factor not confirmed) | https://www.energymatters.com.au/renewable-news/every-solar-battery-and-ev-incentive-change-from-1-july-2026/ (DCCEEW page blocked to fetcher) |
| **India PM Surya Ghar: Muft Bijli Yojana** | **OPEN** | CFA ₹30,000 for 1 kW, ₹60,000 for 2 kW, ₹78,000 for 3 kW+ (cap). Up to 300 free units/month | Target 1 crore households by Mar 2027. 26.19 lakh installs as of 19 Mar 2026 (MNRE via Angel One). Official portal unreachable to fetcher | https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/dec/doc2024125465001.pdf ; https://www.angelone.in/news/government-schemes/pm-surya-ghar-yojana-crosses-26-lakh-installations-how-to-get-up-to-78-000-subsidy-on-rooftop-solar |
| **EU – general** | No EU-wide household grant. Member-state schemes. **Social Climate Fund** (€86.7B) funded by ETS2; ETS2 now starts **2028**; only Lithuania and Sweden plans approved; 19 states hadn't filed (Jun 2026) | — | — | https://carbonmarketwatch.org/2026/06/30/e85bn-delayed-19-eu-countries-still-havent-filed-their-social-climate-plans-a-year-on/ |
| **Germany KfW 458** (EU example) | **OPEN, cut 21 Jul 2026** | Base 30%; eligible-cost cap now €28,000 (1st unit), falling €750 every 6 months from 1 Feb 2027; income bonus tiered 40/30/10%; climate-speed bonus 16%; 5% efficiency bonus removed. Q1 2027: EU-made value-added bonus planned | 21 Jul 2026 | https://utopia.de/ratgeber/waermepumpen-foerderung-was-sich-am-21-juli-geaendert-hat_950467/ (secondary; **verify against kfw.de**) |

**Uncertainty flags**
- 48E/TPO window details and the storage timeline: confirm against IRS guidance before publishing.
- Greener Homes Loan $40k amount: from prior program terms, not re-verified on a live page.
- AU CHB post-1 Jan 2027 factor and German figures: from secondary sources.
- HOMES/HEEHR state-by-state status changes monthly. Link to the state energy office rather than hard-coding amounts.
- The IRS 25D page contains a stale "phase out in 2033" sentence that conflicts with its own 2025 cutoff. Use the termination date.

---

## PART 3 — Verified YouTube videos

All verified by **WebFetch of `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ID&format=json`**, which returned the title and channel below (= video exists and is embeddable). The "ID source" column shows where the ID was found.

| # | Video ID | Exact title (from oEmbed) | Channel | Topic | ID source |
|---|---|---|---|---|---|
| 1 | `xKxrkht7CpY` | How do solar panels work? - Richard Komp | TED-Ed | How solar panels work | oEmbed (direct) |
| 2 | `0elhIcPVtKE` | Energy 101: Solar PV | U.S. Department of Energy | How solar panels work | oEmbed (direct) |
| 3 | `TUGRWepCH90` | Are solar panels worth it in 2024? | Undecided with Matt Ferrell | Are solar panels worth it | Web search result + oEmbed |
| 4 | `7J52mDjZzto` | Heat Pumps: the Future of Home Heating | Technology Connections | How heat pumps work | Search result (HN Theater) + oEmbed |
| 5 | `43XKfuptnik` | Heat Pumps are Not Hard: Here's what it will take to start pumping | Technology Connections | Heat pumps (incl. cold-climate/sizing) | TheTVDB production code + oEmbed |
| 6 | `MFEHFsO-XSI` | Why Heat Pumps are Immensely Important Right Now | Technology Connections | Heat pumps / bills | Search result + oEmbed |
| 7 | `CPwQTUaU-jI` | Did I Get the Wrong Heat Pump: Geothermal vs Air Source | Undecided with Matt Ferrell | Heat pumps in a cold climate (New England home) | Embed on undecided.tech + oEmbed |
| 8 | `ozaw9QhxkQU` | How to Install a Ductless Mini-Split Air Conditioner \| This Old House | This Old House | Ductless heat pump install | Blog embed + oEmbed |
| 9 | `DTsQjiPlksA` | Old HVAC industry practices are holding us back and costing us money. But we can fix it. | Technology Connections | HVAC sizing / lowering bills | TheTVDB + oEmbed |
| 10 | `RMxB7zA-e4Y` | Electric car chargers aren't chargers at all – EVSE Explained | Technology Connections | EV home charging | TheTVDB + oEmbed |
| 11 | `W96a8svXo14` | The "standard" car charger is usually overkill—but your electrician might not know that | Technology Connections | EV home charging (amperage/panel) | TheTVDB + oEmbed |
| 12 | `CzJKxUCKOBg` | Induction cooking - but what about woks? | Technology Connections | Induction cooking | TheTVDB + oEmbed |
| 13 | `CVLLNjSLJTQ` | Home Electrification: There's not a lot to do, and it doesn't have to be hard (Part 1) | Technology Connections | Electrification / lowering bills | TheTVDB + oEmbed |
| 14 | `zheQKmAT_a0` | Plug-n-play solutions for home electrification, and options for power outages (Part 2) | Technology Connections | Backup power / batteries / electrification | TheTVDB + oEmbed |

**Gaps (not verified, so not listed):** dedicated videos on home battery storage (beyond #14), insulation, and air sealing / home energy audit. Undecided.tech and thisoldhouse.com pages did not expose YouTube IDs, and YouTube search, RSS and Invidious are robots-blocked to the fetcher. Rejected: `CFcC83ZFJzg` (exists, but from a non-reputable channel, "Secrets Of Simple Things"). To fill the gaps, copy IDs manually from youtube.com/@thisoldhouse, @UndecidedMF or @energy and re-run the oEmbed check.
