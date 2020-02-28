//@ts-ignore
let calculator = <HTMLFormElement>document.forms.calculator;
let heightAfter = <HTMLDivElement>document.getElementById('height-after');
let moneyBefore = <HTMLTableHeaderCellElement>document.getElementById('money-before');
let moneyAfter = <HTMLTableHeaderCellElement>document.getElementById('money-after');
calculator.addEventListener('change', () => {
    let initial = Number((<HTMLInputElement>calculator.money).value);
    let years = Number((<HTMLSelectElement>calculator.months).value) / 12;
    let interest = Number((<HTMLInputElement>calculator.interest).value) * 0.01;
    let result = Math.round(initial * (1 + interest * years));
    moneyBefore.innerHTML = initial + 'px';
    moneyAfter.innerHTML = result + 'px';
    heightAfter.style.height = result / initial * 100 + 'px';
});
