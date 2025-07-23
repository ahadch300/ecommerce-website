const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");
const closeIcon = document.querySelector(".close-icon");

hamburger.addEventListener("click", function () {
  navbarLinks.classList.toggle("show-navbar");
  closeIcon.classList.toggle("show-close");
});

closeIcon.addEventListener("click", function () {
  navbarLinks.classList.toggle("show-navbar");
  closeIcon.classList.remove("show-close");
});

const heroSlider = document.querySelector(".hero-slider");
const promoSlider = document.querySelector(".promo-slider");

const circles = document.querySelectorAll(".dot");
circles.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    circles.forEach((dot) => {
      dot.classList.remove("active");
    });
    dot.classList.add("active");

    heroSlider.style.display = "none";
    promoSlider.style.display = "none";

    if (index === 0) {
      heroSlider.style.display = "flex";
    } else if (index === 1) {
      promoSlider.style.display = "flex";
    }
  });
});

const arrowRight = document.querySelector(".right-arrow");
const arrowLeft = document.querySelector(".left-arrow");

const slider = document.querySelector(".product-slider");

arrowRight.addEventListener("click", function () {
  slider.scrollLeft += 300;
});

arrowLeft.addEventListener("click", function () {
  slider.scrollLeft -= 300;
});

const rightArrowIcon = document.querySelector(".right-arrow-icon");
const leftArrowIcon = document.querySelector(".left-arrow-icon");
const categoryBox = document.querySelectorAll(".category-box");

let indexValue = 0;

rightArrowIcon.addEventListener("click", function () {
  if (indexValue < categoryBox.length - 1) {
    categoryBox.forEach((box) => {
      box.classList.remove("active-category");
    });
    indexValue++;
    categoryBox[indexValue].classList.add("active-category");
  }
});

leftArrowIcon.addEventListener("click", function () {
  if (indexValue > 0) {
    categoryBox.forEach((box) => {
      box.classList.remove("active-category");
    });
    indexValue--;
    categoryBox[indexValue].classList.add("active-category");
  }
});

const rightProducts = document.querySelector(".right-arrow-Products");
const leftProducts = document.querySelector(".left-arrow-Products");
const productCard = document.querySelectorAll(".product-card");

let currentIndex = 0;

rightProducts.addEventListener("click", function () {
  if (currentIndex < productCard.length - 1) {
    productCard.forEach((card) => {
      card.classList.remove("hover");
    });
    currentIndex++;
    productCard[currentIndex].classList.add("hover");
  }
});

leftProducts.addEventListener("click", function () {
  if (currentIndex > 0) {
    productCard.forEach((card) => {
      card.classList.remove("hover");
    });
    currentIndex--;
    productCard[currentIndex].classList.add("hover");
  }
});



