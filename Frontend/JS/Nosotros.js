const slides = document.querySelector('.Quienes_somos .slides ');
let current = 0;
const total = document.querySelectorAll('.Quienes_somos .slide').length;
const container = document.querySelector('.Quienes_somos ');

container.addEventListener('mouseover', () => {
  current = (current + 1) % total;
  slides.style.transform = `translateX(-${current * 100}%)`;
});
