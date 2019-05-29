const popupGift = () => {

    let btnGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        popupClose = document.querySelectorAll('.popup-close'),
        popupOverlay = document.querySelector('.popup-overlay'),
        btns = document.querySelectorAll('button');


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


    temp = 0;

    btns.forEach(function(item) {
        item.addEventListener('click', () => {
            temp++;
        });
    });

    window.addEventListener('scroll', () => {
        if (temp == 0 && ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)) {
            popupGift.style.display = 'block';
            popupOverlay.style.display = 'block';
            btnGift.style.display = 'none';
        }
    });

    // let btnClick = function() {

    //     for (let i = 0; i < btns.length; i++) {
    //         btns[i].addEventListener('click', function(event) {
    //             let target = event.target;
    //             if (target == false) {
    //                 giftShow();
    //             }
    //         });
    //     }
    // }
    // btnClick();
    
    // function giftShow() {
    //     window.onscroll = function() {   
    //         if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    //             popupGift.style.display = 'block';
    //             popupOverlay.style.display = 'block';
    //             btnGift.style.display = 'none';
    //         }
    //     };
    // }
    // giftShow();
    
};

module.exports = popupGift;