let calculator = {
    a: NaN,
    b: NaN,
    read() {
        let data = prompt("请输入两个数字，用逗号分隔")?.split(',')!;
        this.a = Number(data[0]);
        this.b = Number(data[1]);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());