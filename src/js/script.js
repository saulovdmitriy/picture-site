require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let sliderTop = require('./parts/slider-top.js'),
        menu = require('./parts/menu'),
        tabs = require('./parts/tabs.js'),
        popupConsultation = require('./parts/popup-consultation.js'),
        popupDesign = require('./parts/popup-consultation.js'),
        popupGift = require('./parts/popup-consultation.js'),
        sendform = require('./parts/sendform.js'),
        sliderBottom = require('./parts/slider-bottom.js'),
        calc = require('./parts/calc.js');

    sliderTop();
    menu();
    tabs();
    popupConsultation();
    popupDesign();
    popupGift();
    sendform();
    sliderBottom();
    calc();
});