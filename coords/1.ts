let coords = <HTMLDivElement>document.getElementById('coords');
document.onclick = function (e) { // shows click coordinates
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

let field = <HTMLDivElement>document.getElementById('field');
let clientRect = field.getBoundingClientRect();
console.log('(' + clientRect.left + ',' + clientRect.top + ')');
console.log('(' + clientRect.right + ',' + clientRect.bottom + ')');
let leftTop = {
    left: field.clientLeft + clientRect.left,
    top: field.clientTop + clientRect.top
}
console.log('(' + leftTop.left + ',' + leftTop.top + ')');
console.log('(' + (leftTop.left + field.clientWidth) + ',' + (leftTop.top + field.clientHeight) + ')');
