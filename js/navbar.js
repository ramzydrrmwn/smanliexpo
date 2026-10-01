/* =========================================================
   navbar.js
   ========================================================= */

(function(){
  const navbar  = document.querySelector('.navbar');
  const toggle  = document.querySelector('.navbar__toggle');
  const mobile  = document.querySelector('.navbar__mobile');
  if (!navbar) return;

  /* ---- Solid background after scrolling past the hero ---- */
  const SCROLL_THRESHOLD = 40;
  function onScroll(){
    navbar.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  if (toggle && mobile){
    toggle.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobile.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Active link: highlight based on current page & section in view ---- */
  const links = document.querySelectorAll('.navbar__links a, .navbar__mobile a');
  const currentPage = (location.pathname.split('/').pop() || 'index.html');

  function clearActive(){
    links.forEach(l => l.classList.remove('is-active'));
  }

  function setActiveByHref(href){
    clearActive();
    links.forEach(l => { if (l.getAttribute('href') === href) l.classList.add('is-active'); });
  }

  // Cross-page links (e.g. Event page) — match by filename
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.indexOf('#') === -1 && href.replace('./','') === currentPage){
      link.classList.add('is-active');
    }
  });

  // In-page scroll spy (only relevant sections that exist on this page)
  const sectionIds = Array.from(links)
    .map(l => (l.getAttribute('href') || '').split('#')[1])
    .filter(Boolean);

  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (sections.length){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          setActiveByHref(`#${entry.target.id}`);
          // also try the "index.html#id" form used on the Event page
          setActiveByHref(`index.html#${entry.target.id}`);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
  }
})();
