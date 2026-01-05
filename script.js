function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("February 14 2026 00:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0){
        Days.innerHTML = "40";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);

document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".details-container");
      const texts = card.querySelectorAll(".copy-text");

      let copyContent = "";

      texts.forEach(text => {
        copyContent += text.innerText + "\n";
      });

      navigator.clipboard.writeText(copyContent.trim())
        .then(() => {
          button.innerText = "Copied!";
          setTimeout(() => {
            button.innerText = "Copy details";
          }, 2000);
        })
        .catch(() => {
          alert("Copy failed. Please try again.");
        });
    });
  });

const gallery = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// Scroll amount per click (can adjust)
const scrollAmount = gallery.clientWidth * 0.7;

nextBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
  gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
