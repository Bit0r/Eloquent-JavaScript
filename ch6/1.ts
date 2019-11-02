class Group<T>{
    arr: Array<T>;
    constructor() {
        this.arr = [];
    }
    has(x: T): boolean {
        if (this.arr.indexOf(x) != -1)
            return true;
        else
            return false;
    }
    add(x: T) {
        if (this.has(x) == false)
            this.arr.push(x);
    }
    delete(x: T) {
        if (this.has(x))
            this.arr.splice(this.arr.indexOf(x), 1);
    }

    static from(raw: any) {
        let group = new Group();
        for (let value of raw)
            group.add(value);
        return group;
        //静态方法只能访问静态变量，同理不能使用this指针。因为静态方法储存在类模板内存区，此区域没有实例变量
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false