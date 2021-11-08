const btnChangingTheme = document.querySelector(".btn-switch-theme");
const body = document.querySelector("body");
const footer = body.querySelector("footer");
const titles = body.querySelectorAll(".title");
const form = body.querySelector("form");
const inputs = form.querySelectorAll(".form__input");
const formBtn = form.querySelector(".form__button");
const labels = form.querySelectorAll(".form__label");
const dots = body.querySelectorAll(".dot");
const contactTitle = body.querySelector(".contact__title");
const texts = body.querySelectorAll(".text");
const buttons = body.querySelectorAll(".btn");
const titleAbout = body.querySelector(".about-us__title");
const titleFirstScreen = body.querySelector(".first-screen__title");
const links = body.querySelectorAll(".main-nav__link");
const logo = body.querySelector(".logo__image");
const nav = body.querySelector(".main-nav");
const label = body.querySelector(".main-nav__label");
const containerLabel = body.querySelector(".main-nav__container");
const topPanelMainNav = body.querySelector(".main-nav__logo-link");
const btnMenu = body.querySelector(".header__nav-button");
const menuItems = body.querySelectorAll(".main-nav__item");
const services = body.querySelector(".services");
const ourWorks = body.querySelector(".our-works");


const changeTheme = (evt) => {
  evt.preventDefault();
  nav.classList.toggle("main-nav--dark-theme");
  body.classList.toggle("body--dark-theme");
  footer.classList.toggle("footer--dark-theme");
  topPanelMainNav.classList.toggle("main-nav__logo-link--dark-theme");
  label.classList.toggle("main-nav__label--dark-theme");
  btnMenu.classList.toggle("header__nav-button--dark-theme");
  services.classList.toggle("services--dark-theme");
  ourWorks.classList.toggle("our-works--dark-theme");

  for (let i = 0; i < titles.length; i++) {
    titles[i].classList.toggle("title--dark-theme");
  }

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.toggle("form__input--dark-theme");
  }

  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.toggle("form__label--dark-theme");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("dot--dark-theme");
  }

  for (let i = 0; i < texts.length; i++) {
    texts[i].classList.toggle("text--dark-theme");
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("btn--dark-theme");
  }

  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("main-nav__link--dark-theme");
  }

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle("main-nav__item--dark-theme");
  }

  form.classList.toggle("form--dark-theme");
  formBtn.classList.toggle("form__button--dark-theme");
  contactTitle.classList.toggle("contact__title--dark-theme");
  titleAbout.classList.toggle("about-us__title--dark-theme");
  titleFirstScreen.classList.toggle("first-screen__title--dark-theme");
  containerLabel.classList.toggle("main-nav__container--dark-theme");

  if (body.classList.contains('body--dark-theme')) {
    logo.src = "img/WebSmilelogo-dark-theme.svg";
  } else {
    logo.src = "img/logo-header-mobile.svg";
  }
};


btnChangingTheme.addEventListener("click", changeTheme);
label.addEventListener("click", changeTheme);
