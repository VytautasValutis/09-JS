console.clear();

/*
OBJECT - duomenu tipas {}
{
    key1: 
    key2:
    key3:
}
*/

const empty = {};
console.log(empty);

const perso1Name = `Petras`;
const perso1Age = 99;
const perso1isMarried = true;

const perso2Name = `Maryte`;
const perso2Age = 88;
const perso2isMarried = false;

const person1 = [`Petras`, 99, true];

const person1o = {
    name: `Petras`,
    age: 99,
    isMarried: true,
}
const person2o = {
    name: `Maryte`,
    age: 88,
    isMarried: false,
}

console.log(person1o);
console.log(`Sveiki, mano vardas yra ${person1o['name']} ir man yta ${person1o['age']} metu. `);

const car = {
    brand: `Volvo`,
    model: `S40`,
    color: `black`,
    price: 10000,
    currency: `LTL`,
}
const kasManeDomina = 'model';
console.log(car[kasManeDomina]); 

const carIntro = `Parduoti ${car.brand} ${car.model} (${car.color}) uz ${car.price} ${car.currency}.`
console.log(carIntro);

const students = [
    {
        name: `Petras`,
        marks: [10, 8, 6, 6]
    },
    {
        name: `Maryte`,
        marks: [10, 10, 2, 3, 5, 7]
    }
];

console.log(students[0][`name`]);
console.log(students[0].name);

console.log(students[0].marks[1]);
console.log(students[0][`marks`][1]);






