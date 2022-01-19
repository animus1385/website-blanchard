export default function search() {
    document.querySelector(".header__button-open").addEventListener("click", function () {
        document.querySelector(".header__search-full").classList.toggle("form__active");
        this.classList.add("active");
    })

    document.addEventListener("click", function (e) {
        let target = e.target;
        let form = document.querySelector(".form");
        if (!target.closest(".header__search-block")) {
            form.classList.remove("header__search-full");
            form.querySelector(".header__search").value = "";
            document.querySelector(".header__button-open").classList.remove("active")
        }
    })
}