function makeObservable(target: any) {
    // 1. 添加handlers数组到目标对象
    target.handlers = [];

    // 存储 handler 函数到数组中以便于未来调用
    target.observe = function (handler: Function) {
        this.handlers.push(handler);
    };

    // 2. 创建代理以处理更改
    return new Proxy(target, {
        set(target, property, value, receiver) {
            let success = Reflect.set(target, property, value, receiver); // 转发写入操作到目标对象
            if (success) { // 如果设置属性的时候没有报错
                // 调用所有 handler
                target.handlers.forEach((handler: Function) => handler(property, value));
            }
            return success;
        }
    });
}

const a = {}
let user: { [index: string]: any } = {};

user = makeObservable(user);

user.observe((key: any, value: any) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John";
