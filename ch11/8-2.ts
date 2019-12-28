class HttpError extends Error {
    response: Response;
    constructor(response: Response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url: string) {
    let result = await fetch(url);
    if (result.status == 200)
        return await result.json();
    else
        throw new HttpError(result);
}

// 查询用户名直到 github 返回一个合法的用户
async function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    while (true) {
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Full name: ${user.name}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
            } else {
                throw err;
            }
        }
    }
}

demoGithubUser();