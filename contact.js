(function () {
  function showThanks() {
    var formCard = document.getElementById("form-card");
    var thanks = document.getElementById("thanks");
    var fail = document.getElementById("form-fail");
    if (formCard) formCard.hidden = true;
    if (fail) fail.hidden = true;
    if (thanks) thanks.hidden = false;
    try {
      var url = new URL(location.href);
      url.searchParams.set("sent", "1");
      url.searchParams.delete("err");
      history.replaceState(null, "", url);
    } catch (_) {}
  }

  function showFail() {
    var fail = document.getElementById("form-fail");
    var form = document.getElementById("contact-form");
    var btn = form && form.querySelector('button[type="submit"]');
    if (fail) fail.hidden = false;
    if (btn) {
      btn.disabled = false;
      var pack = window.__younewsDict;
      if (pack && pack.form_send) btn.textContent = pack.form_send;
    }
  }

  function sendingLabel() {
    try {
      var el = document.querySelector("[data-i18n='form_sending']");
      return (el && el.textContent) || "Sending…";
    } catch (_) {
      return "Sending…";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (/[?&]sent=1/.test(location.search)) showThanks();

    var form = document.getElementById("contact-form");
    var iframe = document.getElementById("younews-fs");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      form.classList.add("tried");
      if (!form.checkValidity()) {
        e.preventDefault();
        return;
      }
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value) {
        e.preventDefault();
        showThanks();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var original = btn ? btn.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.textContent = sendingLabel();
      }
      var fail = document.getElementById("form-fail");
      if (fail) fail.hidden = true;

      var done = false;
      function finishOk() {
        if (done) return;
        done = true;
        showThanks();
      }
      function finishFail() {
        if (done) return;
        done = true;
        if (btn) {
          btn.disabled = false;
          btn.textContent = original;
        }
        showFail();
      }

      if (iframe) {
        iframe.addEventListener(
          "load",
          function onLoad() {
            try {
              var href = iframe.contentWindow.location.href || "";
              if (
                href.indexOf("sent=1") !== -1 ||
                href.indexOf("younews.media/contact") !== -1
              ) {
                finishOk();
              }
            } catch (_) {
              // Cross-origin FormSubmit page — success only when _next lands on our domain.
            }
          },
          { once: false }
        );
      }
      // Timeout is failure, never success.
      setTimeout(function () {
        if (!done) finishFail();
      }, 10000);
    });
  });
})();
