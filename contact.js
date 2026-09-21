(function () {
  function showThanks() {
    var formCard = document.getElementById("form-card");
    var thanks = document.getElementById("thanks");
    if (formCard) formCard.hidden = true;
    if (thanks) thanks.hidden = false;
    try {
      var url = new URL(location.href);
      url.searchParams.set("sent", "1");
      history.replaceState(null, "", url);
    } catch (_) {}
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
      var done = false;
      function finish() {
        if (done) return;
        done = true;
        showThanks();
      }
      if (iframe) iframe.addEventListener("load", finish, { once: true });
      setTimeout(finish, 1200);
    });
  });
})();
