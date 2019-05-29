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
        totalValue = document.querySelector('.calc-price');

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
        optionAdd[3].value = 1500;

        let valueS = 0;
        let valueM = 0;
        let valueOpt = 0;
        let total = 0;


    selectSize.addEventListener('change', calcWork);

    selectMaterial.addEventListener('change', calcWork);

    selectOptions.addEventListener('change', calcWork); 
    
    function calcWork() {
        valueS = +selectSize.options[selectSize.selectedIndex].value;
        valueM = +selectMaterial.options[selectMaterial.selectedIndex].value;
        valueOpt = +selectOptions.options[selectOptions.selectedIndex].value;

        if (valueS > 0 && valueM > 0) {
            total = valueS + valueM + valueOpt;
            
            if (promocode.value == 'IWANTPOPART') {
                total *= 0.7;
            }
            totalValue.innerHTML = total;

        } else {
            totalValue.innerHTML = 0;
        }
        
    }

    promocode.addEventListener('input', calcWork);
    

   
    

        

};

module.exports = calc;