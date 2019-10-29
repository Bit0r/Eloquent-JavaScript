function deepEqual(x,y){
    if(typeof x=='object'&&typeof y=='object'){
        let keys_x=Object.keys(x),keys_y=Object.keys(y);
        if(keys_x.length!=keys_y.length)
            return false;
        for(let i=0;i<keys_x.length;i++)
            if(deepEqual(x[keys_x[i]],y[keys_y[i]])==false)
                return false;
        return true;
    }
    else if(x===y)
        return true;
    else
        return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));