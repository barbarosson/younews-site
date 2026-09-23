# Paddle fulfillment — checklist + email templates

Use this when checkout is approved and the first orders land.
One checkout only: Paddle on younews.media. No second pay button.

## Go-live unlock (site)

Full step list: **`ops/paddle-unlock.md`**. Short version:

1. Set both Buy `href`s to the Paddle product / overlay URL.
2. Remove `aria-disabled="true"` and `tabindex="-1"` from both Buy buttons.
3. Flip i18n strings: `buy`, `checkout`, `how1`, `faq7_a`, `faq9_a`, `form_ok`, `priv_4` to present tense.
4. Bump `styles.css` / `i18n.js` query `?v=` on every HTML page.
5. Confirm price still `pri_01m31qjr1sh8ke9gncfrve6h8w` (or current Paddle price id).

## Per order (until webhook automation)

1. Confirm Paddle payment succeeded (email or dashboard).
2. Build or grab current `YouNews.exe` (or installer) from the signed release folder.
3. Issue a key on the machine that has `secrets/license_hmac.txt` (not in git):

```text
cd global_news_terminal
python tools/issue_license.py buyer@email.com
```

The issuer script stays on that machine. It is not in the public GitHub tree.

4. Send the customer email below (TR or EN) with:
   - download link (or attachment if small)
   - license key `YN1.…`
   - activate steps
5. Log order id + email + key issue time (spreadsheet is fine).
6. If they move PCs: ask them to **Deactivate** under Settings → License on the old PC, then activate on the new one.

## Email — Türkçe

**Konu:** You News — kurulum ve lisans anahtarınız

Merhaba,

You News siparişiniz için teşekkürler. Ödemeyi Paddle.com işledi.

**1. Kurulum**  
Ekteki / şu adresteki `YouNews` kurulumunu Windows 10 veya 11 bilgisayarınıza indirip çalıştırın:  
[İNDİRME LİNKİ]

**2. Lisans**  
Uygulama açılınca anahtar isteyecek. Bunu yapıştırın (tek bilgisayar):

```
YN1.…BURAYA_ANAHTAR…
```

**3. Notlar**  
- Lisans bir PC’ye bağlıdır. Başka bilgisayara taşımak için önce Ayarlar → Lisans → Bu PC’de kapat.  
- $24.99 uygulama içindir. Özet/çeviri için kendi API anahtarınız veya Ollama gerekir.  
- Sorun: hello@younews.media · İade: 14 gün, Paddle kuralları · https://younews.media/refund.html

İyi okumalar,  
You News

## Email — English

**Subject:** You News — installer and license key

Hello,

Thanks for your You News order. Payment was processed by Paddle.com.

**1. Install**  
Download and run You News on Windows 10 or 11:  
[DOWNLOAD LINK]

**2. License**  
When the app opens, paste this key (one PC):

```
YN1.…PASTE_KEY_HERE…
```

**3. Notes**  
- The license binds to one PC. To move it: Settings → License → Deactivate this PC, then activate on the new machine.  
- $24.99 is the app only. Summaries/translation need your own API key or Ollama.  
- Help: hello@younews.media · Refunds: 14 days via Paddle · https://younews.media/refund.html

Happy reading,  
You News

## Automated license keys (future)

Paddle webhook → `issue_license.py` is not wired yet. Until then use the
manual per-order steps above. When checkout is live, prefer:

1. Paddle fulfillment email with download link (hosted file).
2. Separate or same email with the `YN1.…` key from `tools/issue_license.py`.
3. Later: webhook on `transaction.completed` that issues a key and emails it.

## Code signing (plan)

1. Obtain an Authenticode certificate (EV preferred for SmartScreen).
2. After `build_exe.ps1` produces `dist\YouNews.exe`, sign:

```powershell
signtool sign /fd SHA256 /tr http://timestamp.digicert.com /td SHA256 /a dist\YouNews.exe
```

3. Optional next step: wrap with Inno Setup / MSIX and sign the installer the same way.
4. Ship only signed builds to customers; keep unsigned CI artifacts internal.
