let link = document.querySelectorAll('.item-bottom');
let contentHeader = document.querySelector('.header__content');

link.forEach(e => {
    e.addEventListener('click', function () {
        link.forEach(elem => elem.classList.remove('active-icon'));
        contentHeader.classList.add('header__content--active');
        e.appendChild(contentHeader)

    })
})

document.addEventListener('click', function (e) {
    if (e.target.classList == 'active-icon') {
        console.log(e.target)
    }
})







