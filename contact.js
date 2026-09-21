(function () {
  function showThanks() {
    var formCard = document.getElementById("form-card");
    var thanks = document.getElementById("thanks");
    if (formCard) formCard.hidden = true;
    if (thanks) thanks.hidden = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (/[?&]sent=1/.test(location.search)) showThanks();
  });
})();
