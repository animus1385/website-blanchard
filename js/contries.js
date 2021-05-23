let list = document.querySelectorAll('.history__img')
for (let li of list) {
    let span = document.createElement('span'); /* создание span */
    span.classList.add('show'); /* добавление класса для span */
    li.prepend(span); /* вставить span внутри li */
    span.append(span.nextSibling) /* присоединить к span следующий узел */
}

list.onclick = function (event) {

    if (event.target.tagName != 'SPAN') return;

    let childrenList = event.target.parentNode.querySelector('ul');
    if (!childrenList) return;
    childrenList.classList.toggle('history__img__active')
}
