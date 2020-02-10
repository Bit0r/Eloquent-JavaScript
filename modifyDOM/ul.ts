let ul = document.querySelector('ul')!;
let text: string | null;

while (null != (text = prompt('请输入内容'))) {
    let li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
}
