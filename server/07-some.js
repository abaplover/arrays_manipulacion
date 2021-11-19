const numbers = [1,2,3,4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {

    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
    
}
console.log(rta)


const rta2 = numbers.some(item => item % 2 === 0);

console.log('rta2', rta2);

const orders = [
    {
        customerName: 'Roland',
        total: 30,
        delivered: false
    },
    {
        customerName: 'Rosairis',
        total: 20,
        delivered: false
    },
    {
        customerName: 'Mariel',
        total: 180,
        delivered: false
    }

];

const delivered = orders.some( item => item.delivered);
console.log('Delivered', delivered);

const dates =[ 
    {
        startDate: new Date(2021,1,1,10),
        endDate: new Date(2021,1,1,11),
        title: "Cita de trabajo"

    },
    {
        startDate: new Date(2021,1,1,15),
        endDate: new Date(2021,1,1,15,30),
        title: "Cita con el jefe"

    },
    {
        startDate: new Date(2021,1,1,20),
        endDate: new Date(2021,1,1,21),
        title: "Cena"

    }

]

const newAppointment = {
    startDate: new Date(2021,1,1,8),
    endDate: new Date(2021,1,1,8,30)
}

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })  
}

console.log('Overlap', isOverlap(newAppointment));