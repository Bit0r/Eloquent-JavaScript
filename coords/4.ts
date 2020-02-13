function getCoords(elem: HTMLElement) {
    let box = elem.getBoundingClientRect();
    return {
        left: box.left + pageXOffset,
        right: box.right + pageXOffset,
        top: box.top + pageYOffset,
        bottom: box.bottom + pageYOffset
    }
}

/**
* Positions elem relative to anchor as said in position.
*
* @param {HTMLElement} anchor     Anchor element for positioning
* @param {string} position One of: top/right/bottom
* @param {HTMLElement} elem       Element to position
*
* Both elements: elem and anchor must be in the document
*/
function positionAt(anchor: HTMLElement, position: string, elem: HTMLElement) {
    let docCoords = getCoords(anchor);
    switch (position) {
        case 'top-out':
            elem.style.left = docCoords.left + 'px';
            elem.style.top = docCoords.top - elem.offsetHeight + 'px';
            break;
        case 'right-out':
            elem.style.left = docCoords.right + 'px';
            elem.style.top = docCoords.top + 'px';
            break;
        case 'bottom-out':
            elem.style.left = docCoords.left + 'px';
            elem.style.top = docCoords.bottom + 'px';
            break;
        case 'top-in':
            elem.style.left = docCoords.left + 'px';
            elem.style.top = docCoords.top + 'px';
            break;
        case 'right-in':
            elem.style.left = docCoords.right - elem.offsetWidth + 'px';
            elem.style.top = docCoords.top + 'px';
            break;
        case 'bottom-in':
            elem.style.left = docCoords.left + 'px';
            elem.style.top = docCoords.bottom - elem.offsetHeight + 'px';
            break;
        default:
            throw new Error('Must be "left", "right" or "bottom"!');
    }
}

/**
* Shows a note with the given html at the given position
* relative to the anchor element.
*/
function showNote(anchor: HTMLElement, position: string, html: string) {
    let div = document.createElement('div');
    div.textContent = html;
    document.body.append(div);
    div.classList.add('note');
    positionAt(anchor, position, div);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-in", "note right-in");
showNote(blockquote, "bottom-in", "note bottom-in");
