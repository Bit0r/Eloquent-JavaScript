document.querySelector("#button")?.addEventListener("click", () => {
    let code = (<HTMLTextAreaElement>document.querySelector("#code")).value;
    let outputNode = document.querySelector("#output")!;
    try {
        outputNode.firstChild?.remove();
        outputNode.appendChild(document.createTextNode(Function('', code)()));
    } catch (err) {
        outputNode.firstChild?.remove();
        outputNode.appendChild(document.createTextNode(err));
    }
});