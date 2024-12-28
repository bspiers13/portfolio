//Load scroll animation
lottie.loadAnimation({
  container: document.getElementById("animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../img/scroll-black.json",
});

//Fade in the scroll animation on load
window.onload = function () {
  var animation = document.getElementById("animation");
  animation.style.transition = "opacity 5s ease 4s";
  animation.style.opacity = "1";
};

window.onscroll = function () {
  var navbar = document.querySelector(".navbar");
  var navbarLinks = document.querySelectorAll(".navbar_links a");
  var animation = document.getElementById("animation");

  //On scroll, fade out the scroll animation
  animation.style.transition = "opacity 0.5s ease";
  animation.style.opacity = "0";

  //After scrolling past the top section, fade in the navbar
  if (window.scrollY > window.innerHeight * 0.95) {
    navbar.style.opacity = "1"; // Show navbar
    navbarLinks.forEach((link) => (link.style.pointerEvents = "auto")); // Enable buttons
  } else {
    navbar.style.opacity = "0"; // Hide navbar
    navbarLinks.forEach((link) => (link.style.pointerEvents = "none")); // Disable buttons
  }
};

//Create event listeners for each button
["home", "about", "skills", "projects", "contact"].forEach((section) => {
  document.querySelectorAll(`a[href="#${section}"]`).forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById(section).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});

//Carousel code
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".dots");
const dots = Array.from(dotsNav.children);
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}
