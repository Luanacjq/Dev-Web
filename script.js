// script.js
let currentSlide = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-images img'); // Seleciona todas as imagens

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'; // Mostra o slide atual e esconde os outros
    });
}

function moveSlide(direction) {
    currentSlide += direction; // Atualiza o índice do slide
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Volta para o último slide se estiver no primeiro
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Volta para o primeiro slide se estiver no último
    }
    showSlide(currentSlide); // Mostra o slide atualizado
}

// Inicializa o carrossel exibindo o primeiro slide
showSlide(currentSlide);

