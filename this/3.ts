let worker = {
    someMethod() {
        return 1;
    },

    slow(x: number) {
        alert("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func: Function) {
    let cache = new Map();
    return function (x: number) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // "this" 现在被正确的传递了
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); // 现在让他缓存起来

alert(worker.slow(2)); // 生效了
alert(worker.slow(2)); // 生效了, 不会调用原始的函数了。被缓存起来了

/*
为了清楚地说明，让我们更深入地了解 this 是如何传递的：

1.在经过装饰之后，worker.slow 现在是包装器 function (x) { ... }。
2.因此，当执行 worker.slow(2) 时，包装器将 2 作为参数并且 this=worker（它是点之前的对象）。
3.在包装器内部，假设结果尚未缓存，func.call(this, x) 将当前的 包装器的this 和当前参数 (=2) 传递给原始方法。
*/