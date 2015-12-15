'use strict';

window.$ = window.jQuery = require('jquery');
require('slick-carousel');

$(document).ready(function() {
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

    $('.hero-slider__slides').slick({
        slide: '.hero-slide',
        prevArrow: $('.hero-slider__prev'),
        nextArrow: $('.hero-slider__next'),
        autoplaySpeed: 5000,
        autoplay: true,
        useCSS: true,
        dots: true
    });
});
