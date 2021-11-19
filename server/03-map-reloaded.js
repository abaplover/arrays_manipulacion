const orders = [
    {
        cusomterName: 'Roland',
        total: 50,
        delivered: true
    },
    {
        cusomterName: 'Rosairis',
        total: 20,
        delivered: false
    },
    {
        cusomterName: 'Mariel',
        total: 180,
        delivered: true
    }

];

console.log('original', orders);
//const total = orders.map( item => item.total);
//console.log('cambio', total);

const total3 = orders.map( item => {
    return {
            ...item,
            tax: 0.19
    };
});
console.log('cambio', total3);
