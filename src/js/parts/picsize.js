const picSize = () => {

    let imgSizeOne = document.querySelector('.size-1'),
        imgSizeTwo = document.querySelector('.size-2'),
        imgSizeThree = document.querySelector('.size-3'),
        imgSizeFore = document.querySelector('.size-4');



    imgSizeOne.addEventListener('mouseover', () => {
        imgSizeOne.src = 'src/img/sizes-1-1.png';
    });

    imgSizeTwo.addEventListener('mouseover', () => {
        imgSizeTwo.src = 'src/img/sizes-2-1.png';
    });

    imgSizeThree.addEventListener('mouseover', () => {
        imgSizeThree.src = 'src/img/sizes-3-1.png';
    });

    imgSizeFore.addEventListener('mouseover', () => {
        imgSizeFore.src = 'src/img/sizes-4-1.png';
    });


    imgSizeOne.addEventListener('mouseout', () => {
        imgSizeOne.src = 'src/img/sizes-1.png';
    });

    imgSizeTwo.addEventListener('mouseout', () => {
        imgSizeTwo.src = 'src/img/sizes-2.png';
    });

    imgSizeThree.addEventListener('mouseout', () => {
        imgSizeThree.src = 'src/img/sizes-3.png';
    });

    imgSizeFore.addEventListener('mouseout', () => {
        imgSizeFore.src = 'src/img/sizes-4.png';
    });
  
};

module.exports = picSize;