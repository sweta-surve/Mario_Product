/* ============================================================
   app.js — Full Logic
   ============================================================ */
const WA_NUMBER  = '919847262497';
const CALL_NUMBER = '+919847262497';

function waLink(name, code) {
  const text = encodeURIComponent(`Hello, I'm interested in ${name} (Code: ${code}). Please share more details.`);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

const WA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
const CALL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;

/* ── Product Card ────────────────────────────────────────── */
function createCard(product) {
  const catLabel = { gate:'Gate Light', wall:'Wall Light', hanging:'Hanging Light' }[product.category] || product.category;
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category;
  card.innerHTML = `
    <div class="card-image-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy"
           onerror="this.src='https://placehold.co/400x300/10101a/c9a84c?text=${encodeURIComponent(product.code)}';this.onerror=null;">
      <div class="card-overlay">
        <button class="btn-view" data-id="${product.id}">View Details</button>
      </div>
      <span class="category-badge">${catLabel}</span>
    </div>
    <div class="card-body">
      <p class="product-code">${product.code}</p>
      <h3 class="product-name">${product.name}</h3>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm btn-view" data-id="${product.id}">View Details</button>
        <a class="btn btn-wa btn-sm" href="${waLink(product.name, product.code)}" target="_blank" rel="noopener">
          ${WA_SVG} Enquire
        </a>
      </div>
    </div>`;
  return card;
}

/* ── Render Grid ─────────────────────────────────────────── */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? products : products.filter(p => p.category === filter);
  if (!list.length) {
    grid.innerHTML = `<p class="no-products">No products in this category yet. <a href="${waLink('your lighting products','CUSTOM')}" target="_blank">Ask us on WhatsApp →</a></p>`;
    return;
  }
  list.forEach((p, i) => {
    const card = createCard(p);
    card.style.animationDelay = `${i * 55}ms`;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.btn-view').forEach(btn =>
    btn.addEventListener('click', () => openModal(+btn.dataset.id))
  );
}

/* ── Filter Tabs ─────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

/* ── Modal ───────────────────────────────────────────────── */
const modal     = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeBtn  = document.querySelector('.close-modal');

function openModal(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  const catLabel = { gate:'Gate Light', wall:'Wall Light', hanging:'Hanging Light' }[p.category] || p.category;
  modalBody.innerHTML = `
    <div class="modal-image-wrap">
      <img src="${p.image}" alt="${p.name}"
           onerror="this.src='https://placehold.co/600x500/10101a/c9a84c?text=${encodeURIComponent(p.code)}';this.onerror=null;">
    </div>
    <div class="modal-info">
      <span class="category-badge" style="position:relative;top:auto;left:auto;display:inline-block;margin-bottom:4px;">${catLabel}</span>
      <p class="product-code modal-code">${p.code}</p>
      <h2 class="modal-title">${p.name}</h2>
      <p class="modal-desc">${p.desc || 'A premium handcrafted lighting piece from the Mario Products collection.'}</p>
      <ul class="modal-specs">
        <li><span>Material</span><span>Acrylic &amp; Metal</span></li>
        <li><span>Craftsmanship</span><span>80% Handmade</span></li>
        <li><span>Durability</span><span>10+ Years</span></li>
        <li><span>Customization</span><span>Available</span></li>
        <li><span>Origin</span><span>Made in Kerala</span></li>
      </ul>
      <div class="modal-actions">
        <a class="btn btn-primary btn-modal-wa" href="${waLink(p.name, p.code)}" target="_blank" rel="noopener">
          ${WA_SVG} WhatsApp Enquiry
        </a>
        <a class="btn btn-secondary btn-modal-call" href="tel:${CALL_NUMBER}">
          ${CALL_SVG} Call Now
        </a>
      </div>
    </div>`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Navbar Scroll ───────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50), { passive:true });

/* ── Hamburger ───────────────────────────────────────────── */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}));

/* ── Active Nav on Scroll ────────────────────────────────── */
const sections   = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting)
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
  });
}, { threshold: 0.35 }).observe
? (() => { const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    });
  }, { threshold: 0.35 }); sections.forEach(s => obs.observe(s)); })()
: null;

/* ── Scroll Reveal ───────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Particles ───────────────────────────────────────────── */
(function() {
  const container = document.querySelector('.particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${2+Math.random()*3}px;height:${2+Math.random()*3}px;animation-delay:${Math.random()*6}s;animation-duration:${4+Math.random()*6}s;`;
    container.appendChild(p);
  }
})();

/* ── Theme Toggle ────────────────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const savedTheme  = localStorage.getItem('mario-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeToggle.checked = dark;
}
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
themeToggle.addEventListener('change', () => {
  applyTheme(themeToggle.checked);
  localStorage.setItem('mario-theme', themeToggle.checked ? 'dark' : 'light');
});

/* ── WA Float Pulse ──────────────────────────────────────── */
setTimeout(() => document.querySelector('.whatsapp-float')?.classList.add('pulse-remind'), 6000);

/* ── Init ────────────────────────────────────────────────── */
renderProducts();

/* ── Hero photo fallback ─────────────────────────────────── */
(function() {
  const hero = document.querySelector('.hero');
  const photos = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=85',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=85',
    'https://images.unsplash.com/photo-1600210491892-03d54079b6ac?w=1920&q=85',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80',
  ];
  let idx = 0;
  function tryPhoto(url) {
    const img = new Image();
    img.onload  = () => { hero.style.backgroundImage = `url('${url}')`; };
    img.onerror = () => { idx++; if (photos[idx]) tryPhoto(photos[idx]); };
    img.src = url;
  }
  tryPhoto(photos[0]);
})();