// Get Slider Items | Array.from [ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// Get number of Slides

let slidesCount = sliderImages.length;

// Set Current Slide

let currentSlide = 1;

// Slide Number Element

let slideNumberElement = document.getElementById("slide-number");

// Previous & Next Buttons

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle Click on Previous & Next Buttons

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Next Slide Function

function nextSlide() {
    console.log("Next");
}

// Previous Slide Function

function prevSlide() {
    console.log("Previous");
}