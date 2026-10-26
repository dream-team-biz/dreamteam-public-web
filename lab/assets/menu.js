/* The menu's panels: close on Escape, on a click outside and when focus leaves. Without this script each
   panel still opens and closes from its own button. */
(() => {
  const opened = () => document.querySelectorAll('.site-header details[open]');
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    opened().forEach((d) => { d.open = false; d.querySelector('summary').focus(); });
  });
  const closeOutside = (e) => { opened().forEach((d) => { if (!d.contains(e.target)) d.open = false; }); };
  document.addEventListener('click', closeOutside);
  document.addEventListener('focusin', closeOutside);
})();
