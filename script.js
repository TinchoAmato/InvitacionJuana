const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");

// 🎶 Tu canción (podés reemplazarla por una local en /audio/ si querés)
const audio = new Audio("audio/coldplay.m4a");

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
