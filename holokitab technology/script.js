const allSections = document.getElementsByClassName('slider');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});
console.log(allSections)
Array.from(allSections).forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});



