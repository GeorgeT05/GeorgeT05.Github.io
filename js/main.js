/* Main JavaScript for Portfolio Website */

(function () {
  "use strict";

  /* --- Mobile Navigation Toggle --- */
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      navList.classList.toggle("nav__list--open");
    });

    // Close menu when a link is clicked
    navList.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("nav__list--open");
      });
    });
  }

  /* --- Scroll Reveal Animation --- */
  function initReveal() {
    var elements = document.querySelectorAll(
      ".card, .timeline__item, .certs__item"
    );

    elements.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Active nav link highlight on scroll --- */
  function initActiveNav() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav__link");

    function setActive() {
      var scrollY = window.scrollY + 80;

      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove("nav__link--active");
            if (link.getAttribute("href") === "#" + id) {
              link.classList.add("nav__link--active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  /* --- Initialise --- */
  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initActiveNav();
  });
})();
