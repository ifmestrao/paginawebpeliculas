// Comments System JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initializeComments();
});

// Almacenamiento local de comentarios (en una aplicación real, esto sería una base de datos)
let comments = JSON.parse(localStorage.getItem('movieComments')) || {};
let currentMovieId = null;
let userRating = 0;

function initializeComments() {
  // Obtener el ID de la película actual
  const urlParams = new URLSearchParams(window.location.search);
  currentMovieId = urlParams.get('id');
  
  if (!currentMovieId) return;
  
  setupCommentForm();
  setupStarRating();
  loadComments();
  updateCommentsCount();
}

function setupCommentForm() {
  const commentForm = document.getElementById('comment-form');
  
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userName = document.getElementById('user-name').value.trim();
    const commentText = document.getElementById('comment-text').value.trim();
    
    if (!userName || !commentText) {
      alert('Por favor, completa todos los campos');
      return;
    }
    
    if (userRating === 0) {
      alert('Por favor, selecciona una calificación');
      return;
    }
    
    addComment(userName, commentText, userRating);
    
    // Limpiar formulario
    commentForm.reset();
    resetStarRating();
    userRating = 0;
  });
}

function setupStarRating() {
  const stars = document.querySelectorAll('.star-rating-input i');
  
  stars.forEach((star, index) => {
    star.addEventListener('click', function() {
      userRating = index + 1;
      updateStarDisplay();
    });
    
    star.addEventListener('mouseenter', function() {
      highlightStars(index + 1);
    });
  });
  
  document.querySelector('.star-rating-input').addEventListener('mouseleave', function() {
    updateStarDisplay();
  });
}

function highlightStars(rating) {
  const stars = document.querySelectorAll('.star-rating-input i');
  
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.remove('far');
      star.classList.add('fas', 'active');
    } else {
      star.classList.remove('fas', 'active');
      star.classList.add('far');
    }
  });
}

function updateStarDisplay() {
  highlightStars(userRating);
}

function resetStarRating() {
  const stars = document.querySelectorAll('.star-rating-input i');
  stars.forEach(star => {
    star.classList.remove('fas', 'active');
    star.classList.add('far');
  });
}

function addComment(userName, commentText, rating) {
  if (!comments[currentMovieId]) {
    comments[currentMovieId] = [];
  }
  
  const newComment = {
    id: Date.now(),
    userName: userName,
    text: commentText,
    rating: rating,
    date: new Date().toISOString(),
    likes: 0
  };
  
  comments[currentMovieId].unshift(newComment); // Agregar al inicio
  saveComments();
  loadComments();
  updateCommentsCount();
  
  // Mostrar mensaje de éxito
  showSuccessMessage('¡Comentario publicado exitosamente!');
}

function loadComments() {
  const commentsList = document.getElementById('comments-list');
  const noComments = document.getElementById('no-comments');
  
  if (!comments[currentMovieId] || comments[currentMovieId].length === 0) {
    commentsList.style.display = 'none';
    noComments.style.display = 'block';
    return;
  }
  
  commentsList.style.display = 'block';
  noComments.style.display = 'none';
  
  const commentsHTML = comments[currentMovieId].map(comment => createCommentHTML(comment)).join('');
  commentsList.innerHTML = commentsHTML;
}

function createCommentHTML(comment) {
  const date = new Date(comment.date);
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const starsHTML = createStarsHTML(comment.rating);
  
  return `
    <div class="comment-item" data-comment-id="${comment.id}">
      <div class="comment-header">
        <div class="comment-user">
          <i class="fas fa-user-circle"></i>
          <div class="user-info">
            <h4>${escapeHtml(comment.userName)}</h4>
            <span class="comment-date">${formattedDate}</span>
          </div>
        </div>
        <div class="comment-rating">
          ${starsHTML}
        </div>
      </div>
      <div class="comment-text">
        ${escapeHtml(comment.text)}
      </div>
    </div>
  `;
}

function createStarsHTML(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += '<i class="fas fa-star"></i>';
    } else {
      starsHTML += '<i class="far fa-star"></i>';
    }
  }
  return starsHTML;
}

function updateCommentsCount() {
  const count = comments[currentMovieId] ? comments[currentMovieId].length : 0;
  const commentsCountElement = document.getElementById('comments-count');
  
  if (count === 0) {
    commentsCountElement.textContent = 'Sin comentarios';
  } else if (count === 1) {
    commentsCountElement.textContent = '1 comentario';
  } else {
    commentsCountElement.textContent = `${count} comentarios`;
  }
}

function saveComments() {
  localStorage.setItem('movieComments', JSON.stringify(comments));
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showSuccessMessage(message) {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = 'success-notification';
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;
  
  // Agregar estilos
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--primary-color);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Función para limpiar comentarios (útil para desarrollo)
function clearAllComments() {
  if (confirm('¿Estás seguro de que quieres eliminar todos los comentarios?')) {
    localStorage.removeItem('movieComments');
    comments = {};
    loadComments();
    updateCommentsCount();
  }
}

// Agregar algunos comentarios de ejemplo para demostración
function addSampleComments() {
  const sampleComments = [
    {
      userName: "María González",
      text: "Excelente película, muy recomendada. La actuación es increíble y la historia te mantiene enganchado desde el primer minuto.",
      rating: 5
    },
    {
      userName: "Carlos Rodríguez",
      text: "Buena película, aunque esperaba un poco más del final. Los efectos visuales están muy bien logrados.",
      rating: 4
    },
    {
      userName: "Ana López",
      text: "Me encantó la cinematografía y la banda sonora. Una película que definitivamente vale la pena ver.",
      rating: 5
    }
  ];
  
  // Solo agregar comentarios de ejemplo si no hay comentarios para esta película
  if (!comments[currentMovieId] || comments[currentMovieId].length === 0) {
    comments[currentMovieId] = [];
    
    sampleComments.forEach((comment, index) => {
      const sampleComment = {
        id: Date.now() + index,
        userName: comment.userName,
        text: comment.text,
        rating: comment.rating,
        date: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)).toISOString(), // Fechas diferentes
        likes: Math.floor(Math.random() * 10)
      };
      
      comments[currentMovieId].push(sampleComment);
    });
    
    saveComments();
    loadComments();
    updateCommentsCount();
  }
}

// Llamar a la función de comentarios de ejemplo después de un breve delay
setTimeout(() => {
  if (currentMovieId) {
    addSampleComments();
  }
}, 1000);