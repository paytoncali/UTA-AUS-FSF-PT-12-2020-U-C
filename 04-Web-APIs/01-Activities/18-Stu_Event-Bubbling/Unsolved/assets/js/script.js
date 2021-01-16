// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox");
// carouselbox class in HTML file
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;
// Next & Prev class from HTML
var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});
// opens new window on click

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) {
  // on click go to next picture
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();
  // stops page from going to link of picture

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
  // on click goes to previous picture
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();
// stops the page from reloading to picture link
  navigate(-1);
});

navigate(0);
