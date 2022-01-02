export default function tooltipsActive() {


const tool = document.querySelectorAll('.popup');


tool.forEach(ell => {
    let button = ell.parentNode.children[0]
    const popperInstance = Popper.createPopper(button, ell, {
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [-1, 11],
                },
            },
        ],
    });
    tooltips(ell, button, popperInstance)
})

function tooltips(tooltip, button, popperInstance) {
    function show() {
        tooltip.setAttribute('data-show', '');


        popperInstance.update();
    }

    function hide() {
        tooltip.removeAttribute('data-show');
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach((event) => {
        button.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
        button.addEventListener(event, hide);
    });
}
}