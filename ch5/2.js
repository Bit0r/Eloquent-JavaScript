function loop(start,test,updata,fun){
    for(let i=start;test(i);updata(i))
        fun(i);
}

loop(3, n => n > 0, n => n - 1, console.log);
//这个loop函数是对的，但是浏览器无法运行。因为调用了太多次其它函数，导致时间超限