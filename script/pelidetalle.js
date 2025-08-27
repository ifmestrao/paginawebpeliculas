// Movie Details JavaScript
document.addEventListener('DOMContentLoaded', function() {
  loadMovieDetails();
  setupActionButtons();
});

// Datos extendidos de películas con toda la información
const moviesData = {
  1: {
    id: 1,
    title: "Liga de la Justicia",
    year: 2024,
    poster: "imagenes/ligadejusticia.webp",
    rating: 8.2,
    quality: "HD",
    description: "Decidido a garantizar que el último sacrificio de Superman no fuera en vano, Bruce Wayne alinea fuerzas con Diana Prince con planes de reclutar un equipo de metahumanos para proteger al mundo de una amenaza inminente de proporciones catastróficas.",
    titles: "La Liga de la Justicia de Zack Snyder | Zack Snyder's Justice League",
    genres:["Acción | Aventura | Fantasía"],
    audio: "Latino e Inglés subtitulada",
    director: "Zack Snyder",
    cast: ["Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot, Ray Fisher, Jason Momoa, Ezra Miller, Willem Dafoe, Jesse Eisenberg, Jeremy Irons, Diane Lane, Connie Nielsen"],
    trailerUrl: "https://www.youtube.com/watch?v=1c66wfYbNEs",
    watchUrl: "https://drive.google.com/file/d/1HWc738L7aPLMQ9XKzejn762boIhJmIyv/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1HWc738L7aPLMQ9XKzejn762boIhJmIyv/view?usp=sharing"
  },
  2: {
    id: 2,
    title: "",
    year: 2000,
    poster: "",
    rating: 0.0,
    quality: "",
    description: "",
    titles: "",
    genres: [""],
    audio: "Latino y Inglés subtitulada",
    director: "",
    cast: [""],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  3: {
    id: 3,
    title: "Megalodón 2: El gran abismo",
    year: 2023,
    poster: "imagenes/melagodon.webp",
    rating: 6.8,
    quality: "HD",
    description: "Después de escapar del ataque de algo que él afirma era una criatura gigante durante un rescate submarino, Jonas Taylor debe enfrentar sus miedos y salvar a las personas atrapadas en un sumergible en el fondo del mar.",
    titles: "Megalodón 2: El Gran Abismo",
    genres: ["Acción | Terror | Ciencia ficción"],
    audio: "Latino y Inglés subtitulada",
    director: "Jon Turteltaub",
    cast: ["Jason Statham, Bingbing Li, Rainn Wilson, Cliff Curtis, Winston Chao, Shuya Sophia Cai, Ruby Rose, Page Kennedy, Robert Taylor, Ólafur Darri Ólafsson, Masi Oka"],
    trailerUrl: "https://www.youtube.com/watch?v=7wuK5PhzcNY",
    watchUrl: "https://drive.google.com/file/d/1IRY3czDp_PVPLbuTRIyzs8RnTVNz_r05/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1IRY3czDp_PVPLbuTRIyzs8RnTVNz_r05/view?usp=sharing"
  },
  4: {
    id: 4,
    title: "Jurassic World: El Renacer (2025)",
    year: 2025,
    poster: "imagenes/jurasic.jpg",
    rating: 0.0,
    quality: "",
    description: "",
    titles: "",
    genres: [""],
    audio: "Latino y Inglés subtitulada",
    director: "",
    cast: [""],
    trailerUrl: "",
    watchUrl: "https://drive.google.com/file/d/14VmBzK8uXfwQnwZqnixWFr8L8dU8YbMk/view?usp=sharing",
    downloadUrl: ""
  },
  
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