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
    var btn = document.getElementById("form-submit");
    var err = document.getElementById("form-err");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (form.querySelector("[name='_honey']").value) return;

      var pack = { tr: "Gönderiliyor…", en: "Sending…" };
      var lang = document.documentElement.lang || "tr";
      btn.disabled = true;
      btn.textContent = pack[lang] || pack.en;
      err.hidden = true;

      fetch("https://formsubmit.co/ajax/hello@younews.media", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          _subject: "You News contact"
        })
      })
        .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
        .then(function (result) {
          if (!result.ok || (result.data && result.data.success === "false")) throw new Error("fail");
          showThanks();
        })
        .catch(function () {
          err.hidden = false;
          btn.disabled = false;
          btn.textContent = lang === "en" ? "Send" : "Gönder";
        });
    });
  });
})();
