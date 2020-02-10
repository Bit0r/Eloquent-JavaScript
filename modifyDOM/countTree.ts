let lis = document.getElementsByTagName('li');

for (let li of lis) {
    //获得这个<li>下的所有<li>的个数
    let descendantsCount = li.getElementsByTagName('li').length;
    if (descendantsCount==0) continue;

    //设置文本内容
    li.firstChild.textContent += `[${descendantsCount}]`;
}

/*
    <ul>
        <li>Animals
            <ul>
                <li>Mammals
                    <ul>
                        <li>Cows</li>
                        <li>Donkeys</li>
                        <li>Dogs</li>
                        <li>Tigers</li>
                    </ul>
                </li>
                <li>Other
                    <ul>
                        <li>Snakes</li>
                        <li>Birds</li>
                        <li>Lizards</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Fishes
            <ul>
                <li>Aquarium
                    <ul>
                        <li>Guppy</li>
                        <li>Angelfish</li>
                    </ul>
                </li>
                <li>Sea
                    <ul>
                        <li>Sea trout</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
*/
