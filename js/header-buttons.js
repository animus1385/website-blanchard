let link = document.querySelectorAll('.item-bottom');
let contentHeader = document.querySelector('.header__content');

link.forEach(e => {
    e.addEventListener('click', function (el) {
        contentHeader.classList.add('header__content--active')
        e.appendChild(contentHeader)

    })
})









