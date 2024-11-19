// Array de textos que se mostrarán en el carrusel
const carouselTexts = [
    "...vestibulum mollis, tortor ac congue commodo",
    "...lorem ipsum dolor sit amet",
    "...sed do eiusmod tempor incididunt ut labore"
];

// Elemento donde se mostrará el texto del carrusel
const carouselTextElement = document.getElementById("carousel-text");

// Índice para rastrear el texto actual
let currentTextIndex = 0;

// Función para cambiar el texto
function changeText() {
    // Cambiar el texto del elemento
    carouselTextElement.textContent = carouselTexts[currentTextIndex];
    // Actualizar el índice
    currentTextIndex = (currentTextIndex + 1) % carouselTexts.length;
}

// Cambiar el texto cada 2 segundos
setInterval(changeText, 2000);