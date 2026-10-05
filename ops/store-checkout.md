# Microsoft Store checkout (site)

Sole purchase channel: Microsoft Store. No Paddle / YN1 on younews.media.

## Live links

- Deep link (Windows): `ms-windows-store://pdp/?PFN=MODULUSTECH.YOUNEWS_6w2d1brm94m3m`
- Wired by `store.js` on every `a[data-store-buy]`
- Web fallback: Microsoft Store search for `YOUNEWS MODULUSTECH`

## When Partner Center gives a public product URL

1. Put the `https://apps.microsoft.com/detail/9…` URL in `store.js` as `STORE_WEB` (and optionally prefer it over search).
2. Keep the PFN deep link for one-click open of the Store app.
3. Bump `store.js?v=` on `index.html`.

## Smoke

1. Open https://younews.media (Ctrl+F5).
2. Buy buttons open the Store (or Store search off Windows).
3. Privacy / refund / terms mention Microsoft Store, not Paddle.
