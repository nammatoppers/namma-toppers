document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());


// Homepage class selector
const homeClassTabs = [...document.querySelectorAll('.class-tab')];
const selectedClassTitle = document.getElementById('selectedClassTitle');
const selectedClassMedium = document.getElementById('selectedClassMedium');
const qpButton = document.getElementById('qpButton');
const keyButton = document.getElementById('keyButton');
const classNote = document.getElementById('classNote');

if (homeClassTabs.length && selectedClassTitle && qpButton && keyButton) {
  function setHomeClass(cls) {
    homeClassTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.class === cls));
    selectedClassTitle.textContent = `Class ${cls}`;

    if (cls === '6') {
      selectedClassMedium.textContent = 'Kannada Medium';
      classNote.textContent = 'Class 6: Kannada Medium • All available subjects';
    } else {
      selectedClassMedium.textContent = 'Bilingual Resources';
      classNote.textContent = 'Classes 1–5: Bilingual resources';
    }

    qpButton.href = `resources.html?class=${cls}&type=Question%20Paper`;
    keyButton.href = `resources.html?class=${cls}&type=Answer%20Key`;
  }

  homeClassTabs.forEach(btn => {
    btn.addEventListener('click', () => setHomeClass(btn.dataset.class));
  });
}
