'use strict';

var perfectScrollbar;
var mqMob = window.matchMedia('(max-width: 767px)');

window.$ = window.jQuery = require('jquery');
require('slick-carousel');
perfectScrollbar = require('perfect-scrollbar');
require('../map/map-ukraine');

$(document).ready(function() {
    var scrollArea = $('[data-scroller]');

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

    if (scrollArea.length) {
        if (!mqMob.matches) {
            perfectScrollbar.initialize(scrollArea[0], {
                wheelPropagation: true
            });
        }

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
    }

    $('#mapUkraine').on('mapRegionChange', function(event, regionID, dotCoord) {
        console.log('regionID: %s, cityX: %d, cityY: %d', regionID, dotCoord[0], dotCoord[1]);
    });

    $('.js-region').change(function(event) {
      var optionSelected = $("option:selected", this);
      var valueSelected = this.value;
      $(this).next().text(optionSelected.text())
      $('.page-content').attr("class","page-content");
      $('.page-content').attr("class","page-content "+valueSelected);
    });

    $('.js-rubrika').change(function(event) {
      var optionSelected = $("option:selected", this);
      $('.select__value').text(optionSelected.text())
      $('.page-content').attr("class","page-content");
    });
});
