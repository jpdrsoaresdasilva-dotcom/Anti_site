document.addEventListener('mousemove', function(e) {
  // Cria um elemento visual para o rastro
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  
  // Posiciona o ponto exatamente onde o rato está
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
  
  document.body.appendChild(trail);
  
  // Anima o desaparecimento e remove o elemento após alguns milissegundos
  setTimeout(() => {
    trail.style.opacity = '0';
    setTimeout(() => {
      trail.remove();
    }, 300);
  }, 100);
});