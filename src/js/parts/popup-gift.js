const popupGift = () => {

    let btnGift = document.querySelector('.fixed-gift'),
    popupGift = document.querySelector('.popup-gift'),
    popupClose = document.querySelectorAll('.popup-close'),
    popupOverlay = document.querySelector('.popup-overlay');


    btnGift.addEventListener('click', () => {
        popupGift.style.display = 'block';
        popupOverlay.style.display = 'block';
        btnGift.style.display = 'none';
    });

    popupClose.forEach(function(elem) {
        elem.addEventListener('click', () => {
            popupGift.style.display = 'none';
            popupOverlay.style.display = 'none';
        });
    });

    popupOverlay.addEventListener('click', () => {
        popupGift.style.display = 'none';
        popupOverlay.style.display = 'none';
    });

};

module.exports = popupGift;