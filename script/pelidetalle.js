// Movie Details JavaScript
document.addEventListener('DOMContentLoaded', function() {
  loadMovieDetails();
  setupActionButtons();
});

// Datos extendidos de películas con toda la información
const moviesData = {
  1: {
    id: 1,
    title: "Implacable (2024)",
    year: 2024,
    poster: "imagenes/ligadejusticia.webp",
    rating: 8.2,
    quality: "4K UHD",
    description: "Un ex-boxeador busca redención en las calles de Boston mientras enfrenta su pasado violento y lucha por proteger a su familia de las consecuencias de sus decisiones anteriores.",
    titles: "Implacable | Relentless | Sin Piedad",
    genres: ["Acción", "Drama", "Crimen"],
    audio: "Latino y Inglés subtitulada",
    director: "Michael Bay",
    cast: ["Mark Wahlberg", "Michelle Monaghan", "J.K. Simmons", "Winston Duke", "James Ransone"],
    trailerUrl: "https://www.youtube.com/watch?v=example1",
    watchUrl: "https://example.com/watch/1",
    downloadUrl: "https://example.com/download/1"
  },
  2: {
    id: 2,
    title: "Minecraft: La Película",
    year: 2024,
    poster: "imagenes/oppenheimer.webp",
    rating: 7.5,
    quality: "HD",
    description: "Una aventura épica en el mundo de bloques más famoso del mundo, donde un grupo de aventureros debe salvar su reino de una amenaza ancestral que podría destruir todo lo que conocen.",
    titles: "Minecraft: La Película | Minecraft: The Movie | A Minecraft Movie",
    genres: ["Aventura", "Familia", "Animación"],
    audio: "Latino y Inglés subtitulada",
    director: "Jared Hess",
    cast: ["Jack Black", "Jason Momoa", "Emma Myers", "Danielle Brooks", "Sebastian Eugene Hansen"],
    trailerUrl: "https://www.youtube.com/watch?v=example2",
    watchUrl: "https://example.com/watch/2",
    downloadUrl: "https://example.com/download/2"
  },
  3: {
    id: 3,
    title: "Bala Perdida 3",
    year: 2024,
    poster: "imagenes/melagodon.webp",
    rating: 6.8,
    quality: "Full HD",
    description: "La acción y velocidad llegan a su punto máximo en esta tercera entrega donde nuestros protagonistas enfrentan su misión más peligrosa en las calles de París.",
    titles: "Bala Perdida 3 | Lost Bullet 3 | Balle Perdue 3",
    genres: ["Acción", "Crimen", "Thriller"],
    audio: "Latino y Francés subtitulada",
    director: "Guillaume Pierret",
    cast: ["Alban Lenoir", "Nicolas Duvauchelle", "Ramzy Bedia", "Anne Serra", "Sébastien Lalanne"],
    trailerUrl: "https://www.youtube.com/watch?v=example3",
    watchUrl: "https://example.com/watch/3",
    downloadUrl: "https://example.com/download/3"
  },
  4: {
    id: 4,
    title: "Homestead",
    year: 2024,
    poster: "imagenes/johnwick.webp",
    rating: 7.4,
    quality: "4K UHD",
    description: "La supervivencia tiene un nuevo significado cuando una familia debe defenderse en un mundo post-apocalíptico donde los recursos son escasos y la humanidad está al borde del colapso.",
    titles: "Homestead | La Granja | El Refugio",
    genres: ["Drama", "Thriller", "Supervivencia"],
    audio: "Latino y Inglés subtitulada",
    director: "Ben Smallbone",
    cast: ["Neal McDonough", "Dawn Olivieri", "Susan Misner", "Bailey Chase", "Jesse Hutch"],
    trailerUrl: "https://www.youtube.com/watch?v=example4",
    watchUrl: "https://example.com/watch/4",
    downloadUrl: "https://example.com/download/4"
  },
  5: {
    id: 5,
    title: "DROP",
    year: 2023,
    poster: "imagenes/indiana jones.webp",
    rating: 5.9,
    quality: "HD",
    description: "El suspenso te mantendrá al borde del asiento en este thriller psicológico donde una pareja joven descubre secretos oscuros que cambiarán sus vidas para siempre.",
    titles: "DROP | La Caída | El Descenso",
    genres: ["Thriller", "Suspenso", "Drama"],
    audio: "Latino y Inglés subtitulada",
    director: "Christopher Landon",
    cast: ["Meghann Fahy", "Brandon Sklenar", "Violett Beane", "Jacob Robinson", "Jeffery Self"],
    trailerUrl: "https://www.youtube.com/watch?v=example5",
    watchUrl: "https://example.com/watch/5",
    downloadUrl: "https://example.com/download/5"
  },
  6: {
    id: 6,
    title: "Barbie",
    year: 2023,
    poster: "imagenes/Fantasma.webp",
    rating: 7.0,
    quality: "4K UHD",
    description: "El mundo de Barbie cobra vida en esta aventura única llena de color, música y diversión, donde Barbie debe salvar Barbieland de una crisis existencial.",
    titles: "Barbie | Barbie: La Película | Barbie Movie",
    genres: ["Comedia", "Aventura", "Familia"],
    audio: "Latino y Inglés subtitulada",
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera", "Kate McKinnon", "Issa Rae"],
    trailerUrl: "https://www.youtube.com/watch?v=example6",
    watchUrl: "https://example.com/watch/6",
    downloadUrl: "https://example.com/download/6"
  }
};

function loadMovieDetails() {
  // Obtener el ID de la película desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id');
  
  if (!movieId || !moviesData[movieId]) {
    // Si no hay ID o no existe la película, redirigir al inicio
    window.location.href = 'index.html';
    return;
  }
  
  const movie = moviesData[movieId];
  
  // Actualizar el título de la página
  document.title = `${movie.title} - CineCalidad`;
  
  // Llenar los elementos con la información de la película
  document.getElementById('movie-poster').src = movie.poster;
  document.getElementById('movie-poster').alt = movie.title;
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-description').textContent = movie.description;
  document.getElementById('movie-titles').textContent = movie.titles;
  document.getElementById('movie-audio').textContent = movie.audio;
  document.getElementById('movie-quality').textContent = movie.quality;
  document.getElementById('movie-director').textContent = movie.director;
  
  // Crear las estrellas de rating
  createStarRating(movie.rating);
  
  // Crear los géneros
  createGenreTags(movie.genres);
  
  // Crear el elenco
  createCastList(movie.cast);
  
  // Configurar los enlaces de los botones
  setupMovieLinks(movie);
}

function createStarRating(rating) {
  const starsContainer = document.getElementById('movie-stars');
  const ratingText = document.getElementById('movie-rating');
  
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = (rating % 2) >= 1;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHTML = '';
  
  // Estrellas llenas
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star star"></i>';
  }
  
  // Media estrella
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt star"></i>';
  }
  
  // Estrellas vacías
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star star empty"></i>';
  }
  
  starsContainer.innerHTML = starsHTML;
  ratingText.textContent = `${rating}/10 de 34K votos`;
}

function createGenreTags(genres) {
  const genresContainer = document.getElementById('movie-genres');
  const genreTags = genres.map(genre => 
    `<span class="genre-tag">${genre}</span>`
  ).join('');
  
  genresContainer.innerHTML = genreTags;
}

function createCastList(cast) {
  const castContainer = document.getElementById('movie-cast');
  const castHTML = cast.map(actor => 
    `<span class="cast-member">${actor}</span>`
  ).join(', ');
  
  castContainer.innerHTML = castHTML;
}

function setupMovieLinks(movie) {
  // Guardar las URLs en los botones para uso posterior
  document.getElementById('trailer-btn').dataset.url = movie.trailerUrl;
  document.getElementById('watch-online-btn').dataset.url = movie.watchUrl;
  document.getElementById('download-btn').dataset.url = movie.downloadUrl;
}

function setupActionButtons() {
  const trailerBtn = document.getElementById('trailer-btn');
  const watchBtn = document.getElementById('watch-online-btn');
  const downloadBtn = document.getElementById('download-btn');
  
  trailerBtn.addEventListener('click', function() {
    const url = this.dataset.url;
    if (url && url !== 'https://www.youtube.com/watch?v=example1') {
      window.open(url, '_blank');
    } else {
      alert('Trailer no disponible en este momento');
    }
  });
  
  watchBtn.addEventListener('click', function() {
    const url = this.dataset.url;
    if (url && url !== 'https://example.com/watch/1') {
      window.open(url, '_blank');
    } else {
      alert('Enlace de visualización no disponible en este momento');
    }
  });
  
  downloadBtn.addEventListener('click', function() {
    const url = this.dataset.url;
    if (url && url !== 'https://example.com/download/1') {
      window.open(url, '_blank');
    } else {
      alert('Enlace de descarga no disponible en este momento');
    }
  });
}