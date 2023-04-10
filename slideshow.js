const slideshow = document.querySelector('.slideshow');
const prevButton = slideshow.querySelector(".prev");
const nextButton = slideshow.querySelector(".next");
const slider = document.querySelector('.slides');
const slides = Array.from(slider.querySelectorAll('img'));

let currentSlideIndex = 0;
showSlide(currentSlideIndex);

prevButton.addEventListener('click', () => {
  currentSlideIndex--;
  if(currentSlideIndex < 0){
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
})

nextButton.addEventListener('click', () => {
  currentSlideIndex++;
  if(currentSlideIndex >= slides.length){
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
})

function showSlide (slideIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}