const container = document.getElementById("boxes");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => container.classList.toggle("big"));

function createBox() {
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-x * 121}px ${-y * 121}px`;
      container.appendChild(box);
    }
  }
}

createBox();
