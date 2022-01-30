export function burgerMenu() {

    const e = document.querySelector(".header__burger");
    e.addEventListener("click", () => {
        e.classList.toggle("active");
    });
    $(".header__burger").click(function (e) {
        $(".header__menu, .header__list, .header__akk").toggleClass("is-active"),
            $("body").toggleClass("lock");
    });
    resize()
    window.addEventListener('resize', resize)
    function resize() {
        if (document.body.offsetWidth < 1024) {
            $('.header__menu').append($(".header__akk"))
        } else {
            console.log($('.header__log-in'))
            $('.header__log-in').before($(".header__akk"))
        }
    }
}







