# Paddle go-live (dual channel with Microsoft Store)

Site offers **two** buy options: Microsoft Store + Paddle direct license.

## Checklist

1. **Client token** — In Paddle → Developer tools → Authentication, copy the **live** client-side token (`live_…`).
2. Paste it into `paddle-config.js` as `clientToken`.
3. Confirm `priceId` is still `pri_01m31qjr1sh8ke9gncfrve6h8w` (or update both config + this note).
4. **Default payment link** — Paddle → Checkout → set `https://younews.media/checkout.html`.
5. Domain `younews.media` must stay approved for checkout.
6. Bump `paddle-config.js?v=` on `index.html` after editing the token.
7. Smoke: home → **Doğrudan lisans (Paddle)** opens overlay; Store button still opens Store.
8. First orders: follow `ops/fulfillment.md` (YN1 + installer email until webhook exists).

## Do not

- Remove the Store CTA.
- Commit sandbox tokens as live.
