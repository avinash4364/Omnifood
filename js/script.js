// when i click the icon then add the nav-open class to the header element if it is not already present. If it is present already then remove it.

const menuButton = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

function toggleIcon() {
  header.classList.toggle('nav-open');
}

menuButton.addEventListener('click', toggleIcon);
