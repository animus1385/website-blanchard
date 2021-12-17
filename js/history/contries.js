export function buttonContries() {
    let contries = document.querySelectorAll(".history__img");
    contries.forEach((e) => {
        e.addEventListener("click", function () {
            contries.forEach((e) => {
                e.children[0].classList.remove("history__line-active");
            }),
                e.children[0].classList.add("history__line-active");
        });
    });
}

