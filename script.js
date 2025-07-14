let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let exploreMoreButton = document.querySelectorAll('.explore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButton.onclick = function () {
    showSlider('next');
}
prevButton.onclick = function () {
    showSlider('prev');
}

const showSlider = (type) => {
    let items = document.querySelectorAll('.carousel .list .item');

    if (type === 'next') {
            listHTML.appendChild(items[0]); 
            carousel.classList.add('next');
    } 
};
