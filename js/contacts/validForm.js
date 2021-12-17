export function validateForm() {
    let valid = new JustValidate(".form", {
        rules: {
            name: {
                required: !0,
                minLength: 2,
                maxLength: 30,
                function: () => {
                    if (!document.querySelector(".form__name").value.match(/\d/g))
                        return valid.messages.name.function;
                },
            },
            tel: {
                required: !0,
                function: () => {
                    const e = selector.inputmask.unmaskedvalue();
                    return Number(e) && 10 === e.length;
                },
            },
        },
        messages: {
            name: {
                required: "это поле обязательное",
                remote: " Такое имя уже есть!",
                name: "введите правильно",
                minLength: "введите как минимум 2 символа",
                maxLength: "Введите от 2 до 30 символов",
                function: "выввели цифры",
            },
            tel: {
                remote: " Такое телефон  уже используется!",
                tel: "введите правильно",
                function: "введено не корректно",
                required: "это поле обязательное",
            },
        },
    });
}
