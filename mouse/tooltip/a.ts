let house = <HTMLDivElement>document.getElementById('house');

let tooltip = document.createElement('div');
tooltip.style.display = 'fixed';
tooltip.classList.add('tooltip');

house.addEventListener('mouseover', event => {
    let target = (<HTMLElement>event.target);
    target = target.closest('[data-tooltip]');
    tooltip.innerHTML = target.dataset.tooltip;
    document.body.append(tooltip);
    let coords = target.getBoundingClientRect();
    let top = coords.top - tooltip.offsetHeight;
    if (top < 0)
        top = coords.bottom;
    tooltip.style.top = top + 'px';
    tooltip.style.left = coords.left + 'px';
});

house.addEventListener('mouseout', () => tooltip.remove());
