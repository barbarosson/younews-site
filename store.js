/** Microsoft Store — sole purchase channel for You News. */
(function () {
  var STORE_ID = "9P07VBL4760N";
  var PFN = "MODULUSTECH.YOUNEWS_6w2d1brm94m3m";
  // Opens the Store app on Windows.
  var STORE_DEEP = "ms-windows-store://pdp/?productid=" + STORE_ID;
  // Public web product page.
  var STORE_WEB = "https://apps.microsoft.com/detail/" + STORE_ID;

  window.YOUNEWS_STORE = {
    storeId: STORE_ID,
    pfn: PFN,
    deepLink: STORE_DEEP,
    webLink: STORE_WEB,
    /** Prefer Store app deep link on Windows; otherwise the web PDP. */
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
