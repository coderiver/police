!function t(e,r,n){function i(c,u){if(!r[c]){if(!e[c]){var s="function"==typeof require&&require;if(!u&&s)return s(c,!0);if(o)return o(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=r[c]={exports:{}};e[c][0].call(l.exports,function(t){var r=e[c][1][t];return i(r?r:t)},l,l.exports,t,e,r,n)}return r[c].exports}for(var o="function"==typeof require&&require,c=0;c<n.length;c++)i(n[c]);return i}({1:[function(t,e,r){"use strict";document.querySelector(".lang").addEventListener("click",function(){this.classList.toggle("is-active")}),[].slice.call(document.querySelectorAll(".dropdown")).forEach(function(t,e){t.addEventListener("click",function(t){this.classList.toggle("is-active"),"LI"===t.target.tagName&&(this.firstElementChild.textContent=t.target.textContent)})})},{}]},{},[1]);
//# sourceMappingURL=app.js.map
