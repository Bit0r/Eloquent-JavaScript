[...document.getElementsByTagName('li')].forEach(li => {
    let span = document.createElement('span');
    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.remove();
    li.prepend(span);
});

document.getElementById('tree').addEventListener('click', event => {
    let target = <HTMLSpanElement>event.target;
    if (target.tagName == 'SPAN') {
        [...target.closest('li').getElementsByTagName('ul')]
            .forEach(ul => ul.classList.toggle('none'));
    }
});
