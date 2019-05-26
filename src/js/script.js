require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let sliderTop = require('./parts/slider-top.js'),
        menu = require('./parts/menu'),
        tabs = require('./parts/tabs.js'),
        modalJs = require('./parts/modal.js'),
        sendform = require('./parts/sendform.js'),
        sliderBottom = require('./parts/slider-bottom.js'),
        calc = require('./parts/calc.js');

    sliderTop();
    menu();
    tabs();
    modalJs();
    sendform();
    sliderBottom();
    calc();
});