// LuxeDrive Indonesia - Shared JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }
  
  // ===== HEADER SHADOW ON SCROLL =====
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });
  }
  
  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // ===== FADE IN ON SCROLL =====
  var fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  }
  
  // ===== FILTER BUTTONS (Katalog) =====
  var filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterButtons.forEach(function(b) {
          b.classList.remove('bg-primary', 'text-white');
          b.classList.add('border-outline', 'text-on-surface-variant');
        });
        btn.classList.remove('border-outline', 'text-on-surface-variant');
        btn.classList.add('bg-primary', 'text-white');
      });
    });
  }
  
  // ===== PREVENT DEAD LINKS =====
  document.querySelectorAll('a[href="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });
  
});
