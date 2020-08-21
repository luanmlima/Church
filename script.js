const btnLogin = document.querySelector('#btnLogin');
const form = document.querySelector('#form');


btnLogin.addEventListener('click', event => {
    event.preventDefault();
    const fields = [...document.querySelectorAll('.inputs input')];

    fields.forEach(field => {
        if (field.value === '') form.classList.add('validate-error');
    });

    const formError = document.querySelector('.validate-error');
    if (formError) {
        formError.addEventListener('animationend', event => {
            if (event.animationName === 'nono') {
                formError.classList.remove('validate-error');
            }
        });
    }
    else{
        form.classList.add('form-hide');
    }
});