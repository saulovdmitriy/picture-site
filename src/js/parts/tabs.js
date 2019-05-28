const tabs = () => {

    let portfolioMenu  = document.querySelector('.portfolio-menu'),
        menuItem  = document.querySelectorAll('.portfolio-menu li'),
        portfolioBlock = portfolio.querySelectorAll('.portfolio-block'),
        noPortfolio = portfolio.querySelector('.portfolio-no');
    
    portfolioMenu.addEventListener('click', filterClass);
    
    function filterClass(event) {
        let target = event.target;
        
        function classFilter(elementClass, noPort) {
            if (target && event.target.classList.contains(elementClass)) {

                menuItem.forEach(function(item) {
                    item.classList.remove('active');
                });
                event.target.classList.add('active');

                portfolioBlock.forEach(function(elem) {
                    elem.style.display = 'block';
                    elem.classList.remove('fadeIn', 'animated');

                    if (!(elem.classList.contains(elementClass))) {
                        elem.style.display = 'none';
                        noPortfolio.style.display = 'block';
                    } else {
                        elem.classList.add('fadeIn', 'animated');
                    }
                });
            }
        }

        classFilter('all');
        classFilter('lovers');
        classFilter('chef');
        classFilter('girl');
        classFilter('guy');
        classFilter('grandmother');
        classFilter('granddad');    
    }
};

module.exports = tabs;