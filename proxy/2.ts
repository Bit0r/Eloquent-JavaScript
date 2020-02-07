let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        prop = Number(prop);
        if (prop < 0)
            prop += target.length;
        return Reflect.get(target, prop, receiver);
    }
});

console.log(array[-1], array[-2]); // 3
console.log(array[0])
// 其他数组也应该适用于这个功能