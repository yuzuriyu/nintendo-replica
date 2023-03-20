var slideIndex = 0;
var slides = document.getElementsByClassName("slides")[0].children;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[index].style.display = "block";
  slideIndex = index;
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

showSlide(0);

document.getElementsByClassName("prev")[0].addEventListener("click", prevSlide);
document.getElementsByClassName("next")[0].addEventListener("click", nextSlide);
