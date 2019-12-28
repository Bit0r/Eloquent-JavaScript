function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
    //这里一定是调用传入一个函数指针，而不是直接调用函数
}

delay(3000).then(() => alert('runs after 3 seconds'));