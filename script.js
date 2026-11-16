// Revela as seções suavemente ao rolar a página
const secoes = document.querySelectorAll('.section');
const semAnimacao = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!semAnimacao) {
  secoes.forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(30px)';
    s.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        observador.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  secoes.forEach(s => observador.observe(s));
}