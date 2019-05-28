const menu = () => {
    
    let menuBtn = document.querySelector('.burger'),
        menu = document.querySelector('.burger-menu'),
        width = window.innerWidth;
        console.log(width);

    if (width <= 768) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
};

module.exports = menu;