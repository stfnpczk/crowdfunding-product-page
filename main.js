//mobile navigation modal
const hamburger = document.getElementById("hamburger");
const navModal = document.getElementById("mobile-nav");
const overlay = document.getElementById("overlay");

const toggleNavigation = () => {
  hamburger.classList.toggle("header__hamburger--active");
  navModal.classList.toggle("header__navigation--open");
  overlay.classList.toggle("overlay--active");
};

hamburger.addEventListener("click", toggleNavigation);

//bookmark functionality
const bookmark = document.getElementById("bookmark");

const toggleBookmark = () => {
  bookmark.classList.toggle("intro__bookmark--set");
  if (bookmark.classList.contains("intro__bookmark--set")) {
    bookmark.querySelector("span").textContent = "Bookmarked";
  } else {
    bookmark.querySelector("span").textContent = "Bookmark";
  }
};

bookmark.addEventListener("click", toggleBookmark);
