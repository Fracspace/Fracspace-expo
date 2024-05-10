function toggleMenu() {
  const icon = document.querySelector(".hamburger-icon");
  var menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('show');
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function navigate() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

