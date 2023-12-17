const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
