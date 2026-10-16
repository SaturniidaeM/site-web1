document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('sliderTrack');
    const slides = track.querySelectorAll('.slide');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        else if (index >= totalSlides) index = 0;

        currentIndex = index;
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goToSlide(currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            goToSlide(currentIndex + 1);
        }
    });
});