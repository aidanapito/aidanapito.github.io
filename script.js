// Menu toggle functionality
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Back to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Smooth scroll animations for sections
function animateOnScroll() {
  const sections = document.querySelectorAll('.section-container, .about-containers, .color-container');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.8) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Initial animation check
  animateOnScroll();
  
  // Add scroll event listener for animations
  window.addEventListener('scroll', animateOnScroll);
  
  // Add smooth hover effects for project containers
  const projectContainers = document.querySelectorAll('.color-container');
  projectContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    container.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Enhanced navigation smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});