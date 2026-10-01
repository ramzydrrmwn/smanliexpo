/* =========================================================
   sponsor.js
   Tab untuk beralih antara panel "Sponsor" dan "Media Partner".
   ========================================================= */

(function(){
  const tabs = document.querySelectorAll('.sponsor__tab');
  const panels = document.querySelectorAll('.sponsor__panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');

      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      panels.forEach(p => p.classList.toggle('is-active', p.id === target));
    });
  });
})();
