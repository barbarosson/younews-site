# Paddle “Something went wrong”

Overlay opens but shows a generic error. Almost always dashboard config, not the button JS.

## Fix in order

1. **Checkout → Checkout configuration → Default payment link**  
   Set exactly: `https://younews.media/checkout.html` → Save.

2. **Catalog → Products / Prices (Live)**  
   Open the live price. Copy the `pri_…` id.  
   It must match `paddle-config.js` → `priceId` (`pri_01m31qjr1sh8ke9gncfrve6h8w`).  
   If Live shows a different `pri_`, update `paddle-config.js` and bump `?v=`.

3. **Website approval**  
   `younews.media` must be approved for checkout (Paddle account / website approval).

4. Hard refresh the site (Ctrl+F5) and try **Doğrudan lisans (Paddle)** again.

## Do not confuse

- Sandbox `test_` token + Live `pri_` (or the reverse) → fails.
- Client token is public (`live_…`); keep using Live while testing real checkout.
