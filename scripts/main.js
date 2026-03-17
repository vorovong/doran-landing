// Doran Landing — Scroll Animations
(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Fade-in on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.section__inner').forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Parallax hero blobs on scroll
  const heroBlobs = document.querySelectorAll('.hero-blob');
  if (heroBlobs.length) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          heroBlobs.forEach((blob, i) => {
            const speed = 0.15 + i * 0.08;
            blob.style.transform = `translateY(${y * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
