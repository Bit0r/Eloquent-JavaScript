function rang(start, end, step) {
    if (step == undefined)
        step = 1;
    let arr = [];
    if (step > 0)
        for (let i = start; i <= end; i += step)
            arr.push(i);
    else if (step < 0)
        for (let i = start; i >= end; i += step)
            arr.push(i);
    else
        return undefined;
    return arr;
}

function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++)
        s += arr[i];
    return s;
}

console.log(sum(rang(1, 10)));
console.log(sum(rang(1, 10, 2)));
console.log(sum(rang(5,2,-1)));