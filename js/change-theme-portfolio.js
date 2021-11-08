const btnChangingTheme = document.querySelector(".btn-switch-theme");
const body = document.querySelector("body");
const footer = body.querySelector("footer");
const titles = body.querySelectorAll(".title");
const dots = body.querySelectorAll(".dot");
const links = body.querySelectorAll(".main-nav__link");
const titlesSlider = body.querySelectorAll(".portfolio-block__title");
const nav = body.querySelector(".main-nav");
const label = body.querySelector(".main-nav__label");
const containerLabel = body.querySelector(".main-nav__container");
const topPanelMainNav = body.querySelector(".main-nav__logo-link");
const btnMenu = body.querySelector(".header__nav-button");
const menuItems = body.querySelectorAll(".main-nav__item");

const changeTheme = (evt) => {
  evt.preventDefault();
  body.classList.toggle("body--dark-theme");
  footer.classList.toggle("footer--dark-theme");
  nav.classList.toggle("main-nav--dark-theme");
  topPanelMainNav.classList.toggle("main-nav__logo-link--dark-theme");
  label.classList.toggle("main-nav__label--dark-theme");
  btnMenu.classList.toggle("header__nav-button--dark-theme");
  containerLabel.classList.toggle("main-nav__container--dark-theme");

  for (let i = 0; i < titles.length; i++) {
    titles[i].classList.toggle("title--dark-theme");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("dot--dark-theme");
  }

  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("main-nav__link--dark-theme");
  }

  for (let i = 0; i < titlesSlider.length; i++) {
    titlesSlider[i].classList.toggle("portfolio-block__title--dark-theme");
  }

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle("main-nav__item--dark-theme");
  }
};

btnChangingTheme.addEventListener("click", changeTheme);
label.addEventListener("click", changeTheme);
