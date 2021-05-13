const students = [
    {
        firstname: 'Pawel',
        gender: 'male',
        grades: [
            {
                subject: 'biology',
                rate: 5,
            },
            {
                subject: 'maths',
                rate: 4,
            },
            {
                subject: 'chemistry',
                rate: 5,
            },
            {
                subject: 'WF',
                rate: 6,
            }, {
                subject: 'geography',
                rate: 5,
            },
        ]
    },
    {
        firstname: 'Jan',
        gender: 'male',
        grades: [
            {
                subject: 'biology',
                rate: 5,
            },
            {
                subject: 'maths',
                rate: 2,
            },
            {
                subject: 'chemistry',
                rate: 2,
            },
            {
                subject: 'WF',
                rate: 6,
            },
            {
                subject: 'geography',
                rate: 5,
            },
        ]
    },
    {
        firstname: 'Iza',
        gender: 'female',
        grades: [
            {
                subject: 'biology',
                rate: 6,
            },
            {
                subject: 'maths',
                rate: 6,
            },
            {
                subject: 'chemistry',
                rate: 6,
            },
            {
                subject: 'WF',
                rate: 1,
            }, {
                subject: 'geography',
                rate: 6,
            },
        ]
    },
    {
        firstname: 'Anna',
        gender: 'female',
        grades: [
            {
                subject: 'biology',
                rate: 1,
            },
            {
                subject: 'maths',
                rate: 4,
            },
            {
                subject: 'chemistry',
                rate: 5,
            },
            {
                subject: 'WF',
                rate: 3,
            }, {
                subject: 'geography',
                rate: 2,
            },
        ]
    }
]
const rentalCarCompany = [
    {
        name: 'audi',
        allCarsNumber: 70,
        carsToRent: 30,
    },
    {
        name: 'fiat',
        allCarsNumber: 120,
        carsToRent: 120,
    },
    {
        name: 'bwm',
        allCarsNumber: 50,
        carsToRent: 50,
    },
    {
        name: 'ferrari',
        allCarsNumber: 3,
        carsToRent: 1,
    },
    {
        name: 'mustang',
        allCarsNumber: 13,
        carsToRent: 3,
    },
    {
        name: 'mercedes',
        allCarsNumber: 22,
        carsToRent: 12,
    },
]
const listaAllegro = [
    {
        name: 'laptop lenovo',
        category: 'laptopy',
        price: 2000,
        rating: 4.5,
        soldProducts: 43
    },
    {
        name: 'laptop asus',
        category: 'laptopy',
        price: 3100,
        rating: 3,
        soldProducts: 211
    },
    {
        name: 'Flip 5 20',
        category: 'glosniki',
        price: 377,
        rating: 3.2,
        soldProducts: 243
    },
    {
        name: 'Imagic 2000',
        category: 'odkurzacze',
        price: 300,
        rating: 2,
        soldProducts: 32
    },
    {
        name: 'XIAOMI MI',
        category: 'odkurzacze',
        price: 700,
        rating: 6,
        soldProducts: 14
    },
    {
        name: 'Samsung HT-C453',
        category: 'glosniki',
        price: 120,
        rating: 1.3,
        soldProducts: 53
    },
    {
        name: 'Medion MD18418',
        category: 'odkurzacze',
        price: 143,
        rating: 4.1,
        soldProducts: 121
    },
    {
        name: '5.0 JAMO S 803 HCS',
        category: 'glosniki',
        price: 1748,
        rating: 5.2,
        soldProducts: 3
    }
]
module.exports = {
    students,
    rentalCarCompany,
    listaAllegro
}