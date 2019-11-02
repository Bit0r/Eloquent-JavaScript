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
        //因为static类型的数据保存在类模板储存区，而不是实例储存区，所以static方法只能使用staic变量，也不能使用this指针
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    group: any;
    key: number;
    constructor(group: any) {
        this.group = group;
        this.key = 0;
    }
    next() {
        if (this.key >= this.group.arr.length)
            return { value: undefined, done: true };
            //必须要有value: undefined，否则方法的返回值类型不固定
        let result = { value: this.group.arr[this.key], done: false };
        this.key++;
        return result;
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c