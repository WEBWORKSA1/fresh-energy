/* Fresh.Energy — core interactions */
(function () {
  "use strict";
  var S = window.SITE || {};
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  window.FE_store = store;

  /* Theme */
  var root = document.documentElement;
  var saved = store.get("fe-theme");
  if (saved) root.setAttribute("data-theme", saved);
  document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
    b.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") === "dark" ||
        (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = dark ? "light" : "dark";
      root.setAttribute("data-theme", next); store.set("fe-theme", next);
    });
  });

  /* Mobile menu */
  var mb = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
  if (mb && nav) mb.addEventListener("click", function () {
    var open = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", open);
  });

  /* Year */
  document.querySelectorAll("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });

  /* Consent */
  var c = document.getElementById("consent");
  if (c && !store.get("fe-consent")) {
    c.hidden = false;
    c.querySelectorAll("[data-consent]").forEach(function (b) {
      b.addEventListener("click", function () {
        store.set("fe-consent", b.getAttribute("data-consent"));
        if (b.getAttribute("data-consent") === "essential") {
          (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
        }
        c.hidden = true;
      });
    });
  }
  if (store.get("fe-consent") === "essential") {
    (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
  }

  /* Reserved ad slots: filled only when a slot ID is configured in config.js */
  var slots = S.adSlots || {};
  document.querySelectorAll(".ad-slot[data-slot]").forEach(function (box) {
    var id = slots[box.getAttribute("data-slot")];
    if (!id) return;
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", S.adsenseClient);
    ins.setAttribute("data-ad-slot", id);
    if (box.getAttribute("data-slot") === "inArticle") {
      ins.style.textAlign = "center";
      ins.setAttribute("data-ad-layout", "in-article");
      ins.setAttribute("data-ad-format", "fluid");
    } else if (box.getAttribute("data-slot") === "multiplex") {
      ins.setAttribute("data-ad-format", "autorelaxed");
    } else {
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");
    }
    box.appendChild(ins); box.hidden = false;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  });

  /* Relay endpoint (address assembled at runtime, never present in markup) */
  function relay() {
    var k = S._k || [];
    var rev = function (b) { return atob(b).split("").reverse().join(""); };
    return "https://formsubmit.co/ajax/" + rev(k[0]) + String.fromCharCode(64) + rev(k[1]);
  }

  /* Prefill from URL (?type=solar&zip=12345&bill=180) */
  var qs = new URLSearchParams(location.search);
  document.querySelectorAll("form[data-prefill]").forEach(function (f) {
    qs.forEach(function (v, k) {
      f.querySelectorAll('[name="' + k + '"]').forEach(function (el) {
        if (el.type === "checkbox" || el.type === "radio") {
          v.split(",").forEach(function (x) { if (el.value === x) el.checked = true; });
        } else { el.value = v; el.dispatchEvent(new Event("input")); }
      });
    });
  });

  /* Quick lead starters: send visitor to the full quote form with what they picked */
  document.querySelectorAll("form[data-quick]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var p = new URLSearchParams();
      new FormData(f).forEach(function (v, k) { if (v) p.append(k, v); });
      location.href = f.getAttribute("action") + (p.toString() ? "?" + p.toString() : "");
    });
  });

  /* Multi-step forms */
  document.querySelectorAll("form[data-steps]").forEach(function (f) {
    var steps = f.querySelectorAll(".step"), bars = f.querySelectorAll(".steps-bar i"), i = 0;
    var cur = f.querySelector("[data-step-now]");
    function show(n) {
      steps.forEach(function (s, j) { s.hidden = j !== n; });
      bars.forEach(function (b, j) { b.classList.toggle("on", j <= n); });
      if (cur) cur.textContent = n + 1;
      i = n;
      var first = steps[n].querySelector("input,select,textarea");
      if (first && n > 0) first.focus({ preventScroll: true });
      if (n > 0) { var top = f.getBoundingClientRect().top + window.scrollY - 110; if (window.scrollY > top) window.scrollTo({ top: top }); }
      f.dispatchEvent(new CustomEvent("stepchange", { detail: n }));
    }
    f.querySelectorAll("[data-next]").forEach(function (b) {
      b.addEventListener("click", function () {
        var ok = true, st = f.querySelector(".form-status");
        steps[i].querySelectorAll("[required]").forEach(function (el) { if (ok && !el.checkValidity()) { el.reportValidity(); ok = false; } });
        var group = steps[i].querySelector("[data-need-one]");
        if (ok && group && !group.querySelector("input:checked")) {
          ok = false; if (st) { st.className = "form-status err"; st.textContent = "Pick at least one option to continue."; }
        }
        if (ok) { if (st) st.textContent = ""; show(i + 1); }
      });
    });
    f.querySelectorAll("[data-prev]").forEach(function (b) { b.addEventListener("click", function () { show(i - 1); }); });
    show(0);
  });

  /* All forms → relay */
  document.querySelectorAll("form[data-form]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = f.querySelector(".form-status"), btn = f.querySelector("[type=submit]");
      var trap = f.querySelector(".hp input");
      if (trap && trap.value) return;
      var data = {};
      new FormData(f).forEach(function (v, k) {
        if (k === "_hp") return;
        data[k] = data[k] ? data[k] + ", " + v : v;
      });
      data._subject = "Fresh.Energy — " + f.getAttribute("data-form") + (data.name ? " from " + data.name : "");
      data._template = "table"; data._captcha = "false";
      data.page = location.href;
      data.submitted = new Date().toISOString();
      if (typeof f._extra === "function") Object.assign(data, f._extra());
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending…"; }
      if (status) { status.className = "form-status"; status.textContent = ""; }
      fetch(relay(), { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function () {
          var go = f.getAttribute("data-redirect");
          if (go) { location.href = go; return; }
          if (status) { status.className = "form-status ok"; status.textContent = f.getAttribute("data-ok") || "Sent. We'll reply within two business days."; }
          f.reset();
        })
        .catch(function () {
          if (status) { status.className = "form-status err"; status.textContent = "That didn't go through. Check your connection and try again in a moment."; }
        })
        .finally(function () { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label; } });
    });
  });

  /* Lite YouTube: nothing loads from YouTube until the visitor clicks */
  document.querySelectorAll("[data-yt]").forEach(function (b) {
    var id = b.getAttribute("data-yt");
    b.style.backgroundImage = "url(https://i.ytimg.com/vi/" + id + "/hqdefault.jpg)";
    b.addEventListener("click", function () {
      var fr = document.createElement("iframe");
      fr.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      fr.title = b.getAttribute("aria-label") || "Video";
      fr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      fr.allowFullscreen = true;
      var wrap = document.createElement("div"); wrap.className = "yt"; wrap.appendChild(fr);
      b.replaceWith(wrap);
    });
  });

  /* Video filter */
  var vf = document.querySelector("[data-vfilter]");
  if (vf) vf.addEventListener("click", function (e) {
    var t = e.target.closest("button"); if (!t) return;
    vf.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === t); });
    var cat = t.getAttribute("data-cat");
    document.querySelectorAll("[data-vcat]").forEach(function (v) { v.hidden = cat !== "all" && v.getAttribute("data-vcat") !== cat; });
  });

  /* Guide filter + search */
  var gf = document.querySelector("[data-gfilter]"), gs = document.getElementById("guide-search");
  function filterGuides() {
    var on = gf ? gf.querySelector(".on") : null, cat = on ? on.getAttribute("data-cat") : "all";
    var q = gs ? gs.value.trim().toLowerCase() : "";
    document.querySelectorAll("[data-gcat]").forEach(function (g) {
      var okc = cat === "all" || g.getAttribute("data-gcat") === cat;
      var okq = !q || g.textContent.toLowerCase().indexOf(q) > -1;
      g.hidden = !(okc && okq);
    });
  }
  if (gf) gf.addEventListener("click", function (e) {
    var t = e.target.closest("button"); if (!t) return;
    gf.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === t); });
    filterGuides();
  });
  if (gs) gs.addEventListener("input", filterGuides);

  /* Support tiers + payment links */
  var tiers = document.querySelectorAll(".tier");
  if (tiers.length) {
    var amt = document.getElementById("amount");
    tiers.forEach(function (t) {
      t.addEventListener("click", function () {
        tiers.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        t.setAttribute("aria-pressed", "true");
        if (amt) amt.value = t.getAttribute("data-amount");
      });
    });
    var p = S.payments || {}, box = document.getElementById("pay-links");
    if (box) {
      var links = [["paypal", "Give with PayPal"], ["stripe", "Give by card (Stripe)"], ["buymeacoffee", "Buy us a coffee"]];
      var any = false;
      links.forEach(function (l) {
        if (p[l[0]]) { any = true; var a = document.createElement("a"); a.href = p[l[0]]; a.className = "btn lime"; a.target = "_blank"; a.rel = "noopener"; a.textContent = l[1]; box.appendChild(a); }
      });
      var n = document.getElementById("pay-note"), n2 = document.getElementById("pledge-note");
      if (any && n) n.hidden = false;
      if (any && n2) n2.hidden = true;
    }
  }

  /* Reveal on scroll */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* Renter branch on the quote form */
  var rn = document.getElementById("renter-note");
  if (rn) document.querySelectorAll('input[name="ownership"]').forEach(function (r) {
    r.addEventListener("change", function () { rn.hidden = !(r.checked && r.value === "Renting"); });
  });

  /* Glossary search */
  var gl = document.getElementById("gloss-search");
  if (gl) gl.addEventListener("input", function () {
    var q = gl.value.trim().toLowerCase();
    document.querySelectorAll(".gloss [data-term]").forEach(function (d) {
      d.hidden = q && d.textContent.toLowerCase().indexOf(q) === -1;
    });
  });
})();
