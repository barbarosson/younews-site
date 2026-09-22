# Paddle go-live unlock (site only)

Use this **once** domain/checkout is approved. One checkout: Paddle on younews.media. No second pay button.

## Checklist

1. **Buy href** — On `index.html`, set both Buy links (`#buy` in hero and the price-card button) to the live Paddle product or overlay URL.
2. **Enable clicks** — Remove `aria-disabled="true"` and `tabindex="-1"` from both Buy anchors.
3. **i18n present tense** — In `i18n.js` (TR + EN), flip at least:
   - `buy` → e.g. `Satın al · $24.99` / `Buy · $24.99`
   - `checkout`, `how1`, `faq7_a`, `faq9_a`, `form_ok`, `priv_4` (no “yakında / when approved” language)
4. **Cache bust** — Bump `?v=` on `styles.css`, `i18n.js`, and `contact.js` in every HTML page that loads them.
5. **Price id** — Confirm Paddle still uses `pri_01m31qjr1sh8ke9gncfrve6h8w` (or update the note in `ops/fulfillment.md`).
6. **Smoke** — Open https://younews.media (Ctrl+F5): Buy opens Paddle; privacy/refund/terms still mention Paddle MoR + VAT; contact form still lands on-site.
7. **Fulfillment** — First orders: follow `ops/fulfillment.md` (manual key + email until webhook exists).

## Do not

- Add a second payment provider on the site.
- Re-enable Lemon Squeezy or Store as a site checkout.
- Ship unsigned builds to paying customers (see Code signing in `fulfillment.md`).
