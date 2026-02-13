// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    // Change icon
    const icon = menuBtn.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("ri-menu-line");
      icon.classList.add("ri-close-line");
    } else {
      icon.classList.remove("ri-close-line");
      icon.classList.add("ri-menu-line");
    }
  });

  // Close menu when clicking on a link
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = menuBtn.querySelector("i");
      icon.classList.remove("ri-close-line");
      icon.classList.add("ri-menu-line");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      const icon = menuBtn.querySelector("i");
      icon.classList.remove("ri-close-line");
      icon.classList.add("ri-menu-line");
    }
  });
}

// Scroll Reveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 200,
  reset: false,
};

// Initialize ScrollReveal if available
if (typeof ScrollReveal !== 'undefined') {
  // Header animations
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 300,
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  // Banner cards
  ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval: 200,
  });

  // Order cards
  ScrollReveal().reveal(".order__card", {
    ...scrollRevealOption,
    interval: 200,
  });

  // Event section
  ScrollReveal().reveal(".event__image img", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".event__details", {
    ...scrollRevealOption,
    origin: "right",
    delay: 300,
  });

  // Media section
  ScrollReveal().reveal(".media__content", {
    ...scrollRevealOption,
  });
}

// Smooth Scroll for Navigation Links
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

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Loading Animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '1';
  }, 100);
});
