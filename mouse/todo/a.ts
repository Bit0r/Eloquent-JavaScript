let ul = document.getElementsByTagName('ul')[0];
ul.addEventListener('click', event => {
    let target = (<HTMLElement>event.target).closest('li');
    if (target) {
        if (!event.ctrlKey && !event.metaKey) {
            [...ul.getElementsByTagName('li')]
                .forEach(li => li.classList.remove('selected'));
        }
        target.classList.add('selected');
    }
});
