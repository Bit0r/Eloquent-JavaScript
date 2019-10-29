/* function every(array, test) {
    for(let value of array)
        if(test(value)==false)
            return false;
    return true;
} */
function every(array, test) {
    return !array.some(value => !test(value));
    //以下写法是错误的，因为some函数会把'!test'当成一个函数变量
    //return !array.some(!test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true