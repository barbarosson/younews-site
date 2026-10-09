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
      buy: "Microsoft Store’dan al · $24.99",
      learn: "Satın almadan önce",
      buy_store: "Microsoft Store’dan al · $24.99",
      buy_paddle: "Doğrudan lisans (Paddle) · $24.99",
      buy_hint: "Store: Microsoft hesabı ile kurulum. Paddle: kurulum dosyası + YN1 anahtarı e-posta ile.",
      stat1_k: "Sizde kalır",
      stat1: "Hesap yok, bulut yok",
      stat2_k: "Bir kez ödeyin",
      stat2: "Tek bilgisayar · Windows 10/11",
      stat3_k: "İki ödeme yolu",
      stat3: "Microsoft Store veya Paddle",
      feat1_t: "Kendi masanız",
      feat1: "Gerçekten okuduğunuz siteleri ekleyin. Arayın, klasörleyin, kenara bir not düşün. Yazı yayıncının; biz onu satmıyoruz.",
      feat2_t: "Piyasa, bir bakışta",
      feat2: "Döviz, endeks ve emtia üst şeritte durur. Rakamlar Yahoo Finance’ten gelir ve gecikebilir. Alım satım ekranı değil; güne bakmak için.",
      feat3_t: "Özet, sizin anahtarınızla",
      feat3: "Kısaltmak veya çevirmek isterseniz kendi anahtarınızı yazın. İstemezseniz Ollama bu bilgisayarda kalır. Anahtar Windows’ta durur, bizde değil.",
      how_t: "Nasıl çalışır",
      how_lead: "Üç adım. Sonra masanıza dönersiniz.",
      how1_t: "Windows’a kurun",
      how1: "Microsoft Store’dan YOUNEWS’i kurun, ya da Paddle ile doğrudan lisans alıp kurulum dosyasını indirin. Tarayıcı sekmesi değil; Windows’ta kendi penceresi.",
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
      after_lead: "İki yol: Microsoft Store veya Paddle (doğrudan lisans). Hangisini seçtiyseniz onu izleyin.",
      after1_t: "Microsoft Store",
      after1: "Store’da YOUNEWS → Satın al / Dene → Yükle. YN1 anahtarı yok; lisans Microsoft hesabınıza bağlıdır.",
      after2_t: "Paddle (doğrudan)",
      after2: "Ödeme sonrası e-postada kurulum dosyası ve YN1 anahtarı gelir. Uygulamayı kurun, anahtarı yapıştırın (tek PC).",
      after3_t: "PC değiştirmek",
      after3: "Store: aynı Microsoft hesabıyla başka PC’ye kurun. Paddle: önce eski PC’de Ayarlar → Lisans → Bu PC’de kapat, sonra yeni PC’de aynı YN1’i girin.",
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
      faq7_a: "İki yol var. Microsoft Store: ödemeyi Microsoft alır. Paddle: ödemeyi Paddle.com alır (Merchant of Record). Kart numaranız bize ulaşmaz. Vergi ödeme anında eklenebilir.",
      faq8_q: "Beğenmezsem?",
      faq8_a: "Store aldıysanız iade Microsoft politikalarına göredir. Paddle aldıysanız 14 gün içinde hello@younews.media yazın; iadeyi Paddle yürütür. Uygulama sorunu için her iki kanalda da bize yazabilirsiniz.",
      faq9_q: "Dosya hemen iner mi?",
      faq9_a: "Store: Yükle deyince iner. Paddle: kurulum ve YN1 anahtarı ödeme e-postasına gelir. Takılırsanız hello@younews.media yazın.",
      faq10_q: "Ne alıyorum?",
      faq10_a: "Windows 10/11 için You News lisansı ve güncellemeler. Store kopyası Microsoft hesabıyla; Paddle kopyası YN1 + kurulum dosyası. Yapay zekâ dahil değil. Mac/telefon yok.",
      faq11_q: "Bilgisayarım yeter mi?",
      faq11_a: "Windows 10 veya 11, 64 bit. En az 4 GB RAM (8 GB önerilir), internet bağlantısı ve yaklaşık 200 MB boş disk. Yapay zekâ fiyata dahil değil — kendi API anahtarınız veya Ollama gerekir.",
      price_note: "bir kez · tek PC",
      checkout: "İki seçenek: Microsoft Store (hesapla kurulum) veya Paddle (doğrudan lisans + YN1). Fiyat bilgilendirme; vergi ödeme anında eklenebilir.",
      og_title: "You News — Windows’ta kendi haber masanız",
      og_desc: "Windows’ta kendi haber masanız. Listeniz sizde kalır. $24.99 bir kez · tek PC · yapay zekâ ayrı.",
      important_t: "Bir şeyi net söyleyelim",
      important: "Manşetler başkalarının emeği. You News bir okuyucu: ajans değil, haber satıcısı değil.",
      proto_cap: "You News’in Windows penceresi. Manşetler bu bilgisayarda kalır.",
      title_disclaimer: "Uyarılar — You News",
      disc_h: "Bilmeniz gerekenler",
      disc_1: "You News bağımsız bir okuyucu. Yahoo’nun, Microsoft’un veya bir gazetenin ürünü değil. Piyasa şeridi Yahoo Finance verisini gösterir. Rakamlar gecikebilir: bir bakış içindir, yatırım tavsiyesi değildir.",
      disc_2: "Manşet ve yazı yayıncıya aittir. Siz kaynağı eklersiniz, You News okumanız için getirir. O metni satmayız.",
      disc_3: "Satın alma Microsoft Store veya Paddle üzerinden. Store’da Microsoft; Paddle’da Paddle.com Merchant of Record’dur. Kart numarası bu sitede tutulmaz.",
      back: "← Ana sayfa",
      title_privacy: "Gizlilik — You News",
      priv_h: "Gizlilik, sade dille",
      priv_1: "You News Windows’ta çalışır. Haberler, kaynaklar, ayarlar ve notlar sizin bilgisayarınızda kalır. Bunları bir You News bulutuna yüklemiyoruz.",
      priv_2: "Özet ve çeviri, sizin yazdığınız anahtarla o şirketin sunucusuna gider. Ollama seçerseniz bu bilgisayarda kalır. Anahtarı Windows’un kimlik deposuna koyarız. Size sınırsız yapay zekâ satmıyoruz.",
      priv_3: "Piyasa rakamları Yahoo Finance verisinden gelir. RSS, sizin seçtiğiniz yayıncıya gider.",
      priv_4: "Bu site vitrindir. Ödeme Microsoft Store veya Paddle’da yapılır; kart burada durmaz. <a href=\"https://privacy.microsoft.com\" target=\"_blank\" rel=\"noopener\">Microsoft gizlilik</a> · <a href=\"https://www.paddle.com/legal/privacy\" target=\"_blank\" rel=\"noopener\">Paddle gizlilik</a>.",
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
      form_ok: "Teşekkürler. hello@ adresinden yanıtlarız. Satın alma: Microsoft Store veya Paddle.",
      form_err: "Mesaj gitmemiş olabilir. Doğrudan hello@younews.media adresine yazın.",
      title_refund: "İade — You News",
      ref_h: "İade",
      ref_1: "<b>Microsoft Store:</b> ödeme ve iade Microsoft politikalarına tabidir. <a href=\"https://support.microsoft.com/account-billing\" target=\"_blank\" rel=\"noopener\">Microsoft destek</a>. <b>Paddle:</b> Merchant of Record; iade Paddle’dadır. <a href=\"https://www.paddle.com/support\" target=\"_blank\" rel=\"noopener\">Paddle destek</a>.",
      ref_2: "Store aldıysanız Microsoft hesabınızdan iade yönetin. Paddle aldıysanız 14 gün içinde hello@younews.media yazın. Uygulama soruları için her iki kanalda bize yazabilirsiniz.",
      ref_3: "Listelenen $24.99 bilgilendirme amaçlıdır. Store veya Paddle’da vergi bölgenize göre eklenebilir.",
      title_terms: "Kullanım şartları — You News",
      terms_h: "Lisans, kısa ve net",
      terms_1: "You News, Windows 10 veya 11 masaüstü uygulamasıdır. Store kopyasında lisans Microsoft hesabınıza bağlıdır. Paddle kopyasında YN1 anahtarı bir PC’ye bağlanır.",
      terms_2: "$24.99 programın kendisi içindir. Yapay zekâ özeti ve çeviri dahil değildir; kendi API anahtarınız veya Ollama gerekir.",
      terms_3: "Haber metinleri yayıncıya aittir. You News bir okuyucudur; ajans veya içerik satıcısı değildir.",
      terms_4: "Lisansı paylaşmak, kırmak veya yeniden satmak yasaktır. Kötüye kullanımda destek ve iade verilmeyebilir.",
      terms_5: "Satın alma Microsoft Store veya Paddle üzerinden. İade kanalınıza göre Microsoft veya Paddle kurallarına tabidir; ayrıntı iade sayfasında.",
      checkout_page_h: "Ödeme",
      checkout_page_lead: "Paddle ödemesi bu sayfada açılır. Pencere gelmezse ana sayfadan yeniden deneyin.",
      thanks_title: "Teşekkürler — You News",
      thanks_h: "Ödeme alındı",
      thanks_1: "Teşekkürler. Paddle ödemeyi işledi. Kurulum dosyası ve YN1 lisans anahtarı e-postanıza gelecek (birkaç dakika sürebilir).",
      thanks_2: "Gelmezse hello@younews.media yazın; sipariş e-postanızı ekleyin.",
      checkout_page_h: "Checkout",
      checkout_page_lead: "Paddle checkout opens on this page. If nothing appears, go back to the home page and try again.",
      thanks_title: "Thank you — You News",
      thanks_h: "Payment received",
      thanks_1: "Thanks. Paddle processed the payment. The installer and YN1 license key will arrive by email (it can take a few minutes).",
      thanks_2: "If they don’t arrive, email hello@younews.media and include your order email.",
      copyright: "© You News · younews.media",
      footer_seller: "MODULUSTECH · Küçükbakkalköy Mah. Selvili Sok. No: 4/48 Ataşehir / İstanbul · +90 532 496 58 28 · hello@younews.media"
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
      buy: "Get it on Microsoft Store · $24.99",
      learn: "Before you buy",
      buy_store: "Get it on Microsoft Store · $24.99",
      buy_paddle: "Direct license (Paddle) · $24.99",
      buy_hint: "Store: install with your Microsoft account. Paddle: installer + YN1 key by email.",
      stat1_k: "Stays with you",
      stat1: "No account, no cloud",
      stat2_k: "Pay once",
      stat2: "One PC · Windows 10/11",
      stat3_k: "Two ways to pay",
      stat3: "Microsoft Store or Paddle",
      feat1_t: "Your desk",
      feat1: "Add the sites you actually read. Search, file them, jot a note. The writing stays with the publisher. We don’t sell it.",
      feat2_t: "The market, at a glance",
      feat2: "Currencies, indexes, and commodities sit on the top tape. The figures come from Yahoo Finance and can lag. A look at the day, not a trading screen.",
      feat3_t: "Summaries, on your key",
      feat3: "Add your own key when you want a shorter version or a translation. Or keep Ollama on this PC. The key stays in Windows, not with us.",
      how_t: "How it works",
      how_lead: "Three steps. Then back to your desk.",
      how1_t: "Install it on Windows",
      how1: "Install YOUNEWS from the Microsoft Store, or buy a direct license via Paddle and download the installer. Not a browser tab — its own window on Windows.",
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
      after_lead: "Two paths: Microsoft Store or Paddle (direct license). Follow the one you chose.",
      after1_t: "Microsoft Store",
      after1: "In the Store: YOUNEWS → Buy / try → Install. No YN1 key; licensing follows your Microsoft account.",
      after2_t: "Paddle (direct)",
      after2: "After payment, the installer and YN1 key arrive by email. Install the app and paste the key (one PC).",
      after3_t: "Moving PCs",
      after3: "Store: install on another PC with the same Microsoft account. Paddle: deactivate on the old PC (Settings → License), then enter the same YN1 on the new one.",
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
      faq7_a: "Two options. Microsoft Store: Microsoft takes payment. Paddle: Paddle.com is Merchant of Record. Your card never reaches us. Tax may be added at checkout.",
      faq8_q: "What if it isn’t for me?",
      faq8_a: "Store purchases follow Microsoft refund policies. Paddle purchases: email hello@younews.media within 14 days; Paddle runs the refund. App issues: email us either way.",
      faq9_q: "Do I get the installer right away?",
      faq9_a: "Store: Install downloads the app. Paddle: installer and YN1 key arrive in the payment email. If you’re stuck, write to hello@younews.media.",
      faq10_q: "What do I get?",
      faq10_a: "You News for Windows 10/11 with updates. Store copy uses your Microsoft account; Paddle copy uses a YN1 key + installer. AI not included. No Mac/phone.",
      faq11_q: "Will my PC run it?",
      faq11_a: "Windows 10 or 11, 64-bit. At least 4 GB RAM (8 GB recommended), an internet connection, and about 200 MB free disk. AI is not in the price — bring your own API key or run Ollama.",
      price_note: "once · one PC",
      checkout: "Two options: Microsoft Store (account install) or Paddle (direct license + YN1). Listed price is a guide; tax may apply at checkout.",
      og_title: "You News — your news desk on Windows",
      og_desc: "Your news desk on Windows. Your list stays with you. $24.99 once · one PC · AI separate.",
      important_t: "One thing, said plainly",
      important: "The headlines are someone else’s work. You News is a reader. Not a wire service, and not a seller of articles.",
      proto_cap: "The You News window on Windows. Headlines stay on this PC.",
      title_disclaimer: "Disclaimer — You News",
      disc_h: "Worth knowing",
      disc_1: "You News is an independent reader. It is not a Yahoo, Microsoft, or newsroom product. The market tape shows Yahoo Finance figures. Numbers can lag. They are a glance, not investment advice.",
      disc_2: "Headlines and article text stay with their publishers. You add a source; You News fetches it so you can read it. We don’t sell that writing.",
      disc_3: "Purchase via Microsoft Store or Paddle. Store billing is Microsoft; Paddle.com is Merchant of Record for direct licenses. Card numbers are not stored on this site.",
      back: "← Home",
      title_privacy: "Privacy — You News",
      priv_h: "Privacy, in plain words",
      priv_1: "You News runs on Windows. Headlines, sources, settings, and notes stay on your computer. We don’t upload them to a You News cloud.",
      priv_2: "A summary or translation goes to the company behind the key you typed. With Ollama, it stays on this PC. We keep the key in Windows. We are not selling you unlimited AI.",
      priv_3: "Market figures come from Yahoo Finance. RSS goes to the publishers you pick.",
      priv_4: "This website is the shop window. Payment is via Microsoft Store or Paddle; cards don’t stay here. <a href=\"https://privacy.microsoft.com\" target=\"_blank\" rel=\"noopener\">Microsoft privacy</a> · <a href=\"https://www.paddle.com/legal/privacy\" target=\"_blank\" rel=\"noopener\">Paddle privacy</a>.",
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
      form_ok: "Thank you. We’ll reply from hello@. Purchases: Microsoft Store or Paddle.",
      form_err: "The message may not have gone through. Write directly to hello@younews.media.",
      title_refund: "Refunds — You News",
      ref_h: "Refunds",
      ref_1: "<b>Microsoft Store:</b> payment and refunds follow Microsoft policies. <a href=\"https://support.microsoft.com/account-billing\" target=\"_blank\" rel=\"noopener\">Microsoft support</a>. <b>Paddle:</b> Merchant of Record; refunds via Paddle. <a href=\"https://www.paddle.com/support\" target=\"_blank\" rel=\"noopener\">Paddle support</a>.",
      ref_2: "Store purchases: manage refunds in your Microsoft account. Paddle: email hello@younews.media within 14 days. App questions: email us either way.",
      ref_3: "The $24.99 figure is for guidance. Tax may be added at Store or Paddle checkout by region.",
      title_terms: "Terms — You News",
      terms_h: "The license, in short",
      terms_1: "You News is a Windows 10 or 11 desktop app. Store copies license via your Microsoft account. Paddle copies use a YN1 key bound to one PC.",
      terms_2: "$24.99 is for the app itself. AI summaries and translation are not included. You bring your own API key, or use Ollama.",
      terms_3: "Article text belongs to the publishers. You News is a reader, not a wire service and not a reseller of that writing.",
      terms_4: "Sharing, cracking, or reselling the license is not allowed. If you do, we can refuse support and a refund.",
      terms_5: "Purchase via Microsoft Store or Paddle. Refunds follow the channel you used; details are on the refund page.",
      copyright: "© You News · younews.media",
      footer_seller: "MODULUSTECH · Küçükbakkalköy Mah. Selvili Sok. No: 4/48 Ataşehir / İstanbul · +90 532 496 58 28 · hello@younews.media"
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
    window.__younewsDict = pack;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (pack[key]) el.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (pack[key]) el.innerHTML = pack[key];
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
    if (thanks && url.searchParams.get("sent") === "1") {
      thanks.hidden = false;
      var formCard = document.getElementById("form-card");
      if (formCard) formCard.hidden = true;
    }
    var next = document.querySelector('input[name="_next"]');
    if (next) {
      next.value = "https://younews.media/contact.html?sent=1&lang=" + encodeURIComponent(lang);
    }
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
