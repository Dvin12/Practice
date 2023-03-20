const codeEl = document.querySelectorAll(".code");

codeEl[0].focus();

codeEl.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    codeEl[idx].value = "";
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => codeEl[idx + 1].focus());
    } else if (e.key === "Backspace") {
      setTimeout(() => codeEl[idx - 1].focus());
    }
  });
});
