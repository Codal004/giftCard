document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("card");
  const leftCard = document.querySelector(".left-card");
  const body = document.body;
  const music = document.getElementById("backgroundMusic");

  // Toggle open/close on left-card click
  leftCard.addEventListener("click", function () {
    if (card.classList.contains("open")) {
      card.classList.remove("open");
      body.classList.remove("bg-open");
    } else {
      card.classList.add("open");
      body.classList.add("bg-open");
      if (music) {
        music.play();
      }
    }
  });
});