console.clear();

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

class Cat {
    constructor(color, name) {
        super(color, name);
        this.type = 'cat';
        this.sound = 'Miau miau';
    }
    sudauzyti(daiktas) {
        return `${this.name} sudauze ${daiktas}`;

    }
}

const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');
console.log(rex, rex.voice);

const kazkas = new Pet('neapsakytina', 'siaubas');

/*
Animal:
    Pet:
        - Cat
        - Dog
    Bird:
        - Parrot
        - Sparrow
    fish:
        - Shark
        - Crimps
*/
