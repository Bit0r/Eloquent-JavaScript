let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr: string[]) {
    let map = new Map();
    arr.forEach(value => map.set(Array.from(value.toLowerCase()).sort().join(''), value));//利用Array.from()可以将字符串拆成字符数组
    return Array.from(map.values());
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"