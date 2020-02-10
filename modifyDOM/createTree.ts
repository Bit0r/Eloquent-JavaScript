let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

function createTree(container: HTMLDivElement, data: Object) {
    function tree(data: { [key: string]: any }) {
        let ul = document.createElement('ul');
        for (const key in data) {
            let li = document.createElement('li');
            li.textContent = key;
            if (Object.keys(data[key]).length!=0) {
                li.append(tree(data[key]));
            }
            ul.append(li);
        }
        return ul;
    }
    container.append(tree(data));
}

let container = document.createElement('div');
createTree(container, data); // 在 container 中创建树。
document.body.prepend(container);
