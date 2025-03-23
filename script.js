// Level Up Button Interaction
const levelBtn = document.getElementById('levelUpBtn');
const levelText = document.getElementById('levelText');

let level = 1;

levelBtn.addEventListener('click', () => {
  level++;
  levelText.textContent = `Level: ${level}`;
  
  // Add some effects on level-up
  levelText.style.color = '#0f0';  // Neon green
  levelText.style.fontSize = '24px';
  setTimeout(() => {
    levelText.style.color = '#fff';
    levelText.style.fontSize = '18px';
  }, 500);
});

// Card hover effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.2)';
    card.style.boxShadow = '0 0 20px #ff0';  // Yellow glow
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 15px #0f0';  // Green glow
  });
});
