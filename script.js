function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
  // Fecha o menu mobile ao clicar em um link
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('open');
    });
  });

  // Scroll suave para links de ancoragem
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scroll Reveal para elementos com data-animate
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // Botão "Voltar ao Topo"
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
