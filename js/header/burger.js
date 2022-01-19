export function burgerMenu() {

    const e = document.querySelector(".header__burger");
    e.addEventListener("click", () => {
        e.classList.toggle("active");
    });
    $(".header__burger").click(function (e) {
        $(".header__menu, .header__list, .header__akk").toggleClass("is-active"),
            $("body").toggleClass("lock");
    });
    
}







