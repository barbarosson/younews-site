(function () {
  const dict = {
    tr: {
      title_home: "You News — Windows masaüstü haber okuyucu",
      desc_home: "You News: Windows masaüstü RSS okuyucu. Veri yerelde kalır. AI anahtarı size aittir.",
      nav_home: "Ürün",
      nav_disclaimer: "Uyarılar",
      nav_privacy: "Gizlilik",
      nav_refund: "İade",
      kicker: "Windows masaüstü · küresel manşetler",
      hero: "Haber masası, piyasalar ve brifing — tek pencerede.",
      lead: "You News bu bilgisayarda çalışır. Manşetler yerelde kalır. Özet ve çeviri sizin API anahtarınız veya yerel Ollama ile; model erişimi satılmaz.",
      buy: "Satın al · $24.99",
      learn: "Uyarılar",
      stat1_k: "Yerel veri",
      stat1: "Buluta yüklenmez",
      stat2_k: "Tek seferlik",
      stat2: "Windows lisansı",
      stat3_k: "Tek kasa",
      stat3: "Lemon Squeezy",
      price_note: "tek seferlik · Windows",
      checkout: "Ödeme yalnızca Lemon Squeezy üzerinden alınır. Microsoft Store ayrı bir vitrin olabilir; bu sitede ikinci ödeme yöntemi yoktur.",
      feat1_t: "Haber masası",
      feat1: "RSS, arama, klasörler ve notlar. Yayıncı metni yayıncıya aittir.",
      feat2_t: "Piyasa şeridi",
      feat2: "Yahoo Finance / yfinance. Resmi Yahoo ürünü değildir; gecikebilir veya kesilebilir.",
      feat3_t: "Sizin anahtarınız",
      feat3: "Özet, çeviri ve brifing sizin anahtarınız veya Ollama ile çalışır.",
      important_t: "Yasal not",
      important: "Haber metinleri yayıncılara aittir. You News içeriği lisanslamaz veya yeniden satmaz.",
      title_disclaimer: "Uyarılar — You News",
      disc_h: "Uyarılar",
      disc_1: "Yahoo, yfinance, Microsoft veya herhangi bir yayıncıyla bağlantılı değildir. Piyasa fiyatları yfinance üzerinden resmi olmayan Yahoo Finance erişiminden gelir; gecikebilir, eksik kalabilir veya habersiz kesilebilir. Bu resmi bir Yahoo ürünü değildir.",
      disc_2: "RSS ve haber metinleri yayıncılara aittir. You News yalnızca sizin eklediğiniz veya açtığınız kaynakları çeker; bu içeriği lisanslamaz veya yeniden satmaz.",
      disc_3: "You News’i Microsoft Store dışında aldıysanız güncelleme ve iade, Microsoft’un değil o kopyayı satanın (bu site / Lemon Squeezy) sorumluluğundadır.",
      back: "← Ürün",
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
      nav_home: "Product",
      nav_disclaimer: "Disclaimer",
      nav_privacy: "Privacy",
      nav_refund: "Refunds",
      kicker: "Windows desktop · global headlines",
      hero: "A news desk, markets, and briefing — in one window.",
      lead: "You News runs on this computer. Headlines stay local. Summaries and translation use your API key or local Ollama; model access is not sold.",
      buy: "Buy · $24.99",
      learn: "Disclaimer",
      stat1_k: "Local data",
      stat1: "Not uploaded to a cloud",
      stat2_k: "One-time",
      stat2: "Windows license",
      stat3_k: "Single checkout",
      stat3: "Lemon Squeezy",
      price_note: "one-time · Windows",
      checkout: "Payment is taken only through Lemon Squeezy. Microsoft Store may be a separate storefront; this site has no second payment method.",
      feat1_t: "News desk",
      feat1: "RSS, search, folders, and notes. Publisher text belongs to publishers.",
      feat2_t: "Market tape",
      feat2: "Yahoo Finance / yfinance. Not an official Yahoo product; data may lag or stop.",
      feat3_t: "Your key",
      feat3: "Summaries, translation, and briefing use your key or Ollama.",
      important_t: "Legal note",
      important: "Article text belongs to publishers. You News does not license or resell that content.",
      title_disclaimer: "Disclaimer — You News",
      disc_h: "Disclaimer",
      disc_1: "Not affiliated with Yahoo, yfinance, Microsoft, or any publisher. Market prices come from unofficial Yahoo Finance access via yfinance; they may be delayed, incomplete, or interrupted without notice. This is not an official Yahoo product.",
      disc_2: "RSS and article text belong to publishers. You News only fetches sources you add or open; it does not license or resell that content.",
      disc_3: "If you bought You News outside the Microsoft Store, updates and refunds are the seller’s responsibility (this site / Lemon Squeezy), not Microsoft’s.",
      back: "← Product",
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
    return (navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en";
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
      if (pack[spec[1]]) el.setAttribute(spec[0], pack[spec[1]]);
    });
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
    try { localStorage.setItem("younews-lang", lang); } catch (_) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(detect());
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () { apply(btn.dataset.lang); });
    });
  });
})();
