let view = <HTMLDivElement>document.getElementById('view');
let text = document.createElement('textarea');
text.classList.add('edit');
view.addEventListener('click', () => {
    view.after(text);
    view.remove();
    text.focus();
    text.value = view.innerHTML
});
text.addEventListener('keydown', event => event.code == 'Enter' ? text.blur() : undefined);
text.addEventListener('blur', () => {
    view.innerHTML = text.value;
    text.after(view);
    text.remove()
});
