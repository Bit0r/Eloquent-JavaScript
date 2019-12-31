class LNode {
    constructor(public value: number, public next?: LNode) { }
}
class List {
    private front?: LNode;
    private rear?: LNode;
    constructor() {
        this.front = this.rear = undefined;
    }
    arrayToList(arr: number[]) {
        this.front = this.rear = new LNode(arr[0]);
        for (let i = 1; i < arr.length; i++) {
            this.rear.next = new LNode(arr[i]);
            this.rear = this.rear?.next;
        }
    }
    listToArray(list?: List) {
        if (list == undefined)
            list = this;
        let arr: number[] = [];
        for (let current = list.front; current != undefined; current = current.next)
            arr.push(current.value);
        return arr;
    }
    prepend(value: number, old_list?: List) {
        if (old_list == undefined)
            old_list = this;
        let new_list = new List();
        for (let current = old_list.front; current != undefined; current = current.next) {
            let pnew = new LNode(current.value, current.next);
            new_list.rear = pnew;
            if (new_list.front == undefined)
                new_list.front = pnew;
        }
        new_list.front = new LNode(value, new_list.front);
        return new_list;
    }
    nth(value: number, list?: List) {
        if (list == undefined)
            list = this;
        for (let current = list.front; current != undefined; current = current.next)
            if (current.value == value)
                return current;
        return undefined;
    }
    nth_recursive(value: number, list?: List) {
        function nth_r(front: LNode | undefined): LNode | undefined {
            if (front == undefined || front.value == value)
                return front;
            return nth_r(front.next!);
        }
        if (list == undefined)
            list = this;
        return nth_r(list.front);
    }
}

let list = new List();
list.arrayToList([1, 2, 3]);
let arr = list.listToArray();
console.log(arr);
list = list.prepend(0);
console.log(list);
console.log(list.nth(0), list.nth_recursive(3));