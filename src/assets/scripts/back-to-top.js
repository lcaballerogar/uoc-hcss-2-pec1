/**
 * Back to top: shows the button once the reader no longer needs the index.
 *
 * - Below 1024px the index sits above the content, so the button appears
 *   once the index has scrolled out of view.
 * - From 1024px the index stays visible in the sticky sidebar, so the
 *   button appears after scrolling one viewport height.
 *
 * The styles read data-visible="true". Position near the footer is handled
 * by CSS (position: sticky), not here.
 */

const desktop = window.matchMedia('(min-width: 1024px)');

export function initBackToTop() {
  const button = document.querySelector('.back-to-top');
  const index = document.querySelector('.case-index');
  if (!button || !index) return;

  let frame = 0;

  function update() {
    frame = 0;

    const visible = desktop.matches
      ? window.scrollY > window.innerHeight
      : index.getBoundingClientRect().bottom < 0;

    button.dataset.visible = String(visible);
  }

  // Runs update() at most once per frame, however often scroll fires
  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
}