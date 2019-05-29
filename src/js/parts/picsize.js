const picSize = () => {

    let imgSizeOne = document.querySelector('.size-1'),
        imgSizeTwo = document.querySelector('.size-2'),
        imgSizeThree = document.querySelector('.size-3'),
        imgSizeFore = document.querySelector('.size-4');

    function imgSize(img, event, source) {
        img.addEventListener(event, () => {
            img.src = source;
            img.style.zIndex = 4;
            
            if (event == 'mouseout') {
                img.style.zIndex = 2;
            }
        });    
    }

    imgSize(imgSizeOne, 'mouseover', 'src/img/sizes-1-1.png');
    imgSize(imgSizeTwo, 'mouseover', 'src/img/sizes-2-1.png');
    imgSize(imgSizeThree, 'mouseover', 'src/img/sizes-3-1.png');
    imgSize(imgSizeFore, 'mouseover', 'src/img/sizes-4-1.png');

    imgSize(imgSizeOne, 'mouseout', 'src/img/sizes-1.png');
    imgSize(imgSizeTwo, 'mouseout', 'src/img/sizes-2.png');
    imgSize(imgSizeThree, 'mouseout', 'src/img/sizes-3.png');
    imgSize(imgSizeFore, 'mouseout', 'src/img/sizes-4.png');

};

module.exports = picSize;