/** Wire [data-paddle-buy] → Paddle overlay or payment link. */
(function () {
  var SCRIPT = "https://cdn.paddle.com/paddle/v2/paddle.js";
  var ready = false;
  var loading = false;
  var queue = [];
  var lastError = null;

  function cfg() {
    return window.YOUNEWS_PADDLE || {};
  }

  function tr() {
    return document.documentElement.lang === "tr";
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
    if (ready) return true;
    try {
      if (c.sandbox) window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: c.clientToken,
        // Light checkout is more readable on both site themes.
        checkout: {
          settings: {
            displayMode: "overlay",
            theme: "light",
            locale: tr() ? "tr" : "en",
            successUrl: "https://younews.media/thanks.html"
          }
        },
        eventCallback: function (event) {
          if (!event || !event.name) return;
          if (event.name === "checkout.error" || event.name === "checkout.warning") {
            lastError = event;
            console.error("Paddle", event.name, event.code || "", event.detail || event);
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

  function explainError() {
    var detail = (lastError && (lastError.detail || lastError.code)) || "";
    if (tr()) {
      return (
        "Paddle ödeme penceresi açılamadı.\n\n" +
        "Kontrol listesi:\n" +
        "1) Paddle → Checkout → Default payment link = https://younews.media/checkout.html\n" +
        "2) Catalog → Prices → Live price id (pri_…) paddle-config.js ile aynı mı?\n" +
        "3) Website approval: younews.media onaylı mı?\n\n" +
        (detail ? "Paddle: " + detail : "")
      );
    }
    return (
      "Paddle checkout failed to open.\n\n" +
      "Checklist:\n" +
      "1) Paddle → Checkout → Default payment link = https://younews.media/checkout.html\n" +
      "2) Catalog → Prices → Live price id (pri_…) matches paddle-config.js\n" +
      "3) Website approval includes younews.media\n\n" +
      (detail ? "Paddle: " + detail : "")
    );
  }

  function openCheckout(ev) {
    if (ev) ev.preventDefault();
    var c = cfg();
    lastError = null;

    if (c.paymentLink && !c.clientToken) {
      window.location.href = c.paymentLink;
      return;
    }
    if (!c.clientToken) {
      alert(
        tr()
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
      if (!initPaddle()) {
        alert(tr() ? "Paddle başlatılamadı." : "Paddle could not start.");
        return;
      }
      try {
        window.Paddle.Checkout.open({
          items: [{ priceId: c.priceId, quantity: 1 }],
          settings: {
            displayMode: "overlay",
            theme: "light",
            locale: tr() ? "tr" : "en",
            successUrl: "https://younews.media/thanks.html"
          }
        });
        // If overlay shows generic failure, surface checklist shortly after.
        setTimeout(function () {
          if (lastError) alert(explainError());
        }, 2200);
      } catch (err) {
        console.error(err);
        alert(explainError());
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
})();
