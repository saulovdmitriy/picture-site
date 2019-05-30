const sendform = () => {
    let message = {
        loading: `<img src="src/img/ajax-loader.gif" class="status__img">`,
        success: `<span class="status__message">Благодарим за заявку! <br> В ближайшее время мы с вами свяжемся</span>`,
        failure: `<span class="status__message">Произошла ошибка! Введите данные снова</span>`
    };

    let myPhone = document.querySelectorAll('input[type="tel"]');

    for (let i = 0; i < myPhone.length; i++) {
        myPhone[i].addEventListener('input',  function() {

            if (!(/^\+?[()\d \-]*$/.test(myPhone[i].value))) {
                this.value = this.value.slice(0, -1);
            }

            if ((myPhone[i].value.length > 11)) {
                this.value = this.value.slice(0, -1);
            }
            
        });
    }

    let inputValid = document.querySelectorAll('.inputValid');

    for (let i = 0; i < inputValid.length; i++) {
        inputValid[i].addEventListener('input', function() {

            if (!(/^[?!,.а-яА-ЯёЁ0-9\s]+$/.test(inputValid[i].value))) {
                this.value = this.value.slice(0, -1);
            }

        });
    }

    document.body.addEventListener('submit', (event) => {
        let target = event.target;
        event.preventDefault();
        
        let input = target.getElementsByTagName('input');

        let formData = new FormData(target);

        const postData = (data) => {

            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');
                
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readystate === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };
                
                request.send(data);
            });
        }

        const clearInput = () => {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        };

        

        postData(formData)
            .then(() => {target.innerHTML = message.loading})
            .then(() => {target.innerHTML = message.success;})
            .catch(() => target.innerHTML = message.failure)
            .then(clearInput);

    });
}

module.exports = sendform;