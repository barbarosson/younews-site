(function () {
  const dict = {
    tr: {
      title_home: "You News — Windows’ta kendi haber masanız",
      desc_home: "You News, bu bilgisayarda çalışan bir haber okuyucu. Listeniz sizde kalır. Yapay zekâ için kendi anahtarınızı kullanırsınız.",
      nav_home: "Ürün",
      nav_how: "Nasıl çalışır",
      nav_faq: "SSS",
      nav_disclaimer: "Uyarılar",
      nav_privacy: "Gizlilik",
      nav_refund: "İade",
      nav_terms: "Şartlar",
      nav_contact: "İletişim",
      nav_menu: "Menü",
      theme_group: "Tema",
      theme_dark: "Koyu",
      theme_light: "Açık",
      kicker: "Windows masaüstü uygulaması",
      hero: "Haber, piyasa ve kısa brifing — hepsi sizin pencerenizde.",
      lead: "You News bir web sitesi değil; bu bilgisayarda durur. Kaynaklarınız, notlarınız ve ayarlarınız evde kalır. Özet veya çeviri isterseniz kendi API anahtarınızı (ya da bilgisayardaki Ollama’yı) bağlarsınız. Size model satmıyoruz.",
      buy: "Satış yakında · $24.99",
      learn: "Önce uyarılara bak",
      stat1_k: "Veri sizde",
      stat1: "You News bulutuna gitmez",
      stat2_k: "Bir kere ödersiniz",
      stat2: "1 PC · Windows 10/11",
      stat3_k: "Tek ödeme yeri",
      stat3: "Paddle",
      feat1_t: "Kendi masanız",
      feat1: "Takip ettiğiniz siteleri ekleyin, arayın, klasörleyin, not düşün. Yazı yayıncıya aittir; biz onu satmıyoruz.",
      feat2_t: "Piyasa şeridi",
      feat2: "Piyasa şeridi Yahoo Finance verisini yfinance ile gösterir. Rakamlar gecikebilir. Yahoo’nun kendi ürünü değil; alım-satım için değil, göz atmak için.",
      feat3_t: "Yapay zekâ sizin hesabınız",
      feat3: "Özet ve çeviri, sizin anahtarınızın gittiği yere gider — ya da Ollama evde kalır. Anahtarı Windows’un parola kasasına koyarız.",
      how_t: "Nasıl çalışır",
      how_lead: "Kurulumu uzatmayalım. Üç adım, sonra işinize bakarsınız.",
      how1_t: "Windows’a kurun",
      how1: "Kasa açılınca kurulum dosyasını e-postanızdan indirirsiniz. You News tarayıcıda açılmaz; masaüstünde durur.",
      how2_t: "Okuduğunuz yerleri ekleyin",
      how2: "Haber sitesi veya RSS adresi yapıştırın. İstemediğiniz kaynağı listede tutmak zorunda değilsiniz.",
      how3_t: "Okuyun, isterseniz sorun",
      how3: "Manşetlere bakın, piyasaya göz atın. Özet veya çeviri lazımsa kendi anahtarınızı yazın. Yazmazsanız uygulama yine haber okur.",
      after_t: "Ödeme sonrası",
      after_lead: "Kasa açılınca sipariş e-postayla tamamlanır. Üç adım.",
      after1_t: "Kurulumu indirin",
      after1: "YouNews dosyası ödeme e-postasına gelir. Windows 10 veya 11 bilgisayarınıza kurun.",
      after2_t: "Lisans anahtarını yapıştırın",
      after2: "Aynı e-postadaki YN1 anahtarını uygulama açılınca yapıştırın. Anahtar bir bilgisayara bağlanır.",
      after3_t: "Tek PC",
      after3: "Başka bilgisayara taşımak için önce eski PC’de Ayarlar → Lisans → Bu PC’de kapat, sonra yeni makinede etkinleştirin.",
      faq_t: "Sıkça sorulanlar",
      faq_lead: "Kısa cevaplar. İnce yazı için aşağıda gizlilik ve uyarılar var.",
      faq1_q: "Bu bir site mi, yoksa program mı?",
      faq1_a: "Program. Bu sayfa yalnızca tanıtım ve satış içindir. Asıl iş Windows’taki You News’te olur.",
      faq2_q: "Haberlerim, notlarım nereye gidiyor?",
      faq2_a: "Varsayılan olarak sizin diskinize. You News hesabı açıp buluta yüklemiyoruz. Kaynak ekleyince istek o yayıncının sunucusuna gider — haber böyle gelir.",
      faq3_q: "Yapay zekâ ücretin içinde mi?",
      faq3_a: "Hayır. $24.99 uygulama içindir. OpenAI, Anthropic, Gemini, Groq gibi bir servis kullanacaksanız o faturayı onlar keser. İsterseniz ücretsiz Ollama’yı kendi makinenizde çalıştırırsınız.",
      faq4_q: "Yahoo ile resmi bir bağınız var mı?",
      faq4_a: "Hayır. Şerit Yahoo Finance verisini yfinance ile gösterir. Göz atmak için; aracı kurum ekranı değil. Ara sıra yavaşlayabilir.",
      faq5_q: "Haber metinlerini siz mi satıyorsunuz?",
      faq5_a: "Hayır. Yazı yayıncıya aittir. Siz kaynağı eklersiniz, uygulama çeker, siz okursunuz. Lisans satmıyoruz.",
      faq6_q: "Mac veya telefon var mı?",
      faq6_a: "Şimdilik yalnızca Windows. Telefonda açılan bir You News bulutu yok.",
      faq7_q: "Ödemeyi nereden alıyorsunuz?",
      faq7_a: "Bu sitede tek kasa Paddle.com olacak (Merchant of Record). Kart numarası bize gelmez. Fiyat USD cinsinden listelenir; Paddle ödeme sırasında vergiyi (ör. KDV) ekleyebilir.",
      faq8_q: "Beğenmezsem ne olur?",
      faq8_a: "Bu siteden (Paddle) aldıysanız 14 gün içinde, lisansı kötüye kullanmadıysanız hello@younews.media yazın. İade ve müşteri hizmetini Paddle yürütür.",
      faq9_q: "Kurulum dosyası hemen iner mi?",
      faq9_a: "Paddle kasası açılınca ödeme sonrası kurulum ve lisans anahtarı e-postayla gelir. Şimdilik satış kapalı. Takılırsanız hello@younews.media yazın.",
      faq10_q: "Ne alıyorum?",
      faq10_a: "Windows 10/11 için You News masaüstü uygulaması, bir bilgisayara bağlı lisans ve güncelleme yolu. Yapay zekâ dahil değil — kendi API anahtarınız veya Ollama. Mac/telefon yok.",
      price_note: "bir kez · Windows",
      checkout: "Ödemeyi Paddle.com alır (Merchant of Record). Fiyat USD’dir; Paddle ödeme anında vergi ekleyebilir. Bu sitede ikinci kasa yok. Kasa onaylanınca Satın al açılır.",
      og_title: "You News — Windows’ta kendi haber masanız",
      og_desc: "Windows masaüstü haber okuyucu. Listeniz sizde kalır. $24.99 bir kez · 1 PC · AI ayrı.",
      important_t: "Dürüst olalım",
      important: "Manşetler başkalarının işi. You News bir okuyucu; ajans veya lisansçı değil.",
      proto_cap: "Windows’taki You News penceresi. Manşetler bu bilgisayarda kalır.",
      title_disclaimer: "Uyarılar — You News",
      disc_h: "Kısaca",
      disc_1: "You News bağımsız bir okuyucu; Yahoo, Microsoft veya bir gazetenin ürünü değil. Piyasa şeridi Yahoo Finance verisini yfinance ile gösterir. Rakamlar gecikebilir — bir bakış içindir, işlem tavsiyesi değil.",
      disc_2: "Manşet ve yazı yayıncıya aittir. Siz kaynağı eklersiniz, You News okumanız için çeker. O metni satmayız.",
      disc_3: "Bu siteden aldıysanız siparişi Paddle.com yürütür (Merchant of Record); destek ve iade onlara gider. Şu an satış yalnızca bu site üzerinden planlanıyor.",
      back: "← Ana sayfa",
      title_privacy: "Gizlilik — You News",
      priv_h: "Gizlilik, sade haliyle",
      priv_1: "You News Windows’ta çalışır. Haberler, kaynaklar, ayarlar ve notlar varsayılan olarak sizin bilgisayarınızdadır. Bunları bir You News bulutuna yüklemiyoruz.",
      priv_2: "Özet ve çeviri, sizin yazdığınız anahtarla o şirketin sunucusuna gider — ya da Ollama’da evde kalır. Anahtarı işletim sisteminin parola yerine koyarız. Size ‘sınırsız yapay zekâ’ satmıyoruz.",
      priv_3: "Piyasa rakamları Yahoo Finance verisinden, yfinance üzerinden gelir. RSS, sizin seçtiğiniz yayıncıya gider.",
      priv_4: "Bu site vitrindir. Canlı satışta ödemeyi Paddle.com işler; kart numarası burada durmaz. Paddle gizlilik politikası ödeme için geçerlidir: https://www.paddle.com/legal/privacy",
      priv_5: "İletişim formu FormSubmit üzerinden hello@younews.media adresine gider. Ad, e-posta ve mesaj yalnızca yanıt için kullanılır.",
      priv_6: "Tema ve dil tercihi tarayıcınızda (localStorage) tutulur. Zorunlu çerez veya analitik yok.",
      contact: "Yazın:",
      title_contact: "İletişim — You News",
      contact_h: "Bize yazın",
      contact_lead: "Satış, iade ve teknik konular için e-posta en kolayı. Form da aynı kutuya düşer.",
      contact_email: "E-posta",
      contact_phone: "Telefon",
      contact_address: "Adres",
      contact_hours: "Hafta içi, Türkiye saati. Önce e-posta yazın; telefona her zaman bakılamayabilir.",
      form_name: "Adınız",
      form_email: "E-posta",
      form_msg: "Mesaj",
      form_send: "Gönder",
      form_sending: "Gönderiliyor…",
      form_note: "Mesaj hello@younews.media kutusuna düşer. Bu sitede kalırsınız.",
      form_ok_h: "Mesajınız alındı",
      form_ok: "hello@ kutusundan yanıtlarız. Satın alma Paddle onayından sonra açılacak.",
      form_err: "Gönderilemedi veya onay gelmedi. hello@younews.media adresine doğrudan yazın.",
      title_refund: "İade — You News",
      ref_h: "İade ve güncelleme",
      ref_1: "Bu siteden alınan kopyada sipariş süreci Paddle.com üzerinden yürür. Paddle.com Merchant of Record’dur; müşteri hizmeti ve iadeyi Paddle yürütür. Paddle destek: https://www.paddle.com/support",
      ref_2: "Satın alımdan sonra 14 gün içinde, lisansı paylaşmadıysanız veya kırmadıysanız önce hello@younews.media yazın; Paddle iade sürecini yürütür.",
      ref_3: "Fiyat USD listelenir. Paddle ödeme sırasında yerel vergi (ör. KDV) ekleyebilir.",
      title_terms: "Kullanım şartları — You News",
      terms_h: "Kısa kullanım ve lisans",
      terms_1: "You News, Windows 10/11 için bir kez ödenen masaüstü lisansıdır. Anahtar bir bilgisayara bağlanır. Başka PC’ye taşımak için önce eski PC’de Ayarlar → Lisans → Bu PC’de kapat.",
      terms_2: "$24.99 uygulama içindir. Yapay zekâ özet/çeviri dahil değildir; kendi API anahtarınız veya Ollama gerekir.",
      terms_3: "Haber metinleri yayıncıya aittir. Uygulama bir okuyucudur; ajans veya içerik satışı değildir.",
      terms_4: "Lisansı paylaşmak, kırmak veya yeniden satmak yasaktır. Kötüye kullanımda destek ve iade reddedilebilir.",
      terms_5: "Bu siteden alışlarda Merchant of Record Paddle.com’dur. İade: 14 gün, refund sayfasındaki kurallar.",
      copyright: "© You News · younews.media"
    },
    en: {
      title_home: "You News — your news desk on Windows",
      desc_home: "You News is a Windows app, not a website you log into. Your list stays on this PC. AI uses a key you bring.",
      nav_home: "Product",
      nav_how: "How it works",
      nav_faq: "FAQ",
      nav_disclaimer: "Disclaimer",
      nav_privacy: "Privacy",
      nav_refund: "Refunds",
      nav_terms: "Terms",
      nav_contact: "Contact",
      nav_menu: "Menu",
      theme_group: "Theme",
      theme_dark: "Dark",
      theme_light: "Light",
      kicker: "A Windows desktop app",
      hero: "Headlines, markets, and a short briefing — on your machine.",
      lead: "You News isn’t a site you sign into. It lives on this computer. Your sources, notes, and settings stay here. Want a summary or a translation? Plug in your own API key, or run Ollama at home. We don’t sell you a model.",
      buy: "Sales soon · $24.99",
      learn: "Read the fine print",
      stat1_k: "Stays with you",
      stat1: "No You News cloud account",
      stat2_k: "Pay once",
      stat2: "1 PC · Windows 10/11",
      stat3_k: "One checkout",
      stat3: "Paddle",
      feat1_t: "Your desk",
      feat1: "Add the sites you actually read. Search, file, scribble a note. The article still belongs to the publisher — we don’t sell it.",
      feat2_t: "Market tape",
      feat2: "The tape shows Yahoo Finance figures through yfinance. Numbers can lag. It isn’t Yahoo’s own product — a glance, not a trading screen.",
      feat3_t: "AI on your bill",
      feat3: "Summaries and translation go to the provider behind your key — or stay local with Ollama. We keep the key in the Windows credential store.",
      how_t: "How it works",
      how_lead: "No onboarding maze. Three steps, then you get on with your day.",
      how1_t: "Install it on Windows",
      how1: "When checkout opens, you download the installer from your email. You News doesn’t run in a browser tab. It sits on the desktop.",
      how2_t: "Add what you already read",
      how2: "Paste a news site or an RSS URL. You don’t have to keep a source you don’t care about.",
      how3_t: "Read. Ask only if you want to.",
      how3: "Skim headlines, glance at the tape. Summaries and translation wait until you add a key. Skip that, and it still reads the news.",
      after_t: "After you pay",
      after_lead: "When checkout is open, the order finishes by email. Three steps.",
      after1_t: "Download the installer",
      after1: "YouNews arrives in the payment email. Install it on Windows 10 or 11.",
      after2_t: "Paste the license key",
      after2: "When the app opens, paste the YN1 key from that email. The key binds to one PC.",
      after3_t: "One PC",
      after3: "To move it: Settings → License → Deactivate this PC, then activate on the new machine.",
      faq_t: "Questions people actually ask",
      faq_lead: "Straight answers. The longer legal pages are linked in the footer.",
      faq1_q: "Is this a website or an app?",
      faq1_a: "An app. This page is the shop window. The work happens in You News on Windows.",
      faq2_q: "Where do my headlines and notes go?",
      faq2_a: "On your disk, by default. We don’t upload them to a You News cloud. When you add a source, the request goes to that publisher — that’s how the news arrives.",
      faq3_q: "Is AI included in $24.99?",
      faq3_a: "No. That’s the app. If you use OpenAI, Anthropic, Gemini, Groq, they bill you. Or run Ollama on this machine for free, if that suits you.",
      faq4_q: "Are you affiliated with Yahoo?",
      faq4_a: "No. The tape shows Yahoo Finance data through yfinance. Handy for a glance, not a broker screen. It can slow down now and then.",
      faq5_q: "Are you selling the articles?",
      faq5_a: "No. The writing belongs to the publisher. You add a source, the app fetches it, you read it. We don’t license that text.",
      faq6_q: "Mac? Phone?",
      faq6_a: "Windows for now. There is no You News cloud you open on a phone.",
      faq7_q: "Who takes the payment?",
      faq7_a: "Paddle.com will be the only checkout on this site (Merchant of Record). We never see your card. The list price is in USD; Paddle may add tax (e.g. VAT) at payment.",
      faq8_q: "What if it isn’t for me?",
      faq8_a: "Bought here through Paddle? Email hello@younews.media within 14 days, so long as the license wasn’t abused. Paddle handles returns and customer service.",
      faq9_q: "Do I get the installer right away?",
      faq9_a: "Once Paddle checkout is live, the installer and license key arrive by email after payment. Sales are paused until then. If you’re stuck, write to hello@younews.media.",
      faq10_q: "What do I get?",
      faq10_a: "You News for Windows 10/11, a one-PC license, and updates. AI is not included — bring your own API key or run Ollama. No Mac or phone app.",
      price_note: "once · Windows",
      checkout: "Orders are processed by our reseller Paddle.com (Merchant of Record). Price is listed in USD; Paddle may add tax at checkout. There is no second pay button. Buy unlocks when checkout is approved.",
      og_title: "You News — your news desk on Windows",
      og_desc: "A Windows desktop news reader. Your list stays on this PC. $24.99 once · 1 PC · AI separate.",
      important_t: "One more thing",
      important: "The stories are other people’s work. You News is a reader, not a wire service.",
      proto_cap: "The You News window on Windows. Headlines stay on this PC.",
      title_disclaimer: "Disclaimer — You News",
      disc_h: "In short",
      disc_1: "You News is an independent reader — not a Yahoo, Microsoft, or newsroom product. The market tape shows Yahoo Finance figures through yfinance. Numbers can lag; they’re a glance, not investment advice.",
      disc_2: "Headlines and article text stay with their publishers. You add a source; You News fetches it for you to read. We don’t sell that writing.",
      disc_3: "Orders on this site are handled by Paddle.com, the Merchant of Record — they take care of payment, support, and refunds. Sales are planned through this website only for now.",
      back: "← Home",
      title_privacy: "Privacy — You News",
      priv_h: "Privacy, without the fog",
      priv_1: "You News runs on Windows. Headlines, sources, settings, and notes stay on your computer unless you send them somewhere yourself. We don’t upload them to a You News cloud.",
      priv_2: "Summaries and translation go to the company behind the key you typed — or stay home with Ollama. The key sits in the OS credential store. We are not selling you ‘unlimited AI’.",
      priv_3: "Market figures come from Yahoo Finance data via yfinance. RSS goes to the publishers you pick.",
      priv_4: "This website is the brochure. When sales are live, Paddle.com takes payment; card numbers don’t live here. Paddle’s privacy policy covers checkout: https://www.paddle.com/legal/privacy",
      priv_5: "The contact form is delivered to hello@younews.media via FormSubmit. We use your name, email, and message only to reply.",
      priv_6: "Theme and language preferences stay in your browser (localStorage). No required analytics cookies.",
      contact: "Write to us:",
      title_contact: "Contact — You News",
      contact_h: "Get in touch",
      contact_lead: "Email is the best way for sales, refunds, and the app. The form lands in the same inbox.",
      contact_email: "Email",
      contact_phone: "Phone",
      contact_address: "Address",
      contact_hours: "Weekdays, Turkey time. Email first — we may not always pick up the phone.",
      form_name: "Your name",
      form_email: "Email",
      form_msg: "Message",
      form_send: "Send",
      form_sending: "Sending…",
      form_note: "The note goes to hello@younews.media. You stay on this site.",
      form_ok_h: "Message received",
      form_ok: "We’ll reply from the hello@ inbox. Checkout opens after Paddle approval.",
      form_err: "Could not confirm the send. Email hello@younews.media directly.",
      title_refund: "Refunds — You News",
      ref_h: "Refunds and updates",
      ref_1: "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides customer service and handles returns. Paddle support: https://www.paddle.com/support",
      ref_2: "Within 14 days, if you didn’t share or crack the license, email hello@younews.media first; Paddle runs the refund.",
      ref_3: "List price is in USD. Paddle may add local tax (e.g. VAT) at payment.",
      title_terms: "Terms — You News",
      terms_h: "Short license terms",
      terms_1: "You News is a one-time Windows 10/11 desktop license. The key binds to one PC. To move it: Settings → License → Deactivate this PC, then activate on the new machine.",
      terms_2: "$24.99 is the app only. AI summary/translation is not included — bring your own API key or Ollama.",
      terms_3: "Article text belongs to publishers. You News is a reader, not a wire service or content reseller.",
      terms_4: "Sharing, cracking, or reselling the license is not allowed. Abuse can void support and refunds.",
      terms_5: "Website purchases use Paddle.com as Merchant of Record. Refunds: 14 days per the refund page.",
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
    document.querySelectorAll(".theme button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", document.documentElement.classList.contains(btn.dataset.theme) ? "true" : "false");
    });
    try { localStorage.setItem("younews-lang", lang); } catch (_) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    var thanks = document.getElementById("thanks");
    if (thanks && url.searchParams.get("sent") === "1") thanks.hidden = false;
    history.replaceState(null, "", url);
    document.dispatchEvent(new CustomEvent("younews-lang", { detail: lang }));
  }

  function applyTheme(theme) {
    if (theme !== "light" && theme !== "dark") theme = "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    try { localStorage.setItem("younews-theme", theme); } catch (_) {}
    document.querySelectorAll(".theme button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.theme === theme ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(detect());
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () { apply(btn.dataset.lang); });
    });
    document.querySelectorAll(".theme button").forEach(function (btn) {
      btn.addEventListener("click", function () { applyTheme(btn.dataset.theme); });
    });
    applyTheme((function () {
      try {
        var saved = localStorage.getItem("younews-theme");
        if (saved === "light" || saved === "dark") return saved;
      } catch (_) {}
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    })());
    var toggle = document.getElementById("nav-toggle");
    document.querySelectorAll("header nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (toggle) toggle.checked = false;
      });
    });
  });
})();
