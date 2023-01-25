console.clear();

const arr1 = [`a`,`b`,`d`];
const arr2 = [`e`,`f`,`g`];

console.log([...arr1, ...arr2]);

let a = [1, 2, 3];
let b = [4, 5, 6];

a = [...b]; // tik pirmam lygiui

const marks = [10, 2, 8, 4 , 6];

function double(n) {
    return n * 2;
}

const marks2 = marks.map(double);
console.log(marks);
console.log(marks2);

console.log(`-----------------`);
const numbers = [1,2,3,4,5,6,7];
console.log(numbers);
const lyginiai = numbers.filter(n => n % 2 === 0);
console.log(lyginiai);

const students = [`Ona`,`Petras`,`Maryte`, `Jonas`];
console.log(students);
console.log(students.filter(n => n.length <= 5).map(v => v[0]).sort().join('-'));
