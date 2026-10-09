/** Paddle Billing — public client config (safe to commit). */
window.YOUNEWS_PADDLE = {
  // From Paddle → Catalog → Prices (live).
  priceId: "pri_01m31qjr1sh8ke9gncfrve6h8w",
  // From Paddle → Developer tools → Authentication → Client-side token (live_…).
  // Overlay checkout will not open until this is set.
  clientToken: "",
  // Optional: hosted payment link from Paddle dashboard (used if clientToken empty).
  paymentLink: "",
  // Default payment link page (set this URL in Paddle → Checkout → Default payment link).
  defaultPaymentPage: "https://younews.media/checkout.html"
};
