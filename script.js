const carouselTexts = [
    "...vestibulum mollis, tortor ac congue commodo",
    "...lorem ipsum dolor sit amet",
    "...sed do eiusmod tempor incididunt ut labore"
];

const carouselTextElement = document.getElementById("carousel-text");

let currentTextIndex = 0;

function changeText() {
    carouselTextElement.textContent = carouselTexts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % carouselTexts.length;
}

setInterval(changeText, 2000);