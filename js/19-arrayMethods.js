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

const marks2 =marks.map(double);
console.log(marks);
console.log(marks2);




