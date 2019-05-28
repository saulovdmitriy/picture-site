const sliderBottom = () => {
 
    let prevBtn = document.querySelector('.main-prev-btn'),
        nextBtn = document.querySelector('.main-next-btn'),
        sliderItem = document.querySelectorAll('.feedback-slider-item'),
        slideIndex = 1;


    showSlides(slideIndex);

    function showSlides(n) {

        if (n > sliderItem.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = sliderItem.length;
        }

        sliderItem.forEach((item) => item.style.display = 'none');
        sliderItem[slideIndex - 1].style.display = 'block';
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    prevBtn.addEventListener('click', () => {
        plusSlides(-1);
    });

    nextBtn.addEventListener('click', () => {
        plusSlides(1);
    });

    setInterval(() => {
        plusSlides(1);
    }, 4000);
        
}

module.exports = sliderBottom;