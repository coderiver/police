'use strict';

var perfectScrollbar;
var mqMob = window.matchMedia('(max-width: 767px)');

window.$ = window.jQuery = require('jquery');
require('slick-carousel');
perfectScrollbar = require('perfect-scrollbar');

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

    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        $('.header__menu').toggleClass('is-active');
    });

    if (!mqMob.matches) {
        perfectScrollbar.initialize($('[data-scroller]')[0], {
            wheelPropagation: true
        });
    }
});

mqMob.addListener(function(e) {
    var matches = e.matches !== undefined
        ? e.matches
        : e.currentTarget.matches;

    if (!matches) {
        perfectScrollbar.initialize($('[data-scroller]')[0], {
            wheelPropagation: true
        });
    } else {
        perfectScrollbar.destroy($('[data-scroller]')[0]);
    }
});
