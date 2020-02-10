function createCalendar(elem: HTMLElement, year: number, month: number) {
    let table = document.createElement('table');
    elem.append(table);

    //创建thead
    let tr = document.createElement('tr');
    let thead = document.createElement('thead');
    thead.append(tr);
    table.append(thead);
    //生成thead
    'MO TU WE TH FR SA SU'.split(' ').forEach(str => {
        let th = document.createElement('th');
        th.textContent = str;
        tr.appendChild(th);
    });

    //创建tbody
    let tbody = document.createElement('tbody');
    table.append(tbody);
    let day = new Date(year, month - 1).getDay() + 6;
    let count = new Date(year, month, 0).getDate();
    //循环这个月的天数
    for (let i = 1; i <= count; i++ , day++) {
        //每过一个星期，day就会>=7
        if (day >= 7) {
            day -= 7;
            tr = document.createElement('tr');
            tbody.append(tr);
            for (let j = 0; j < 7; j++)
                tr.append(document.createElement('td'));
        }
        tr.children[day].textContent = String(i);
    }
}

createCalendar(document.querySelector('div')!, 2020, 2);
