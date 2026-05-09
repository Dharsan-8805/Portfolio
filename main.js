// ── Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Role text typewriter
const roles = ['Full Stack Developer', 'Data Science Enthusiast', 'UI/UX Designer', 'ML Engineer', 'Problem Solver'];
let ri = 0, ci = 0, del = false;
const roleEl = document.getElementById('role-text');
function type() {
  const cur = roles[ri];
  if (!del) {
    roleEl.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) { del = true; setTimeout(type, 1800); return; }
  } else {
    roleEl.textContent = cur.slice(0, --ci);
    if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, del ? 60 : 90);
}
type();

// ── Scroll reveal
const reveals = document.querySelectorAll('section, .skill-category, .project-card, .edu-card, .cert-card, .timeline-card, .stat-card, .contact-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// ── Contact form
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('send-btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    status.textContent = '✅ Message sent! I\'ll get back to you soon.';
    status.className = 'form-status success';
    form.reset();
    btn.textContent = 'Send Message 🚀';
    btn.disabled = false;
  }, 1200);
});

// ── Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) cur = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--primary2)' : '';
  });
});
