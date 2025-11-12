// Datos de series con temporadas y capítulos
const seriesData = {
  1: {
    id: 1,
    title: "The Last of Us",
    year: 2023,
    poster: "imagenes/the-last-of-us.jpg",
    rating: 8.8,
    quality: "HD",
    seasons: 1,
    description: "Joel y Ellie, un sobreviviente endurecido y una adolescente valiente, se unen en un viaje épico a través de Estados Unidos.",
    titles: "The Last of Us | TLOU",
    genres: ["Drama", "Aventura", "Terror"],
    audio: "Latino e Inglés subtitulada",
    director: "Craig Mazin",
    cast: ["Pedro Pascal, Bella Ramsey, Gabriel Luna, Anna Torv"],
    trailerUrl: "https://www.youtube.com/watch?v=uLtkt8BonwM",
    temporadas: [
      {
        numero: 1,
        capitulos: 9,
        año: 2023,
        capitulosLista: [
          { numero: 1, titulo: "Cuando estés perdido en la oscuridad", duracion: "81 min", url: "#", descarga: "#" },
          { numero: 2, titulo: "Infectado", duracion: "53 min", url: "#", descarga: "#" },
          { numero: 3, titulo: "Largo, largo tiempo", duracion: "76 min", url: "#", descarga: "#" },
          { numero: 4, titulo: "Por favor, mantente firme", duracion: "46 min", url: "#", descarga: "#" },
          { numero: 5, titulo: "Resistir y sobrevivir", duracion: "59 min", url: "#", descarga: "#" },
          { numero: 6, titulo: "Parentesco", duracion: "59 min", url: "#", descarga: "#" },
          { numero: 7, titulo: "Dejado atrás", duracion: "56 min", url: "#", descarga: "#" },
          { numero: 8, titulo: "Cuando estemos necesitados", duracion: "51 min", url: "#", descarga: "#" },
          { numero: 9, titulo: "Busca la luz", duracion: "43 min", url: "#", descarga: "#" }
        ]
      }
    ]
  },
  2: {
    id: 2,
    title: "Stranger Things",
    year: 2016,
    poster: "imagenes/stranger-things.jpg",
    rating: 8.7,
    quality: "4K",
    seasons: 4,
    description: "Cuando un niño desaparece, un pueblo descubre un misterio que involucra experimentos secretos y fuerzas sobrenaturales.",
    titles: "Stranger Things | Cosas Extrañas",
    genres: ["Drama", "Ciencia Ficción", "Terror"],
    audio: "Latino e Inglés subtitulada",
    director: "The Duffer Brothers",
    cast: ["Millie Bobby Brown, Finn Wolfhard, David Harbour, Winona Ryder"],
    trailerUrl: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
    temporadas: [
      {
        numero: 1,
        capitulos: 8,
        año: 2016,
        capitulosLista: [
          { numero: 1, titulo: "La desaparición de Will Byers", duracion: "47 min", url: "#", descarga: "#" },
          { numero: 2, titulo: "La loca de la calle Maple", duracion: "55 min", url: "#", descarga: "#" },
          { numero: 3, titulo: "Todo está bien", duracion: "51 min", url: "#", descarga: "#" },
          { numero: 4, titulo: "El cuerpo", duracion: "49 min", url: "#", descarga: "#" },
          { numero: 5, titulo: "La pulga y el acróbata", duracion: "52 min", url: "#", descarga: "#" },
          { numero: 6, titulo: "El monstruo", duracion: "46 min", url: "#", descarga: "#" },
          { numero: 7, titulo: "La bañera", duracion: "41 min", url: "#", descarga: "#" },
          { numero: 8, titulo: "El otro lado", duracion: "54 min", url: "#", descarga: "#" }
        ]
      },
      {
        numero: 2,
        capitulos: 9,
        año: 2017,
        capitulosLista: [
          { numero: 1, titulo: "MADMAX", duracion: "48 min", url: "#", descarga: "#" },
          { numero: 2, titulo: "Dulce o truco, idiota", duracion: "56 min", url: "#", descarga: "#" },
          { numero: 3, titulo: "El renacuajo", duracion: "51 min", url: "#", descarga: "#" },
          { numero: 4, titulo: "Will el Sabio", duracion: "46 min", url: "#", descarga: "#" },
          { numero: 5, titulo: "Dig Dug", duracion: "58 min", url: "#", descarga: "#" },
          { numero: 6, titulo: "El espía", duracion: "51 min", url: "#", descarga: "#" },
          { numero: 7, titulo: "La hermana perdida", duracion: "47 min", url: "#", descarga: "#" },
          { numero: 8, titulo: "El azotamentes", duracion: "62 min", url: "#", descarga: "#" },
          { numero: 9, titulo: "El portal", duracion: "62 min", url: "#", descarga: "#" }
        ]
      }
    ]
  },
  3: {
    id: 3,
    title: "The Mandalorian",
    year: 2019,
    poster: "imagenes/mandalorian.jpg",
    rating: 8.8,
    quality: "4K",
    seasons: 3,
    description: "Las aventuras de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.",
    titles: "The Mandalorian | El Mandaloriano",
    genres: ["Ciencia Ficción", "Aventura", "Acción"],
    audio: "Latino e Inglés subtitulada",
    director: "Jon Favreau",
    cast: ["Pedro Pascal, Carl Weathers, Giancarlo Esposito"],
    trailerUrl: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
    temporadas: [
      {
        numero: 1,
        capitulos: 8,
        año: 2019,
        capitulosLista: [
          { numero: 1, titulo: "Capítulo 1: El Mandaloriano", duracion: "39 min", url: "#", descarga: "#" },
          { numero: 2, titulo: "Capítulo 2: El Niño", duracion: "32 min", url: "#", descarga: "#" },
          { numero: 3, titulo: "Capítulo 3: El Pecado", duracion: "37 min", url: "#", descarga: "#" },
          { numero: 4, titulo: "Capítulo 4: El Santuario", duracion: "41 min", url: "#", descarga: "#" },
          { numero: 5, titulo: "Capítulo 5: El Pistolero", duracion: "33 min", url: "#", descarga: "#" },
          { numero: 6, titulo: "Capítulo 6: El Prisionero", duracion: "42 min", url: "#", descarga: "#" },
          { numero: 7, titulo: "Capítulo 7: El Enfrentamiento", duracion: "41 min", url: "#", descarga: "#" },
          { numero: 8, titulo: "Capítulo 8: Redención", duracion: "47 min", url: "#", descarga: "#" }
        ]
      }
    ]
  }
};

// JavaScript para el detalle de series
document.addEventListener('DOMContentLoaded', function() {
  loadSeriesDetails();
  initializeSeriesContainers();
});

function loadSeriesDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const seriesId = urlParams.get('id');
  
  if (!seriesId || !seriesData[seriesId]) {
    window.location.href = 'series.html';
    return;
  }
  
  const serie = seriesData[seriesId];
  
  // Actualizar información básica
  document.title = `${serie.title} - CineWolf`;
  document.getElementById('series-poster').src = serie.poster;
  document.getElementById('series-poster').alt = serie.title;
  document.getElementById('series-title').textContent = serie.title;
  document.getElementById('series-description').textContent = serie.description;
  document.getElementById('series-titles').textContent = serie.titles;
  document.getElementById('series-audio').textContent = serie.audio;
  document.getElementById('series-quality').textContent = serie.quality;
  document.getElementById('series-director').textContent = serie.director;
  document.getElementById('series-seasons').textContent = `${serie.seasons} Temp`;
  document.getElementById('series-total-seasons').textContent = serie.seasons;
  
  // Crear rating y géneros
  createStarRating(serie.rating);
  createGenreTags(serie.genres);
  createCastList(serie.cast);
  
  // Cargar temporadas y capítulos
  loadSeasons(serie.temporadas);
}

function createStarRating(rating) {
  const starsContainer = document.getElementById('series-stars');
  const ratingText = document.getElementById('series-rating-text');
  
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = (rating % 2) >= 1;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHTML = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star star"></i>';
  }
  
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt star"></i>';
  }
  
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star star empty"></i>';
  }
  
  starsContainer.innerHTML = starsHTML;
  ratingText.textContent = `${rating}/10`;
}

function createGenreTags(genres) {
  const genresContainer = document.getElementById('series-genres');
  const genreLinks = genres.map(genre => 
    `<a class="genre-link" href="series.html?genero=${genre.toLowerCase()}">${genre}</a>`
  ).join(', ');
  
  genresContainer.innerHTML = genreLinks;
}

function createCastList(cast) {
  const castContainer = document.getElementById('series-cast');
  const castHTML = cast.map(actor => 
    `<span class="cast-member">${actor}</span>`
  ).join(', ');
  
  castContainer.innerHTML = castHTML;
}

function loadSeasons(temporadas) {
  const seasonsContainer = document.getElementById('seasons-container');
  
  seasonsContainer.innerHTML = temporadas.map(temporada => `
    <div class="season-item">
      <div class="season-header">
        <h3>Temporada ${temporada.numero} (${temporada.año})</h3>
        <span class="episodes-count">${temporada.capitulos} episodios</span>
      </div>
      <div class="episodes-grid">
        ${temporada.capitulosLista.map(capitulo => `
          <div class="episode-item">
            <div class="episode-info">
              <div class="episode-number">Episodio ${capitulo.numero}</div>
              <h4 class="episode-title">${capitulo.titulo}</h4>
              <div class="episode-meta">
                <span class="episode-duration">${capitulo.duracion}</span>
              </div>
            </div>
            <div class="episode-actions">
              <a href="${capitulo.url}" class="episode-btn watch-btn" target="_blank">
                <i class="fas fa-play"></i> Ver
              </a>
              <a href="${capitulo.descarga}" class="episode-btn download-btn" target="_blank">
                <i class="fas fa-download"></i> Descargar
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function initializeSeriesContainers() {
  const watchTrailerBtn = document.getElementById('watch-trailer-btn');
  
  if (watchTrailerBtn) {
    watchTrailerBtn.addEventListener('click', showSeriesTrailer);
  }
}

function showSeriesTrailer() {
  const urlParams = new URLSearchParams(window.location.search);
  const seriesId = urlParams.get('id');
  const serie = seriesData[seriesId];
  
  if (!serie || !serie.trailerUrl) {
    alert('Trailer no disponible');
    return;
  }

  const embedUrl = convertToEmbedUrl(serie.trailerUrl);
  const trailerPlayer = document.getElementById('series-trailer-player');
  
  if (trailerPlayer) {
    trailerPlayer.innerHTML = `
      <iframe 
        src="${embedUrl}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  }
  
  const trailerSection = document.getElementById('series-trailer');
  if (trailerSection) {
    trailerSection.classList.remove('hidden');
    trailerSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function convertToEmbedUrl(url) {
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
}