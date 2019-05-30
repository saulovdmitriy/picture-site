const menu = () => {
    
    let menuBtn = document.querySelector('.burger'),
        menu = document.querySelector('.burger-menu'),
        temp = 0;
    
    window.addEventListener('resize', () => {
        let headerMenuIsHidden = document.querySelector('.header-menu').offsetWidth;
        if (headerMenuIsHidden) {
            menu.style.display = 'none';
        }
    });

    menuBtn.addEventListener('click', () => {
        let headerMenuIsHidden = document.querySelector('.header-menu').offsetWidth;
        if (!headerMenuIsHidden) {
            if (temp == 0) {
                menu.style.display = 'block';
                temp++;
            } else {
                menu.style.display = 'none';
                temp--;
            }
        }
    });

};

module.exports = menu;