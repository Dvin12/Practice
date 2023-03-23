const openBtn = document.querySelector(".open__btn");
const closeBtn = document.querySelector(".close__btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.add("visible"));
});

closeBtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.remove("visible"));
});
