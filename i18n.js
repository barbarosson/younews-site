(function () {
  const dict = {
    tr: {
      title_home: "You News — Windows masaüstü haber okuyucu",
      desc_home: "You News: Windows masaüstü RSS okuyucu. Veri yerelde kalır. AI anahtarı size aittir.",
      nav_home: "Ana sayfa",
      nav_disclaimer: "Uyarılar",
      nav_privacy: "Gizlilik",
      nav_refund: "İade",
      kicker: "Küresel manşetler",
      hero: "Dünya haberleri, piyasalar ve AI brifingi tek ekranda.",
      lead: "You News bu bilgisayarda çalışır. Manşetler ve ayarlar yerelde kalır. Özet ve çeviri için kendi API anahtarınızı veya yerel Ollama’yı kullanırsınız; model erişimi satılmaz.",
      buy: "Satın al",
      learn: "Uyarıları oku",
      price_note: "tek seferlik · Windows",
      checkout: "Ödeme tek kasadan (Lemon Squeezy) alınır. Microsoft Store ayrı bir vitrin olabilir; bu sitede ikinci ödeme yöntemi yoktur.",
      feat1_t: "Haber masası",
      feat1: "RSS ve kaynaklardan manşet listesi, arama, klasörler ve notlar.",
      feat2_t: "Piyasa şeridi",
      feat2: "Yahoo Finance / yfinance üzerinden fiyatlar. Resmi bir Yahoo ürünü değildir; gecikebilir veya kesilebilir.",
      feat3_t: "Sizin anahtarınız",
      feat3: "Özet, çeviri ve brifing sizin API anahtarınız veya yerel Ollama ile çalışır.",
      important_t: "Önemli",
      important: "Haber metinleri yayıncılara aittir. You News içeriği lisanslamaz veya yeniden satmaz.",
      title_disclaimer: "Uyarılar — You News",
      disc_h: "Uyarılar",
      disc_1: "Yahoo, yfinance, Microsoft veya herhangi bir yayıncıyla bağlantılı değildir. Piyasa fiyatları yfinance üzerinden resmi olmayan Yahoo Finance erişiminden gelir; gecikebilir, eksik kalabilir veya habersiz kesilebilir. Bu resmi bir Yahoo ürünü değildir.",
      disc_2: "RSS ve haber metinleri yayıncılara aittir. You News yalnızca sizin eklediğiniz veya açtığınız kaynakları çeker; bu içeriği lisanslamaz veya yeniden satmaz.",
      disc_3: "You News’i Microsoft Store dışında aldıysanız güncelleme ve iade, Microsoft’un değil o kopyayı satanın (bu site / Lemon Squeezy) sorumluluğundadır.",
      back: "← Ana sayfa",
      title_privacy: "Gizlilik — You News",
      priv_h: "Gizlilik",
      priv_1: "You News bir Windows masaüstü uygulamasıdır. Haberler, kaynaklar, ayarlar ve notlar varsayılan olarak sizin bilgisayarınızda tutulur; bunları bir You News bulut hesabına yüklemeyiz.",
      priv_2: "Yapay zekâ özeti ve çeviri, sizin girdiğiniz API anahtarıyla (veya yerel Ollama ile) ilgili sağlayıcıya gider. Anahtar işletim sistemi kimlik deposunda saklanır. Model erişimi satılmaz.",
      priv_3: "Piyasa fiyatları üçüncü taraf (Yahoo Finance / yfinance) üzerinden alınır. RSS istekleri sizin seçtiğiniz yayıncı sunucularına gider.",
      priv_4: "Bu web sitesi yalnızca tanıtım ve indirmedir. Satın alma ödemesini Lemon Squeezy işler; kart verisi bu sitede tutulmaz. Lemon Squeezy’nin kendi gizlilik metni ödeme için geçerlidir.",
      contact: "İletişim:",
      title_refund: "İade — You News",
      ref_h: "İade ve güncelleme",
      ref_1: "Bu siteden (Lemon Squeezy) alınan kopyalar için iade ve güncelleme Microsoft’un değil, satıcının sorumluluğundadır.",
      ref_2: "Satın alımdan sonra 14 gün içinde, lisansın kötüye kullanılmadığı durumlarda iade talebini hello@younews.media adresine yazın. Ödeme sağlayıcısı kendi kesintilerini uygulayabilir.",
      ref_3: "Microsoft Store’dan alınan kopyalar Store iade kurallarına tabidir.",
      copyright: "© You News · younews.media"
    },
    en: {
      title_home: "You News — Windows desktop news reader",
      desc_home: "You News is a Windows desktop RSS reader. Data stays on your PC. AI uses your own API key.",
      nav_home: "Home",
      nav_disclaimer: "Disclaimer",
      nav_privacy: "Privacy",
      nav_refund: "Refunds",
      kicker: "Global headlines",
      hero: "World news, markets, and an AI briefing on one screen.",
      lead: "You News runs on this computer. Headlines and settings stay local. Summaries and translation use your own API key or local Ollama; model access is not sold.",
      buy: "Buy",
      learn: "Read the disclaimer",
      price_note: "one-time · Windows",
      checkout: "Checkout is a single cart (Lemon Squeezy). Microsoft Store may be a separate storefront; this site has no second payment method.",
      feat1_t: "News desk",
      feat1: "Headlines from RSS and sources, plus search, folders, and notes.",
      feat2_t: "Market tape",
      feat2: "Quotes via Yahoo Finance / yfinance. Not an official Yahoo product; data may lag or stop without notice.",
      feat3_t: "Your key",
      feat3: "Summaries, translation, and briefing use your API key or local Ollama.",
      important_t: "Important",
      important: "Article text belongs to publishers. You News does not license or resell that content.",
      title_disclaimer: "Disclaimer — You News",
      disc_h: "Disclaimer",
      disc_1: "Not affiliated with Yahoo, yfinance, Microsoft, or any publisher. Market prices come from unofficial Yahoo Finance access via yfinance; they may be delayed, incomplete, or interrupted without notice. This is not an official Yahoo product.",
      disc_2: "RSS and article text belong to publishers. You News only fetches sources you add or open; it does not license or resell that content.",
      disc_3: "If you bought You News outside the Microsoft Store, updates and refunds are the seller’s responsibility (this site / Lemon Squeezy), not Microsoft’s.",
      back: "← Home",
      title_privacy: "Privacy — You News",
      priv_h: "Privacy",
      priv_1: "You News is a Windows desktop app. Headlines, sources, settings, and notes stay on your computer by default; we do not upload them to a You News cloud account.",
      priv_2: "AI summaries and translation go to the provider you configure with your API key (or local Ollama). The key is stored in the OS credential store. Model access is not sold.",
      priv_3: "Market prices come from a third party (Yahoo Finance / yfinance). RSS requests go to the publisher servers you choose.",
      priv_4: "This website is only marketing and download. Lemon Squeezy processes payment; card data is not stored here. Lemon Squeezy’s own privacy policy applies to checkout.",
      contact: "Contact:",
      title_refund: "Refunds — You News",
      ref_h: "Refunds and updates",
      ref_1: "For copies bought on this site (Lemon Squeezy), refunds and updates are the seller’s responsibility, not Microsoft’s.",
      ref_2: "Within 14 days of purchase, if the license has not been abused, email hello@younews.media. The payment provider may keep its own fees.",
      ref_3: "Copies bought from the Microsoft Store follow Store refund rules.",
      copyright: "© You News · younews.media"
    }
  };

  function detect() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "tr" || q === "en") return q;
    try {
      const saved = localStorage.getItem("younews-lang");
      if (saved === "tr" || saved === "en") return saved;
    } catch (_) {}
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("tr") ? "tr" : "en";
  }

  function apply(lang) {
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (pack[key]) el.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      const spec = el.getAttribute("data-i18n-attr").split(":");
      const attr = spec[0];
      const key = spec[1];
      if (pack[key]) el.setAttribute(attr, pack[key]);
    });
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
    try { localStorage.setItem("younews-lang", lang); } catch (_) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }

  window.YouNewsI18n = { apply: apply, detect: detect };

  document.addEventListener("DOMContentLoaded", function () {
    apply(detect());
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () { apply(btn.dataset.lang); });
    });
  });
})();
