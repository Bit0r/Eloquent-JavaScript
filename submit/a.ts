function showPrompt(text: string, callback: Function) {
    let coverDiv = <HTMLDivElement>document.getElementById('cover-div');
    // Show a half-transparent DIV to "shadow" the page
    // (the form is not inside, but near it, because it shouldn't be half-transparent)
    function showCover() {
        // make the page unscrollable while the modal form is open
        document.body.style.overflowY = 'hidden';
        coverDiv.style.display = 'block';
    }
    function hideCover() {
        coverDiv.style.display = '';
        document.body.style.overflowY = '';
    }

    //用div覆盖整个html,同时显示模态框
    showCover();
    let form = <HTMLFormElement>document.getElementById('prompt-form');
    let container = <HTMLDivElement>document.getElementById('prompt-form-container');
    document.getElementById('prompt-message').innerHTML = text;
    form.text.value = '';
    container.style.display = 'block';
    form.text.focus();

    //完成输入,同时清除注册的事件处理器
    function complete(value: string) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
    }

    form.onsubmit = () => {
        let value = form.text.value;
        if (value == '') return false; // ignore empty submit

        complete(value);
        return false;
    };

    form.cancel.onclick = () => {
        complete(null);
    };

    document.onkeydown = event => {
        if (event.key == 'Escape') {
            complete(null);
        }
    };

    //防止焦点移出模态框
    let lastElem = <HTMLElement>form[form.elements.length - 1];
    let firstElem = <HTMLElement>form[0];

    lastElem.onkeydown = event => {
        if (event.key == 'Tab' && !event.shiftKey) {
            firstElem.focus();
            return false;
        }
    };

    firstElem.onkeydown = event => {
        if (event.key == 'Tab' && event.shiftKey) {
            lastElem.focus();
            return false;
        }
    };
}

document.getElementById('show-button').onclick = () => {
    showPrompt("Enter something<br>...smart :)", (value: string) => {
        alert("You entered: " + value);
    });
};
