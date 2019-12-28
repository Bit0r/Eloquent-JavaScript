new Promise(function (resolve, reject) {
    setTimeout(() => { throw new Error("Whoops!"); }, 1000);
}).catch(alert);
new Promise(function (resolve, reject) {
    setTimeout(() => reject("oops!"), 3000);
}).catch(alert);
//只会显示"oops!"而不会显示"Whoops!"。
//因为throw只能抛出同步的错误，抛出异步的错误必须用reject