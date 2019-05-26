const popupDesign = () => {

    let btnDesign = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        popupClose = document.querySelectorAll('.popup-close'),
        popupOverlay = document.querySelector('.popup-overlay');


    btnDesign.forEach(function(elem) {
        elem.addEventListener('click', () => {
            popupDesign.style.display = 'block';
            popupOverlay.style.display = 'block';
        });
    });

    popupClose.forEach(function(elem) {
        elem.addEventListener('click', () => {
            popupDesign.style.display = 'none';
            popupOverlay.style.display = 'none';
        });
    });

    popupOverlay.addEventListener('click', () => {
        popupDesign.style.display = 'none';
        popupOverlay.style.display = 'none';
    });
    
};

module.exports = popupDesign;

