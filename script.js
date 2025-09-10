// Alterna o menu mobile + acessibilidade (aria-expanded)
function toggleMenu() {
  const menu = document.getElementById('menu');
  const expanded = menu.classList.toggle('open');
  const btn = document.querySelector('.menu-toggle');
  if (btn) btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

document.addEventListener("DOMContentLoaded", () => {
  // Fecha o menu mobile ao clicar em qualquer link do menu
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('open');
      const btn = document.querySelector('.menu-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll suave para âncoras internas existentes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Animação de entrada para elementos com data-animate
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

  // Ano dinâmico no rodapé
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
