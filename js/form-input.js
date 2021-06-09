
let inputForm = document.querySelectorAll('.form input');

inputForm.forEach(e => {
    e.addEventListener('click', function () {
        inputForm.forEach(elem=>{ elem.classList.remove('form-active')});
        e.classList.add('form-active');   
    })
})