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

// Create the Main UL list

let paginationElement = document.createElement("ul");

// Set ID on Created UL element

paginationElement.setAttribute("id", "pagination-ul");

// Create list items based in slides count

for (let i = 1; i <= slidesCount; i++) {

    // creat the line li 

    let paginationItem = document.createElement("li");

    // set custom attribute 

    paginationItem.setAttribute("data-index", i);

    // set item count 

    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to the main UL list

    paginationElement.appendChild(paginationItem);

}

// Add the created UL element to the page
document.getElementById("indicators").appendChild(paginationElement);

// Next Slide Function

function nextSlide() {
    console.log("Next");
}

// Previous Slide Function

function prevSlide() {
    console.log("Previous");
}