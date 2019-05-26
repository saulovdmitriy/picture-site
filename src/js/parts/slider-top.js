const sliderTop = () => {
    
    let sliderItem = document.querySelectorAll('.main-slider-item'),
        slideIndex = 0;

    toggleSlide(slideIndex);

    function toggleSlide(n) {

        for (let i = 0; i < sliderItem.length; i++) {
            sliderItem[i].style.display = 'none';
        }

        if (n == 0) {
            sliderItem[n].style.display = 'block';
            sliderItem[n].classList.add('fadeInDown', 'animated');

            sliderItem[n+1].style.display = 'none';
            sliderItem[n+1].classList.remove('fadeInDown', 'animated');

            slideIndex += 1;
                
        } if (n == 1) {
            sliderItem[n-1].style.display = 'none';
            sliderItem[n-1].classList.remove('fadeInDown', 'animated');

            sliderItem[n].style.display = 'block';
            sliderItem[n].classList.add('fadeInDown', 'animated');

            slideIndex -= 1;
        }        
    }

    setInterval(function() {
        toggleSlide(slideIndex);
    }, 3000);

};

module.exports = sliderTop;