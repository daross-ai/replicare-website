// Minimal JS: mobile nav toggle
function makeToggles(){
  document.querySelectorAll('#nav-toggle, [id^="nav-toggle-"]').forEach(btn=>{
    const targetId = btn.getAttribute('aria-controls') || 'nav-list';
    const nav = document.getElementById(targetId);
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  });
}
window.addEventListener('DOMContentLoaded', makeToggles);