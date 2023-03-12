const bottles = document.querySelectorAll(".bottle-small");
const liters = document.getElementById("liters");
const precentage = document.getElementById("precentage");
const remained = document.getElementById("remained");

bottles.forEach((bottle, i) => {
  bottle.addEventListener("click", () => highlightBottles(i));
});

function highlightBottles(i) {
  if (
    bottles[i].classList.contains("full") &&
    !bottles[i].nextElementSibling.classList.contains("full")
  ) {
    i--;
  }

  bottles.forEach((bottle, idx) => {
    if (idx <= i) {
      bottle.classList.add("full");
    } else {
      bottle.classList.remove("full");
    }
  });

  updateTank();
}

function updateTank() {
  const fullBottles = document.querySelectorAll(".bottle-small.full").length;
  const totalBottles = bottles.length;

  if (fullBottles === 0) {
    precentage.style.visibility = "hidden";
    precentage.style.height = 0;
  } else {
    precentage.style.visibility = "visible";
    precentage.style.height = `${(fullBottles / totalBottles) * 40}rem`;
    precentage.innerHTML = `${(fullBottles / totalBottles) * 100}%`;
  }

  if (fullBottles === totalBottles) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerHTML = `${2 - (250 * fullBottles) / 1000}L`;
  }
}
