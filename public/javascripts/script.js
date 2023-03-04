const toggleMenuBtn = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

toggleMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menu.classList.contains('show')) {
    menu.classList.remove('show');
    overlay.classList.remove('show');
  }
});