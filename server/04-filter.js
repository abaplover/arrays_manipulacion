const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >=6) {
        newArray.push(element);
    }

}

console.log('newArray', newArray);
console.log('original', words);

const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);

const orders = [
    {
        customerName: 'Roland',
        total: 30,
        delivered: true
    },
    {
        customerName: 'Rosairis',
        total: 20,
        delivered: false
    },
    {
        customerName: 'Mariel',
        total: 180,
        delivered: true
    }

];

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Ro'));