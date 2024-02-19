// Get Slider Element
let sliderImage = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slide
let slidesCount = sliderImage.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slider-number");

// Previous And Next Buttom
let nextButtom = document.getElementById("next");
let prevButtom = document.getElementById("prev");

nextButtom.onclick = nextSlide;
prevButtom.onclick = prevSlide;

// Create Main Ul Element
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

// Create li Element
for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-slide", i);
  paginationItem.innerHTML = i;
  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

// Next Slide function
function nextSlide() {
  if (nextButtom.classList.contains("disabled")) {
    return;
  } else {
    currentSlide++;
    checker();
  }
}

// Prev Slide function
function prevSlide() {
  if (prevButtom.classList.contains("disabled")) {
    return;
  } else {
    currentSlide--;
    checker();
  }
}

let paginationCreatedUl = document.getElementById("pagination-ul");
// Translate paginationCreatedUl To Array Element
let paginationCreatedUlArr = document.querySelectorAll("#pagination-ul li");

for (item of paginationCreatedUlArr) {
  item.onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-slide"));
    checker();
  };
}

// Create The Checker Function
function checker() {
  slideNumberElement.textContent = `Slide ${currentSlide} of ${slidesCount}`;
  // Remove All Class Active
  sliderImage.forEach((img) => {
    img.classList.remove("active");
  });
  // Add Class Active To Image
  sliderImage[currentSlide - 1].classList.add("active");

  // Remove All Class Active
  paginationCreatedUlArr.forEach((li) => {
    li.classList.remove("active");
  });
  // Add Class Active To li
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check Next And Prev Button
  if (currentSlide == 1) {
    prevButtom.classList.add("disabled");
  } else {
    prevButtom.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    nextButtom.classList.add("disabled");
  } else {
    nextButtom.classList.remove("disabled");
  }
}
// Trager The Function
checker();
