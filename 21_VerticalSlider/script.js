const container = document.querySelector(".container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");
const buttonUp = document.querySelector(".arrow_up");
const buttonDown = document.querySelector(".arrow_down");
const slideLenght = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideLenght - 1) * 100}vh`;

buttonUp.addEventListener("click", () => changeSlide("up"));
buttonDown.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = container.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideLenght - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLenght - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
