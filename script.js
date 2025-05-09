// Animate sections when they appear in view
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, observerOptions);

sections.forEach(section => {
  revealOnScroll.observe(section);
});
