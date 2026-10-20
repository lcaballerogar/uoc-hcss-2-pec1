/**
 * Case index: marks the link of the section being read.
 *
 * A section becomes current once its top crosses a line at 35% of the
 * viewport height, so the index changes when the new section is the
 * one in view, not when the previous one has almost disappeared.
 * The styles read aria-current="true", which also tells screen
 * readers which link is current.
 */

const TRIGGER_RATIO = 0.35;

export function initCaseIndex() {
  const links = document.querySelectorAll('.case-index__link');

  // Pairs each link with the section its href points to (#overview…)
  const items = [...links]
    .map((link) => ({ link, section: document.querySelector(link.hash) }))
    .filter(({ section }) => section);

  if (!items.length) return;

  function updateCurrentLink() {
    const triggerLine = window.innerHeight * TRIGGER_RATIO;
    let current = null;

    items.forEach(({ section }) => {
      if (section.getBoundingClientRect().top <= triggerLine) current = section;
    });

    items.forEach(({ link, section }) => {
      if (section === current) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', updateCurrentLink, { passive: true });
  updateCurrentLink();
}