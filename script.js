const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', nav.classList.contains('is-open') ? 'true' : 'false');
  });
}

const topButton = document.querySelector('[data-back-top]');
if (topButton) {
  const toggleTopButton = () => topButton.classList.toggle('is-visible', window.scrollY > 600);
  toggleTopButton();
  window.addEventListener('scroll', toggleTopButton, { passive: true });
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('is-open');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
  });
});
