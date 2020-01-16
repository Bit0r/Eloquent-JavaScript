function unique(arr: string[]) {
    return Array.from(new Set(arr));//利用Array.from()可以将一切可迭代对象生成数组
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O