const navMain = document.querySelector('.main-nav');
const headerButton = document.querySelector('.header__nav-button');
const closeButton = document.querySelector('.main-nav__button-close');
const navigationLinks = document.querySelectorAll('.main-nav__link');

headerButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  navMain.classList.toggle('main-nav--show');
});

closeButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  navMain.classList.toggle('main-nav--show');
});

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function() {
    navMain.classList.remove('main-nav--show');
  });
}
