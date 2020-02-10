
function clock() {
    let now = new Date();
    let spans = document.querySelectorAll('span');
    spans[0].textContent = String(now.getHours());
    spans[1].textContent = String(now.getMinutes());
    spans[2].textContent = String(now.getSeconds());
}

function setClock() {
    let buttons = document.querySelectorAll('button');
    let id: number;
    buttons[0].addEventListener('click', () => {
        clearTimeout(id);
        id = setInterval(clock)
    });
    buttons[1].addEventListener('click', () => clearInterval(id));
}

setClock();
