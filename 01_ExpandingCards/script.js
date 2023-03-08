const panels = document.querySelectorAll(".panel");

// Add 'activated' to the div

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivatedClass();
    panel.classList.add("activated");
  });
});

// Remove 'activated' from the div

function removeActivatedClass() {
  panels.forEach((panel) => {
    panel.classList.remove("activated");
  });
}
