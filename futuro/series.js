// Datos de series
const series = [
  {
    id: 1,
    title: "The Last of Us",
    year: 2023,
    poster: "",
    rating: 8.8,
    quality: "HD",
    seasons: 1,
    description: "Joel y Ellie, un sobreviviente endurecido y una adolescente valiente, se unen en un viaje épico a través de Estados Unidos.",
    type: "series"
  },
  {
    id: 2,
    title: "Stranger Things",
    year: 2016,
    poster: "imagenes/stranger-things.jpg",
    rating: 8.7,
    quality: "4K",
    seasons: 4,
    description: "Cuando un niño desaparece, un pueblo descubre un misterio que involucra experimentos secretos y fuerzas sobrenaturales.",
    type: "series"
  },
  {
    id: 3,
    title: "The Mandalorian",
    year: 2019,
    poster: "imagenes/mandalorian.jpg",
    rating: 8.8,
    quality: "4K",
    seasons: 3,
    description: "Las aventuras de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.",
    type: "series"
  },
  {
    id: 4,
    title: "Breaking Bad",
    year: 2008,
    poster: "imagenes/breaking-bad.jpg",
    rating: 9.5,
    quality: "HD",
    seasons: 5,
    description: "Un profesor de química con cáncer se asocia con un exalumno para fabricar y vender metanfetamina.",
    type: "series"
  },
  {
    id: 5,
    title: "Game of Thrones",
    year: 2011,
    poster: "imagenes/game-of-thrones.jpg",
    rating: 9.3,
    quality: "4K",
    seasons: 8,
    description: "Nobles familias luchan por el control del Trono de Hierro en las tierras de Westeros.",
    type: "series"
  },
  {
    id: 6,
    title: "The Witcher",
    year: 2019,
    poster: "imagenes/thewitch.webp",
    rating: 8.2,
    quality: "4K",
    seasons: 3,
    description: "Geralt de Rivia, un cazador de monstruos mutante, viaja en busca de su destino en un mundo turbulento.",
    type: "series"
  },
  {
    id: 7,
    title: "Loki",
    year: 2021,
    poster: "imagenes/loki.jpg",
    rating: 8.2,
    quality: "4K",
    seasons: 2,
    description: "El Dios de las Travesuras emprende una aventura a través del tiempo después de robar el Teseracto.",
    type: "series"
  },
  {
    id: 8,
    title: "The Boys",
    year: 2019,
    poster: "imagenes/the-boys.jpg",
    rating: 8.7,
    quality: "4K",
    seasons: 4,
    description: "Un grupo de vigilantes se propone derribar superhéroes corruptos que abusan de sus superpoderes.",
    type: "series"
  },
  {
    id: 9,
    title: "House of the Dragon",
    year: 2022,
    poster: "imagenes/house-dragon.jpg",
    rating: 8.5,
    quality: "4K",
    seasons: 1,
    description: "La historia de la Casa Targaryen 200 años antes de los eventos de Game of Thrones.",
    type: "series"
  },
  {
    id: 10,
    title: "Wednesday",
    year: 2022,
    poster: "imagenes/wednesday.jpg",
    rating: 8.2,
    quality: "4K",
    seasons: 1,
    description: "Wednesday Addams investiga una ola de asesinatos mientras hace nuevos amigos en la Academia Nevermore.",
    type: "series"
  },
  {
    id: 11,
    title: "The Crown",
    year: 2016,
    poster: "imagenes/the-crown.jpg",
    rating: 8.7,
    quality: "4K",
    seasons: 6,
    description: "Sigue el reinado de la Reina Isabel II y los eventos que dieron forma a la segunda mitad del siglo XX.",
    type: "series"
  },
  {
    id: 12,
    title: "Peaky Blinders",
    year: 2013,
    poster: "imagenes/peaky-blinders.jpg",
    rating: 8.8,
    quality: "HD",
    seasons: 6,
    description: "Una familia gangster de Birmingham explota su negocio criminal tras la Primera Guerra Mundial.",
    type: "series"
  }
];

// Variables de paginación
let currentPage = 1;
const seriesPerPage = 12;
const totalPages = Math.ceil(series.length / seriesPerPage);

// Cargar series
document.addEventListener('DOMContentLoaded', function() {
  loadSeries();
  setupPagination();
  setupSeriesClickHandlers();
  setupSearch();
});

function loadSeries() {
  const seriesGrid = document.getElementById('series-grid');
  const startIndex = (currentPage - 1) * seriesPerPage;
  const endIndex = startIndex + seriesPerPage;
  const currentSeries = series.slice(startIndex, endIndex);
  
  if (seriesGrid) {
    seriesGrid.innerHTML = currentSeries.map(serie => createSeriesCard(serie)).join('');
    updatePaginationUI();
    setupSeriesClickHandlers();
  }
}

function createSeriesCard(serie) {
  return `
    <div class="movie-card series-card" data-id="${serie.id}" data-type="series">
      <div class="movie-poster">
        <img src="${serie.poster}" alt="${serie.title}">
        <div class="movie-quality">${serie.quality}</div>
        <div class="series-badge">${serie.seasons} Temp</div>
        <div class="movie-overlay">
          <div class="play-button">
            <i class="fas fa-play"></i>
          </div>
        </div>
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${serie.title}</h3>
        <div class="movie-meta">
          <div class="movie-year">
            <i class="far fa-calendar-alt"></i> ${serie.year}
          </div>
          <div class="movie-rating">
            <i class="fas fa-star"></i> ${serie.rating}
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupSeriesClickHandlers() {
  const seriesCards = document.querySelectorAll('.series-card');
  
  seriesCards.forEach(card => {
    card.addEventListener('click', function() {
      const seriesId = this.dataset.id;
      window.location.href = `seriedetalle.html?id=${seriesId}`;
    });
  });
}

function setupPagination() {
  const prevBtn = document.querySelector('.pagination-btn.prev');
  const nextBtn = document.querySelector('.pagination-btn.next');
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        loadSeries();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        loadSeries();
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

function setupSearch() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    
    if (query) {
      const searchResults = series.filter(serie => 
        serie.title.toLowerCase().includes(query)
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
          results.map(serie => createSeriesCard(serie)).join('') :
          '<p class="no-results">No se encontraron series que coincidan con tu búsqueda.</p>'
        }
      </div>
    </section>
  `;
  
  mainContent.innerHTML = searchResultsHTML;
  setupSeriesClickHandlers();
}