/* Desert Ridge Epoxy — interactions */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var one = function (s, c) { return (c || document).querySelector(s); };
  var all = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Header shadow */
  var top = one('[data-top]');
  var shade = function () { if (top) top.classList.toggle('is-shadow', window.scrollY > 10); };
  window.addEventListener('scroll', shade, { passive: true }); shade();

  /* Services submenu */
  all('[data-sub]').forEach(function (b) {
    var li = b.parentElement;
    var set = function (v) { li.classList.toggle('is-open', v); b.setAttribute('aria-expanded', String(v)); };
    b.addEventListener('click', function (e) { e.stopPropagation(); set(!li.classList.contains('is-open')); });
    li.addEventListener('mouseenter', function () { if (matchMedia('(hover:hover)').matches) set(true); });
    li.addEventListener('mouseleave', function () { if (matchMedia('(hover:hover)').matches) set(false); });
    document.addEventListener('click', function (e) { if (!li.contains(e.target)) set(false); });
    li.addEventListener('keydown', function (e) { if (e.key === 'Escape') { set(false); b.focus(); } });
  });

  /* Header consultation popover */
  var pb = one('[data-pop]'), pc = one('[data-pop-card]');
  if (pb && pc) {
    var setPop = function (v) {
      pc.hidden = !v; pc.classList.toggle('is-open', v); pb.setAttribute('aria-expanded', String(v));
      if (v) setTimeout(function () { var i = one('input', pc); i && i.focus(); }, 60);
    };
    pb.addEventListener('click', function (e) { e.stopPropagation(); setPop(pc.hidden); });
    pc.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () { if (!pc.hidden && !pc.querySelector('.is-wait')) setPop(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pc.hidden) { setPop(false); pb.focus(); } });
  }

  /* Mobile sheet */
  var tg = one('[data-toggle]'), sh = one('[data-sheet]');
  if (tg && sh) tg.addEventListener('click', function () {
    var open = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', String(open)); sh.hidden = !open;
  });

  /* Forms */
  var check = {
    name: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your name.'; },
    phone: function (v) { return v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a 10-digit phone number.'; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email.'; },
    project: function (v) { return v ? '' : 'Please select a project type.'; }
  };
  var test = function (el) {
    var fn = check[el.name]; if (!fn) return true;
    var msg = fn(el.value || ''), row = el.closest('.cf__row'), out = row && one('.cf__msg', row);
    if (row) row.classList.toggle('is-wrong', !!msg);
    if (out) out.textContent = msg;
    if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    return !msg;
  };
  all('[data-lead-form]').forEach(function (f) {
    var st = one('.cf__status', f);
    all('input,select', f).forEach(function (el) {
      el.addEventListener('blur', function () { if (el.value) test(el); });
      ['input', 'change'].forEach(function (t) { el.addEventListener(t, function () { if (el.closest('.is-wrong')) test(el); }); });
    });
    var tel = one('input[type=tel]', f);
    tel && tel.addEventListener('input', function () {
      var d = tel.value.replace(/\D/g, ''); if (d.length === 11 && d[0] === '1') d = d.slice(1); d = d.slice(0, 10);
      if (d.length >= 7) tel.value = '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
    });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var wrong = all('input[name],select[name]', f).filter(function (el) { return !test(el); });
      if (wrong.length) { st.className = 'cf__status bad'; st.textContent = 'Please review the highlighted fields.'; wrong[0].focus(); return; }
      var data = {}; new FormData(f).forEach(function (v, k) { data[k] = v; }); data.page = location.pathname;
      f.classList.add('is-wait'); st.className = 'cf__status'; st.textContent = 'Sending…';
      fetch(f.getAttribute('action'), { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.ok, j: j }; }, function () { return { ok: false, j: {} }; }); })
        .then(function (res) {
          f.classList.remove('is-wait');
          if (res.ok) { f.classList.add('is-done'); st.className = 'cf__status good'; st.textContent = 'Thank you, ' + data.name.split(' ')[0] + '. Your request has been received — we’ll respond within one business day.'; }
          else { st.className = 'cf__status bad'; st.textContent = res.j.error || 'Something went wrong. Please try again or call.'; }
        })
        .catch(function () { f.classList.remove('is-wait'); st.className = 'cf__status bad'; st.textContent = 'Connection problem. Please try again or call.'; });
    });
  });

  /* Reveals */
  var items = all('.rise, .reveal-img');
  if (still || !('IntersectionObserver' in window)) items.forEach(function (i) { i.classList.add('on'); });
  else {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    items.forEach(function (i) {
      var sib = i.parentElement ? all(':scope > .rise', i.parentElement) : [], n = sib.indexOf(i);
      if (n > 0) i.style.setProperty('--w', Math.min(n * 0.07, 0.42) + 's');
      io.observe(i);
    });
  }

  /* Parallax on vista */
  var vistas = all('.vista');
  if (!still && vistas.length) {
    var t = false;
    var move = function () { vistas.forEach(function (v) { var r = v.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; v.style.setProperty('--vy', ((r.top + r.height / 2 - innerHeight / 2) * -0.16).toFixed(1) + 'px'); }); t = false; };
    window.addEventListener('scroll', function () { if (!t) { t = true; requestAnimationFrame(move); } }, { passive: true }); move();
  }

  /* Counters */
  if (!still && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; co.unobserve(e.target);
        var el = e.target, end = +el.dataset.count, s = null; if (!end) return;
        var tick = function (ts) { s = s || ts; var k = Math.min((ts - s) / 1200, 1); el.textContent = Math.max(1, Math.round(end * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    all('[data-count]').forEach(function (c) { co.observe(c); });
  }

  /* Lightbox */
  all('[data-lightbox] figure').forEach(function (fig) {
    fig.tabIndex = 0; fig.setAttribute('role', 'button');
    var open = function () {
      var im = one('img', fig), src = (im.getAttribute('srcset') || '').split(',').pop().trim().split(' ')[0] || im.src;
      var box = document.createElement('div'); box.className = 'box'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', im.alt);
      box.innerHTML = '<img alt=""><button type="button" aria-label="Close">×</button>';
      one('img', box).src = src; one('img', box).alt = im.alt;
      document.body.appendChild(box);
      var close = function () { box.remove(); document.removeEventListener('keydown', k); fig.focus(); };
      var k = function (e) { if (e.key === 'Escape') close(); };
      box.addEventListener('click', function (e) { if (e.target === box || e.target.tagName === 'BUTTON') close(); });
      document.addEventListener('keydown', k); one('button', box).focus();
    };
    fig.addEventListener('click', open);
    fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
})();
