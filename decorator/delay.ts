function f(x: any) {
    alert(x);
}

function delay(f: Function, ms: number) {

    return function (...args: any[]) {
        setTimeout(() => f.apply(this, args), ms);
    };

}

// create wrappers
let f1000 = delay(f, 1000);
let f3000 = delay(f, 3000);

f3000("test1"); // 在 3000 ms 后展示 "test1"
f1000("test2"); // 在 1000 ms 后展示 "test2"