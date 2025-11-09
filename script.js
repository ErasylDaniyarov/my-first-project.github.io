// Кішкентай анимация немесе интерактив үшін
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`"${card.querySelector('h3').textContent}" жобасы жайлы көбірек білгіңіз келе ме? 😊`);
  });
});
