const loadBlocks = () => {

    let btnStyles = document.querySelector('.button-styles'),
        blocks = styles.querySelectorAll('.style-block__wrap');

    btnStyles.addEventListener('click', function() {
        blocks.forEach(function(elem) {
            if (elem.classList.contains('styles-2')) {
                elem.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
                elem.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'fadeInUp', 'animated');
            }
        });

        btnStyles.style.display = 'none';
    });


};

module.exports = loadBlocks;