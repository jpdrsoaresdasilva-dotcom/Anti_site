let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', function(e) {
  const currentX = e.clientX;
  const currentY = e.clientY;

  // Calcula a distância desde o último ponto criado
  const distance = Math.hypot(currentX - lastX, currentY - lastY);

  // Se o rato se moveu, preenche o espaço criando pontos mais juntos (a cada 3 pixels de distância)
  const steps = Math.max(Math.floor(distance / 3), 1);

  for (let i = 0; i <= steps; i++) {
    const x = lastX + (currentX - lastX) * (i / steps);
    const y = lastY + (currentY - lastY) * (i / steps);

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';

    document.body.appendChild(trail);

    // Mantém visível por 500ms antes de iniciar o fade-out de 15 segundos
    setTimeout(() => {
      trail.style.opacity = '0';
      setTimeout(() => {
        trail.remove();
      }, 15500);
    }, 500);
  }

  lastX = currentX;
  lastY = currentY;
});