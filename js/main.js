document.addEventListener("DOMContentLoaded", () => {
  
  const progressBar = document.getElementById("scroll-progress");
  const svgPieceTop = document.getElementById("svg-piece-top");
  const svgPieceBottom = document.getElementById("svg-piece-bottom");
  const svgPieceLeft = document.getElementById("svg-piece-left");
  const svgPieceRight = document.getElementById("svg-piece-right");
  const logoSection = document.getElementById("logo-interactive");

  // 1. Barra de Progreso Superior
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + "%";

    // 2. Animar Isotipo al Scroll estilo Dropbox
    if (logoSection) {
      const rect = logoSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular progreso visible de la sección (0 a 1)
      if (rect.top < windowHeight && rect.bottom > 0) {
        let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        progress = Math.max(0, Math.min(1, progress)); // Clamp entre 0 y 1

        // Calcular desplazamiento inverso para ensamble
        const offset = (1 - progress) * 60; // 60px de separación inicial

        svgPieceTop.style.transform = `translateY(${-offset}px)`;
        svgPieceBottom.style.transform = `translateY(${offset}px)`;
        svgPieceLeft.style.transform = `translateX(${-offset}px)`;
        svgPieceRight.style.transform = `translateX(${offset}px)`;
      }
    }
  });

  // 3. Reveal Elements Observer (Aparición fluida)
  const revealElements = document.querySelectorAll(".reveal-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
});