let container = <HTMLDivElement>document.getElementById('container');
container.addEventListener('click', event => {
    let pane = (<HTMLElement>event.target).closest('article');
    if (pane && pane.classList.contains('pane')) {
        pane.remove();
    }
});
