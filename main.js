// Minimal JS — smooth scroll polyfill + active nav link highlighting

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'nav--active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));
