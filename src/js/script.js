require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let sliderTop = require('./parts/slider-top.js'),
        loadBlocks = require('./parts/loadblocks.js'),
        menu = require('./parts/menu'),
        tabs = require('./parts/tabs.js'),
        popupConsultation = require('./parts/popup-consultation.js'),
        popupDesign = require('./parts/popup-design.js'),
        popupGift = require('./parts/popup-gift.js'),
        sendform = require('./parts/sendform.js'),
        sliderBottom = require('./parts/slider-bottom.js'),
        calc = require('./parts/calc.js'),
        picSize = require('./parts/picsize.js'),
        accordeon = require('./parts/accordeon.js');

    sliderTop();
    loadBlocks();
    menu();
    tabs();
    popupConsultation();
    popupDesign();
    popupGift();
    sendform();
    sliderBottom();
    calc();
    picSize();
    accordeon();
});