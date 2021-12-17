export function accordion() {
    window.addEventListener("DOMContentLoaded", function () {
        $(".history__title-button").click(function () {
            $('.history__button').removeClass('history__button-active');
            $(this).children('.history__button').toggleClass('history__button-active');
            $(this).next(".slide").toggleClass("slide__active");

        });
        $('.accordion').accordion({
            heightStyle: 'content'
        });
        $(".history__item").click(function () {
            if ($(this).text() == 'Доменико Гирландайо') {
                $('.history__item').removeClass('history__link-active')
                $('.history__active-content').removeClass('disable-content')
                $('.history__disable-content').removeClass('active-content')
                $('.history__active-content').addClass('active-content')
                $('.history__disable-content').addClass('disable-content')
            } else {
                $('.history__item').removeClass('history__link-active')
                $(this).addClass('history__link-active')
                $('.history__active-content').removeClass('active-content')
                $('.history__disable-content').removeClass('disable-content')
                $('.history__active-content').addClass('disable-content')
                $('.history__disable-content').addClass('active-content')
            }


        })
    })
}

