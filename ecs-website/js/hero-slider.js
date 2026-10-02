/* =========================================================
   hero-slider.js
   Slideshow otomatis untuk bagian paling atas homepage.
   Tambah/kurangi foto cukup dengan menambah/menghapus blok
   <div class="hero__slide">...</div> di index.html — dot navigasi
   di bawah akan otomatis menyesuaikan jumlahnya.
   ========================================================= */

(function(){
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll('.hero__slide'));
  const dotsWrap = hero.querySelector('.hero__dots');
  const prevBtn = hero.querySelector('[data-hero-prev]');
  const nextBtn = hero.querySelector('[data-hero-next]');
  if (slides.length === 0) return;

  let current = Math.max(0, slides.findIndex(s => s.classList.contains('is-active')));
  if (current === -1) current = 0;
  const AUTOPLAY_MS = 6000;
  let timer = null;

  // Build dots to match the number of slides found
  let dots = [];
  if (dotsWrap){
    dotsWrap.innerHTML = '';
    dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.className = 'hero__dot';
      b.type = 'button';
      b.setAttribute('aria-label', `Ke foto ${i + 1}`);
      b.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(b);
      return b;
    });
  }

  function render(){
    slides.forEach((s, i) => s.classList.toggle('is-active', i === current));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
  }

  function goTo(index){
    current = (index + slides.length) % slides.length;
    render();
    restart();
  }

  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  function restart(){
    if (timer) clearInterval(timer);
    timer = setInterval(next, AUTOPLAY_MS);
  }

  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  hero.addEventListener('mouseenter', () => timer && clearInterval(timer));
  hero.addEventListener('mouseleave', restart);

  render();
  if (slides.length > 1) restart();
})();
