// Animação do Header ao rolar
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    header.classList.toggle('shrink', window.scrollY > 50);
});

let debounceTimer;

window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled', 'shrink');
        } else {
            header.classList.remove('scrolled', 'shrink');
        }
    }, 50); // Executa após 50ms sem rolar
});


// Função do Carrossel de Notícias/Projetos
let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');

function moveCarousel(direction) {
    const totalCards = document.querySelectorAll('.carousel .card').length;
    const cardWidth = document.querySelector('.carousel .card').clientWidth + 20;
    currentIndex = (currentIndex + direction + totalCards) % totalCards;
    carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled', 'shrink');
        } else {
            header.classList.remove('scrolled', 'shrink');
        }
    });
});



