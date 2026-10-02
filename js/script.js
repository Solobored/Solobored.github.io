// Subtle active-link highlight as the user scrolls through sections.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

if (sections.length && navLinks.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.style.color = link.getAttribute("href") === `#${id}` ? "var(--paper)" : "";
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

// Mobile navigation toggle — added after usability testing showed the nav
// menu had no way to open on small screens.
const navToggle = document.querySelector(".nav-toggle");
const navLinksPanel = document.querySelector(".nav-links");

if (navToggle && navLinksPanel) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinksPanel.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinksPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksPanel.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

