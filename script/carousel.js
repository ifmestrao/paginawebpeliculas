document.addEventListener('DOMContentLoaded', function() {
  const featuredMovies = [
     {
      id: 1,
      title: "Los 4 Fantásticos: Primeros pasos (2025)",
      image: "imagenes/carusel4fantasticos.jpg"
    },
    {
      id: 2,
      title: "El conjuro 4: Últimos ritos (2025)",
      image: "imagenes/caruselconjuro4.jpg"
    },
    {
      id: 3,
      title: "Jurassic World: El Renacer (2025)",
      image: "imagenes/caruseljurasicrenace.jpg"
    },
    {
      id: 4,
      title: "Capitán América: Un nuevo mundo (2025)",
      image: "imagenes/capitan.jpg"
    },
    {
      id: 5,
      title: "Drácula: El último viaje del Demeter (2023)",
      image: "imagenes/dracula.jpg"
    }
  ];

  const carouselContainer = document.querySelector('.carousel-container');
  let currentSlide = 0;
  let autoPlayInterval;

 
  featuredMovies.forEach((movie, index) => {
    const slide = document.createElement('div');
    slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
    slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${movie.image})`;
    slide.innerHTML = `
      <div class="carousel-content">
        <h2>${movie.title}</h2>
      </div>
    `;
    carouselContainer.appendChild(slide);
  });

  document.querySelector('.carousel-arrow.prev').addEventListener('click', () => changeSlide(-1));
  document.querySelector('.carousel-arrow.next').addEventListener('click', () => changeSlide(1));

  function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

 
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => changeSlide(1), 4000);
  }

  carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
  carouselContainer.addEventListener('mouseleave', startAutoPlay);
  startAutoPlay();
});
