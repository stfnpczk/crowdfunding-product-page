const hamburger = document.getElementById("hamburger");
const navModal = document.getElementById("mobile-nav");
const overlay = document.getElementById("overlay")

const toggleNavigation = () => {
  hamburger.classList.toggle("header__hamburger--active");
  navModal.classList.toggle("header__navigation--open");
  overlay.classList.toggle("overlay--active");
};

hamburger.addEventListener("click", toggleNavigation);
