/* Fresh.Energy site configuration.
   Payments: paste a PayPal donate link, Stripe Payment Link or Buy Me a Coffee URL to switch the
   Support page from "pledge" mode to instant checkout. Leave blank to keep pledge mode.
   Ad slots: AdSense Auto ads run site-wide from the <head> script. If you later create manual
   ad units in AdSense, paste their numeric slot IDs below and the reserved slots will fill. */
window.SITE = {
  name: "Fresh.Energy",
  domain: "fresh.energy",
  ownerContactUrl: "https://web.works/contact",
  adsenseClient: "ca-pub-6620975821265271",
  adSlots: {
    display: "",     // e.g. "1234567890"  (responsive display unit)
    inArticle: "",   // e.g. "2345678901"  (in-article fluid unit)
    multiplex: ""    // e.g. "3456789012"  (multiplex unit)
  },
  payments: {
    paypal: "",        // e.g. https://www.paypal.com/donate/?hosted_button_id=XXXX
    stripe: "",        // e.g. https://buy.stripe.com/XXXX
    buymeacoffee: ""   // e.g. https://www.buymeacoffee.com/yourname
  },
  /* Form relay key (encoded). Keep it encoded — never paste a plain address anywhere on the site. */
  _k: ["MWFza3Jvd2Jldw==", "bW9jLmxpYW1n"]
};
