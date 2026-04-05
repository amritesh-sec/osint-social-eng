// OSINT & Social Engineering — Main JS
const nav = document.getElementById('siteNav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Scroll reveal
const cards = document.querySelectorAll('.article-card, .technique-card, .map-node');
if (cards.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.animationDelay = (i * 0.07) + 's';
        e.target.style.animation = 'fadeUp 0.5s ease both';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => obs.observe(c));
}
