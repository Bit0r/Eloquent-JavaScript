function sum(a: number) {
    return (b: number) => a + b;
}

console.log(sum(1)(3),sum(2)(5));