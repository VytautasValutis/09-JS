console.clear();

const petras0 = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favoriteFunction: (a, b) => a + b,
}

/*
OOP <---> class

new Class() --- sukuria tos klases objekta
*/

class Person {          // pavadinimas is didziosios raides
                        // funkcijos analogas - metodas
    // constructor(vardas, amzius, laikas, dantu) {     
    constructor(vardas, amzius, options = {}) {     
        this.name = vardas;
        this.age = amzius;
        this.period = options.laikas || 9;
        // this.period = laikas || 9;
        // this.period = laikas ?? 9;
        // this.tooth = dantu || 0;
        this.teeth = options.dantu || 0;
    }
    sayHi() {
        return `labas, as ${this.name}!`;
    }
    updateTeeth(count) {
        this.teeth = count;
    }
}

// const petras = new Person('Petras', 99, 8);
const petras = new Person('Petras', 99, { laikas: 8 });
const maryte = new Person('Maryte', 88, { dantu: 1 });
const jonas = new Person('Jonas', 77);
const ona = new Person('Ona', 55, { laikas: 7, dantu: 1 });

console.log(petras);
console.log(petras.age);
console.log(maryte);
console.log(maryte.name);
console.log(jonas);
console.log(ona);
console.log(jonas.sayHi());
console.log(maryte.sayHi());

petras.updateTeeth(2);
console.log(petras.teeth);


