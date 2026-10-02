/* =========================================================
   countdown.js
   Hitung mundur menuju hari-H event yang sedang aktif.
   Ganti tanggal target di index.html pada atribut
   data-countdown-target="YYYY-MM-DDTHH:mm:ss+07:00"
   ========================================================= */

(function(){
  const el = document.querySelector('[data-countdown]');
  if (!el) return;

  const targetStr = el.getAttribute('data-countdown-target');
  const target = new Date(targetStr).getTime();

  const daysEl = el.querySelector('[data-cd-days]');
  const hoursEl = el.querySelector('[data-cd-hours]');
  const minsEl = el.querySelector('[data-cd-mins]');
  const secsEl = el.querySelector('[data-cd-secs]');

  function pad(n){ return String(n).padStart(2, '0'); }

  function tick(){
    const now = Date.now();
    const diff = target - now;

    if (isNaN(target) || diff <= 0){
      el.innerHTML = '<p style="font-family:var(--font-mono);font-size:13px;color:var(--gold);letter-spacing:.06em;">Acara sedang / telah berlangsung — sampai jumpa di venue!</p>';
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(mins);
    if (secsEl) secsEl.textContent = pad(secs);
  }

  tick();
  const interval = setInterval(tick, 1000);
})();
