const img = Array.from(document.querySelectorAll(".author-img"));
const slideIndex = Array.from(document.querySelectorAll(".slide"));
const prev = document.querySelector(".arrow-container .prev-arrow");
const next = document.querySelector(".arrow-container .next-arrow");
let slider = 0;

const sliderFunc = (slide) => {
  slider = slide;
  if (slide >= img.length) slider = 0;
  if (slide < 0) slider = img.length - 1;
  for (let i = 0; i < img.length; i++) {
    if (!img[i].classList.contains("disabled")) {
      img[i].classList.add("disabled");
      slideIndex[i].classList.add("disabled");
    }
  }
  img[slider].classList.remove("disabled");
  slideIndex[slider].classList.remove("disabled");
};

const nextSlider = () => {
  sliderFunc(slider + 1);
};
const prevSlider = () => {
  sliderFunc(slider - 1);
};
const showSlider = () => {
  sliderFunc(slider);
};
showSlider();

prev.addEventListener("click", prevSlider);
next.addEventListener("click", nextSlider);
