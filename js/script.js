
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  
  mobileNavClose.addEventListener('click', closeMobileMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  // Hero slider functionality
  const slides = document.querySelectorAll('.slide');
  const nextSlide = document.getElementById('next-slide');
  const prevSlide = document.getElementById('prev-slide');
  const sliderDots = document.getElementById('slider-dots');
  let currentSlide = 0;
  
  // Create dots for each slide
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    sliderDots.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  // Initialize automatic slide change
  let slideInterval = setInterval(nextSlideAuto, 5000);
  
  function nextSlideAuto() {
    goToSlide((currentSlide + 1) % slides.length);
  }
  
  function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlideAuto, 5000);
  }
  
  nextSlide.addEventListener('click', function() {
    goToSlide((currentSlide + 1) % slides.length);
    resetSlideInterval();
  });
  
  prevSlide.addEventListener('click', function() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
    resetSlideInterval();
  });
  
  function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = slideIndex;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  // Active navigation link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', highlightNavLink);
  
  function highlightNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');
  const submitText = document.getElementById('submit-text');
  const submitLoading = document.getElementById('submit-loading');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      submitText.style.display = 'none';
      submitLoading.style.display = 'inline-flex';
      
      // Get form data
      const formData = new FormData(contactForm);
      
      // Send form data using fetch
      fetch(contactForm.action, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Hide loading state
        submitText.style.display = 'inline-flex';
        submitLoading.style.display = 'none';
        
        if (data.success) {
          // Show success message
          formSuccess.style.display = 'block';
          formError.style.display = 'none';
          contactForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 5000);
        } else {
          // Show error message
          formSuccess.style.display = 'none';
          formError.style.display = 'block';
        }
      })
      .catch(error => {
        // Hide loading state
        submitText.style.display = 'inline-flex';
        submitLoading.style.display = 'none';
        
        // Show error message
        formSuccess.style.display = 'none';
        formError.style.display = 'block';
        console.error('Error:', error);
      });
    });
  }
  
  // Animation on scroll (simple version)
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkIfInView() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;
    
    animatedElements.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;
      
      // Check if element is in viewport
      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition
      ) {
        element.classList.add('animate');
      }
    });
  }
  
  window.addEventListener('scroll', checkIfInView);
  window.addEventListener('resize', checkIfInView);
  window.addEventListener('load', checkIfInView);
  
  // Initial check for elements in view
  checkIfInView();
});
