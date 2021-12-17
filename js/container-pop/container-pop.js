export function containerPop() {
    $('.akk-log-in__sing-up').on('click', function () {
        $('.akk-sing-in__content').toggleClass('sing-in__active');
    })
    $('.header__akk').on('click', function () {
        $('.header__log-in').toggleClass('sing-in__active');
        $('.akk-log-in').toggleClass('sing-in__active');

    })
    $('.akk-log-in__sing-up').on('click', function () {
        $('.akk-log-in').removeClass('sing-in__active');

    });
    $('.akk-log-in__background').on('click', function () {
        $('.header__log-in').removeClass('sing-in__active');
        $('.akk-log-in').removeClass('sing-in__active');
        $('.akk-sing-in').removeClass('sing-in__active');
    })
}