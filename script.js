  // LOADER
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 1500);
  });

  // HAMBURGER
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.querySelector('i').className =
      mobileMenu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });
  function closeMobile() {
    mobileMenu.classList.remove('open');
    hamburger.querySelector('i').className = 'fas fa-bars';
  }

  // SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));