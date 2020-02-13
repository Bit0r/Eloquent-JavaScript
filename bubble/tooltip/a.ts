let tooltip = document.createElement('div');
tooltip.className = 'tooltip';

document.body.addEventListener('mouseover', eve => {
    let target = <HTMLElement>eve.target;
    if (target.tagName == 'BUTTON') {
        tooltip.innerHTML = target.dataset.tooltip;
        document.body.append(tooltip);
        let coords = target.getBoundingClientRect();
        tooltip.style.left = coords.left + 'px';
        if (coords.top >= target.offsetHeight + tooltip.offsetHeight) {
            tooltip.style.top = coords.top - tooltip.offsetHeight + 'px';
        } else {
            tooltip.style.top = coords.bottom + 'px';
        }
    }
});

document.body.addEventListener('mouseout', eve => {
    let target = <HTMLElement>eve.target;
    if (target.tagName == 'BUTTON') {
        tooltip.remove();
    }
})
