// when i click the icon then add the nav-open class to the header element if it is not already present. If it is present already then remove it.

const menuButton = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

function toggleIcon() {
  header.classList.toggle('nav-open');
}

menuButton.addEventListener('click', toggleIcon);

// whenever we click any links in the mobile navigation, we want it to jump  to that section and also close the navigation

const allNavLinks = document.querySelectorAll('.main-nav-link');
allNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
});

//
//
//
//
// updating the year to the current year in the copyright
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// smooth scrolling animation for browsers in which it doesn't work (commented because now it works in most of the browsers)

// const allLinks = document.querySelectorAll('a:link');
// allLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     // preventing the default behaviour of anchor tag (i.e.  jumping to the particular section whenever we click on them)
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     // scroll back to top
//     if (href === '#') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     }

//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });
