
const movies = [
  {
    id: 24,
    title: "Los 4 Fantásticos: Primeros pasos",
    year: 2025,
    poster: "imagenes/4fantásticos.webp",
    rating: 7.2,
    quality: "Full HD"
  },
  {
    id: 23,
    title: "El conjuro 4: Últimos ritos",
    year: 2025,
    poster: "imagenes/conjuro4.jpg",
    rating: 6.3,
    quality: "Full HD Bluray"
  },
  {
    id: 22,
    title: "Jurassic World: El Renacer",
    year: 2025,
    poster: "imagenes/jurasic.jpg",
    rating: 6.1,
    quality: "Full HD Bluray",
    videoUrl: ""
  },  
  {
    id: 21,
    title: "Capitán América: Un nuevo mundo",
    year: 2025,
    poster: "imagenes/captain-america.webp",
    rating: 5.8,
    quality: "Full HD Bluray"
  },
  {
    id: 20,
    title: "Estado eléctrico",
    year: 2025,
    poster: "imagenes/electric.jpg",
    rating: 6.1,
    quality: "Full HD Bluray"
  },
  {
    id: 19,
    title: "La Liga de la Justicia de Zack Snyder",
    year: 2024,
    poster: "imagenes/ligadejusticia.webp",
    rating: 8.2,
    quality: "HD",
    videoUrl: ""
  },
  {
    id: 18,
    title: "Mufasa: El rey león",
    year: 2024,
    poster: "imagenes/mufasa.jpeg",
    rating: 6.7,
    quality: "Full HD Bluray"
  },
  {
    id: 17,
    title: "Kraven el cazador",
    year: 2024,
    poster: "imagenes/kraven.jpg",
    rating: 5.4,
    quality: "Full HD Bluray"
  },
  {
    id: 16,
    title: "Lift: Un robo de primera clase",
    year: 2024,
    poster: "imagenes/lift.jpg",
    rating: 5.5,
    quality: "Full HD Bluray"
  },
  {
    id: 15,
    title: "Bad Boys: Hasta la muerte",
    year: 2024,
    poster: "imagenes/bad.jpg",
    rating: 7.7,
    quality: "Full HD Bluray"
  },
  {
    id: 14,
    title: "Oppenheimer",
    year: 2023,
    poster: "imagenes/oppenheimer.webp",
    rating: 8.4,
    quality: "Full HD Bluray",
    videoUrl: ""
  },
  {
    id: 13,
    title: "Megalodón 2: El gran abismo",
    year: 2023,
    poster: "imagenes/megalodon2.webp",
    rating: 6.8,
    quality: "Full HD",
    videoUrl: ""
  },
  {
    id: 12,
    title: "Indiana Jones 5 Y El Dial Del Destino",
    year: 2023,
    poster: "imagenes/indiana jones.webp",
    rating: 5.9,
    quality: "Full HD",
    videoUrl: ""
  },
  {
    id: 11,
    title: "Drácula: El último viaje del Demeter",
    year: 2023,
    poster: "imagenes/Fantasma.webp",
    rating: 6.1,
    quality: "4K UHD"
  },
  {
    id: 10,
    title: "Misión imposible: sentencia mortal",
    year: 2023,
    poster: "imagenes/mision imposible.webp",
    rating: 7.7,
    quality: "4K UHD"
  },
  {
    id: 9,
    title: "Implacable",
    year: 2023,
    poster: "imagenes/implacable.jpg",
    rating: 5.1,
    quality: "Full HD Bluray",
    videoUrl: ""
  },
  {
    id: 8,
    title: "Pecadores",
    year: 2023,
    poster: "imagenes/sinners.jpg",
    rating: 7.0,
    quality: "Full HD Bluray",
    videoUrl: ""
  },
  {
    id: 7,
    title: "Ferrari",
    year: 2023,
    poster: "imagenes/ferrari.jpg",
    rating: 6.5,
    quality: "Full HD"
  },
  {
    id: 6,
    title: "Halloween: La noche final",
    year: 2022,
    poster: "imagenes/halloween.jpg",
    rating: 5.0,
    quality: "Full HD"
  },
  {
    id: 5,
    title: "Tren bala",
    year: 2022,
    poster: "imagenes/bullet.jpg",
    rating: 7.3,
    quality: "Full HD"
  },
  {
    id: 4,
    title: "Turno de día",
    year: 2022,
    poster: "imagenes/day.jpg",
    rating: 7.4,
    quality: "Full HD"
  },
  {
    id: 3,
    title: "Asesino sin memoria",
    year: 2022,
    poster: "imagenes/asesino.jpg",
    rating: 5.6,
    quality: "Full HD Bluray"
  },
  {
    id: 2,
    title: "Depredador: La Presa",
    year: 2022,
    poster: "imagenes/depredador.jpg",
    rating: 7.3,
    quality: "Full HD Bluray"
  },
  {
    id: 1,
    title: "Rápidos y furiosos 9",
    year: 2021,
    poster: "imagenes/f9.jpg",
    rating: 5.2,
    quality: "Full HD Bluray"
  },

];


let currentPage = 1;
const moviesPerPage = 12;
const totalPages = Math.ceil(movies.length / moviesPerPage);


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
    setupMovieClickHandlers();
  }
}

function createMovieCard(movie) {

  return `
    <div class="movie-card" data-id="${movie.id}">
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
    </div>
  `;
}

//nuevo
function setupMovieClickHandlers() {
  const movieCards = document.querySelectorAll('.movie-card');
  
  movieCards.forEach(card => {
    card.addEventListener('click', function() {
      const movieId = this.dataset.id;

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


document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupSearch();
}

function initializeApp() {
  setupSearch();
}

function setupSearch() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  
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
  
  mainContent.innerHTML = searchResultsHTML;
  setupMovieClickHandlers();
}


const menuIcon = document.querySelector('.mobile-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownList = document.querySelector('.dropdown-list-mobile');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');


menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileNav.classList.toggle('active');
  mobileNavOverlay.classList.toggle('active');

  if (!mobileNav.classList.contains('active')) {
    dropdownList.classList.remove('show');
  }
});


dropdownToggle.addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  dropdownList.classList.toggle('show');
});


document.addEventListener('click', (e) => {
  if (mobileNav.classList.contains('active') && 
      !mobileNav.contains(e.target) && 
      !menuIcon.contains(e.target)) {
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    dropdownList.classList.remove('show');
  }
});


mobileNavOverlay.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  mobileNavOverlay.classList.remove('active');
  dropdownList.classList.remove('show');
});


function setActiveLink(clickedLink) {
  
  const allLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  allLinks.forEach(link => {
    link.classList.remove('active');
  });
  
 
  clickedLink.classList.add('active');
  
  
  if (window.innerWidth <= 992) {
    mobileNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    dropdownList.classList.remove('show');
  }
}


function setupNavigation() {
  
  const desktopLinks = document.querySelectorAll('.desktop-nav a');
  desktopLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (!this.parentElement.classList.contains('dropdown') || 
          this.getAttribute('href') !== '#') {
        setActiveLink(this);
      }
    });
  });
  
 
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (!this.classList.contains('dropdown-toggle')) {
        setActiveLink(this);
      }
    });
  });
  
  
  const desktopCategoryLinks = document.querySelectorAll('.dropdown-content a');
  desktopCategoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      setActiveLink(this);
    });
  });
  
  
  const mobileCategoryLinks = document.querySelectorAll('.dropdown-list-mobile a');
  mobileCategoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      setActiveLink(this);
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {
  setupNavigation();
});





































































