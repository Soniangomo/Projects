// Animate stats counter
  function animateCount(el, target, duration) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { el.textContent = target; clearInterval(timer); return; }
      el.textContent = Math.floor(start);
    }, 16);
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      animateCount(document.getElementById('cups'), 6, 1200);
      animateCount(document.getElementById('commits'), 42, 1400);
      animateCount(document.getElementById('hours'), 9, 1600);
      animateCount(document.getElementById('tracks'), 87, 1800);
    }, 300);
  });