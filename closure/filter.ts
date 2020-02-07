function inBetween(a: number, b: number) {
    return (x: number) => (x >= a && x <= b) ? true : false;
}

function inArray(arr: number[]) {
    return (x: number) => arr.includes(x);
}

/* .. inBetween 和 inArray 的代码 */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)), arr.filter(inArray([1, 2, 10])));
