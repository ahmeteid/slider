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

// Get the new created Ul

let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Bullets | Array.from [ES6 feature]

let paginationsBullets = Array.from(document.querySelectorAll("pagination-ul li"))

// Trigger the Checker function

theCkecker();

// Next Slide Function

function nextSlide() {
    console.log("Next");
}

// Previous Slide Function

function prevSlide() {
    console.log("Previous");
}

// Create the checker function

function theCkecker() {

    //Set the slide number

    slideNumberElement.textContent = "Slide #" + (currentSlide) + " of " + (slidesCount);

    // Remove all active classes

    removeAllActive();

    //Set active class on current slide

    sliderImages[currentSlide -1].classList.add("active");

    //Set active class on current pagination item

    paginationCreatedUl.children[currentSlide -1].classList.add("active");

    // Check the current slide is the First
    
    if (currentSlide == 1) {

        // Add disaled class on Previous Button

        prevButton.classList.add("disabled");

    } else {

        // Remove disaled class from Previous Button

        prevButton.classList.remove("disabled")
    }

    // Check the current slide is the Last

    if (currentSlide == slidesCount) {

        // Add disaled class on Next Button

        nextButton.classList.add("disabled");

    } else {

        // Remove disaled class from Next Button

        nextButton.classList.remove("disabled");
    }
}


// Remove all active classes from all elements (images and pagination bullets)

function removeAllActive() {

    // Loop through images

    sliderImages.forEach(function(img) {
        img.classList.remove("active");
    });

    // through Pagination Bullets

    paginationsBullets.forEach(function(bullet) {
        bullet.classList.remove("active");
    });
}