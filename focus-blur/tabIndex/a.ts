let mouse = <HTMLPreElement>document.getElementById('mouse');
mouse.style.position = 'fixed';
mouse.tabIndex = 0;
mouse.addEventListener('focus', () => mouse.addEventListener('keydown', move));
mouse.addEventListener('blur', () => mouse.removeEventListener('keydown', move));

function move(event: KeyboardEvent) {
    let coords = mouse.getBoundingClientRect();
    switch (event.code) {
        case 'ArrowUp':
            mouse.style.top = coords.top - 10 + 'px';
            break;
        case 'ArrowDown':
            mouse.style.top = coords.top + 10 + 'px';
            break;
        case 'ArrowLeft':
            mouse.style.left = coords.left - 10 + 'px';
            break;
        case 'ArrowRight':
            mouse.style.left = coords.left + 10 + 'px';
            break;
        default:
            break;
    }
}
