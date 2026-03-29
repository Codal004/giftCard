document.addEventListener("DOMContentLoaded", function () {
  const card      = document.getElementById("card");
  const leftCard  = document.querySelector(".left-card");
  const rightCard = document.querySelector(".right-card");
  const body      = document.body;
  const music     = document.getElementById("backgroundMusic");
  const psNote    = document.querySelector(".ps-note");
  const roses     = document.querySelectorAll(".rose");

  let darkTriggered = false;
  let psTriggered   = false;

  function resetCard() {
    card.classList.remove("wilting");
    rightCard.classList.remove("dark-shift");
    body.classList.remove("dark-bg");
    psNote.classList.remove("ps-visible");
    roses.forEach(r => { r.innerHTML = "&#x1F339;"; }); // fresh rose
    darkTriggered = false;
    psTriggered   = false;
  }

  leftCard.addEventListener("click", function () {
    if (card.classList.contains("open")) {
      card.classList.remove("open");
      body.classList.remove("bg-open");
      if (music) { music.pause(); music.currentTime = 0; }
      resetCard();
    } else {
      card.classList.add("open");
      body.classList.add("bg-open");
      if (music) { music.play(); }
    }
  });

  if (music) {
    music.addEventListener("timeupdate", function () {
      // At 27s: roses wilt, letter darkens, bloody background kicks in
      if (music.currentTime >= 27 && !darkTriggered) {
        darkTriggered = true;
        card.classList.add("wilting");
        rightCard.classList.add("dark-shift");
        body.classList.add("dark-bg");
        roses.forEach(r => { r.innerHTML = "&#x1F940;"; }); // wilted rose
      }
      // At 33s: P.S. fades in
      if (music.currentTime >= 33 && !psTriggered) {
        psTriggered = true;
        psNote.classList.add("ps-visible");
      }
    });
  }
});
