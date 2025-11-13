
const newsData = [
  {
    id: 1,
    title: "Nuevo Tráiler de Avengers 5 Revelado",
    excerpt: "Marvel Studios acaba de lanzar el tráiler oficial de la esperada Avengers 5 con escenas épicas.",
    date: "15 Mar 2024",
    icon: "fas fa-film"
  },
  {
    id: 2,
    title: "Festival de Cine de Cannes 2024",
    excerpt: "Conoce las películas nominadas y los favoritos para ganar la Palma de Oro este año.",
    date: "12 Mar 2024",
    icon: "fas fa-trophy"
  },
  {
    id: 3,
    title: "Nueva Plataforma de Streaming Latinoamericana",
    excerpt: "Se lanza CineLatino, una nueva plataforma dedicada al cine independiente de la región.",
    date: "10 Mar 2024",
    icon: "fas fa-play-circle"
  },
  {
    id: 4,
    title: "Actor Revelación del Año 2024",
    excerpt: "Descubre quiénes son los actores que están dando de qué hablar esta temporada.",
    date: "8 Mar 2024",
    icon: "fas fa-star"
  }
];

const upcomingMovies = [
  {
    title: "Avatar 3",
    date: "Diciembre 2024",
    genre: "Ciencia Ficción",
    icon: "fas fa-mountain"
  },
  {
    title: "Spider-Man: Beyond the Spider-Verse",
    date: "Marzo 2025",
    genre: "Animación · Aventura",
    icon: "fas fa-spider"
  },
  {
    title: "Black Panther: Legacy",
    date: "Julio 2025",
    genre: "Acción · Superhéroes",
    icon: "fas fa-paw"
  },
  {
    title: "Star Wars: New Jedi Order",
    date: "Diciembre 2025",
    genre: "Ciencia Ficción",
    icon: "fas fa-jedi"
  },
  {
    title: "Fast & Furious 11",
    date: "Abril 2025",
    genre: "Acción · Aventura",
    icon: "fas fa-car"
  },
  {
    title: "The Batman Part II",
    date: "Octubre 2025",
    genre: "Acción · Crimen",
    icon: "fas fa-mask"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  loadNews();
  loadUpcomingMovies();
  setupChannelLinks();
});

function loadNews() {
  const newsGrid = document.getElementById('news-grid');
  
  const newsHTML = newsData.map(news => `
    <div class="news-card">
      <div class="news-image">
        <i class="${news.icon}"></i>
      </div>
      <div class="news-content">
        <span class="news-date">${news.date}</span>
        <h3 class="news-title">${news.title}</h3>
        <p class="news-excerpt">${news.excerpt}</p>
        <a href="#" class="read-more">
          Leer más <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `).join('');
  
  newsGrid.innerHTML = newsHTML;
}

function loadUpcomingMovies() {
  const upcomingContainer = document.getElementById('upcoming-movies');
  
  const moviesHTML = upcomingMovies.map(movie => `
    <div class="upcoming-movie">
      <div class="movie-icon">
        <i class="${movie.icon}"></i>
      </div>
      <h4>${movie.title}</h4>
      <span class="release-date">${movie.date}</span>
      <span class="movie-genre">${movie.genre}</span>
    </div>
  `).join('');
  
  upcomingContainer.innerHTML = moviesHTML;
}

function setupChannelLinks() {
  
  console.log('Enlaces de canales configurados');
  

  const joinButtons = document.querySelectorAll('.channel-join-btn');
  joinButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const channel = this.querySelector('i').className.includes('telegram') ? 'Telegram' :
                     this.querySelector('i').className.includes('whatsapp') ? 'WhatsApp' : 'Instagram';
      
      console.log(`Usuario intentando unirse a ${channel}`);
   
    });
  });
}


function updateLiveStats() {

  const stats = document.querySelectorAll('.stat span');
  
  setInterval(() => {
    stats.forEach(stat => {
      if (stat.textContent.includes('miembros') || stat.textContent.includes('seguidores')) {
        const current = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        const newCount = current + Math.floor(Math.random() * 10);
        stat.textContent = stat.textContent.replace(/[0-9]+/, `+${newCount}K`);
      }
    });
  }, 30000);
}


updateLiveStats();

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const channelCards = document.querySelectorAll('.channel-card');
  channelCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });


  const newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}


document.addEventListener('DOMContentLoaded', setupScrollAnimations);