let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
//输出是1，因为第二次resolve会被忽略