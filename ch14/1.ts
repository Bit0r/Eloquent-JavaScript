const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

class Mountains{
    table:HTMLElement;
    constructor(div:HTMLElement){
        this.table = document.createElement('table');
        this.head();
        this.append();
        div.appendChild(this.table);
    }
    append() {
        let tr,td;
        MOUNTAINS.forEach(mountain => {
            tr = document.createElement('tr');
            this.table.appendChild(tr);
            td=document.createElement('td');
            tr.appendChild(td);
            td.appendChild(document.createTextNode(mountain.name));
            td=document.createElement('td');
            tr.appendChild(td);
            td.appendChild(document.createTextNode(String(mountain.height)));
            td.style.textAlign='right';
            td=document.createElement('td');
            tr.appendChild(td);
            td.appendChild(document.createTextNode(mountain.place));
        });
    }
    head(){
        let tr=document.createElement('tr'),th;
        this.table.appendChild(tr);
        th=document.createElement('th');
        tr.appendChild(th);
        th.appendChild(document.createTextNode('name'));
        th=document.createElement('th');
        tr.appendChild(th);
        th.appendChild(document.createTextNode('height'));
        th=document.createElement('th');
        tr.appendChild(th);
        th.appendChild(document.createTextNode('palce'));
    }
}

new Mountains(<HTMLElement>document.querySelector('#mountains'));