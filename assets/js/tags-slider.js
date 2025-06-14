
document.addEventListener('DOMContentLoaded', (event) => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    const itemsToShow = 3; // Number of items to show at once
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const maxIndex = Math.ceil(totalItems / itemsToShow) - 1;

    function updateCarousel() {
        const transformValue = -currentIndex * 100 / itemsToShow + '%';
        carouselInner.style.transform = 'translateX(' + transformValue + ')';
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});
