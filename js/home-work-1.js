console.clear();
const a = 1;
console.log(a);
const b = 12;
console.log(b);
const c = 33;
console.log(c);
const dTxt = `labas`;
console.log(dTxt);
const eTxt = `r y t a s`;
console.log(eTxt);
const fTxt = `visiems`;
console.log(fTxt);
const gArray = [1, 23, 15, 6, 8];
console.log(gArray);
const hArray = [17, 3, 115, 26, 9];
console.log(hArray);
const iArray = [1.3, 2.35, -16, 0, 0.8];
console.log(iArray);
const jArray = [`1`, `ab`, `ojk`, `6.23`, `qwerty`];
console.log(jArray);
const kArray = [`asds`, `ABC`, `'L'`, `-111`, `sss`];
console.log(kArray);
const lArray = [`lojo`, `123456`, `-2`, `false`, `q`];
console.log(lArray);
console.log(`-------------------`);
console.log(a + b +c);
console.log(dTxt + ` ` + eTxt + ` ` + fTxt);
let sum1 = 0;
sum1 += hArray[0];
sum1 -= hArray[1];
sum1 += hArray[2];
sum1 -= hArray[3];
sum1 += hArray[4];
console.log(sum1);
let sum2 = 0;
sum2 += iArray[0];
sum2 -= iArray[1];
sum2 += iArray[2];
sum2 -= iArray[3];
sum2 += iArray[4];
console.log(sum2);
console.log(`${jArray.join(' ')}`);
console.log(`${kArray.join(' ')}`);
console.log(`${lArray.join(' ')}`);
console.log(`-------------------------`);
if (a > b) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (a < c) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (a === b) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (c !== b) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (a >= b) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (a <= c) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
console.log(`d  ilgis: `, dTxt.length);
console.log(`e  ilgis: `, eTxt.length);
console.log(`f  ilgis: `, fTxt.length);
if (dTxt.length > eTxt.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (fTxt.length < eTxt.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (dTxt.length === fTxt.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (dTxt.length !== fTxt.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (fTxt.length >= eTxt.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
if (fTxt.length <= dTxt.length) {
    console.log(`Pomidoras`);
} else {
    console.log(`Bandykite dar karta`);
}
console.log(`--------------------------`);
let sum = 0;
for (let i = 0; i <= 0; i++) {
    sum += i;
}
console.log(sum);
sum = 0;
for (let i = 0; i <= 4; i++) {
    sum += i;
}
console.log(sum);
sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
sum = 0;
for (let i = 574; i <= 815; i++) {
    sum += i;
}
console.log(sum);
sum = 0;
for (let i = -50; i <= 50; i++) {
    sum += i;
}
console.log(sum);
sum = 0;
for (let i = -70; i <= 30; i++) {
    sum += i;
}
console.log(sum);
console.clear();
console.log(`------------------------`);
let ilgis = dTxt.length;
let dTxtRevers = ``;
for (let i = ilgis - 1; i >= 0; i--) {
    dTxtRevers += dTxt[i];
}
console.log(dTxtRevers);
ilgis = eTxt.length;
let eTxtRevers = ``;
for (let i = ilgis - 1; i >= 0; i--) {
    eTxtRevers += eTxt[i];
}
console.log(eTxtRevers);
ilgis = fTxt.length;
let fTxtRevers = ``;
for (let i = ilgis - 1; i >= 0; i--) {
    fTxtRevers += fTxt[i];
}
console.log(fTxtRevers);
console.log(`------------------------`);
let intNuo = 0;
let intIki = 11;
let count = [0, 0, 0];
const daliklis = [3, 5, 7];
for (let i = intNuo; i <= intIki; i++){
    for(let j = 0; j <= 2; j++) {
        if( i % daliklis[j] === 0) {
            count[j] += 1;
        }
    }
}
for (let k = 0; k <= 2; k+= 1) {
    console.log(`Skaiciu intervale tarp ${intNuo} ir ${intIki}, besidalijaciu be liekanos is ${daliklis[k]} yra ${count[k]} vienetai`);
}
intNuo = 8;
intIki = 31;
count = [0, 0, 0];
// const daliklis = [3, 5, 7];
for (let i = intNuo; i <= intIki; i++){
    for(let j = 0; j <= 2; j++) {
        if( i % daliklis[j] === 0) {
            count[j] += 1;
        }
    }
}
for (let k = 0; k <= 2; k+= 1) {
    console.log(`Skaiciu intervale tarp ${intNuo} ir ${intIki}, besidalijaciu be liekanos is ${daliklis[k]} yra ${count[k]} vienetai`);
}
intNuo = -18;
intIki = 18;
count = [0, 0, 0];
// const daliklis = [3, 5, 7];
for (let i = intNuo; i <= intIki; i++){
    for(let j = 0; j <= 2; j++) {
        if( i % daliklis[j] === 0) {
            count[j] += 1;
        }
    }
}
for (let k = 0; k <= 2; k+= 1) {
    console.log(`Skaiciu intervale tarp ${intNuo} ir ${intIki}, besidalijaciu be liekanos is ${daliklis[k]} yra ${count[k]} vienetai`);
}