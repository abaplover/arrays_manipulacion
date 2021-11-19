const matriz = [
    [1,2,3],
    [3,4,5,[3,2]],
    [7,8,9]
];

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }    
}

const flatMatriz = matriz.flat(3); 

console.log('for', newArray);
console.log('flat', flatMatriz);

