const start = document.querySelector("button[data-start]");
const stop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timer;
start.addEventListener("click", () => {
  start.disabled = true;
  timer = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
  start.disabled = false;
  start.style.opacity = 0.7;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}
