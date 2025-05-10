// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-out-cubic'
    });
  }

  // Initial page load animation
  gsap.to('body', {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

  // Smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 70
          },
          ease: "power2.inOut"
        });
      }
    });
  });

  // Initialize all animations
  initializeAnimations();
});

// Function to initialize all animations
function initializeAnimations() {
  // Parallax effect for sections
  gsap.utils.toArray('.parallax-section').forEach(section => {
    gsap.to(section, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Stagger animations for cards
  gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Text reveal animation
  gsap.utils.toArray('.reveal-text').forEach(text => {
    const chars = text.textContent.split('');
    text.textContent = '';
    
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = 0;
      text.appendChild(span);
      
      gsap.to(span, {
        scrollTrigger: {
          trigger: text,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        duration: 0.1,
        delay: i * 0.05,
        ease: "power2.out"
      });
    });
  });

  // Smooth reveal for images
  gsap.utils.toArray('.reveal-image').forEach(image => {
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  });

  // Initialize counters
  initializeCounters();
}

// Function to handle counter animations
function initializeCounters() {
  gsap.utils.toArray('.counter').forEach(counter => {
    ScrollTrigger.create({
      trigger: counter,
      start: "top bottom-=100",
      onEnter: () => {
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
      }
    });
  });
}

// Counter animation function
function animateCounter(element, target) {
  const duration = 2;
  const start = 0;
  const increment = target / (duration * 60);
  let current = start;
  
  const counter = setInterval(() => {
    current += increment;
    element.textContent = Math.floor(current);
    
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    }
  }, 1000 / 60);
} 