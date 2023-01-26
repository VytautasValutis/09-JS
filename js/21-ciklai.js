/*
Ciklai: for, for-of, foreach, while, do-while, foreach, map, filter, sort, reduce, for-in, ...
*/
console.clear();
const marks = [10,2,8,4,6];
// FOR
let sumFor = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}
console.log(sumFor / marks.length);
// FOR-OF
let sumOf = 0;
for(const a of marks) { sumOf += a; }
console.log(sumOf / marks.length);
// WHILE
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
}
console.log(sumWhile / marks.length);
// WHILE 2
let sumWhile2 = 0;
let iWhile2 = marks.length;
while (iWhile) {
    sumWhile2 += marks[--iWhile];
}
console.log(sumWhile2 / marks.length);
// FOREACH
let sumForEach = 0;
marks.forEach(mark => {sumForEach += mark});
console.log(sumForEach / marks.length);
// MAP
// FILTER
// SORT
const marksAsc = marks.sort();
console.log(marks);
console.log(marksAsc);

const students = [
    {
        name: 'Petras',
        age: 77,
    },
    {
        name: 'Jonas',
        age: 66,
    },
    {
        name: 'Ona',
        age: 33,
    },
    {
        name: 'Maryte',
        age: 99,
    },
];
console.log(students);
students.sort((a, b) => a.age - b.age);
console.log(students);






