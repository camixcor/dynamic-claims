const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-slide");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Si está en el primer slide y se presiona "prev", va al último slide
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        // Si está en el último slide y se presiona "next", vuelve al primero
        currentIndex = 0;
    }
    updateSlider();
});