const sliderTop = () => {
    
    let sliderItem = document.querySelectorAll('.main-slider-item'),
        slideIndex = 0;

    toggleSlide(slideIndex);

    function toggleSlide(n) {

        for (let i = 0; i < sliderItem.length; i++) {
            sliderItem[i].style.display = 'none';
        }

        function slideShow(index) {
            sliderItem[index].style.display = 'block';
            sliderItem[index].classList.add('fadeInDown', 'animated');
        }

        function slideHide(index) {
            sliderItem[index].style.display = 'none';
            sliderItem[index].classList.remove('fadeInDown', 'animated');
        }

        if (n == 0) {
            slideShow(n);
            slideHide(n+1);
            slideIndex += 1;
                
        } if (n == 1) {
            slideHide(n-1);
            slideShow(n);
            slideIndex -= 1;
        }        
    }

    setInterval(function() {
        toggleSlide(slideIndex);
    }, 3000);

};

module.exports = sliderTop;