const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => switchToggle(e.target))
);

function switchToggle(switched) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === switched) {
      fast.checked = false;
    }
    if (cheap === switched) {
      good.checked = false;
    }

    if (fast === switched) {
      cheap.checked = false;
    }
  }
}
