const calc = () => {

    let calcForm = document.querySelector('.form'),
        selectSize = document.getElementById('size'),
        selectMaterial = document.getElementById('material'),
        selectOptions = document.getElementById('options'),

        btn = document.querySelector('.form-btn'),

        optionSize = size.querySelectorAll('option'),
        optionMaterial = material.querySelectorAll('option'),
        optionAdd = options.querySelectorAll('option'),

        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price');

        optionSize[0].value = 0;
        optionSize[1].value = 500;
        optionSize[2].value = 1000;
        optionSize[3].value = 1500;
        optionSize[4].value = 2000;

        optionMaterial[0].value = 0;
        optionMaterial[1].value = 500;
        optionMaterial[2].value = 1000;
        optionMaterial[3].value = 1500;

        optionAdd[0].value = 0;
        optionAdd[1].value = 500;
        optionAdd[2].value = 1000;

        let valueS = 0;
        let valueM = 0;

        // selectSize.addEventListener('change', function() {
        //     // calcPrice.innerHTML = optionSize[1].value;

        //     optionSize.forEach(function(elem) {
        //         elem.addEventListener('click', function() {
        //             valueS = elem.value;
        //             calcPrice.innerHTML = valueS;
        //         });
        //     });
        //     console.log(valueS);
            
        // });
        // console.log(valueS);


        selectSize.addEventListener('change', function() {

            for (let i = 0; i < selectSize.options.length; ++i) {
                selectSize.options[i].foo = function() {
                    valueS = this.value;
                    console.log(valueS);
                    return valueS;
                };
            }

            selectSize.onchange = function() {
                this.options[this.selectedIndex].foo();
            };
            
        });

        selectMaterial.addEventListener('change', function() {

            for (let i = 0; i < selectMaterial.options.length; ++i) {
                selectMaterial.options[i].foo = function() {
                    valueM = this.value;
                    console.log(valueM);
                    return valueM;
                };
            }

            selectMaterial.onchange = function() {
                this.options[this.selectedIndex].foo();
            };
            
        });

        // calcPrice.addEventListener('change', calcSum);

        function calcSum() {
            calcPrice.innerText = valueS + valueM;
        }
        calcSum();

        
        

};

module.exports = calc;