/* Fresh.Energy — calculators. All maths runs in the browser; nothing is sent anywhere. */
(function () {
  "use strict";
  var store = window.FE_store || { get: function () { return null; }, set: function () {} };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Currency ---------- */
  var CUR = store.get("fe-cur") || "$";
  function money(n, dp) {
    if (!isFinite(n)) return "—";
    var neg = n < 0; n = Math.abs(n);
    var s = n.toLocaleString(undefined, { minimumFractionDigits: dp || 0, maximumFractionDigits: dp || 0 });
    return (neg ? "−" : "") + CUR + s;
  }
  function num(n, dp) { return isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: dp == null ? 0 : dp, minimumFractionDigits: dp || 0 }) : "—"; }
  function v(id) { var el = document.getElementById(id); if (!el) return 0; var x = parseFloat(el.value); return isFinite(x) ? x : 0; }
  function set(id, txt) { var el = document.getElementById(id); if (el) el.textContent = txt; }
  $$("[data-cur-pick]").forEach(function (s) {
    s.value = CUR;
    s.addEventListener("change", function () { CUR = s.value; store.set("fe-cur", CUR); $$("[data-cur]").forEach(function (x) { x.textContent = CUR; }); recalcAll(); });
  });
  $$("[data-cur]").forEach(function (x) { x.textContent = CUR; });

  /* Live range labels */
  $$("input[type=range][data-out]").forEach(function (r) {
    var out = document.getElementById(r.getAttribute("data-out"));
    var fmt = r.getAttribute("data-fmt") || "";
    function u() { if (out) out.textContent = fmt.replace("%c", CUR).replace("%v", Number(r.value).toLocaleString()); }
    r.addEventListener("input", u); u();
  });

  /* ---------- Tiny SVG line chart ---------- */
  function lineChart(svg, series, opts) {
    if (!svg) return;
    opts = opts || {};
    var W = 600, H = 220, pl = 54, pr = 14, pt = 14, pb = 28;
    var all = []; series.forEach(function (s) { all = all.concat(s.data); });
    var min = Math.min(0, Math.min.apply(null, all)), max = Math.max.apply(null, all);
    if (max === min) max = min + 1;
    var n = series[0].data.length;
    var x = function (i) { return pl + (W - pl - pr) * (i / (n - 1)); };
    var y = function (val) { return pt + (H - pt - pb) * (1 - (val - min) / (max - min)); };
    var out = "";
    for (var g = 0; g <= 4; g++) {
      var gv = min + (max - min) * g / 4, gy = y(gv);
      out += '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + gy + '" y2="' + gy + '" stroke="currentColor" stroke-opacity=".12"/>';
      out += '<text x="' + (pl - 6) + '" y="' + (gy + 4) + '" text-anchor="end">' + (opts.money ? CUR : "") + abbr(gv) + '</text>';
    }
    if (min < 0) out += '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(0) + '" y2="' + y(0) + '" stroke="currentColor" stroke-opacity=".45" stroke-dasharray="4 4"/>';
    var step = Math.ceil(n / 6);
    for (var i = 0; i < n; i += step) out += '<text x="' + x(i) + '" y="' + (H - 8) + '" text-anchor="middle">' + (opts.xlab ? opts.xlab(i) : i) + '</text>';
    series.forEach(function (s) {
      var d = s.data.map(function (val, i) { return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(val).toFixed(1); }).join(" ");
      out += '<path d="' + d + '" fill="none" stroke="' + s.color + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>';
    });
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.innerHTML = out;
  }
  function abbr(n) { var a = Math.abs(n); return a >= 1e6 ? (n / 1e6).toFixed(1) + "M" : a >= 1e3 ? (n / 1e3).toFixed(a >= 1e4 ? 0 : 1) + "k" : Math.round(n); }

  /* ---------- Solar model (shared) ---------- */
  function solarModel(o) {
    var annualUse = (o.bill / Math.max(o.rate, 0.01)) * 12;            // kWh / yr
    var yieldPerKw = o.sun * 365 * 0.80;                                 // kWh per kW per yr after ~20% system losses
    var kw = Math.max(0.5, (annualUse * (o.offset / 100)) / yieldPerKw);
    var gross = kw * 1000 * o.costW;
    var net = gross * (1 - o.incentive / 100);
    var prod1 = kw * yieldPerKw;
    var selfUse = Math.min(prod1 * o.selfShare / 100, annualUse);
    var exported = Math.max(prod1 - selfUse, 0);
    var cum = [-net], total = -net, payback = null, savings25 = 0, yr1 = 0;
    for (var y = 1; y <= 25; y++) {
      var deg = Math.pow(1 - 0.005, y - 1), r = o.rate * Math.pow(1 + o.esc / 100, y - 1);
      var s = (selfUse * deg) * r + (exported * deg) * r * (o.exportPct / 100);
      if (y === 1) yr1 = s;
      savings25 += s; var prev = total; total += s; cum.push(total);
      if (payback === null && total >= 0) payback = (y - 1) + (-prev / s);
    }
    return {
      annualUse: annualUse, kw: kw, panels: Math.ceil(kw * 1000 / 420), gross: gross, net: net, prod1: prod1,
      yr1: yr1, monthly1: yr1 / 12, savings25: savings25, profit25: total, payback: payback, cum: cum,
      co2: prod1 * 0.37 / 1000 * 25, roofSqft: Math.ceil(kw * 1000 / 420) * 21
    };
  }
  window.FE_solarModel = solarModel;

  var recalcs = [];
  function recalcAll() { recalcs.forEach(function (f) { f(); }); }
  function bind(root, fn) { if (!root) return; $$("input,select", root).forEach(function (el) { el.addEventListener("input", fn); el.addEventListener("change", fn); }); recalcs.push(fn); fn(); }

  /* ---------- Hero mini estimator ---------- */
  var hero = document.getElementById("hero-est");
  bind(hero, function () {
    var m = solarModel({ bill: v("h-bill"), rate: 0.17, sun: v("h-sun") || 4.5, costW: 3.0, incentive: 0, exportPct: 75, selfShare: 50, esc: 3, offset: 100 });
    set("h-size", num(m.kw, 1) + " kW");
    set("h-save", money(m.yr1));
    set("h-25", money(m.savings25));
    set("h-pay", m.payback ? num(m.payback, 1) + " yrs" : "25+ yrs");
    var a = document.getElementById("h-cta"); if (a) a.href = "quotes.html?type=solar&bill=" + v("h-bill");
  });

  /* ---------- Solar calculator ---------- */
  var sc = document.getElementById("solar-calc");
  bind(sc, function () {
    var m = solarModel({ bill: v("s-bill"), rate: v("s-rate"), sun: v("s-sun"), costW: v("s-costw"), incentive: v("s-inc"), exportPct: v("s-export"), selfShare: v("s-self"), esc: v("s-esc"), offset: v("s-offset") });
    set("s-kw", num(m.kw, 1) + " kW"); set("s-panels", m.panels + " panels");
    set("s-net", money(m.net)); set("s-gross", "before incentives " + money(m.gross));
    set("s-yr1", money(m.yr1)); set("s-mo", money(m.monthly1) + " / month");
    set("s-pay", m.payback ? num(m.payback, 1) + " years" : "Not within 25 yrs");
    set("s-25", money(m.profit25)); set("s-roi", "net of system cost");
    set("s-use", num(m.annualUse) + " kWh"); set("s-prod", num(m.prod1) + " kWh");
    set("s-roof", "≈" + num(m.roofSqft) + " sq ft (" + num(m.roofSqft * 0.0929) + " m²)");
    set("s-co2", num(m.co2, 1) + " tonnes CO₂");
    lineChart(document.getElementById("s-chart"), [{ data: m.cum, color: "#16A06A" }], { money: true, xlab: function (i) { return "Y" + i; } });
    var a = document.getElementById("s-cta"); if (a) a.href = "../quotes.html?type=solar&bill=" + v("s-bill");
  });

  /* ---------- Heat pump calculator ---------- */
  var FUEL = {
    gas: { kwh: 29.31, unit: "therms", price: 1.40, eff: 0.85, co2: 5.3, label: "Natural gas" },
    oil: { kwh: 40.6, unit: "gallons", price: 3.80, eff: 0.83, co2: 10.2, label: "Heating oil" },
    propane: { kwh: 26.8, unit: "gallons", price: 2.60, eff: 0.85, co2: 5.7, label: "Propane" },
    resist: { kwh: 1, unit: "kWh", price: 0.17, eff: 1.0, co2: 0.37, label: "Electric resistance" }
  };
  var hp = document.getElementById("hp-calc");
  if (hp) {
    var ft = document.getElementById("hp-fuel");
    ft.addEventListener("change", function () {
      var f = FUEL[ft.value];
      document.getElementById("hp-price").value = f.price;
      document.getElementById("hp-eff").value = Math.round(f.eff * 100);
      set("hp-unit", f.unit); set("hp-punit", "per " + f.unit.replace(/s$/, ""));
      var q = document.getElementById("hp-qty"); q.value = ft.value === "gas" ? 700 : ft.value === "resist" ? 12000 : 600;
    });
  }
  bind(hp, function () {
    var f = FUEL[(document.getElementById("hp-fuel") || {}).value || "gas"];
    var qty = v("hp-qty"), price = v("hp-price"), eff = v("hp-eff") / 100, cop = v("hp-cop"), rate = v("hp-rate"), cost = v("hp-cost");
    var heat = qty * f.kwh * eff;                 // useful heat delivered, kWh
    var oldCost = qty * price, hpKwh = heat / Math.max(cop, 0.5), newCost = hpKwh * rate;
    var save = oldCost - newCost;
    set("hp-old", money(oldCost)); set("hp-new", money(newCost));
    set("hp-save", money(save)); set("hp-kwh", num(hpKwh) + " kWh / yr extra electricity");
    set("hp-pay", save > 0 && cost > 0 ? num(cost / save, 1) + " years" : save > 0 ? "Immediate" : "No payback at these prices");
    var co2old = qty * f.co2 / 1000, co2new = hpKwh * 0.37 / 1000;
    set("hp-co2", num(co2old - co2new, 1) + " t CO₂ / yr");
    set("hp-heat", num(heat) + " kWh of heat / yr");
    var be = (price / (f.kwh * eff)) * cop; set("hp-be", "Heat pump wins while electricity costs under " + money(be, 2) + "/kWh");
    var cum = [-cost], t = -cost; for (var y = 1; y <= 15; y++) { t += save * Math.pow(1.02, y - 1); cum.push(t); }
    lineChart(document.getElementById("hp-chart"), [{ data: cum, color: "#2F8CFF" }], { money: true, xlab: function (i) { return "Y" + i; } });
  });

  /* ---------- EV vs gas ---------- */
  var ev = document.getElementById("ev-calc");
  var metric = false;
  if (ev) {
    var mt = document.getElementById("ev-units");
    mt.addEventListener("change", function () {
      metric = mt.value === "metric";
      set("ev-dist-l", metric ? "Kilometres per year" : "Miles per year");
      set("ev-eff-l", metric ? "Gas car fuel use (L/100 km)" : "Gas car fuel economy (mpg)");
      set("ev-fuel-l", metric ? "Fuel price per litre" : "Gas price per gallon");
      set("ev-evef-l", metric ? "EV efficiency (kWh/100 km)" : "EV efficiency (miles per kWh)");
      var d = document.getElementById("ev-dist"), e = document.getElementById("ev-mpg"), fp = document.getElementById("ev-gas"), ee = document.getElementById("ev-eff");
      if (metric) { d.value = 20000; e.value = 8; fp.value = 1.75; ee.value = 18; } else { d.value = 12000; e.value = 30; fp.value = 3.40; ee.value = 3.5; }
      recalcAll();
    });
  }
  bind(ev, function () {
    var dist = v("ev-dist"), eff = v("ev-mpg"), gas = v("ev-gas"), evEff = v("ev-eff"), home = v("ev-rate"), pub = v("ev-pub"), share = v("ev-home") / 100, loss = 1.10;
    var fuelCost, kwh;
    if (metric) { fuelCost = dist / 100 * eff * gas; kwh = dist / 100 * evEff * loss; }
    else { fuelCost = dist / Math.max(eff, 1) * gas; kwh = dist / Math.max(evEff, 0.5) * loss; }
    var elecCost = kwh * (share * home + (1 - share) * pub);
    var mGas = dist * (metric ? 0.06 : 0.10), mEv = dist * (metric ? 0.037 : 0.06);
    var gasTot = fuelCost + mGas, evTot = elecCost + mEv, save = gasTot - evTot;
    var unit = metric ? "km" : "mile";
    set("ev-gas-y", money(fuelCost)); set("ev-ev-y", money(elecCost));
    set("ev-save", money(save)); set("ev-save10", money(save * 10) + " over 10 years");
    set("ev-gpm", CUR + (fuelCost / dist).toFixed(3) + " / " + unit);
    set("ev-epm", CUR + (elecCost / dist).toFixed(3) + " / " + unit);
    set("ev-kwh", num(kwh) + " kWh / yr from the grid");
    var be = metric ? (gas * eff / 100) / (evEff / 100 * loss) : (gas / eff) / (1 / evEff * loss);
    set("ev-be", "Home charging beats fuel while electricity is under " + money(be, 2) + "/kWh");
    var g = [0], e2 = [0]; for (var y = 1; y <= 10; y++) { g.push(g[y - 1] + gasTot); e2.push(e2[y - 1] + evTot); }
    lineChart(document.getElementById("ev-chart"), [{ data: g, color: "#F0603C" }, { data: e2, color: "#16A06A" }], { money: true, xlab: function (i) { return "Y" + i; } });
  });

  /* ---------- Appliance cost ---------- */
  var PRE = [
    ["Refrigerator (modern)", 150, 24], ["Chest freezer", 90, 24], ["Central AC (3-ton)", 3500, 6], ["Window AC unit", 900, 6],
    ["Space heater", 1500, 4], ["Electric water heater", 4500, 3], ["Clothes dryer (electric)", 3000, 1], ["Washing machine", 500, 1],
    ["Dishwasher", 1800, 1], ["Electric oven", 2400, 1], ["Induction hob (one zone)", 1800, 1], ["Microwave", 1100, 0.3],
    ["Kettle", 2200, 0.2], ["Coffee maker", 1000, 0.3], ["Gaming console", 180, 3], ["Desktop PC", 250, 6], ["Laptop", 60, 6],
    ["TV 55\" LED", 100, 5], ["Wi-Fi router", 10, 24], ["LED bulb (x10)", 90, 5], ["Old incandescent bulbs (x10)", 600, 5],
    ["Pool pump", 1500, 8], ["Dehumidifier", 500, 10], ["Hair dryer", 1800, 0.2], ["EV Level 2 charging", 7200, 1.5], ["Electric blanket", 100, 8]
  ];
  var ap = document.getElementById("ap-calc");
  if (ap) {
    var list = document.getElementById("ap-rows"), pick = document.getElementById("ap-preset");
    PRE.forEach(function (p, i) { var o = document.createElement("option"); o.value = i; o.textContent = p[0] + " — " + p[1] + " W"; pick.appendChild(o); });
    function addRow(name, w, h, d) {
      var r = document.createElement("div"); r.className = "appl-row";
      r.innerHTML = '<div><label>Appliance</label><input class="a-n" value="' + name.replace(/"/g, "&quot;") + '"></div>' +
        '<div><label>Watts</label><input class="a-w" type="number" min="0" value="' + w + '"></div>' +
        '<div><label>Hours/day</label><input class="a-h" type="number" min="0" max="24" step="0.1" value="' + h + '"></div>' +
        '<div><label>Days/week</label><input class="a-d" type="number" min="0" max="7" value="' + (d || 7) + '"></div>' +
        '<button type="button" class="x-btn" aria-label="Remove ' + name.replace(/"/g, "") + '">✕</button>';
      list.appendChild(r);
      $$("input", r).forEach(function (el) { el.addEventListener("input", apCalc); });
      $("button", r).addEventListener("click", function () { r.remove(); apCalc(); });
      apCalc();
    }
    document.getElementById("ap-add").addEventListener("click", function () { var p = PRE[pick.value]; addRow(p[0], p[1], p[2], 7); });
    document.getElementById("ap-blank").addEventListener("click", function () { addRow("Custom appliance", 100, 2, 7); });
    addRow(PRE[0][0], PRE[0][1], PRE[0][2]); addRow(PRE[2][0], PRE[2][1], PRE[2][2]); addRow(PRE[6][0], PRE[6][1], PRE[6][2], 3); addRow(PRE[17][0], PRE[17][1], PRE[17][2]);
  }
  function apCalc() {
    if (!ap) return;
    var rate = v("ap-rate"), rows = $$(".appl-row", ap), tot = 0, kwhT = 0, out = [];
    rows.forEach(function (r) {
      var w = +$(".a-w", r).value || 0, h = +$(".a-h", r).value || 0, d = +$(".a-d", r).value || 0;
      var kwh = w / 1000 * h * d * 52.14, c = kwh * rate; tot += c; kwhT += kwh;
      out.push([$(".a-n", r).value, kwh, c]);
    });
    out.sort(function (a, b) { return b[2] - a[2]; });
    set("ap-year", money(tot)); set("ap-month", money(tot / 12)); set("ap-kwh", num(kwhT) + " kWh / yr");
    var tb = document.getElementById("ap-table");
    if (tb) tb.innerHTML = out.map(function (o) {
      var pct = tot ? o[2] / tot * 100 : 0;
      return "<tr><td>" + o[0].replace(/</g, "&lt;") + '<div class="bar" style="margin-top:6px"><i style="width:' + pct.toFixed(1) + '%"></i></div></td><td>' + num(o[1]) + "</td><td>" + money(o[2] / 12, 2) + "</td><td>" + money(o[2]) + "</td></tr>";
    }).join("");
  }
  if (ap) { document.getElementById("ap-rate").addEventListener("input", apCalc); recalcs.push(apCalc); }

  /* ---------- Battery sizer ---------- */
  var bt = document.getElementById("bat-calc");
  bind(bt, function () {
    var kwhDay = 0, peak = 0;
    $$("input[type=checkbox][data-kwh]", bt).forEach(function (c) { if (c.checked) { kwhDay += +c.getAttribute("data-kwh"); peak += +c.getAttribute("data-w"); } });
    var days = v("bat-days"), solar = v("bat-solar"), unit = v("bat-unit");
    var need = kwhDay * days / 0.9;                  // 90% usable depth & round-trip
    var solarDaily = solar * 4.0 * 0.8;              // kWh/day recharge in average sun
    var withSolar = Math.max(kwhDay / 0.9, need - solarDaily * Math.max(days - 1, 0));
    var units = Math.max(1, Math.ceil(withSolar / Math.max(unit, 1)));
    set("bat-day", num(kwhDay, 1) + " kWh/day"); set("bat-need", num(need, 1) + " kWh");
    set("bat-solar-need", num(withSolar, 1) + " kWh"); set("bat-units", units + (units > 1 ? " batteries" : " battery"));
    set("bat-peak", num(peak / 1000, 1) + " kW"); set("bat-unit-l", "of ~" + num(unit, 1) + " kWh each");
    set("bat-cost", money(units * unit * 1000) + " – " + money(units * unit * 1400));
  });

  /* ---------- Energy score quiz ---------- */
  var qz = document.getElementById("score-quiz");
  if (qz) {
    qz.addEventListener("submit", function (e) {
      e.preventDefault();
      var score = 0, max = 0, tips = [];
      $$("fieldset", qz).forEach(function (fs) {
        var chosen = $("input:checked", fs), w = +fs.getAttribute("data-w") || 10; max += w;
        var val = chosen ? +chosen.value : 0; score += val * w;
        if (val < 0.67 && fs.getAttribute("data-tip")) tips.push([1 - val, fs.getAttribute("data-tip"), fs.getAttribute("data-link"), fs.getAttribute("data-save")]);
      });
      var pct = Math.round(score / max * 100);
      var grade = pct >= 85 ? "A" : pct >= 70 ? "B" : pct >= 55 ? "C" : pct >= 40 ? "D" : "E";
      var res = document.getElementById("score-result"); res.hidden = false;
      set("score-num", pct); set("score-grade", "Grade " + grade);
      set("score-msg", pct >= 85 ? "Excellent — your home is already lean. Solar or a battery is your next big lever." : pct >= 70 ? "Good — a few targeted upgrades could still trim your bills noticeably." : pct >= 55 ? "Average — there is real money on the table. Start with the top three actions below." : "High potential — your home is likely wasting a large share of what you pay for. The actions below pay back fastest.");
      var ring = document.getElementById("score-arc"); if (ring) ring.setAttribute("stroke-dasharray", (pct * 3.27).toFixed(1) + " 327");
      tips.sort(function (a, b) { return b[0] - a[0]; });
      document.getElementById("score-tips").innerHTML = tips.slice(0, 6).map(function (t) {
        return '<li><strong>' + t[1] + '</strong>' + (t[3] ? ' <span class="tag">' + t[3] + '</span>' : '') + (t[2] ? ' — <a href="' + t[2] + '">how to do it</a>' : '') + '</li>';
      }).join("") || "<li>No major gaps found. Consider solar, a battery or an EV to go further.</li>";
      var h = document.getElementById("score-hidden"); if (h) h.value = pct + " (" + grade + ")";
      res.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- Quote form live estimate ---------- */
  var qf = document.getElementById("quote-form");
  if (qf) {
    var est = function () {
      var bill = v("q-bill"); set("q-bill-out", CUR + bill);
      var m = solarModel({ bill: bill, rate: 0.17, sun: 4.5, costW: 3.0, incentive: 0, exportPct: 75, selfShare: 50, esc: 3, offset: 100 });
      set("q-kw", num(m.kw, 1) + " kW"); set("q-save", money(m.yr1)); set("q-25", money(m.savings25));
    };
    $$("input,select", qf).forEach(function (el) { el.addEventListener("input", est); });
    recalcs.push(est); est();
    qf._extra = function () { return { estimate_note: "Indicative solar size " + $("#q-kw").textContent + ", year-1 savings " + $("#q-save").textContent }; };
  }
})();
