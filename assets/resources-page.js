const allResources = window.NAMMA_TOPPERS_RESOURCES || [];

const grid = document.getElementById('resourceGrid');
const count = document.getElementById('resultCount');
const empty = document.getElementById('emptyState');
const classLabel = document.getElementById('resourceClassLabel');
const mediumLabel = document.getElementById('resourceMediumLabel');
const sectionTitle = document.getElementById('resourceSectionTitle');

const params = new URLSearchParams(location.search);

let selectedClass = params.get('class') || '1';
let selectedType = params.get('type') || 'Question Paper';

const classTabs = [...document.querySelectorAll('.resource-class-tab')];
const typeTabs = [...document.querySelectorAll('.selector-action')];

function mediumForClass(cls) {
  return cls === '6' ? 'Kannada Medium' : 'Bilingual Resources';
}

function availableSubjects(cls) {
  return cls === '6'
    ? ['Kannada','English','Hindi','Mathematics','Science','Social Science']
    : ['Kannada','English','Mathematics','EVS'];
}

function syncTabs() {
  classTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.class === selectedClass));
  typeTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.type === selectedType));
}

function render() {
  syncTabs();

  const medium = mediumForClass(selectedClass);
  classLabel.textContent = `Class ${selectedClass} • FA-1`;
  mediumLabel.textContent = medium;
  sectionTitle.textContent = `Class ${selectedClass} • FA-1 ${selectedType === 'Question Paper' ? 'Question Papers' : 'Answer Keys'}`;

  const subjects = availableSubjects(selectedClass);

  const filtered = allResources.filter(r =>
    r.class === selectedClass &&
    r.type === selectedType &&
    subjects.includes(r.subject)
  );

  count.textContent = `${filtered.length} subject${filtered.length === 1 ? '' : 's'}`;
  empty.hidden = filtered.length !== 0;

  grid.innerHTML = filtered.map(r => `
    <article class="simple-resource-card">
      <div class="simple-card-top">
        <span class="subject-mark">${r.subject.charAt(0)}</span>
        <div>
          <span class="simple-medium">${medium}</span>
          <h3>${r.subject}</h3>
        </div>
      </div>

      <div class="simple-card-meta">
        <span>FA-1 2026–27</span>
        <span>${r.type}</span>
      </div>

      <a class="open-resource-btn ${r.href === '#' ? 'disabled' : ''}"
         href="${r.href}"
         ${r.href === '#' ? 'onclick="return false;" aria-disabled="true"' : 'target="_blank" rel="noopener"'}>
         ${r.href === '#' ? 'File Coming Soon' : 'Open PDF'}
      </a>
    </article>
  `).join('');
}

classTabs.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedClass = btn.dataset.class;
    params.set('class', selectedClass);
    params.set('type', selectedType);
    history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
    render();
  });
});

typeTabs.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedType = btn.dataset.type;
    params.set('class', selectedClass);
    params.set('type', selectedType);
    history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
    render();
  });
});

render();
