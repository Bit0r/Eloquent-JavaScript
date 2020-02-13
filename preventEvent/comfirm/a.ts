(<HTMLFieldSetElement>document.getElementById('contents'))
    .addEventListener('click', event => {
        if ((<HTMLElement>event.target).closest('a')
            && !confirm('你将离开此网页，是否确定？')) {
            event.preventDefault();
        }
    });