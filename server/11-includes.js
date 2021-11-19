const pets = ['cat','dog','bat'];

let included = false;
for (let index = 0; index < pets.length; index++) {

    const element = pets[index];
    if (element === 'cat') {
        included = true;
        break;
    }
    
}


const rta = pets.includes('cat');

console.log('for', included);
console.log('rta', rta);