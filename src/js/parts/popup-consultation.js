const popupConsultation = () => {
    
    let popupConsult = document.querySelector('.popup-consultation'),
        btnConsult = document.querySelectorAll('.button-consultation'),
        popupClose = document.querySelectorAll('.popup-close'),
        popupOverlay = document.querySelector('.popup-overlay');

    
    btnConsult.forEach(function(elem) {
        elem.addEventListener('click', () => {
            popupConsult.style.display = 'block';
            popupOverlay.style.display = 'block';
        });
    });

    popupClose.forEach(function(elem) {
        elem.addEventListener('click', () => {
            popupConsult.style.display = 'none';
            popupOverlay.style.display = 'none';
        });
    });

    popupOverlay.addEventListener('click', () => {
        popupConsult.style.display = 'none';
        popupOverlay.style.display = 'none';
    });

};

module.exports = popupConsultation;