document.addEventListener('DOMContentLoaded', function () {
    const changingText = document.querySelector('.text-animation');
    const texts = [ 'eating', 'sleep', 'lifestyle'];
    let currentIndex = 0;

    function changeText() {
      changingText.textContent = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(changeText, 1500);
  });


  // slider
  const slidesContainer = document.querySelector('.slides-container');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  
  let currentIndex = 0;
  
  function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 25}%)`;
  }
  
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
  
  nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
      currentIndex++;
      updateSlider();
    }
  });
  
  updateSlider();
  
  
// second slider
const slider = document.getElementById('recipe-slider');
  const prevBtn = document.getElementById('recipe-prev-btn');
  const nextBtn = document.getElementById('recipe-next-btn');
  const slideWidth = document.querySelector('.recipe-slide').clientWidth;
  const visibleSlides = 2; // Number of slides visible at a time
  const totalSlides = slider.children.length;
  const sliderWidth = totalSlides * slideWidth;

  slider.style.width = `${sliderWidth}px`;

  let currIndex = 0;

  prevBtn.addEventListener('click', () => {
    currIndex = (currIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  });

  nextBtn.addEventListener('click', () => {
    currIndex = (currIndex + 1) % totalSlides;
    updateSliderPosition();
  });

  function updateSliderPosition() {
    const newPosition = -currIndex * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
  }

//  3rd slider
const slidesCont = document.querySelector('.custom-slides-container');
const previousButton = document.querySelector('.custom-prev-btn');
const nextButon = document.querySelector('.custom-next-btn');

let currentIdx = 0;

function updateCustomSlider() {
  slidesCont.style.transform = `translateX(-${currentIdx * 100}%)`;
}

previousButton.addEventListener('click', () => {
  if (currentIdx > 0) {
    currentIdx--;
    updateCustomSlider();
  }
});

nextButon.addEventListener('click', () => {
  if (currentIdx < 2) {
    currentIdx++;
    updateCustomSlider();
  }
});

updateCustomSlider();