const accordeon = () => {
    
    let accBlock = document.querySelectorAll('.accordion-block'),
        accHeading = document.querySelectorAll('.accordion-heading'),
        accIndex = 1;


    function accHide() {
        accBlock.forEach((elem) => {
            elem.style.display = 'none';
            elem.classList.remove('ui-accordion-content-active', 'fadeInUp', 'animated');
        }); 
    }
    accHide();

    function accShow(n) {
        accHide();
        accBlock[n].style.display = 'block';
        accBlock[n].classList.add('ui-accordion-content-active', 'fadeInUp', 'animated');
    }

    function changeHeading() {
        accHeading.forEach((elem) => {
            if (!(elem.classList.contains('ui-accordion-header-active'))) {
            } else {
                elem.classList.remove('ui-accordion-header-active');
            }
        });
    }
    
    accHeading.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            accIndex = i;
            accShow(accIndex);
            changeHeading();
            elem.classList.add('ui-accordion-header-active');
        });
    });
};

module.exports = accordeon;