// JavaScript function
let currentSlide = 0;
const url = new URL(window.location.href);
const params = url.searchParams;
let page_num = params.get('page');

if( page_num ) {
    currentSlide = page_num - 1;
}
let slides = document.querySelectorAll('.slide');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');


function changeSlide(direction) {

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Update current slide
    if (direction === 'next') {
        currentSlide = (currentSlide % 3) + 1;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide + 1) % 3 || 3;
    }

// Show current slide
    document.querySelector(`#slide-${currentSlide}`).style.display = 'block';

// Update URL
    window.history.pushState({}, '', `?page=${currentSlide}`);
}

// Add event listeners
prevButton.addEventListener('click', () => changeSlide('prev'));
nextButton.addEventListener('click', () => changeSlide('next'));

// Initialize carousel
changeSlide('next'); // Show first slide

$( document ).ready(function() {

    AOS.init();


});
