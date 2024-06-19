let currentSlide = 0;
let slideInterval;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1); // Cambia al siguiente slide
    }, 5000); // Cambia el valor de 5000 para ajustar el intervalo de tiempo en milisegundos
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Inicia el slideshow automáticamente al cargar la página
window.addEventListener('load', () => {
    startSlideShow();
});

// Detiene el slideshow cuando el mouse entra al área del slider y lo reinicia cuando sale
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', stopSlideShow);
slider.addEventListener('mouseleave', startSlideShow);
