let link = document.querySelectorAll('.item-bottom');
let contentHeader = document.querySelector('.header__content');

link.forEach(e => {
    e.addEventListener('click', function () {
        e.classList.toggle('active-icon');
        contentHeader.classList.toggle('header__content--active');
        e.appendChild(contentHeader)

    })
})









