console.clear ();
const marks = [2, 4, 8, 7, 3]
let suma = 0;
for (let i = 0; i < marks.length; i++) {
    suma += marks[i];    
}
console.log(`Vidurkis: `, suma / marks.length);