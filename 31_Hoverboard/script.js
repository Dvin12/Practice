const container = document.getElementById("container");
const colours = [
  "#f03e3e",
  "#a61e4d",
  "#9c36b5",
  "#1c7ed6",
  "#2f9e44",
  "#fcc419",
];

const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColour(square));

  square.addEventListener("mouseout", () => removeColour(square));

  container.appendChild(square);
}

function setColour(element) {
  const colour = getRandomColour();
  element.style.background = colour;
}

function removeColour(element) {
  element.style.background = "#1e2a36";
}

function getRandomColour() {
  return colours[Math.floor(Math.random() * colours.length)];
}
