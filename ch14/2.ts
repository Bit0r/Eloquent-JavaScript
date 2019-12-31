function byTagName(node: Node, tagName: string) {
    let result: Node[] = [], childes = node.childNodes;
    tagName = tagName.toLowerCase();
    for (let i = 0; i < childes.length; i++) {
        if (childes[i].firstChild != null)
            result=result.concat(byTagName(childes[i], tagName));
        if (childes[i].nodeName.toLowerCase() == tagName)
            result.push(childes[i]);
    }
    return result;
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para!, "span").length);
// → 2