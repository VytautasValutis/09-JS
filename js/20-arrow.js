console.clear();
const g = 7;
const h = 5;

function suma(a, b) {
    return a + b;
}
console.log(suma(g, h));

const skirtumas = function (a, b) {
    return a - b;
}

console.log(skirtumas(g, h));
    
const sandauga = (a, b) => { 
    return a * b;
}

console.log(sandauga(g, h));

const dalmuo = (a, b) => a / b;

console.log(dalmuo(g,h));

const kvadratu = a => a ** 2; // TIK jei vienas parametras
console.log(kvadratu(g));

console.log(`-------------------`);
const math = {
    sum: (a, b) => a + b,
    skirt: (a, b) => a - b,
    sand: (a, b) => a * b,
    dal: (a, b) => a / b,
    laips: (a, b) => a * a,
}

console.log(math.sum(7,5));
console.log(math.skirt(7,5));
console.log(math.sand(7,5));
console.log(math.dal(7,5));
console.log(math.laips(7));

const matematika = {
    sum: (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    dal: (a, b) => a / b,
    laips: (a, b) => a * a,
}

const x = 7;
const y = 5;
let op = `sum`;

const ats = matematika.sum(x,y);
console.log(ats);
console.log(matematika[op](x,y));
op = `-`;
console.log(matematika[op](x,y));

