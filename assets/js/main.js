// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-out-cubic'
    });
  }

  // Add animation classes to elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(element => {
    const animation = element.getAttribute('data-animate');
    element.classList.add('animate-fade-up', animation);
  });

  // Initialize intersection observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document.querySelectorAll('.animate-fade-up, [data-aos]').forEach((el) => {
    observer.observe(el);
  });
}); 