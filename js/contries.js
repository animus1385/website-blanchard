
let contries = document.querySelectorAll('.history__img');

contries.forEach(e => {
    e.addEventListener('click', function () {
        contries.forEach(elem=>{ elem.classList.remove('history__img__active')});
        e.classList.add('history__img__active');
            
            
    })
})