// Ocultar el spinner cuando la página se carga completamente
window.addEventListener('load', function () {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.display = 'none'; // Oculta el spinner
    }
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
  
    if (menuButton && menu) {
      menuButton.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        menu.classList.toggle('active');
        console.log('click');
      });
    }
  });
  // Validación del formulario de contacto
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
  
        if (!name || !email || !message) {
          event.preventDefault();
          alert('Por favor, completa todos los campos.');
        } else if (!validateEmail(email)) {
          event.preventDefault();
          alert('Por favor, ingresa un correo electrónico válido.');
        }
      });
    }
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    
  });

  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slider-slide");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  
  let currentIndex = 0;
  
  function updateSlider() {
      const offset = -currentIndex * 100;
      sliderTrack.style.transform = `translateX(${offset}%)`;
  }
  
  prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
      }
  });
  
  nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateSlider();
      }
  });