document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    const slides = document.querySelector('.slides');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentIndex = 0;

    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.childElementCount - 1;
      } else if (index >= slides.childElementCount) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const translation = -currentIndex * 100 + '%';
      slides.style.transform = 'translateX(' + translation + ')';
    }

    prevButton.addEventListener('click', function () {
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
      showSlide(currentIndex + 1);
    });
  });