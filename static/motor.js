
//javascript for navigation bar effect on scroll

// window.addEventListener("scroll", function(){
//   var header = document.querySelector("header");
//   header.classList.toggle('down', window.scrollY > 0);


//   //change logo
//   var logo = document.querySelector(".brand img");
//   if (window.scrollY>0) {
//     logo.setAttribute('src', 'img/logo que chimba-07.png');
//   }else{
//     logo.setAttribute('src', 'img/Disco logo.png');
//   }

// });

//javascript for responsive navigation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});



let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




// function showSlides2() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides2, 4000); // Change image every 4 seconds
// } 


var canvasVideo = new CanvasVideoPlayer({
  videoSelector: '.video',
  canvasSelector: '.canvas',
  timelineSelector: '.js-timeline',
  framesPerSecond: 25,
  autoplay: true,
  audio: false,
  makeLoop: true
});
