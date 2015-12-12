'use strict';

document.querySelector('.lang').addEventListener('click', function() {
    this.classList.toggle('is-active');
});

[].slice.call(document.querySelectorAll('.dropdown')).forEach(function(element, index) {
    element.addEventListener('click', function(e) {
        this.classList.toggle('is-active');
        if (e.target.tagName === 'LI') {
            this.firstElementChild.textContent = e.target.textContent;
        }
    });
});
