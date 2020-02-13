const carousel = <HTMLDivElement>document.getElementById('carousel');
/* configuration */
const width = 130; // image width
const count = 3; // visible images count

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // ribbon scroll position

carousel.querySelector('.prev').addEventListener('click', () => {
    // shift left
    position += width * count;
    // can't move to the left too much, end of images
    position = Math.min(position, 0);
    list.style.transform = `translate(${position}px,0)`;
});

carousel.querySelector('.next').addEventListener('click', () => {
    // shift right
    position -= width * count;
    // can only shift the ribbbon for (total ribbon length - visible count) images
    position = Math.max(position, -width * (listElems.length - count));
    list.style.transform = `translate(${position}px,0)`;
});

