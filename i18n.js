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
      nav_contact: "İletişim",
      nav_menu: "Menü",
      kicker: "Windows masaüstü uygulaması",
      hero: "Haber, piyasa ve kısa brifing — hepsi sizin pencerenizde.",
      lead: "You News bir web sitesi değil; bu bilgisayarda durur. Kaynaklarınız, notlarınız ve ayarlarınız evde kalır. Özet veya çeviri isterseniz kendi API anahtarınızı (ya da bilgisayardaki Ollama’yı) bağlarsınız. Size model satmıyoruz.",
      buy: "Satın al · $24.99 · Paddle",
      learn: "Önce uyarılara bak",
      stat1_k: "Veri sizde",
      stat1: "You News bulutuna gitmez",
      stat2_k: "Bir kere ödersiniz",
      stat2: "Windows lisansı",
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
      how1: "Satın alınca kurulum dosyasını indirirsiniz. You News tarayıcıda açılmaz; masaüstünde durur.",
      how2_t: "Okuduğunuz yerleri ekleyin",
      how2: "Haber sitesi veya RSS adresi yapıştırın. İstemediğiniz kaynağı listede tutmak zorunda değilsiniz.",
      how3_t: "Okuyun, isterseniz sorun",
      how3: "Manşetlere bakın, piyasaya göz atın. Özet veya çeviri lazımsa kendi anahtarınızı yazın. Yazmazsanız uygulama yine haber okur.",
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
      faq7_a: "Bu sitede tek kasa Paddle olacak. Kart bize gelmez. Microsoft Store ayrı bir vitrin olabilir; oradan aldıysanız iade Store’a bakar.",
      faq8_q: "Beğenmezsem ne olur?",
      faq8_a: "Bu siteden (Paddle) aldıysanız 14 gün içinde, lisansı kötüye kullanmadıysanız hello@younews.media yazın. İade ve müşteri hizmetini Paddle yürütür. Store’dan aldıysanız Microsoft’un yolu geçerlidir.",
      faq9_q: "Kurulum dosyası hemen iner mi?",
      faq9_a: "Paddle kasası açılınca ödeme sonrası kurulum gelir. Şimdilik satış kapalı. Takılırsanız hello@younews.media yazın.",
      price_note: "bir kez · Windows",
      checkout: "Ödemeyi Paddle.com alır (Merchant of Record). Bu sitede ikinci kasa yok. Kasa onaylanınca Satın al açılır.",
      important_t: "Dürüst olalım",
      important: "Manşetler başkalarının işi. You News bir okuyucu; ajans veya lisansçı değil.",
      proto_cap: "Örnek vitrin. Canlı haber değil; Windows’taki You News böyle durur.",
      title_disclaimer: "Uyarılar — You News",
      disc_h: "Kısaca",
      disc_1: "You News bağımsız bir okuyucu; Yahoo, Microsoft veya bir gazetenin ürünü değil. Piyasa şeridi Yahoo Finance verisini yfinance ile gösterir. Rakamlar gecikebilir — bir bakış içindir, işlem tavsiyesi değil.",
      disc_2: "Manşet ve yazı yayıncıya aittir. Siz kaynağı eklersiniz, You News okumanız için çeker. O metni satmayız.",
      disc_3: "Bu siteden aldıysanız siparişi Paddle.com yürütür (Merchant of Record); destek ve iade onlara gider. Microsoft Store’dan aldıysanız güncelleme ve iade Store kurallarına bakar.",
      back: "← Ana sayfa",
      title_privacy: "Gizlilik — You News",
      priv_h: "Gizlilik, sade haliyle",
      priv_1: "You News Windows’ta çalışır. Haberler, kaynaklar, ayarlar ve notlar varsayılan olarak sizin bilgisayarınızdadır. Bunları bir You News bulutuna yüklemiyoruz.",
      priv_2: "Özet ve çeviri, sizin yazdığınız anahtarla o şirketin sunucusuna gider — ya da Ollama’da evde kalır. Anahtarı işletim sisteminin parola yerine koyarız. Size ‘sınırsız yapay zekâ’ satmıyoruz.",
      priv_3: "Piyasa rakamları Yahoo Finance verisinden, yfinance üzerinden gelir. RSS, sizin seçtiğiniz yayıncıya gider.",
      priv_4: "Bu site vitrindir. Canlı satışta ödemeyi Paddle.com işler; kart numarası burada durmaz. Paddle’ın gizlilik metni ödeme için geçerlidir.",
      priv_5: "İletişim formu FormSubmit üzerinden hello@younews.media adresine gider. Ad, e-posta ve mesaj yalnızca yanıt için kullanılır.",
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
      form_err: "Gönderilemedi. hello@younews.media adresine doğrudan yazın.",
      title_refund: "İade — You News",
      ref_h: "İade ve güncelleme",
      ref_1: "Bu siteden alınan kopyada sipariş süreci Paddle.com üzerinden yürür. Paddle.com tüm bu siparişlerde Merchant of Record’dur; müşteri hizmeti ve iadeyi Paddle yürütür.",
      ref_2: "Satın alımdan sonra 14 gün içinde, lisansı paylaşmadıysanız veya kırmadıysanız hello@younews.media veya Paddle destek yazın.",
      ref_3: "Microsoft Store’dan aldıysanız iade Store’un kuralına bakar.",
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
      nav_contact: "Contact",
      nav_menu: "Menu",
      kicker: "A Windows desktop app",
      hero: "Headlines, markets, and a short briefing — on your machine.",
      lead: "You News isn’t a site you sign into. It lives on this computer. Your sources, notes, and settings stay here. Want a summary or a translation? Plug in your own API key, or run Ollama at home. We don’t sell you a model.",
      buy: "Buy · $24.99 · Paddle",
      learn: "Read the fine print",
      stat1_k: "Stays with you",
      stat1: "No You News cloud account",
      stat2_k: "Pay once",
      stat2: "Windows license",
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
      how1: "After checkout you download the installer. You News doesn’t run in a browser tab. It sits on the desktop.",
      how2_t: "Add what you already read",
      how2: "Paste a news site or an RSS URL. You don’t have to keep a source you don’t care about.",
      how3_t: "Read. Ask only if you want to.",
      how3: "Skim headlines, glance at the tape. Summaries and translation wait until you add a key. Skip that, and it still reads the news.",
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
      faq7_a: "Paddle will be the only checkout on this site. We never see your card. Microsoft Store may be a separate shop; if you bought there, their refund rules apply.",
      faq8_q: "What if it isn’t for me?",
      faq8_a: "Bought here through Paddle? Email hello@younews.media within 14 days, so long as the license wasn’t abused. Paddle handles returns and customer service. Bought in the Store? That’s Microsoft’s refund path.",
      faq9_q: "Do I get the installer right away?",
      faq9_a: "Once Paddle checkout is live, the installer comes after payment. Sales are paused until then. If you’re stuck, write to hello@younews.media.",
      price_note: "once · Windows",
      checkout: "Orders are processed by our reseller Paddle.com (Merchant of Record). There is no second pay button. Buy unlocks when checkout is approved.",
      important_t: "One more thing",
      important: "The stories are other people’s work. You News is a reader, not a wire service.",
      proto_cap: "Sample window. Not live news — this is how You News sits on Windows.",
      title_disclaimer: "Disclaimer — You News",
      disc_h: "In short",
      disc_1: "You News is an independent reader — not a Yahoo, Microsoft, or newsroom product. The market tape shows Yahoo Finance figures through yfinance. Numbers can lag; they’re a glance, not investment advice.",
      disc_2: "Headlines and article text stay with their publishers. You add a source; You News fetches it for you to read. We don’t sell that writing.",
      disc_3: "Orders on this site are handled by Paddle.com, the Merchant of Record — they take care of payment, support, and refunds. If you bought in the Microsoft Store, updates and refunds follow Store rules.",
      back: "← Home",
      title_privacy: "Privacy — You News",
      priv_h: "Privacy, without the fog",
      priv_1: "You News runs on Windows. Headlines, sources, settings, and notes stay on your computer unless you send them somewhere yourself. We don’t upload them to a You News cloud.",
      priv_2: "Summaries and translation go to the company behind the key you typed — or stay home with Ollama. The key sits in the OS credential store. We are not selling you ‘unlimited AI’.",
      priv_3: "Market figures come from Yahoo Finance data via yfinance. RSS goes to the publishers you pick.",
      priv_4: "This website is the brochure. When sales are live, Paddle.com takes payment; card numbers don’t live here. Paddle’s privacy policy covers checkout.",
      priv_5: "The contact form is delivered to hello@younews.media via FormSubmit. We use your name, email, and message only to reply.",
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
      form_err: "Could not send. Email hello@younews.media directly.",
      title_refund: "Refunds — You News",
      ref_h: "Refunds and updates",
      ref_1: "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.",
      ref_2: "Within 14 days, if you didn’t share or crack the license, email hello@younews.media or Paddle support.",
      ref_3: "Store purchases follow Store refund rules.",
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
    var thanks = document.getElementById("thanks");
    if (thanks && url.searchParams.get("sent") === "1") thanks.hidden = false;
    history.replaceState(null, "", url);
    document.dispatchEvent(new CustomEvent("younews-lang", { detail: lang }));
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(detect());
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () { apply(btn.dataset.lang); });
    });
    var toggle = document.getElementById("nav-toggle");
    document.querySelectorAll("header nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (toggle) toggle.checked = false;
      });
    });
  });
})();
