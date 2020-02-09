let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function max(obj: Object) {
    let [top = null] = Object.entries(obj)
        .sort((a: [string, number], b: [string, number]) => b[1] - a[1]);
    return top;
}

console.log(max(salaries));
console.log(max({}));
