async function loadData() {
  const cacheBust = `?v=${Date.now()}`;
  const res = await fetch(`data.json${cacheBust}`);
  if (!res.ok) throw new Error('Nu pot incarca data.json');
  return await res.json();
}

function formatLei(n) {
  return new Intl.NumberFormat('ro-RO', { maximumFractionDigits: 0 }).format(n) + ' lei';
}

function formatDate(iso) {
  const d = new Date(iso);
  const luni = ['ian','feb','mar','apr','mai','iun','iul','aug','sep','oct','noi','dec'];
  return `${d.getDate()} ${luni[d.getMonth()]} ${d.getFullYear()}`;
}

function totalTaskuri(etape) {
  let total = 0, facute = 0;
  for (const et of etape) {
    for (const t of et.taskuri) {
      total++;
      if (t.facut) facute++;
    }
  }
  return { total, facute, procent: total ? Math.round(facute / total * 100) : 0 };
}

function totalDeviz(deviz) {
  let total = 0;
  for (const cat of deviz.categorii) {
    for (const item of cat.items) {
      total += item.total;
    }
  }
  return total;
}

function statusBadge(status) {
  const map = {
    'neinceput': { text: 'Neînceput', cls: 'badge-soft' },
    'in_curs': { text: 'În curs', cls: 'badge-amber' },
    'gata': { text: 'Gata', cls: 'badge-green' }
  };
  const s = map[status] || map['neinceput'];
  return `<span class="badge ${s.cls}">${s.text}</span>`;
}

function setActiveNav(pageName) {
  document.querySelectorAll('nav.main-nav a').forEach(a => {
    if (a.dataset.page === pageName) a.classList.add('active');
  });
}

function navHTML(currentPage) {
  const pages = [
    { id: 'index', name: 'Acasă', href: 'index.html' },
    { id: 'taskuri', name: 'Task-uri', href: 'taskuri.html' },
    { id: 'deviz', name: 'Deviz', href: 'deviz.html' },
    { id: 'jurnal', name: 'Jurnal', href: 'jurnal.html' },
    { id: 'poze', name: 'Poze', href: 'poze.html' },
    { id: 'furnizori', name: 'Furnizori', href: 'furnizori.html' }
  ];
  return pages.map(p =>
    `<a href="${p.href}" data-page="${p.id}"${p.id === currentPage ? ' class="active"' : ''}>${p.name}</a>`
  ).join('');
}

function headerHTML(currentPage) {
  return `
    <header class="site-header">
      <div class="brand">
        <span class="brand-mark">Gard la țară</span>
        <span class="brand-sub">— un proiect între joburi —</span>
      </div>
      <nav class="main-nav">${navHTML(currentPage)}</nav>
    </header>
  `;
}

function footerHTML() {
  return `
    <footer>
      Construit cu sapă, ciment și răbdare. <br>
      Cod: editează <a href="https://github.com">data.json</a> ca să actualizezi orice.
    </footer>
  `;
}
