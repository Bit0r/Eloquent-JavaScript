let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
//直接从Object.prototype原型中调用hasOwnProperty方法，用call方法传递this指针