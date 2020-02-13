document.getElementById('thumbs').addEventListener('click', event => {
    event.preventDefault();
    (<HTMLImageElement>document.getElementById('largeImg'))
        .src = (<HTMLElement>event.target).closest('a').href;
});
