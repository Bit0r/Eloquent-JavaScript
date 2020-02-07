function debounce(f: Function, ms: number) {

    let isCooldown = false;

    return function (...args: any[]) {
        if (isCooldown) return;
        f.apply(this, args);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };

}

let f = debounce(alert, 1000);

f(1); // 立即执行
f(2); // 忽略

setTimeout(() => f(3), 100); // 忽略（只过去了 100 ms）
setTimeout(() => f(4), 1100); // 运行
setTimeout(() => f(5), 1500); // 忽略（离上一次执行不超过 1000 ms）