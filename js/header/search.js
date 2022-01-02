export default function search() {
    $('.header__button').on('click', function (e) { e.preventDefault() });
    if ($(window).width() <= 1024) {
        $('.header__search-full').append('<button class="header__search-sumbit" type="submit"></button>')
        $('.header__button').on('click', function () {
            $('.header__search').toggleClass('search-active');
            $('.header__search-sumbit').toggleClass('header__search-sumbit-active')
        })
    }
}