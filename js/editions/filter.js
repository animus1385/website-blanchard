export function filter() {
    (() => {
        const checkBtn = document.querySelector('.js-check-heading');
        checkBtn.addEventListener('click', function () {
            this.classList.toggle('is-active');
            this.children[0].classList.toggle('active-arrow');
        });
    })();
}
