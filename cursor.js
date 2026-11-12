document.addEventListener('mousemove', function(e) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
  
  document.body.appendChild(trail);
  
  // Mantém o traço visível por 800ms antes de começar a desvanecer lentamente
  setTimeout(() => {
    trail.style.opacity = '0';
    // Remove o elemento do HTML após o tempo total da transição (1.5 segundos)
    setTimeout(() => {
      trail.remove();
    }, 1500);
  }, 800);
});