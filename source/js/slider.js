const WIDTH_DESKTOP = 1280;
let sliderItem = document.getElementById('sliderItem');

const sliderItems = document.querySelectorAll(".slider__item");
console.log(sliderItems);

if (document.documentElement.clientWidth >= WIDTH_DESKTOP) {
  sliderItem.classList.remove('visually-hidden');
}
