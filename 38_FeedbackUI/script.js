const panel = document.querySelector("#panel");
const container = document.querySelector(".container__ratings");
const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector("#send");
let selectedRating = "Satisfied";

container.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

btn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <strong>Thank You!</strong>
        <p>We will use your feedback to improve!</p>
    `;
});
