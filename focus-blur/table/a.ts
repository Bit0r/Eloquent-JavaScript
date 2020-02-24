let scrollWidth = function () {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}();

class EditTable {
    backup: string;
    td: HTMLTableDataCellElement;
    textArea: HTMLTextAreaElement;
    controller: HTMLDivElement;
    finish: boolean;
    constructor() {
        this.controller = <HTMLDivElement>document.getElementById('bagua-controller');
        this.controller.remove();

        this.textArea = document.createElement('textarea');
        this.textArea.id = 'td-innerHTML';
        let td = <HTMLTableDataCellElement>document.getElementsByClassName('n')[0]
        this.textArea.style.width = td.clientWidth + 'px';
        this.textArea.style.height = td.clientHeight + 'px';
        
        this.finish = true;
    }
    handleEvent(event: Event) {
        let target = <HTMLElement>(<HTMLElement>event.target).closest('#ok,#cancel,td');
        if (!target) {
            return;
        } else if (target.tagName == 'TD' && this.finish) {
            this.td = <HTMLTableDataCellElement>target;
            this.edit();
        } else if (target.id == 'ok') {
            this.td = target.closest('td');
            this.ok();
        } else if (target.id == 'cancel') {
            this.td = target.closest('td');
            this.cancel();
        }
    }
    ok() {
        this.finish = true;
        this.td.innerHTML = this.textArea.value;
    }
    cancel() {
        this.finish = true;
        this.td.innerHTML = this.backup;
    }
    edit() {
        this.finish = false;
        this.backup = this.td.innerHTML;
        this.textArea.value = this.backup;
        this.td.innerHTML = '';
        this.td.append(this.textArea);
        this.td.append(this.controller);
        this.textArea.focus();
    }
}

let bagua = <HTMLTableElement>document.getElementById('bagua');

bagua.addEventListener('click', new EditTable());
