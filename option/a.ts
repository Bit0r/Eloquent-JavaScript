let genres = <HTMLSelectElement>document.forms[0][0];

console.log(genres.value, genres.options[genres.selectedIndex].text);

let newOptin = new Option('Classic', 'classic');
genres.append(newOptin);

newOptin.selected = true;
