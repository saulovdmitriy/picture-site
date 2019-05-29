const menu = () => {
    
    let menuBtn = document.querySelector('.burger'),
        menu = document.querySelector('.burger-menu'),
        width = window.innerWidth;

    if (width <= 768) {
        menuBtn.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            } else {
                menu.classList.add('active');
            }
        });
    }
};

module.exports = menu;