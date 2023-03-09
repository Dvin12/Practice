const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let active = 1;

next.addEventListener("click", () => {
  active++;
  if (active > circles.length) {
    active = circles.length;
  }
  update();
});

previous.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < active) {
      circle.classList.add("activated");
    } else {
      circle.classList.remove("activated");
    }
  });

  const activated = document.querySelectorAll(".activated");

  progress.style.width =
    ((activated.length - 1) / (circles.length - 1)) * 100 + "%";

  if (active === 1) {
    previous.disabled = true;
  } else if (active === circles.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
}
