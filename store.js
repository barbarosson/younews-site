/** Microsoft Store — sole purchase channel for You News. */
(function () {
  // Package Family Name from the published MSIX (Partner Center / installed package).
  var PFN = "MODULUSTECH.YOUNEWS_6w2d1brm94m3m";
  // Opens the Store app on Windows. Prefer this over a brittle web product id.
  var STORE_DEEP = "ms-windows-store://pdp/?PFN=" + encodeURIComponent(PFN);
  // Web fallback (search) when the protocol handler is unavailable.
  var STORE_WEB =
    "https://apps.microsoft.com/search?query=" + encodeURIComponent("YOUNEWS MODULUSTECH");

  window.YOUNEWS_STORE = {
    pfn: PFN,
    deepLink: STORE_DEEP,
    webLink: STORE_WEB,
    /** Prefer deep link on Windows; otherwise web search. */
    href: function () {
      try {
        if (/Windows/i.test(navigator.userAgent || "")) return STORE_DEEP;
      } catch (_) {}
      return STORE_WEB;
    },
    wire: function () {
      var href = this.href();
      document.querySelectorAll("a[data-store-buy]").forEach(function (a) {
        a.setAttribute("href", href);
        a.removeAttribute("aria-disabled");
        a.removeAttribute("tabindex");
        a.setAttribute("rel", "noopener");
      });
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    window.YOUNEWS_STORE.wire();
  });
  document.addEventListener("younews-lang", function () {
    window.YOUNEWS_STORE.wire();
  });
})();
