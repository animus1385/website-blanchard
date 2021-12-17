export function burgerMenu() {
    (function () {
        const e = document.querySelector(".header__burger");
        e.addEventListener("click", () => {
            e.classList.toggle("active");
        });
    })(),
        $(".header__burger").click(function () {
            $(".header__menu, .header__list").toggleClass("is-active"),
                $("body").toggleClass("lock");
        });
}







