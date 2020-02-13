let controller = <HTMLParagraphElement>document.getElementsByClassName('controller')[0];
let menu = <HTMLUListElement>document.getElementsByClassName('menu')[0];
let arrows = document.getElementsByTagName('span');
controller.addEventListener('click', () => {
    menu.classList.toggle('none');
    arrows[0].classList.toggle('none');
    arrows[1].classList.toggle('none');
});
