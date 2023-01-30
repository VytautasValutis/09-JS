console.clear();
/*
class Pet {
    constructor(color, name) {
        this.name = name;
        this.type = '';
        this.color = color;
        this.gender = true;
        this.sound = 'Miau  au';
    }
    updateGender() {
        this.gender = !this.gender;
    }
    voice() {
        return `${this.name} says ${this.sound}`;
    }
}

class Dog extends Pet {
    constructor(color, name) {
        super(color, name);
        this.type = 'dog';
        this.sound = 'Au au';
    }
    voice() {
        return `${this.name}, who is a ${this.type} says ${this.sound}`;
    }
}

class Cat extends Pet {
    constructor(color, name) {
        super(color, name);
        this.type = 'cat';
        this.sound = 'Miau miau';
    }
    sudauzyti(daiktas) {
        return `${this.name} sudauze ${daiktas}`;
    }
}

const rex = new Dog('black', 'Rex');
const rainis = new Cat('mixed', 'Rainis');
console.log(rex, rex.voice());
console.log(rainis, rainis.voice());

const kazkas = new Pet('neapsakytina', 'siaubas');
console.log(kazkas);
console.log(kazkas.voice());
console.log(rainis.sudauzyti('vaza'));
// console.log(rex.sudauzyti('vaza'));
*/

console.log(`=========================`);
/*
Animals:
    Pets:
        - Cat
        - Dog
        - DomesticBird
            - Fowl
            - Goose
    Birds:
        - Parrot
        - Sparrow
    SeaCreatures:
        - Fish
            - Carp
            - Shark
        - Clams
            - Octopuses
        - Mammals
            - Whales
            - Dolphins
*/
class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age || 1;
        this.type = 'ghost' || type;
        this.live = 'outside';
    }

}
class Pets extends Animals {
    constructor(name, age, options = {}) {
        super(name, age);
    }
}
class Dog extends Pets {
    constructor(name, age, options = {}) {
        super(name, age);
        this.type = 'dog';
        this.live = options.home || 'inside';
        // Dog.all.push(this);
    }
}
class Cat extends Pets {
    constructor(name, age, option = {} ) {
        super(name, age);
        this.type = 'cat';
        this.live = option.home || 'inside';
        this.eyes = option.eyes || 'gray';
        // Dog.all.push(this);
    }
}
class DomesticBird extends Pets {
    constructor(name, age, option = {} ) {
        super(name, age);
        this.type = 'bird';
        this.live = option.home || 'outside';
        // Dog.all.push(this);
    }
}
class Fowl extends DomesticBird {
    constructor(name, age, option = {} ) {
        super(name, age);
        this.type = 'fowl';
        this.live = option.home || 'outside';
        this.swims = false;

        // Dog.all.push(this);
    }
}
class Goose extends DomesticBird {
    constructor(name, age, option = {} ) {
        super(name, age);
        this.type = 'goose';
        this.live = option.home || 'outside';
        this.swims = true;

        // Dog.all.push(this);
    }
}

// Dog.all = [];
// console.log(Dog.all);
console.log(Animals);
const reksas = new Dog('Reksas', 2);
console.log(reksas);
const margis = new Dog('Margis', 3, {home: 'outside'});
console.log(margis);
const zaltys = new Pets('Grybas');
console.log(zaltys);
const murka = new Cat('Murka', 5, {eyes: 'green'});
// murka.eyes = 'green';
console.log(murka);
const moliugas = new Goose('Moliugas', 1);
console.log(moliugas);





