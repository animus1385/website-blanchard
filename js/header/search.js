export default function search() {
    document.querySelector(".header__button-open").addEventListener("click", function () {
        document.querySelector(".header__search-full").classList.toggle("form__active");
        document.querySelector('.unity-bottom').classList.toggle('unity-active');
        this.classList.toggle("active");
    })

    document.addEventListener("click", function (e) {
        let target = e.target;
        let form = document.querySelector(".form");
        if (!target.closest(".header__search-block")) {
           
            document.querySelector(".header__button-open").classList.remove("active")
        }
    })
}