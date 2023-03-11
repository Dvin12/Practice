const buttonToggles = document.querySelectorAll(".toggle");

buttonToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
