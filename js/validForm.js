
let valid = new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
            function: () => {
                let nameForm = document.querySelector('.form__name');
                if (!nameForm.value.match(/\d/g)) {
                    return valid.messages.name.function
                }
                return
            },
            

        },
        tel: {
            required: true,
            function: () => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },


    },
    messages: {
        name: {
            required: "это поле обязательное",
            remote: " Такое имя уже есть!",
            name: 'введите правильно',
            minLength: 'введите как минимум 2 символа',
            maxLength: 'Введите от 2 до 30 символов',
            function: 'выввели цифры',
        },
        tel: {
            remote: " Такое телефон  уже используется!",
            tel: 'введите правильно',
            function: 'введено не корректно',
            required: "это поле обязательное",
        }
    },
});