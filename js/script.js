// NAVIGATION

const navRespTogleOpen = document.getElementById('navRespTogleButtonOpen');
const navRespTogleClose = document.getElementById('navRespTogleButtonClose');
const navResp = document.getElementById('navResp');

navRespTogleOpen.addEventListener('click', function(){
  navResp.classList.toggle('show_nav-resp');
  console.log('Open nav button pressed');
});
navRespTogleClose.addEventListener('click', function(){
  navResp.classList.toggle('show_nav-resp');
  console.log('Close nav button pressed');
});

document.querySelectorAll('.nav-resp__link').forEach(item => {
  item.addEventListener('click', event => {
    navResp.classList.toggle('show_nav-resp');    
  })
})

// SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls


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



// const slideshowBtnPrev = document.getElementById('slideshow-nav-btn-prev');
// const slideshowBtnNext = document.getElementById('slideshow-nav-btn-next');

// slideshowBtnPrev.addEventListener('click', plusSlides(-1));
// slideshowBtnNext.addEventListener('click', plusSlides(1));