  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1500);
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.querySelector('i').className = mobileMenu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });
  function closeMobile() {
    mobileMenu.classList.remove('open');
    hamburger.querySelector('i').className = 'fas fa-bars';
  }

  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));

  // Duplicate marquee cards for seamless infinite loop
  const track = document.getElementById('marqueeTrack');
  track.innerHTML += track.innerHTML;