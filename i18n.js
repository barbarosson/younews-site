(function () {
  const dict = {
    tr: {
      title_home: "You News — Windows’ta kendi haber masanız",
      desc_home: "You News, bu bilgisayarda duran bir haber okuyucu. Listeniz sizde kalır. Özet isterseniz kendi anahtarınızı kullanırsınız.",
      nav_home: "Ürün",
      nav_how: "Nasıl çalışır",
      nav_guide: "Rehber",
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
      kicker: "Windows için, sizin masanız",
      hero: "Günün haberleri, piyasa ve kısa bir brifing. Hepsi sizin pencerenizde.",
      lead: "You News’e üye olmazsınız. Program bu bilgisayarda durur; okuduğunuz siteler, notlarınız ve ayarlarınız sizde kalır. Bir haberi özetletmek veya çevirmek isterseniz kendi API anahtarınızı ya da evdeki Ollama’yı bağlarsınız. Yapay zekâ ücretin içinde değil.",
      buy: "Yakında satışta · $24.99",
      learn: "Satın almadan önce",
      stat1_k: "Sizde kalır",
      stat1: "Hesap yok, bulut yok",
      stat2_k: "Bir kez ödeyin",
      stat2: "Tek bilgisayar · Windows 10/11",
      stat3_k: "Kart bize gelmez",
      stat3: "Ödemeyi Paddle alır",
      feat1_t: "Kendi masanız",
      feat1: "Gerçekten okuduğunuz siteleri ekleyin. Arayın, klasörleyin, kenara bir not düşün. Yazı yayıncının; biz onu satmıyoruz.",
      feat2_t: "Piyasa, bir bakışta",
      feat2: "Döviz, endeks ve emtia üst şeritte durur. Rakamlar Yahoo Finance’ten gelir ve gecikebilir. Alım satım ekranı değil; güne bakmak için.",
      feat3_t: "Özet, sizin anahtarınızla",
      feat3: "Kısaltmak veya çevirmek isterseniz kendi anahtarınızı yazın. İstemezseniz Ollama bu bilgisayarda kalır. Anahtar Windows’ta durur, bizde değil.",
      how_t: "Nasıl çalışır",
      how_lead: "Üç adım. Sonra masanıza dönersiniz.",
      how1_t: "Windows’a kurun",
      how1: "Satış açılınca kurulum dosyası e-postanıza gelir. Tarayıcı sekmesi değil; Windows’ta kendi penceresi.",
      how2_t: "Okuduğunuz yerleri ekleyin",
      how2: "Okuduğunuz sitenin adresini yapıştırın. Beğenmediğiniz kaynağı listede tutmak zorunda değilsiniz.",
      how3_t: "Okuyun. Sormak size kalmış.",
      how3: "Manşetlere bakın, şeride göz atın. Özet ve çeviri ancak siz anahtar ekleyince açılır. Eklemezseniz de haber okursunuz.",
      guide_t: "İlk kurulum",
      guide_lead: "Dil, kaynak ve takip listesi. Görseller uygulamanın kendi ekranından.",
      guide1_t: "Dil ve başlangıç paketi",
      guide1: "İlk açılışta dilinizi seçin. Türkiye veya ABD manşetleriyle başlayın. Kaynakları kendiniz ekleyecekseniz bu adımı atlayın.",
      guide2_t: "Kaynak ekleyin",
      guide2: "Ayarlar → Kaynaklar. Bir ad ve RSS adresi yazın, Bağlantıyı dene ile manşet geldiğini görün, sonra Kaynak ekle. Hazır kaynakları kapatabilirsiniz; silinmezler.",
      guide3_t: "Takip listesi",
      guide3: "Ayarlar → Ticker’lar. Bir sembol arayın veya yazın, Sembol ekle ile şeride alın. Seçileni sil ile çıkarın. Fiyatlar Yahoo Finance verisidir; alım satım ekranı değildir.",
      guide4_t: "Okuyun",
      guide4: "Soldan bir konu seçin, ortadaki listeden haberi açın. Yenile (F5) yeni manşetleri getirir.",
      after_t: "Satın alınca",
      after_lead: "Satış açıldığında kurulum ve anahtar e-postayla gelir. Üç küçük adım.",
      after1_t: "Kurulumu indirin",
      after1: "Kurulum dosyası ödeme e-postasına düşer. Windows 10 veya 11 bilgisayarınıza kurun.",
      after2_t: "Lisans anahtarını yapıştırın",
      after2: "Aynı e-postadaki YN1 anahtarını uygulama açılınca yapıştırın. Anahtar o bilgisayara bağlanır.",
      after3_t: "Bilgisayar değiştirirseniz",
      after3: "Önce eski bilgisayarda Ayarlar → Lisans → Bu PC’de kapat. Sonra yeni bilgisayarda aynı anahtarı yazın.",
      faq_t: "Merak edilenler",
      faq_lead: "Kısa cevaplar. Uzun hali gizlilik, şartlar ve uyarılarda.",
      faq1_q: "Bu bir site mi, program mı?",
      faq1_a: "Program. Bu sayfa vitrin. Asıl iş Windows’taki You News’te.",
      faq2_q: "Haberlerim ve notlarım nereye gidiyor?",
      faq2_a: "Sizin diskinize. Bir You News hesabı açıp buluta yüklemiyoruz. Kaynak ekleyince istek o yayıncının sitesine gider; haber böyle gelir.",
      faq3_q: "Yapay zekâ ücretin içinde mi?",
      faq3_a: "Hayır. $24.99 programın kendisi. OpenAI, Anthropic, Gemini veya Groq kullanırsanız faturayı onlar keser. İsterseniz Ollama’yı bu bilgisayarda, ücretsiz çalıştırırsınız.",
      faq4_q: "Yahoo ile resmi bir bağınız var mı?",
      faq4_a: "Hayır. Şerit Yahoo Finance rakamlarını gösterir. Göz atmak içindir, aracı kurum ekranı değildir. Ara sıra yavaşlayabilir.",
      faq5_q: "Haber metinlerini siz mi satıyorsunuz?",
      faq5_a: "Hayır. Yazı yayıncıya aittir. Siz kaynağı eklersiniz, You News okumanız için getirir. Sattığımız şey programın lisansı; haberin kendisi değil.",
      faq6_q: "Mac veya telefon var mı?",
      faq6_a: "Şimdilik yalnız Windows. Telefonda açılan bir You News yok.",
      faq7_q: "Ödemeyi kim alıyor?",
      faq7_a: "Ödemeyi Paddle.com alır. Bu sitede tek ödeme yeri odur; kart numaranız bize ulaşmaz. Fiyat dolar cinsindendir. Paddle, ödeme anında KDV gibi bir vergi ekleyebilir.",
      faq8_q: "Beğenmezsem?",
      faq8_a: "Bu siteden aldıysanız 14 gün içinde hello@younews.media yazın. Lisansı paylaşmamış veya kırmamış olmanız gerekir. İadeyi Paddle yürütür.",
      faq9_q: "Dosya hemen iner mi?",
      faq9_a: "Satış açılınca evet: kurulum ve lisans anahtarı ödeme e-postasına gelir. Şimdilik satış kapalı. Takılırsanız hello@younews.media yazın.",
      faq10_q: "Ne alıyorum?",
      faq10_a: "Windows 10 veya 11 için You News, tek bilgisayara bağlı lisans ve güncellemeler. Yapay zekâ dahil değil; kendi anahtarınız veya Ollama. Mac ve telefon sürümü yok.",
      price_note: "bir kez · tek PC",
      checkout: "Ödemeyi Paddle.com alır. Fiyat dolar cinsindendir; ödeme anında vergi eklenebilir. Sitede ikinci bir satın al düğmesi yok. Onay gelince bu düğme açılır.",
      og_title: "You News — Windows’ta kendi haber masanız",
      og_desc: "Windows’ta kendi haber masanız. Listeniz sizde kalır. $24.99 bir kez · tek PC · yapay zekâ ayrı.",
      important_t: "Bir şeyi net söyleyelim",
      important: "Manşetler başkalarının emeği. You News bir okuyucu: ajans değil, haber satıcısı değil.",
      proto_cap: "You News’in Windows penceresi. Manşetler bu bilgisayarda kalır.",
      title_disclaimer: "Uyarılar — You News",
      disc_h: "Bilmeniz gerekenler",
      disc_1: "You News bağımsız bir okuyucu. Yahoo’nun, Microsoft’un veya bir gazetenin ürünü değil. Piyasa şeridi Yahoo Finance verisini gösterir. Rakamlar gecikebilir: bir bakış içindir, yatırım tavsiyesi değildir.",
      disc_2: "Manşet ve yazı yayıncıya aittir. Siz kaynağı eklersiniz, You News okumanız için getirir. O metni satmayız.",
      disc_3: "Bu siteden aldıysanız siparişi, desteği ve iadeyi Paddle.com yürütür (Merchant of Record). Satış şimdilik yalnızca younews.media üzerinden planlanıyor.",
      back: "← Ana sayfa",
      title_privacy: "Gizlilik — You News",
      priv_h: "Gizlilik, sade dille",
      priv_1: "You News Windows’ta çalışır. Haberler, kaynaklar, ayarlar ve notlar sizin bilgisayarınızda kalır. Bunları bir You News bulutuna yüklemiyoruz.",
      priv_2: "Özet ve çeviri, sizin yazdığınız anahtarla o şirketin sunucusuna gider. Ollama seçerseniz bu bilgisayarda kalır. Anahtarı Windows’un kimlik deposuna koyarız. Size sınırsız yapay zekâ satmıyoruz.",
      priv_3: "Piyasa rakamları Yahoo Finance verisinden gelir. RSS, sizin seçtiğiniz yayıncıya gider.",
      priv_4: "Bu site vitrindir. Satış açılınca ödemeyi Paddle.com alır; kart numarası burada durmaz. Ödeme için Paddle’ın gizlilik metni geçerlidir: https://www.paddle.com/legal/privacy",
      priv_5: "İletişim formu hello@younews.media adresine gider (FormSubmit). Ad, e-posta ve mesaj yalnızca size dönmek için kullanılır.",
      priv_6: "Tema ve dil seçiminiz yalnızca tarayıcınızda durur. Zorunlu çerez veya takip aracı yok.",
      contact: "Yazın:",
      title_contact: "İletişim — You News",
      contact_h: "Yazın, dönelim",
      contact_lead: "Satış, iade veya takıldığınız bir yer için e-posta en hızlısı. Form da aynı kutuya gider.",
      contact_email: "E-posta",
      contact_phone: "Telefon",
      contact_address: "Adres",
      contact_hours: "Hafta içi, Türkiye saati. Önce e-posta yazın; telefona her an bakamayabiliriz.",
      form_name: "Adınız",
      form_email: "E-posta",
      form_msg: "Mesaj",
      form_send: "Gönder",
      form_sending: "Gönderiliyor…",
      form_note: "Mesaj hello@younews.media adresine gider. Sayfadan ayrılmazsınız.",
      form_ok_h: "Mesajınız ulaştı",
      form_ok: "Teşekkürler. hello@ adresinden yanıtlarız. Satın alma, Paddle onayı gelince açılacak.",
      form_err: "Mesaj gitmemiş olabilir. Doğrudan hello@younews.media adresine yazın.",
      title_refund: "İade — You News",
      ref_h: "İade",
      ref_1: "Bu siteden alınan siparişleri Paddle.com yürütür. Paddle.com Merchant of Record’dur: müşteri hizmeti ve iade Paddle’dadır. Paddle destek: https://www.paddle.com/support",
      ref_2: "14 gün içinde, lisansı paylaşmadıysanız veya kırmadıysanız hello@younews.media yazın. İade sürecini Paddle yürütür.",
      ref_3: "Fiyat dolar cinsinden listelenir. Paddle, ödeme anında yerel vergi (örneğin KDV) ekleyebilir.",
      title_terms: "Kullanım şartları — You News",
      terms_h: "Lisans, kısa ve net",
      terms_1: "You News, Windows 10 veya 11 için bir kez ödenen bir masaüstü lisansıdır. Anahtar bir bilgisayara bağlanır. Başka bilgisayara taşımak için önce eski bilgisayarda Ayarlar → Lisans → Bu PC’de kapat.",
      terms_2: "$24.99 programın kendisi içindir. Yapay zekâ özeti ve çeviri dahil değildir; kendi API anahtarınız veya Ollama gerekir.",
      terms_3: "Haber metinleri yayıncıya aittir. You News bir okuyucudur; ajans veya içerik satıcısı değildir.",
      terms_4: "Lisansı paylaşmak, kırmak veya yeniden satmak yasaktır. Kötüye kullanımda destek ve iade verilmeyebilir.",
      terms_5: "Bu siteden alışlarda ödemeyi Paddle.com alır (Merchant of Record). İade süresi 14 gündür; ayrıntı iade sayfasında.",
      copyright: "© You News · younews.media"
    },
    en: {
      title_home: "You News — your news desk on Windows",
      desc_home: "You News is a news reader that lives on this PC. Your list stays with you. Summaries use a key you bring.",
      nav_home: "Product",
      nav_how: "How it works",
      nav_guide: "Guide",
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
      kicker: "Your news desk, on Windows",
      hero: "The day’s headlines, the market, and a short briefing. All in your own window.",
      lead: "You don’t sign up for You News. It lives on this computer, and so do your sources, notes, and settings. Want a summary or a translation? Use your own API key, or Ollama at home. AI is not part of the price.",
      buy: "On sale soon · $24.99",
      learn: "Before you buy",
      stat1_k: "Stays with you",
      stat1: "No account, no cloud",
      stat2_k: "Pay once",
      stat2: "One PC · Windows 10/11",
      stat3_k: "We never see the card",
      stat3: "Paddle takes payment",
      feat1_t: "Your desk",
      feat1: "Add the sites you actually read. Search, file them, jot a note. The writing stays with the publisher. We don’t sell it.",
      feat2_t: "The market, at a glance",
      feat2: "Currencies, indexes, and commodities sit on the top tape. The figures come from Yahoo Finance and can lag. A look at the day, not a trading screen.",
      feat3_t: "Summaries, on your key",
      feat3: "Add your own key when you want a shorter version or a translation. Or keep Ollama on this PC. The key stays in Windows, not with us.",
      how_t: "How it works",
      how_lead: "Three steps. Then back to your desk.",
      how1_t: "Install it on Windows",
      how1: "When sales open, the installer arrives by email. Not a browser tab. Its own window on Windows.",
      how2_t: "Add what you already read",
      how2: "Paste the address of a site you already read. You don’t have to keep a source you don’t want.",
      how3_t: "Read. Ask only if you want to.",
      how3: "Skim the headlines, glance at the tape. Summaries and translation start only after you add a key. Skip that, and it still reads the news.",
      guide_t: "First launch",
      guide_lead: "Language, sources, and the watchlist. These pictures are the real app.",
      guide1_t: "Language and starter pack",
      guide1: "The first screen asks for your language. Start with Türkiye or US headlines, or skip this and add feeds yourself.",
      guide2_t: "Add a source",
      guide2: "Settings → Sources. Type a name and an RSS address, press Test to see that headlines arrive, then Add source. Built-in sources can be switched off. They can’t be deleted.",
      guide3_t: "Watchlist",
      guide3: "Settings → Tickers. Search or type a symbol and Add symbol to put it on the tape. Remove drops the one you selected. Prices are Yahoo Finance figures, not a place to trade.",
      guide4_t: "Read",
      guide4: "Pick a topic on the left and open a story in the middle. Refresh (F5) brings in new headlines.",
      after_t: "After you buy",
      after_lead: "When sales are open, the installer and key arrive by email. Three small steps.",
      after1_t: "Download the installer",
      after1: "The installer lands in the payment email. Install it on Windows 10 or 11.",
      after2_t: "Paste the license key",
      after2: "When the app opens, paste the YN1 key from that same email. It locks to that PC.",
      after3_t: "Moving to another PC",
      after3: "On the old computer: Settings → License → Deactivate this PC. Then enter the same key on the new one.",
      faq_t: "Questions we hear",
      faq_lead: "Short answers. The longer version is in privacy, terms, and the disclaimer.",
      faq1_q: "Is this a website or an app?",
      faq1_a: "An app. This page is the shop window. The work happens in You News on Windows.",
      faq2_q: "Where do my headlines and notes go?",
      faq2_a: "Onto your disk. We don’t open a You News account or upload them. When you add a source, the request goes to that publisher. That’s how the news arrives.",
      faq3_q: "Is AI included in $24.99?",
      faq3_a: "No. $24.99 is the app. OpenAI, Anthropic, Gemini, or Groq bill you if you use them. Or run Ollama on this PC, at no extra charge from us.",
      faq4_q: "Are you affiliated with Yahoo?",
      faq4_a: "No. The tape shows Yahoo Finance figures. Handy for a glance, not a broker’s screen. It can slow down now and then.",
      faq5_q: "Are you selling the articles?",
      faq5_a: "No. The writing belongs to the publisher. You add a source, You News fetches it so you can read it. What we sell is the app license, not the news.",
      faq6_q: "Mac? Phone?",
      faq6_a: "Windows for now. There isn’t a You News you open on a phone.",
      faq7_q: "Who takes the payment?",
      faq7_a: "Paddle.com takes the payment. It is the only checkout on this site, and your card number never reaches us. The price is in US dollars. Paddle may add tax, such as VAT, when you pay.",
      faq8_q: "What if it isn’t for me?",
      faq8_a: "If you bought it here, email hello@younews.media within 14 days, as long as you haven’t shared or cracked the license. Paddle handles the refund.",
      faq9_q: "Do I get the installer right away?",
      faq9_a: "Once sales are open, yes. The installer and license key arrive in the payment email. Sales are closed for now. If you’re stuck, write to hello@younews.media.",
      faq10_q: "What do I get?",
      faq10_a: "You News for Windows 10 or 11, a license for one PC, and updates. AI is not included. Bring your own key, or use Ollama. No Mac or phone app.",
      price_note: "once · one PC",
      checkout: "Paddle.com takes the payment. The price is in US dollars, and tax may be added when you pay. There is no second buy button on this site. This one opens after approval.",
      og_title: "You News — your news desk on Windows",
      og_desc: "Your news desk on Windows. Your list stays with you. $24.99 once · one PC · AI separate.",
      important_t: "One thing, said plainly",
      important: "The headlines are someone else’s work. You News is a reader. Not a wire service, and not a seller of articles.",
      proto_cap: "The You News window on Windows. Headlines stay on this PC.",
      title_disclaimer: "Disclaimer — You News",
      disc_h: "Worth knowing",
      disc_1: "You News is an independent reader. It is not a Yahoo, Microsoft, or newsroom product. The market tape shows Yahoo Finance figures. Numbers can lag. They are a glance, not investment advice.",
      disc_2: "Headlines and article text stay with their publishers. You add a source; You News fetches it so you can read it. We don’t sell that writing.",
      disc_3: "If you buy on this site, Paddle.com handles the order, support, and refunds (Merchant of Record). For now, sales are planned only through younews.media.",
      back: "← Home",
      title_privacy: "Privacy — You News",
      priv_h: "Privacy, in plain words",
      priv_1: "You News runs on Windows. Headlines, sources, settings, and notes stay on your computer. We don’t upload them to a You News cloud.",
      priv_2: "A summary or translation goes to the company behind the key you typed. With Ollama, it stays on this PC. We keep the key in Windows. We are not selling you unlimited AI.",
      priv_3: "Market figures come from Yahoo Finance. RSS goes to the publishers you pick.",
      priv_4: "This website is the shop window. When sales open, Paddle.com takes payment. Card numbers don’t stay here. Paddle’s privacy policy covers checkout: https://www.paddle.com/legal/privacy",
      priv_5: "The contact form goes to hello@younews.media (via FormSubmit). We use your name, email, and message only to reply.",
      priv_6: "Your theme and language stay in this browser. No required cookies, and no analytics.",
      contact: "Write to us:",
      title_contact: "Contact — You News",
      contact_h: "Write to us",
      contact_lead: "Email is the fastest way for a purchase, a refund, or a snag in the app. The form lands in the same inbox.",
      contact_email: "Email",
      contact_phone: "Phone",
      contact_address: "Address",
      contact_hours: "Weekdays, Turkey time. Email first. We can’t always pick up the phone.",
      form_name: "Your name",
      form_email: "Email",
      form_msg: "Message",
      form_send: "Send",
      form_sending: "Sending…",
      form_note: "Your message goes to hello@younews.media. You stay on this page.",
      form_ok_h: "We got it",
      form_ok: "Thank you. We’ll reply from hello@. Buying opens once Paddle approves checkout.",
      form_err: "The message may not have gone through. Write directly to hello@younews.media.",
      title_refund: "Refunds — You News",
      ref_h: "Refunds",
      ref_1: "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns. Paddle support: https://www.paddle.com/support",
      ref_2: "Within 14 days, if you haven’t shared or cracked the license, email hello@younews.media. Paddle runs the refund.",
      ref_3: "The listed price is in US dollars. Paddle may add local tax, such as VAT, when you pay.",
      title_terms: "Terms — You News",
      terms_h: "The license, in short",
      terms_1: "You News is a one-time license for Windows 10 or 11. The key binds to one PC. To move it, deactivate on the old computer first: Settings → License → Deactivate this PC.",
      terms_2: "$24.99 is for the app itself. AI summaries and translation are not included. You bring your own API key, or use Ollama.",
      terms_3: "Article text belongs to the publishers. You News is a reader, not a wire service and not a reseller of that writing.",
      terms_4: "Sharing, cracking, or reselling the license is not allowed. If you do, we can refuse support and a refund.",
      terms_5: "Purchases on this site are paid through Paddle.com, the Merchant of Record. The refund window is 14 days. The details are on the refund page.",
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
    var shot = document.getElementById("app-shot");
    if (shot) shot.src = "assets/app_window_" + (lang === "tr" ? "tr" : "en") + ".png";
    document.querySelectorAll("img.guide-shot").forEach(function (img) {
      var name = img.getAttribute("data-shot");
      if (!name) return;
      var code = lang === "tr" ? "tr" : "en";
      img.src = name === "window"
        ? "assets/app_window_" + code + ".png"
        : "assets/guide_" + name + "_" + code + ".png";
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
