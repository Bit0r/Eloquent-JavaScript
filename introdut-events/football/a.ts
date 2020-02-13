let ball = <HTMLImageElement>document.getElementById('ball');
let field = <HTMLDivElement>document.getElementById('field');

field.addEventListener('click', event => {
    let box = field.getBoundingClientRect();
    let left = event.clientX - box.left - field.clientLeft - ball.offsetWidth / 2;
    let top = event.clientY - box.top - field.clientTop - ball.offsetHeight / 2;
    if (left < 0)
        left = 0;
    else if (left > field.clientWidth - ball.offsetWidth)
        left = field.clientWidth - ball.offsetWidth;
    if (top < 0)
        top = 0;
    else if (top > field.clientHeight - ball.offsetHeight)
        top = field.clientHeight - ball.offsetHeight;
    ball.style.left = left + 'px';
    ball.style.top = top + 'px';
});
