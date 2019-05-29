const tabs = () => {

    let portfolioMenu  = document.querySelector('.portfolio-menu'),
        menuItem  = document.querySelectorAll('.menu-li'),
        portfolioBlock = portfolio.querySelectorAll('.portfolio-block'),
        noPortfolio = portfolio.querySelector('.portfolio-no');

        
    portfolioMenu.addEventListener('click', filterClass);
    
    function filterClass(event) {
        let target = event.target;
        
        function classFilter(elementClass) {
            if (target && event.target.classList.contains(elementClass)) {

                menuItem.forEach(function(item) {
                    item.classList.remove('active');
                });
                event.target.classList.add('active');

                portfolioBlock.forEach(function(elem) {
                    noPortfolio.style.display = 'none';
                    elem.style.display = 'block';
                    elem.classList.remove('fadeIn', 'animated');

                    if (!(elem.classList.contains(elementClass))) {
                        elem.style.display = 'none';
                    } else {
                        elem.classList.add('fadeIn', 'animated');
                    }
                });
            }

            if (target && event.target.classList.contains('grandmother')) {
                noPortfolio.style.display = 'block';
            } else if (target && event.target.classList.contains('granddad')) {
                noPortfolio.style.display = 'block';
            } else {
                noPortfolio.style.display = 'none';
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