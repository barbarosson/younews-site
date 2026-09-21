(function () {
  function showThanks() {
    var formCard = document.getElementById("form-card");
    var thanks = document.getElementById("thanks");
    if (formCard) formCard.hidden = true;
    if (thanks) thanks.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (/[?&]sent=1/.test(location.search)) showThanks();

    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function () {
      form.classList.add("tried");
      var btn = form.querySelector('button[type="submit"]');
      if (btn && form.checkValidity()) {
        btn.disabled = true;
        btn.textContent = document.documentElement.lang === "tr" ? "Gönderiliyor…" : "Sending…";
      }
    });
  });
})();
