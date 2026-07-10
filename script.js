// Small typing effect for the terminal in the hero section.
// Respects users who've asked for reduced motion.

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const line = "developer-in-progress, learning Python. Aiming at becoming an AI engineer";
const target = document.getElementById('typedLine');

if (target) {
  if (prefersReducedMotion) {
    target.textContent = line;
  } else {
    let i = 0;
    const type = () => {
      if (i <= line.length) {
        target.textContent = line.slice(0, i);
        i++;
        setTimeout(type, 45);
      }
    };
    type();
  }
}