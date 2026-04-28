const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40 ? '0 2px 20px rgba(26,58,43,0.08)' : 'none';
  });

  function handleForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = '¡Enviado! ✓';
    btn.style.background = '#4a8c67';
    setTimeout(() => { btn.textContent = 'Reservar Cita'; btn.style.background = ''; }, 3000);
  }