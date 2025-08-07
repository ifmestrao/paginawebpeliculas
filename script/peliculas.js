// Datos de películas
const movies = [
  {
    id: 1,
    title: "Liga de la Justicia",
    year: 2024,
    poster: "imagenes/ligadejusticia.webp",
    rating: 8.2,
    quality: "HD",
    videoUrl: "https://drive.google.com/file/d/1HWc738L7aPLMQ9XKzejn762boIhJmIyv/view?usp=sharing"
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    poster: "imagenes/oppenheimer.webp",
    rating: 7.5,
    quality: "HD",
    videoUrl: ""
  },
  {
    id: 3,
    title: "Megalodón 2: El gran abismo",
    year: 2023,
    poster: "imagenes/melagodon.webp",
    rating: 6.8,
    quality: "Full HD",
    videoUrl: "https://drive.google.com/file/d/1IRY3czDp_PVPLbuTRIyzs8RnTVNz_r05/view?usp=sharing"
  },
  {
    id: 4,
    title: "Jurassic World: El Renacer (2025)",
    year: 2025,
    poster: "imagenes/jurasic.jpg",
    rating: 7.4,
    quality: "HD",
    videoUrl: ""
  },
  {
    id: 5,
    title: "Indiana Jones y el llamado del destino",
    year: 2023,
    poster: "imagenes/indiana jones.webp",
    rating: 5.9,
    quality: "HD",
    videoUrl: "https://drive.google.com/file/d/1ujEWSEopq-ktSUUnKD_KXlgUIHKuGpV_/view?usp=sharing"
  },
  {
    id: 6,
    title: "Drácula: El último viaje del Demeter",
    year: 2023,
    poster: "imagenes/Fantasma.webp",
    rating: 7.0,
    quality: "4K UHD"
  },

  {
    id: 7,
    title: "Misión imposible: sentencia mortal",
    year: 2023,
    poster: "imagenes/mision imposible.webp",
    rating: 7.0,
    quality: "4K UHD"
  },

  {
    id: 8,
    title: "Implacable ",
    year: 2023,
    poster: "imagenes/implacable.jpg",
    rating: 7.0,
    quality: "Full HD",
    videoUrl: "https://drive.google.com/file/d/1fl9bf-rrN2Z4Sw1caZv0-iqna67dyXGT/view?usp=sharing"
  },

  {
    id: 9,
    title: "Pecadores",
    year: 2023,
    poster: "imagenes/sinners.jpg",
    rating: 7.0,
    quality: "4K UHD",
    videoUrl: "https://drive.google.com/file/d/1KSIPHulhd0j8KvJ6uP6d7kjih1mfAMbR/view?usp=sharing"
  }
  ,

  {
    id: 10,
    title: "Capitán América: Un nuevo mundo",
    year: 2025,
    poster: "imagenes/captain-america.jpg",
    rating: 7.0,
    quality: "4K Ultra HD"
  },
  {
    id: 11,
    title: "Mufasa: El rey león",
    year: 2024,
    poster: "imagenes/mufasa.jpg",
    rating: 7.4,
    quality: "4K Ultra HD"
  },
  {
    id: 12,
    title: "Estado eléctrico",
    year: 2025,
    poster: "imagenes/electric.jpg",
    rating: 7.4,
    quality: "HD"
  },

  {
    id: 13,
    title: "Oni-Goroshi: Ciudad de los demonios",
    year: 2024,
    poster: "imagenes/oni.jpg",
    rating: 7.4,
    quality: "Full HD"
  },

  {
    id: 14,
    title: "Kraven el cazador",
    year: 2024,
    poster: "imagenes/kraven.jpg",
    rating: 7.4,
    quality: "HD"
  },

  {
    id: 15,
    title: "Halloween: La noche final ",
    year: 2024,
    poster: "imagenes/halloween.jpg",
    rating: 7.4,
    quality: "4K Ultra HD"
  },

  {
    id: 16,
    title: "Lift: Un robo de primera clase",
    year: 2024,
    poster: "imagenes/lift.jpg",
    rating: 7.4,
    quality: "4K UHD"
  },

  {
    id: 17,
    title: "Bad Boys: Hasta la muerte",
    year: 2024,
    poster: "imagenes/bad.jpg",
    rating: 7.4,
    quality: "HD"
  },

  {
    id: 18,
    title: "Ferrari",
    year: 2023,
    poster: "imagenes/ferrari.jpg",
    rating: 7.4,
    quality: "HD"
  },

  {
    id: 19,
    title: "Guardianes de la Galaxia: Especial de las fiestas",
    year: 2022,
    poster: "imagenes/theguardians.jpg",
    rating: 7.4,
    quality: "HD"
  },

  {
    id: 20,
    title: "Tren bala",
    year: 2022,
    poster: "imagenes/bullet.jpg",
    rating: 7.4,
    quality: "Full HD"
  },

  {
    id: 21,
    title: "Turno de día",
    year: 2022,
    poster: "imagenes/day.jpg",
    rating: 7.4,
    quality: "HD"
  }
  ,

  {
    id: 22,
    title: "Asesino sin memoria",
    year: 2022,
    poster: "imagenes/asesino.jpg",
    rating: 7.4,
    quality: "HD"
  },

  {
    id: 23,
    title: "Depredador: La Presa",
    year: 2022,
    poster: "imagenes/depredador.jpg",
    rating: 7.4,
    quality: "HD"
  },

  {
    id: 24,
    title: "Rápidos y furiosos 9 ",
    year: 2021,
    poster: "imagenes/f9.jpg",
    rating: 9.5,
    quality: "Full HD"
  }

  
];

// paginación
let currentPage = 1;
const moviesPerPage = 12;
const totalPages = Math.ceil(movies.length / moviesPerPage);

// Cargar películas 
document.addEventListener('DOMContentLoaded', function() {
  loadMovies();
  setupPagination();
  setupMovieClickHandlers();
});

function loadMovies() {
  const movieGrid = document.querySelector('.movies-grid');
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);
  
  if (movieGrid) {
    movieGrid.innerHTML = currentMovies.map(movie => createMovieCard(movie)).join('');
    updatePaginationUI();
  }
}

function createMovieCard(movie) {
  return `
    <a href="${movie.videoUrl}" target="_blank" class="movie-card" data-id="${movie.id}">
      <div class="movie-poster">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-quality">${movie.quality}</div>
        <div class="movie-overlay">
          <div class="play-button">
            <i class="fas fa-play"></i>
          </div>
        </div>
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <div class="movie-year">
            <i class="far fa-calendar-alt"></i> ${movie.year}
          </div>
          <div class="movie-rating">
            <i class="fas fa-star"></i> ${movie.rating}
          </div>
        </div>
      </div>
    </a>
  `;
}
//nuevo
function setupMovieClickHandlers() {
  const movieCards = document.querySelectorAll('.movie-card');
  
  movieCards.forEach(card => {
    card.addEventListener('click', function() {
      const movieId = this.dataset.id;
      // Redirigir a la página de detalles con el ID de la película
      window.location.href = `pelidetalle.html?id=${movieId}`;
    });
  });
}

function updatePaginationUI() {
  const prevBtn = document.querySelector('.pagination-btn.prev');
  const nextBtn = document.querySelector('.pagination-btn.next');
  const currentPageSpan = document.querySelector('.current-page');
  const totalPagesSpan = document.querySelector('.total-pages');
  
  if (prevBtn && nextBtn && currentPageSpan && totalPagesSpan) {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
  }
}

//nueva


function setupPagination() {
  const prevBtn = document.querySelector('.pagination-btn.prev');
  const nextBtn = document.querySelector('.pagination-btn.next');
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        loadMovies();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        loadMovies();
      }
    });
  }
}

function updatePaginationUI() {
  const prevBtn = document.querySelector('.pagination-btn.prev');
  const nextBtn = document.querySelector('.pagination-btn.next');
  const currentPageSpan = document.querySelector('.current-page');
  const totalPagesSpan = document.querySelector('.total-pages');
  
  if (prevBtn && nextBtn && currentPageSpan && totalPagesSpan) {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
  }
}

// Inicio funcion
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupSearch();
}

// Búsqueda 
function setupSearch() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const mainContent = document.querySelector('main');
  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    
    if (query) {
      const searchResults = movies.filter(movie => 
        movie.title.toLowerCase().includes(query)
      );
      
      displaySearchResults(searchResults, query);
    }
  });
}

function displaySearchResults(results, query) {
  const mainContent = document.querySelector('main');
  
  // resultados
  const searchResultsHTML = `
    <section class="search-results">
      <div class="section-header">
        <h2>Resultados de búsqueda para: "${query}"</h2>
      </div>
      <div class="movies-grid">
        ${results.length > 0 ? 
          results.map(movie => createMovieCard(movie)).join('') :
          '<p class="no-results">No se encontraron películas que coincidan con tu búsqueda.</p>'
        }
      </div>
    </section>
  `;
  
  // Ocultar contenido actual y mostrar resultados
  mainContent.innerHTML = searchResultsHTML;
}


const menuIcon = document.querySelector('.mobile-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownList = document.querySelector('.dropdown-list-mobile');

// Alternar menú móvil completo
menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('active');

  // Al cerrar el menú completo, ocultar también el submenú
  if (!mobileNav.classList.contains('active')) {
    dropdownList.classList.remove('show');
  }
});

// Alternar submenú "Categorías"
dropdownToggle.addEventListener('click', function(e) {
  e.preventDefault();
  dropdownList.classList.toggle('show');
});






