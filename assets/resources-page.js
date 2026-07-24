const allResources = window.NAMMA_TOPPERS_RESOURCES || [];
const grid = document.getElementById('resourceGrid');
const count = document.getElementById('resultCount');
const empty = document.getElementById('emptyState');
const search = document.getElementById('searchInput');
const classFilter = document.getElementById('classFilter');
const subjectFilter = document.getElementById('subjectFilter');
const typeFilter = document.getElementById('typeFilter');
const clearBtn = document.getElementById('clearFilters');

const params = new URLSearchParams(location.search);
if (params.get('class')) classFilter.value = params.get('class');
if (params.get('subject')) subjectFilter.value = params.get('subject');

function render() {
  const q = search.value.trim().toLowerCase();
  const c = classFilter.value;
  const s = subjectFilter.value;
  const t = typeFilter.value;

  const filtered = allResources.filter(r => {
    const hay = `${r.title} ${r.subject} ${r.type} ${r.description}`.toLowerCase();
    return (!q || hay.includes(q)) &&
           (!c || r.class === c) &&
           (!s || r.subject === s) &&
           (!t || r.type === t);
  });

  count.textContent = `${filtered.length} resource${filtered.length === 1 ? '' : 's'}`;
  empty.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(r => `
    <article class="resource-card">
      <div class="resource-meta">
        <span class="pill">${r.class === "10" ? "SSLC" : "Class " + r.class}</span>
        <span class="pill dark">${r.subject}</span>
        <span class="pill dark">${r.type}</span>
      </div>
      <div>
        <h3>${r.title}</h3>
        <p>${r.description}</p>
      </div>
      <div class="card-actions">
        <a class="download-btn" href="${r.href}" ${r.href === "#" ? 'onclick="return false;"' : 'download'}>${r.format}</a>
        <a class="view-btn" href="${r.href}" ${r.href === "#" ? 'onclick="return false;"' : 'target="_blank" rel="noopener"'}>View</a>
      </div>
    </article>
  `).join('');
}
[search,classFilter,subjectFilter,typeFilter].forEach(el => el.addEventListener('input', render));
clearBtn.addEventListener('click', () => {
  search.value = ''; classFilter.value=''; subjectFilter.value=''; typeFilter.value='';
  history.replaceState({}, '', 'resources.html');
  render();
});
render();
