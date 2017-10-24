
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  debugger;
  if (n > slides.length) {slideIndex = 0}    
  if (n < 1) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  slides[slideIndex].style.display = "block";  

}

