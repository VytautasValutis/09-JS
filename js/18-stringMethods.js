console.clear();

const abc = `abcdefghijklmnoprstuvwxyz`;
const zodis = `LaBaS`;

console.log(abc.at(2));
console.log(abc.at(-2));
console.log(abc.charAt(2));
console.log(abc.charCodeAt(0));

console.log(abc.indexOf(`a`));
console.log(abc.indexOf(`F`));
console.log(abc.indexOf(`de`));

console.log(`ab`.repeat(5));
console.log(`Labas rytas`.replace(`rytas`,`vakaras`));
console.log(`Lalalalala`.replace(`la`,`ma`));
console.log(`Lalalalala`.replaceAll(`la`,`ma`));

console.log(abc.slice(1, 5));
console.log(abc.split(''));
console.log(abc.split('f'));

console.log(zodis.toUpperCase());



