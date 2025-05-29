const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const form = document.getElementById('form-contacto');
const response = document.getElementById('form-response');
form.addEventListener('submit', e => {
  e.preventDefault();
  response.textContent = '¡Gracias, tu mensaje ha sido enviado!';
  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.feature').forEach(feature => {
    const mainImg = feature.querySelector('.imagen');

    feature.querySelectorAll('.thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumb.addEventListener('click', () => {
          const fullUrl = thumb.getAttribute('data-full');
          mainImg.style.backgroundImage = `url('${fullUrl}')`;
        });

      });
    });
  });
});






