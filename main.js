//mobile navigation modal
const hamburger = document.getElementById("hamburger");
const navModal = document.getElementById("mobile-nav");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");

const toggleNavigation = () => {
  hamburger.classList.toggle("header__hamburger--active");
  navModal.classList.toggle("header__navigation--open");
  overlay.classList.toggle("overlay--active");
  body.classList.toggle("body__overflow");
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

// display/close select modal
modal = document.getElementById("modal");
form = document.getElementById("form");
selectButtons = document.querySelectorAll(".select");
closeButton = document.getElementById("close-button");


//?? DRY 
const displayModal = () => {
  modal.classList.add("modal--show");
  form.classList.add("modal__form--show");
  body.classList.add("body__overflow");
};
selectButtons.forEach((button) => {
  button.addEventListener("click", displayModal);
});

const closeModal = () => {
  modal.classList.remove("modal--show");
  form.classList.remove("modal__form--show");
  body.classList.remove("body__overflow");
};
closeButton.addEventListener("click", closeModal);

const radioButtons = document.querySelectorAll(".modal__radio-button");

//display pledge input if radio button is checked
const displayPledgeInput = () => {
  radioButtons.forEach((radio) => {
    if (radio.checked) {
      radio.closest(".modal__reward").classList.add("checked");
    } else {
      radio.closest(".modal__reward").classList.remove("checked");
    }
  });
};

radioButtons.forEach((radio) => {
  radio.addEventListener("click", displayPledgeInput);
});
