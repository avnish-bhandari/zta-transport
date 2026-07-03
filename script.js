const navbar = document.querySelector(".custom-navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector("#navMenu");
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

function handleScroll(){
  if (navbar) {
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 8);
  }
  
  if (scrollToTopBtn) {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }
}

handleScroll();
window.addEventListener("scroll", handleScroll, { passive: true });

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (!navMenu || !navMenu.classList.contains("show")) return;

    if (window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      return;
    }

    navMenu.classList.remove("show");
  });
});