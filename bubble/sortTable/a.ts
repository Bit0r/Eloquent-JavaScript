let table = document.getElementsByTagName('table')[0];

table.addEventListener('click', event => {
    let target = <HTMLTableHeaderCellElement>event.target;
    if (target.classList.contains('number-type')) {
        let rows = [...table.getElementsByTagName('tr')].slice(1)
            .sort((a, b) => Number(a.firstElementChild.textContent) - Number(b.firstElementChild.textContent));
        table.append(...rows);
    } else if (target.classList.contains('string-type')) {
        let rows = [...table.getElementsByTagName('tr')].slice(1)
            .sort((a, b) => {
                let str1 = a.lastElementChild.textContent;
                let str2 = b.lastElementChild.textContent;
                if (str1 < str2)
                    return -1;
                if (str1 > str2)
                    return 1;
                return 0;
            });
        table.append(...rows);
    }
});
