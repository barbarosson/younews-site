(function () {
  var DATA = {
    tr: {
      tape: "örnek şerit · XU100 · GOLD · DXY · BTC · BRENT ·",
      mods: ["Tümü", "Dünya", "Piyasa", "Teknoloji", "Enerji"],
      items: [
        { t: "Merkez bankası toplantısı öncesi piyasalar temkinli", m: "2 dk" },
        { t: "Güneş enerjisi ihaleleri Avrupa’da üst üste doluyor", m: "11 dk" },
        { t: "Çip tedariki, otomotiv teslimatlarını yine geciktiriyor", m: "24 dk" },
        { t: "İstanbul’da ulaşım durakları yenileniyor", m: "41 dk" },
        { t: "Yapay zekâ araçları haber odasında deneme aşamasında", m: "1 sa" },
        { t: "Brent, stok verisi öncesi dar bantta", m: "1 sa" },
        { t: "Yazılım güncellemesi, havalimanı ekranlarını durdurdu", m: "2 sa" },
        { t: "Tarım ihracatı, kuraklık uyarısına rağmen arttı", m: "3 sa" },
        { t: "Kamu ihalelerinde şeffaflık paketi meclise geliyor", m: "4 sa" },
        { t: "Oyun stüdyoları uzaktan çalışmayı kalıcılaştırıyor", m: "5 sa" }
      ]
    },
    en: {
      tape: "sample tape · XU100 · GOLD · DXY · BTC · BRENT ·",
      mods: ["All", "World", "Markets", "Tech", "Energy"],
      items: [
        { t: "Markets stay cautious ahead of a central-bank meeting", m: "2m" },
        { t: "Solar auctions in Europe keep filling up", m: "11m" },
        { t: "Chip supply is slipping car deliveries again", m: "24m" },
        { t: "Transit shelters in Istanbul are being replaced", m: "41m" },
        { t: "Newsrooms are still trialing AI tools", m: "1h" },
        { t: "Brent holds a tight range before inventory data", m: "1h" },
        { t: "A software update froze airport displays", m: "2h" },
        { t: "Farm exports rose despite a drought watch", m: "3h" },
        { t: "A transparency bill for public tenders is due", m: "4h" },
        { t: "Game studios are making remote work permanent", m: "5h" }
      ]
    }
  };

  var VISIBLE = 4;
  var STEP_MS = 4200;
  var start = 0;
  var timer = 0;
  var onScreen = true;

  function lang() {
    return document.documentElement.lang === "tr" ? "tr" : "en";
  }

  function pack() {
    return DATA[lang()] || DATA.en;
  }

  function reduced() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function paint() {
    var data = pack();
    var side = document.getElementById("desk-side");
    var feed = document.getElementById("desk-feed");
    var track = document.querySelector(".tape-track");
    if (!side || !feed) return;
    side.innerHTML = data.mods.map(function (name, i) {
      return "<span" + (i === 0 ? " class=\"on\"" : "") + ">" + name + "</span>";
    }).join("");
    var html = "";
    for (var i = 0; i < VISIBLE; i++) {
      var row = data.items[(start + i) % data.items.length];
      html += "<li><i class=\"dot\"></i><span class=\"desk-h\">" + row.t + "</span><span class=\"desk-m\">" + row.m + "</span></li>";
    }
    feed.innerHTML = html;
    if (track) {
      var bit = "<span>" + data.tape + " </span>";
      track.innerHTML = bit + bit;
    }
  }

  function tick() {
    if (document.hidden || !onScreen || reduced()) return;
    start = (start + 1) % pack().items.length;
    paint();
  }

  function arm() {
    if (timer) clearInterval(timer);
    timer = 0;
    if (!reduced()) timer = setInterval(tick, STEP_MS);
  }

  document.addEventListener("DOMContentLoaded", function () {
    paint();
    arm();
    document.addEventListener("younews-lang", function () {
      start = 0;
      paint();
    });
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) paint();
    });
    if ("IntersectionObserver" in window) {
      var desk = document.querySelector(".desk");
      if (desk) {
        var io = new IntersectionObserver(function (entries) {
          onScreen = entries.some(function (e) { return e.isIntersecting; });
        }, { threshold: 0.2 });
        io.observe(desk);
      }
    }
  });
})();
