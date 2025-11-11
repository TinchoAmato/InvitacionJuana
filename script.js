const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");

// 🎶 Tu canción (podés reemplazarla por una local en /audio/ si querés)
const audio = new Audio("Audio/Coldplay.m4a");

let isPlaying = false;

playButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playButton.classList.add("playing");

    // Cambiar SVG a pausa ⏸
    playIcon.innerHTML = `
      <rect x="6" y="5" width="4" height="14" fill="white"/>
      <rect x="14" y="5" width="4" height="14" fill="white"/>
    `;
  } else {
    audio.pause();
    isPlaying = false;
    playButton.classList.remove("playing");

    // Volver a triángulo ▶
    playIcon.innerHTML = `<polygon points="8,5 19,12 8,19" fill="white"/>`;
  }
});

const countdownDate = new Date("December 5, 2025 21:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "¡Llegó el gran día! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}, 1000);

