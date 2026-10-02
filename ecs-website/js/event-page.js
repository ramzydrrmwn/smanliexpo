/* =========================================================
   event-page.js
   Tab pilihan tahun di halaman Event (2024-2027). Setiap tab
   menampilkan panel berisi tema, our team, dan dokumentasi
   tahun tersebut. Untuk menambah tahun baru di kemudian hari,
   duplikasi satu <button class="year-tab"> dan satu
   <div class="year-panel"> pasangannya di event.html.
   ========================================================= */

(function(){
  const tabs = document.querySelectorAll('.year-tab');
  const panels = document.querySelectorAll('.year-panel');
  if (!tabs.length) return;

  function activate(year, updateHash){
    tabs.forEach(t => t.classList.toggle('is-active', t.getAttribute('data-year') === year));
    panels.forEach(p => p.classList.toggle('is-active', p.getAttribute('data-year') === year));
    if (updateHash) history.replaceState(null, '', `#${year}`);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab.getAttribute('data-year'), true));
  });

  // Buka tahun sesuai hash URL (mis. event.html#2026) kalau ada, kalau tidak pakai tab yang sudah is-active di HTML
  const hashYear = location.hash.replace('#', '');
  const validYears = Array.from(tabs).map(t => t.getAttribute('data-year'));
  if (validYears.includes(hashYear)){
    activate(hashYear, false);
  }
})();
