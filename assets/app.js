document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
