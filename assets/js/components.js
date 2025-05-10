// Alpine.js components
document.addEventListener('alpine:init', () => {
  // Navigation component
  Alpine.data('navigation', () => ({
    isOpen: false,
    toggle() {
      this.isOpen = !this.isOpen;
      // Prevent body scroll when menu is open
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    },
    // Close menu when clicking outside
    init() {
      document.addEventListener('click', (e) => {
        if (this.isOpen && !e.target.closest('.nav')) {
          this.isOpen = false;
          document.body.style.overflow = '';
        }
      });
      // Close menu on window resize if open
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && this.isOpen) {
          this.isOpen = false;
          document.body.style.overflow = '';
        }
      });
    }
  }));

  // Modal component
  Alpine.data('modal', () => ({
    isOpen: false,
    open() {
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    },
    close() {
      this.isOpen = false;
      document.body.style.overflow = '';
    }
  }));

  // Tabs component
  Alpine.data('tabs', (defaultTab) => ({
    activeTab: defaultTab,
    setTab(tab) {
      this.activeTab = tab;
    }
  }));

  // Accordion component
  Alpine.data('accordion', () => ({
    activeItem: null,
    toggleItem(item) {
      this.activeItem = this.activeItem === item ? null : item;
    }
  }));

  // Carousel component
  Alpine.data('carousel', (options = {}) => ({
    currentIndex: 0,
    items: [],
    autoplay: options.autoplay || false,
    interval: options.interval || 5000,
    timer: null,

    init() {
      this.items = this.$el.querySelectorAll('.carousel-item');
      if (this.autoplay) {
        this.startAutoplay();
      }
    },

    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },

    goTo(index) {
      this.currentIndex = index;
    },

    startAutoplay() {
      this.timer = setInterval(() => this.next(), this.interval);
    },

    stopAutoplay() {
      clearInterval(this.timer);
    }
  }));

  // Form validation component
  Alpine.data('form', () => ({
    errors: {},
    isValid: true,

    validate() {
      this.errors = {};
      this.isValid = true;

      // Get all required fields
      const requiredFields = this.$el.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          this.errors[field.name] = 'This field is required';
          this.isValid = false;
        }
      });

      // Email validation
      const emailFields = this.$el.querySelectorAll('[type="email"]');
      emailFields.forEach(field => {
        if (field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          this.errors[field.name] = 'Please enter a valid email address';
          this.isValid = false;
        }
      });

      return this.isValid;
    },

    async submit() {
      if (this.validate()) {
        // Add your form submission logic here
        const formData = new FormData(this.$el);
        try {
          // Example submission
          const response = await fetch(this.$el.action, {
            method: this.$el.method,
            body: formData
          });
          if (response.ok) {
            // Handle success
            this.$el.reset();
            this.errors = {};
          }
        } catch (error) {
          console.error('Form submission error:', error);
        }
      }
    }
  }));

  // Toast notification component
  Alpine.data('toast', () => ({
    messages: [],
    add(message, type = 'info') {
      const id = Date.now();
      this.messages.push({ id, message, type });
      setTimeout(() => this.remove(id), 5000);
    },
    remove(id) {
      this.messages = this.messages.filter(msg => msg.id !== id);
    }
  }));

  // Dark mode component
  Alpine.data('darkMode', () => ({
    isDark: localStorage.getItem('darkMode') === 'true',
    toggle() {
      this.isDark = !this.isDark;
      localStorage.setItem('darkMode', this.isDark);
      document.documentElement.classList.toggle('dark-mode', this.isDark);
    },
    init() {
      // Initialize dark mode on page load
      if (this.isDark) {
        document.documentElement.classList.add('dark-mode');
      }
    }
  }));
}); 