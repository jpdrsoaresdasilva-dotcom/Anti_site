document.addEventListener('mousemove', function(e) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
  
  document.body.appendChild(trail);
  
  // Mantém visível por 500ms antes de iniciar o fade-out de 15 segundos
  setTimeout(() => {
    trail.style.opacity = '0';
    // Remove o elemento do HTML após o tempo total (15 segundos + 0.5s)
    setTimeout(() => {
      trail.remove();
    }, 15500);
  }, 500);
});