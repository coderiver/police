'use strict';

var perfectScrollbar;
var mqMob = window.matchMedia('(max-width: 767px)');

window.$ = window.jQuery = require('jquery');
require('slick-carousel');
perfectScrollbar = require('perfect-scrollbar');
require('../map/map-ukraine');

$(document).ready(function() {
    var scrollArea = $('[data-scroller]');
    var speed = 0;

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

    if ($('.hero-slider').length > 0 ) {
        speed = $('.hero-slider').data('speed');
        $('.hero-slider__slides').slick({
            slide: '.hero-slide',
            prevArrow: $('.hero-slider__prev'),
            nextArrow: $('.hero-slider__next'),
            autoplaySpeed: speed,
            autoplay: true,
            useCSS: true,
            dots: true
        });
    }

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
        $('.page-content').attr('class', 'page-content');
        $('.page-content').attr('class', 'page-content ' + regionID);
        $(".js-region").val(regionID).trigger('change');
    });

    $('.js-region').change(function(event) {
        var optionSelected = $('option:selected', this);
        var valueSelected = this.value;
        $(this).next().text(optionSelected.text());
        $('.page-content').attr('class', 'page-content');
        $('.page-content').attr('class', 'page-content ' + valueSelected);
        $('path[class=active]').attr('class','');
        $('#'+valueSelected).attr('class','active');

    });

    $('.js-rubrika').change(function(event) {
        var optionSelected = $('option:selected', this);
        $('.select__value').text(optionSelected.text());
        $('.page-content').attr('class', 'page-content');
    });

    function news_sidebar(){
        if (window.matchMedia("(min-width: 767px)").matches) {
          var h1 = $('.l-news-page__right').height();
          var h0 = 600;

          var final = Math.max(h1,h0);
          $('.l-news-page__left').height(final);
        } else {
          $('.l-news-page__left').height('auto');
        }
        
    }

    news_sidebar();
    $(window).resize(function(event) {
        news_sidebar();
    });

    
    
});
window.Share = {
    facebook: function(purl, ptitle, pimg, text) {
        var url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function(purl, ptitle) {
        var url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};
