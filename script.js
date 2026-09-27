document.addEventListener('DOMContentLoaded', () => {
  // Alternador de Alto Contraste
  const contrastBtn = document.getElementById('toggle-contrast');
  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    contrastBtn.setAttribute('aria-pressed', isHighContrast);
  });

  // Controle de Tamanho de Fonte
  let currentFontScale = 1.0;
  const increaseFontBtn = document.getElementById('increase-font');
  const decreaseFontBtn = document.getElementById('decrease-font');
  const resetFontBtn = document.getElementById('reset-font');

  increaseFontBtn.addEventListener('click', () => {
    if (currentFontScale < 1.4) {
      currentFontScale += 0.1;
      document.documentElement.style.setProperty('--font-scale', `${currentFontScale}rem`);
    }
  });

  decreaseFontBtn.addEventListener('click', () => {
    if (currentFontScale > 0.8) {
      currentFontScale -= 0.1;
      document.documentElement.style.setProperty('--font-scale', `${currentFontScale}rem`);
    }
  });

  resetFontBtn.addEventListener('click', () => {
    currentFontScale = 1.0;
    document.documentElement.style.setProperty('--font-scale', '1rem');
  });

  // Validação do Formulário Acessível
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.style.color = '#2e7d32';
      feedback.textContent = 'Mensagem enviada com sucesso! Agradecemos o seu contato.';
      form.reset();
    });
  }
});