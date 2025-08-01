const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");



// Start music
function iniciarMusicaConClick() {
  const music = document.getElementById("bg-music");
  music.volume = 0.4; // volumen entre 0.0 (silencio) y 1.0 (máximo)

  
  if (music && music.paused) {
    music.play().catch((err) => {
      console.log("El navegador bloqueó la reproducción automática:", err);
    });
  }

  window.removeEventListener("click", iniciarMusicaConClick);
}
//Agregar listener al cargar la página
window.addEventListener("click", iniciarMusicaConClick);



// /change the postion of no button
noBtn.addEventListener("mouseover", (e) => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  const x = e.clientX;
  const y = e.clientY;

  confetti({
    particleCount: 50,
    spread: 100,
    startVelocity: 20,   // 🔽 Velocidad inicial menor
    gravity: 0.3,        // 🔽 Menor gravedad para caída más lenta
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight
    }
  });
});



// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});