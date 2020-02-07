let users: { [index: string]: string | number }[] = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key: string) {
    return (a: any, b: any) => {
        if (a[key] < b[key]) {
            return -1;
        } else if (a[key] > b[key]) {
            return 1;
        } else {
            return 0;
        }
    }
}

users.sort(byField('name'));
console.log(users);
//users.sort(byField('age'));
//console.log(users);

//由于chrome的优化，两个console.log会在sort完成后输出，所以一次只能输出一个sort后的结果
