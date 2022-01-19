export function headerButtons() {
    let btnCategories = $(".header__elem-bottom");
    let categories = $(".header__content");

    $(document).mouseup(function (e) {
        if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
            !categories.is(e.target) && categories.has(e.target).length === 0
        ) {
            $('.link-bottom').children().children().removeClass('active-icon');
            categories.removeClass('header__content--active');
        }
    });
    $('.link-bottom').on('click', function (e) {

        $(this).children().children().addClass('active-icon');
        $('.header__content').removeClass('header__content--active');
        $(this.parentElement.lastElementChild).toggleClass('header__content--active');
    });
}








