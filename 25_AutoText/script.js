const textEl = document.getElementById("text");
const controllerEl = document.getElementById("speed");
const text = "HELLO WORLD!";

let idx = 1;
let speed = 300 / controllerEl.value;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

controllerEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
