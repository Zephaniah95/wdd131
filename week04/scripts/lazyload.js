// Display last modified date in footer
const lastModSpan = document.getElementById('lastModified');
if (lastModSpan) lastModSpan.textContent = document.lastModified;

// Add .in-view class when the image comes into the viewport (IntersectionObserver).
// We keep native lazy loading (loading="lazy") — this script only triggers the fade animation.
(function () {
  const imgs = document.querySelectorAll('main img.fade-in');

  if (!('IntersectionObserver' in window)) {
    // Fallback: if no IntersectionObserver, reveal all (still uses native loading)
    imgs.forEach(i => i.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;

      // Only show animation after the image has painted (loaded).
      const reveal = () => {
        img.classList.add('in-view');
      };

      if (img.complete && img.naturalWidth !== 0) {
        // already loaded
        reveal();
      } else {
        // wait until it loads so the fade from black shows the actual image content
        img.addEventListener('load', reveal, { once: true });
        // also handle error (avoid stuck invisible)
        img.addEventListener('error', () => img.classList.add('in-view'), { once: true });
      }

      // We only need to handle each image once
      observer.unobserve(img);
    });
  }, {
    root: null,
    rootMargin: '0px 0px 150px 0px', // start slightly early for a smoother experience
    threshold: 0.05
  });

  imgs.forEach(img => io.observe(img));
})();
