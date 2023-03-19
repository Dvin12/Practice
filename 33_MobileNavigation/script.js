const contents = document.querySelectorAll(".content");

const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hiideAllItems();

    item.classList.add("active");
    contents[i].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hiideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
