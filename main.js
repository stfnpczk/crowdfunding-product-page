//mobile navigation modal
const hamburger = document.getElementById("hamburger");
const navModal = document.getElementById("header__nav-items");
const overlay = document.getElementById("overlay");
const navItems = document.querySelector(".header__nav-items");

const toggleNavigation = () => {
  hamburger.classList.toggle("header__hamburger--active");
  navItems.classList.toggle("open");
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

// display/close select modal
modal = document.getElementById("modal");
form = document.getElementById("form");
selectButtons = document.querySelectorAll(".select");
closeButton = document.getElementById("close-button");

//?? DRY
const displayModal = () => {
  document.body.classList.add("body__overflow");
  form.classList.add("modal__form--show");
  modal.classList.add("show");
  overlay.classList.add("overlay--active");
};
selectButtons.forEach((button) => {
  button.addEventListener("click", displayModal);
});

const closeModal = () => {
  document.body.classList.remove("body__overflow");
  form.classList.remove("modal__form--show");
  modal.classList.remove("show");
  overlay.classList.remove("overlay--active");
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

//update stats when pledge button is clicked
const totalPledgeAmount = document.getElementById("totalPledgeAmount");
const totalBackers = document.getElementById("totalBackers");
const pledgeButtons = document.querySelectorAll(".modal__button-pledge");
const progressBar = document.querySelector(".stats__pb-value");

const statsData = {
  totalPledges: 88914,
  pledgeGoal: 100000,
  totalBackers: 5007,
  daysLeft: 56,

  rewardsLeft: {
    bamboo: 101,
    black: 64,
    mahogany: 0,
  },
};

const getPledgeInput = (input) => {
  return parseInt(
    input.parentElement.querySelector(".modal__pledge-input").value
  );
};

const updateProgressBar = (pledgeAmount) => {
  const widthBar = (pledgeAmount / 100000) * 100;
  if (widthBar > 100) {
    return 100;
  } else {
    return widthBar;
  }
};

const updateDOM = () => {
  totalPledgeAmount.innerHTML = `$${statsData.totalPledges.toLocaleString()}`;
  totalBackers.innerHTML = statsData.totalBackers.toLocaleString();
  progressBar.style.width = `${updateProgressBar(statsData.totalPledges)}%`;
};

const updateQuantity = (button) => {
  let quantityLeft = parseInt(
    document.querySelector(`.quantity-${button.dataset.left}`).innerHTML
  );

  if (quantityLeft > 0) {
    quantityLeft--;
    document
      .querySelectorAll(`.quantity-${button.dataset.left}`)
      .forEach((quantity) => {
        quantity.innerHTML = quantityLeft;
      });
  }
};

const successModal = document.querySelector(".modal__success");

const displaySuccessModal = () => {
  form.classList.remove("modal__form--show");
  successModal.classList.add("show");
};

const successButton = document.querySelector(".modal__button--success");
successButton.addEventListener("click", () => {
  closeModal();
  successModal.classList.remove("show");
});

pledgeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    statsData.totalPledges += getPledgeInput(button);
    statsData.totalBackers += 1;
    if (button.dataset.left != "noReward") {
      updateQuantity(button);
    }

    updateDOM();
    displaySuccessModal();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape" && overlay.classList.contains("overlay--active")) {
    if (navItems.classList.contains("open")) {
      toggleNavigation();
    }
    closeModal();
  }
});

modal.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    return;
  } else {
    closeModal();
  }
});
