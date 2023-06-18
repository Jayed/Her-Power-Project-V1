// Get carousel elements
const carousel = document.getElementById("default-carousel");
const carouselItems = carousel.querySelectorAll("[data-carousel-item]");
const carouselIndicators = carousel.querySelectorAll(
  "[data-carousel-slide-to]"
);
const prevButton = carousel.querySelector("[data-carousel-prev]");
const nextButton = carousel.querySelector("[data-carousel-next]");

// Set initial active slide
let activeSlide = 0;

// Function to show the active slide and update indicators
function showActiveSlide() {
  carouselItems.forEach((item, index) => {
    if (index === activeSlide) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });

  carouselIndicators.forEach((indicator, index) => {
    if (index === activeSlide) {
      indicator.setAttribute("aria-current", "true");
    } else {
      indicator.setAttribute("aria-current", "false");
    }
  });
}

// Function to handle next slide
function nextSlide() {
  activeSlide = (activeSlide + 1) % carouselItems.length;
  showActiveSlide();
}

// Function to handle previous slide
function prevSlide() {
  activeSlide = (activeSlide - 1 + carouselItems.length) % carouselItems.length;
  showActiveSlide();
}

// Function to start auto sliding
function startAutoSlide() {
  setInterval(nextSlide, 5000);
}

// Add event listeners to buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Add event listeners to indicators
carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    activeSlide = index;
    showActiveSlide();
  });
});

// Initialize the slider and start auto sliding
showActiveSlide();
startAutoSlide();

//nav handler
function navHandler(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.remove("top-[-300px]"),
      list.classList.remove("opacity-0"))
    : ((e.name = "menu"),
      list.classList.add("top-[-300px]"),
      list.classList.add("opacity-0"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

// Heading script
const list = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}
