let user = {
    name: 'John',
    age: 30
};

function count(obj: Object) {
    return Object.keys(obj).length;
}

console.log(count(user)); // 2