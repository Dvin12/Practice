const search = document.querySelector(".container");
const button = document.querySelector(".btn");
const searchInput = document.querySelector(".input");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  searchInput.focus();
});
