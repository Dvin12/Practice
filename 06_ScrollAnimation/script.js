const containers = document.querySelectorAll(".box");

window.addEventListener("scroll", checkContainers);

checkContainers();

function checkContainers() {
  const scrollTrigger = (window.innerHeight / 5) * 4;

  containers.forEach((container) => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < scrollTrigger) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
}
