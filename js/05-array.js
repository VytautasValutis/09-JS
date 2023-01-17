console.clear();
const empty = [];
const marks = [2, 4, 10, 5, 7];
const names = ['A', 'B', 'C', 'D', 'E'];
const chaos = [true, 7, 'asd', -3.14];
console.log(empty, marks, names, chaos);
// masyvu indeksavimas
// masyvo ilgis
const masyvoDydis = names.length;
console.log(masyvoDydis);
// Kreipinys i neegzistuojnti elementa: NaN
// Masyvo papildymas
const jonas = [];
console.log(jonas);
jonas.push (10);
jonas.push (2);
jonas.push (8);
console.log(jonas);
const arTuri7 = jonas.includes(7);
console.log(arTuri7);
const arTuri10 = jonas.includes(10);
console.log(arTuri10);
const kelintas2 = jonas.indexOf(2);
console.log(kelintas2);
const kelintas7 = jonas.indexOf(7);
console.log(kelintas7);
const vegs = ['pomidoras', 'agurkas', 'svogunas', 'bulve'];
let sakinys2 = 'Reikia nupirkti:';
console.log(sakinys2);
let sakinys3 = 'Reikia nupirkti:' + vegs.join(', ') + '.';
console.log(sakinys3);
let sakinys4 = `Reikia nupirkti: ${vegs.join(', ')}.`;
console.log(sakinys4);
