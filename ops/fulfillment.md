# Fulfillment — dual channel

## Microsoft Store

1. Customer buys/installs in Store.
2. License follows their Microsoft account (`core/store_license.py`).
3. Billing/refunds → Microsoft.

## Paddle (direct license)

Until webhook automation exists, fulfill manually:

1. Confirm Paddle payment (email or dashboard).
2. Grab current signed website build (`YouNews.exe` / installer).
3. On the machine with `secrets/license_hmac.txt`:

```text
cd global_news_terminal
python tools/issue_license.py buyer@email.com
```

4. Email download link + `YN1.…` key (templates below).
5. Log order id + email + key time.

### Email — Türkçe

**Konu:** You News — kurulum ve lisans anahtarınız

Merhaba,

You News siparişiniz için teşekkürler. Ödemeyi Paddle.com işledi.

**1. Kurulum**  
Kurulum dosyasını Windows 10/11 bilgisayarınıza indirip çalıştırın:  
[İNDİRME LİNKİ]

**2. Lisans**  
Uygulama açılınca şu anahtarı yapıştırın (tek bilgisayar):

`YN1.…`

**3. PC değiştirmek**  
Önce eski PC’de Ayarlar → Lisans → Bu PC’de kapat, sonra yeni PC’de aynı anahtarı girin.

- Sorun: hello@younews.media  
- İade: 14 gün, Paddle kuralları · https://younews.media/refund.html

### Email — English

**Subject:** You News — installer and license key

Hi,

Thanks for your You News order. Payment was processed by Paddle.com.

**1. Install**  
Download and run the installer on Windows 10/11:  
[DOWNLOAD LINK]

**2. License**  
When the app opens, paste this key (one PC):

`YN1.…`

**3. Moving PCs**  
Deactivate on the old PC (Settings → License), then enter the same key on the new one.

- Help: hello@younews.media  
- Refunds: 14 days via Paddle · https://younews.media/refund.html

## Site wiring

- Store: `store.js` + Store ID `9P07VBL4760N`
- Paddle: `paddle-config.js` + `paddle-buy.js` (see `ops/paddle-unlock.md`)
