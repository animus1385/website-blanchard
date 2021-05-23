(function () {
    const burger = document.querySelector('.header__burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    })
}());
$('.header__burger').click(function () {
    $('.header__menu, .header__list').toggleClass('is-active');
    $('body').toggleClass('lock');
})






