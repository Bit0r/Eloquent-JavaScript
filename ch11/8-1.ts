async function loadJson(url: string) { // (1)
    let response = await fetch(url); // (2)

    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
    }

    throw new Error(String(response.status));
}

loadJson('no-such-user.json')
    .catch(alert); // Error: 404 (4)
//时刻记住async的返回值是一个Promise，所以必须使用.then/.catch或者另一个async/await处理结果