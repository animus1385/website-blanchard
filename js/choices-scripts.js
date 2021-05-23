const element = document.querySelector('.gallery__author');
const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,

    position: "bottom",
    shouldSort: false,
    placeholderValue: 'Автор',
    duplicateItemsAllowed: false,
    resetScrollPosition: false,
});