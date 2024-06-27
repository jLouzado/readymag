// JavaScript function
let currentSlide = 0;
const url = new URL(window.location.href);
const params = url.searchParams;
let page_num = params.get('page');
let nav_menu_li = document.querySelectorAll('ul.navbar-nav li');
let nav_menu_items = document.querySelector('ul.navbar-nav a.nav-link');

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

    // change active menu item based on current page
    nav_menu_items.classList.remove('active');
    nav_menu_li[currentSlide-1].getElementsByTagName('a')[0].classList.add('active');
    window.scrollTo(0, 0);

}

// Add event listeners
prevButton.addEventListener('click', () => changeSlide('prev'));
nextButton.addEventListener('click', () => changeSlide('next'));

// Initialize carousel
changeSlide('next'); // Show first slide

$( document ).ready(function() {

    AOS.init();


});
