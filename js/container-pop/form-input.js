
export function formInput() {
    let inputForm = document.querySelectorAll(".form input");
    inputForm.forEach((e) => {
        e.addEventListener("click", function () {
            inputForm.forEach((e) => {
                e.classList.remove("form-active");
            }),
                e.classList.add("form-active");
        });
    });
}
