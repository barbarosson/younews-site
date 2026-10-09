/** Wire [data-paddle-buy] → Paddle overlay or payment link. */
(function () {
  var SCRIPT = "https://cdn.paddle.com/paddle/v2/paddle.js";
  var ready = false;
  var loading = false;
  var queue = [];

  function cfg() {
    return window.YOUNEWS_PADDLE || {};
  }

  function loadScript(cb) {
    if (window.Paddle) {
      cb();
      return;
    }
    if (loading) {
      queue.push(cb);
      return;
    }
    loading = true;
    var s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.onload = function () {
      loading = false;
      queue.forEach(function (fn) { fn(); });
      queue = [];
      cb();
    };
    s.onerror = function () {
      loading = false;
      console.error("Paddle.js failed to load");
    };
    document.head.appendChild(s);
  }

  function initPaddle() {
    var c = cfg();
    if (!c.clientToken || !window.Paddle) return false;
    try {
      if (c.sandbox) window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: c.clientToken,
        checkout: {
          settings: {
            displayMode: "overlay",
            theme: document.documentElement.classList.contains("light") ? "light" : "dark",
            locale: (document.documentElement.lang === "tr" ? "tr" : "en")
          }
        }
      });
      ready = true;
      return true;
    } catch (err) {
      console.error("Paddle init failed", err);
      return false;
    }
  }

  function openCheckout(ev) {
    if (ev) ev.preventDefault();
    var c = cfg();
    if (c.paymentLink && !c.clientToken) {
      window.location.href = c.paymentLink;
      return;
    }
    if (!c.clientToken) {
      alert(
        document.documentElement.lang === "tr"
          ? "Paddle ödemesi henüz yapılandırılmadı. Microsoft Store’dan alabilir veya hello@younews.media yazabilirsiniz."
          : "Paddle checkout is not configured yet. Use Microsoft Store, or email hello@younews.media."
      );
      return;
    }
    if (!c.priceId) {
      console.error("Missing Paddle priceId");
      return;
    }
    loadScript(function () {
      if (!ready) initPaddle();
      if (!window.Paddle || !ready) {
        alert("Paddle could not start. Try again or use Microsoft Store.");
        return;
      }
      try {
        window.Paddle.Checkout.open({
          items: [{ priceId: c.priceId, quantity: 1 }],
          settings: {
            displayMode: "overlay",
            theme: document.documentElement.classList.contains("light") ? "light" : "dark",
            locale: document.documentElement.lang === "tr" ? "tr" : "en",
            successUrl: "https://younews.media/thanks.html"
          }
        });
      } catch (err) {
        console.error(err);
        alert("Checkout failed to open. Please try Microsoft Store or contact hello@younews.media.");
      }
    });
  }

  function wire() {
    document.querySelectorAll("[data-paddle-buy]").forEach(function (el) {
      el.removeAttribute("aria-disabled");
      el.removeAttribute("tabindex");
      el.setAttribute("href", "#buy-paddle");
      el.setAttribute("role", "button");
      if (!el._paddleBound) {
        el.addEventListener("click", openCheckout);
        el._paddleBound = true;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var c = cfg();
    if (c.clientToken) {
      loadScript(function () { initPaddle(); });
    }
    wire();
  });
  document.addEventListener("younews-lang", wire);

  // Auto-open when landing on default payment link with ?_ptxn=
  document.addEventListener("DOMContentLoaded", function () {
    try {
      var params = new URLSearchParams(location.search);
      if (!params.get("_ptxn")) return;
      var c = cfg();
      if (!c.clientToken) return;
      loadScript(function () {
        if (!ready) initPaddle();
      });
    } catch (_) {}
  });
})();
