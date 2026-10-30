# Fresh.Energy

An independent home clean-energy and bill-savings hub. It has free solar, heat pump, EV, appliance and battery calculators, a Home Energy Score, 18 in-depth guides, rebates by country, curated videos, a glossary, and a 4-step lead-generation funnel that collects free installer quotes.

- **Live:** https://fresh.energy (GitHub Pages, `main` branch, root folder)
- **Monetization:** Google AdSense (`ca-pub-6620975821265271`), installer lead partnerships (`pros.html`), sponsorships (`advertise.html`) and reader support (`support.html`)
- **Owner contact strip:** on every page, links to https://web.works/contact

## Structure

| Path | What |
|---|---|
| `index.html` | Home: hero estimator, goals, tools, lead band, guides, FAQ |
| `quotes.html` | 4-step lead funnel with live estimate, consent and renter branch |
| `tools/` | 6 calculators (logic in `assets/js/tools.js`) |
| `guides/` | 18 guides |
| `incentives.html`, `videos.html`, `glossary.html` | Reference hubs |
| `pros.html`, `support.html`, `contests.html`, `careers.html`, `advertise.html` | Revenue and community pages |
| `about`, `contact`, `privacy`, `terms`, `disclaimer`, `trademark` | Trust and legal pages |
| `_layouts/default.html` | Shared shell: owner strip, header, AdSense, footer, consent. Edit once and it applies to every page (GitHub Pages builds it with Jekyll) |
| Page front matter | Title, description, canonical, JSON-LD and nav state for each page. Bodies sit inside `{% raw %}` so they render untouched |

## Configuration (`assets/js/config.js`)

- **`payments`:** paste PayPal, Stripe Payment Link or Buy Me a Coffee URLs. The Support page then shows checkout buttons automatically.
- **`adSlots`:** paste manual AdSense unit IDs to fill the reserved, labelled slots. Auto ads already run from the `<head>` script.
- **`_k`:** encoded form relay key. Forms deliver through FormSubmit, and the address is assembled at runtime and never appears in markup. The first submission triggers a one-time FormSubmit activation email; click it once.

## Deploy

1. In the repo, go to Settings → Pages and set Source to "Deploy from a branch", with `main` and `/ (root)`.
2. The `CNAME` file is set to `fresh.energy`. At the registrar, add:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` pointing to `webworksa1.github.io`

   Then tick **Enforce HTTPS**.
3. In AdSense, add the site, confirm `ads.txt` resolves, and enable a Google-certified CMP under Privacy & messaging for EEA, UK and Swiss traffic.

See `PROMPTS.md` for the phase-wise build prompts and `RESEARCH.md` for the 40-site audit, the incentive verification and the video sources.

## Trademark

"Fresh.Energy" is the name of this independent website. It is not affiliated with any organisation using "Fresh Energy" or "FreshEnergy". See `trademark.html`.
