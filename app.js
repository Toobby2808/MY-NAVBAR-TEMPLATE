document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger-menu');
  const icon = document.querySelector('.hamburger-menu i');
  const mobileMenu = document.querySelector('.mobile-menu');

  btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-xmark')
  });
});