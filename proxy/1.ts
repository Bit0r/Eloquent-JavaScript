let user = {
    name: "John"
};

function wrap(target:any) {
    return new Proxy(target, {
        get(target,prop,receiver){
            if(prop in user){
                let value=Reflect.get(target,prop,receiver);
                return typeof target[prop]=='function'? value.bind(target):value;
            }else
                throw new ReferenceError("没有这个属性");
                
        }
    });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // 错误：属性不存在