'use strict';

window.$ = window.jQuery = require('jquery');
require('slick-carousel');

$('.hero-slider__slides').slick({
    slide: '.hero-slide',
    prevArrow: $('.hero-slider__prev'),
    nextArrow: $('.hero-slider__next'),
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    useCSS: true
});


document.querySelector('.lang').addEventListener('click', function() {
    this.classList.toggle('is-active');
});

[].slice.call(document.querySelectorAll('.dropdown')).forEach(function(element, index) {
    element.addEventListener('click', function(e) {
        this.classList.toggle('is-active');
        if (e.target.tagName === 'LI') {
            this.firstElementChild.firstChild.textContent = e.target.textContent + ' ';
        }
    });
});
