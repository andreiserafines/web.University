// Mobile menu
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Scrolled
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY >= window.innerHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
