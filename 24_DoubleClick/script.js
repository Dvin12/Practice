const likeMe = document.querySelector(".likeMe");
const times = document.getElementById("times");

let clickTime = 0;
let timesClicked = 0;

likeMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createLike(e);
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createLike = (e) => {
  const like = document.createElement("i");
  like.classList.add("fa-solid");
  like.classList.add("fa-thumbs-up");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  like.style.top = `${yInside}px`;
  like.style.left = `${xInside}px`;
  likeMe.appendChild(like);
  times.innerHTML = ++timesClicked;

  setTimeout(() => like.remove(), 1000);
};
