const elements = ["fire", "aire", "water"];

let rtaFinal = '';

const separator = '--'

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('For', rtaFinal);

const rta2 = elements.join('--');

console.log('RTA', rta2);

const title = "Curso de manipulacion de arrays";

const titleArray = title.split(' ').join('-').toLowerCase();
console.log('Split',titleArray);