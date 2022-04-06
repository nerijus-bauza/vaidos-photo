// NAVIGATION

const navRespTogleOpen = document.getElementById('navRespTogleButtonOpen');
const navRespTogleClose = document.getElementById('navRespTogleButtonClose');
const navResp = document.getElementById('nav-resp-wrapper');

navRespTogleOpen.addEventListener('click', function(){
  navResp.classList.toggle('show_nav-resp');
  //console.log('Open nav button pressed');
});
navRespTogleClose.addEventListener('click', function(){
  navResp.classList.toggle('show_nav-resp');
  //console.log('Close nav button pressed');
});

document.querySelectorAll('.nav-resp__link').forEach(item => {
  item.addEventListener('click', event => {
    navResp.classList.toggle('show_nav-resp');    
  })
})

// SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__slide");
  //var dots = document.getElementsByClassName("dot");
  console.log("Total Slides: " + slides.length + " Slide index: " + n);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// --------------------
const nav = document.getElementById('nav-wrapper');
const navTopOffset = nav.offsetTop;
const navHeight = nav.offsetHeight;
const changeColorHeight = document.getElementById('slideshow').offsetHeight - navHeight;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > navTopOffset || document.documentElement.scrollTop > navTopOffset) {
    nav.style.top = "0";
    //document.getElementById("nav-wrapper").style.top = "0";
    //document.getElementById("logo").style.fontSize = "25px";
  } else {
    nav.style.top = navTopOffset + "px";
    //document.getElementById("nav-wrapper").style.top = "60px";
    //document.getElementById("logo").style.fontSize = "35px";
  }

  if (document.body.scrollTop > changeColorHeight || document.documentElement.scrollTop > changeColorHeight) {
    nav.classList.add("nav-wrapper--scrolled-bottom");
  } else {
    nav.classList.remove("nav-wrapper--scrolled-bottom");
  }
}

// LIGHTBOX

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideLBIndex = 1;
showLBSlides(slideLBIndex);

// Next/previous controls
function plusLBSlides(n) {
  showLBSlides(slideLBIndex += n);
}

// Thumbnail image controls
function currentLBSlide(n) {
  showLBSlides(slideLBIndex = n);
}

function showLBSlides(n) {
  var i;
  var slides = document.getElementsByClassName("lightbox__slide");
  //var dots = document.getElementsByClassName("demo");
  //var captionText = document.getElementById("caption");
  if (n > slides.length) {slideLBIndex = 1}
  if (n < 1) {slideLBIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  */
  slides[slideLBIndex-1].style.display = "block";
  //dots[slideLBIndex-1].className += " active";
  //captionText.innerHTML = dots[slideLBIndex-1].alt;
}

// PORTFOLIO

const portfolioPartTwo = document.getElementById('portfolio-part-two');
const portfolioPartThree = document.getElementById('portfolio-part-three');
const portfolioLink = document.getElementById('portfolio-link');

portfolioLink.addEventListener('click', function(){
  portfolioPartTwo.classList.remove('portfolio--hidden');
  portfolioPartThree.classList.remove('portfolio--hidden');
  portfolioLink.style.display = "none";
});