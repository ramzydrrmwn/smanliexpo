/* =========================================================
   scroll-reveal.js
   Memberi elemen berkelas ".reveal" transisi muncul halus
   saat pengguna scroll sampai ke bagian tersebut.
   ========================================================= */

(function(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
})();
