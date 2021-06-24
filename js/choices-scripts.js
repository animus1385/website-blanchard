const element = document.querySelector('.gallery__author');
const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,


    position: "bottom",
    shouldSort: false,
    duplicateItemsAllowed: false,
    resetScrollPosition: false,
    classNames: {
        containerOuter: 'choices',
        containerInner: 'choices__inner',
        input: 'choices__input',
        inputCloned: 'choices__input--cloned',
        list: 'choices__list',
        listItems: 'choices__list--multiple',
        listSingle: 'choices__list--single',
        listDropdown: 'choices__list--dropdown',
        item: 'choices__item',
        itemSelectable: null,
        itemDisabled: 'choices__item--disabled',
        itemOption: 'choices__item--choice',
        group: 'choices__group',
        groupHeading: 'choices__heading',
        button: 'choices__button',
        activeState: 'is-active',
        focusState: 'is-focused',
        openState: 'is-open',
        disabledState: 'is-disabled',
        highlightedState: 'is-highlighted',
        selectedState: 'is-selected',
        flippedState: 'is-flipped',
        selectedState: 'is-highlighted',
    }
});