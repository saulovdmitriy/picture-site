const picSize = () => {

    let sizesBlock = document.querySelectorAll('.sizes-block'),
        imgSizeOne = document.querySelector('.size-1'),
        imgSizeTwo = document.querySelector('.size-2'),
        imgSizeThree = document.querySelector('.size-3'),
        imgSizeFore = document.querySelector('.size-4');

    function imgSize(event) {

        for (let i = 0; i < sizesBlock.length; i++) {
            sizesBlock[i].addEventListener(event, function() {

                if (i == 0) {
                    imgSizeOne.src = 'src/img/sizes-1-1.png';
                    imgSizeOne.style.zIndex = 4;
                    
                    if (event == 'mouseout') {
                        imgSizeOne.style.zIndex = 2;
                        imgSizeOne.src = 'src/img/sizes-1.png';
                    }
                }

                if (i == 1) {
                    imgSizeTwo.src = 'src/img/sizes-2-1.png';
                    imgSizeTwo.style.zIndex = 4;
                    
                    if (event == 'mouseout') {
                        imgSizeTwo.style.zIndex = 2;
                        imgSizeTwo.src = 'src/img/sizes-2.png';
                    }
                }

                if (i == 2) {
                    imgSizeThree.src = 'src/img/sizes-3-1.png';
                    imgSizeThree.style.zIndex = 4;
                    
                    if (event == 'mouseout') {
                        imgSizeThree.style.zIndex = 2;
                        imgSizeThree.src = 'src/img/sizes-3.png';
                    }
                }

                if (i == 3) {
                    imgSizeFore.src = 'src/img/sizes-4-1.png';
                    imgSizeFore.style.zIndex = 4;
                    
                    if (event == 'mouseout') {
                        imgSizeFore.style.zIndex = 2;
                        imgSizeFore.src = 'src/img/sizes-4.png';
                    }
                }
            });
        }
    }

    imgSize('mouseover');

    imgSize('mouseout');

};

module.exports = picSize;