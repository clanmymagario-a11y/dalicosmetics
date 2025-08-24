// efectos-magicos.js
document.addEventListener('DOMContentLoaded', () => {
  // Asegurar contenedores
  let heartsContainer = document.querySelector('.floating-hearts');
  let sparklesContainer = document.querySelector('.sparkly'); // NUEVO contenedor

  if (!heartsContainer) {
    heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts';
    document.body.appendChild(heartsContainer);
  }
  if (!sparklesContainer) {
    sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'sparkly';
    document.body.appendChild(sparklesContainer);
  }

  // --- Corazones flotando 💖 ---
  const HEARTS = 1;
  for (let i = 0; i < HEARTS; i++) {
    const heart = document.createElement('span');
    heart.textContent = '💖';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (16 + Math.random() * 22) + 'px';
    heart.style.animationDuration = (4 + Math.random() * 5) + 's';
    heart.style.animationDelay = (Math.random() * 5) + 's';
    heartsContainer.appendChild(heart);
  }

  // --- Estrellitas flotando ✨ ---
  const STARS = 1;
  for (let i = 0; i < STARS; i++) {
    const star = document.createElement('span');
    star.textContent = '✨';
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.fontSize = (16 + Math.random() * 22) + 'px';
    star.style.animationDuration = (4 + Math.random() * 5) + 's';
    star.style.animationDelay = (Math.random() * 5) + 's';
    sparklesContainer.appendChild(star);
  }
});