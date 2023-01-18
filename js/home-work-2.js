console.clear();
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());
console.log(`---------------------`);
function daugyba(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        return `Error`;
    }
    const c = a * b;
    return c;
}
console.log (daugyba(2, 2));
console.log (daugyba(2, 3));
console.log (daugyba(6, 7));
console.log (daugyba(true, 2));
console.log (daugyba(`true`, 2));
console.log(`---------------------`);
function skaitmenuKiekisSkaiciuje(a) {
    if (typeof(a) !== "number" || Number.isNaN(a) || a === Infinity) {
        return `Pateikta netinkamo tipo reiksme`;
    }
    if (a % 1 !== 0) {
        return `Parametras nera sveikas skaicius`
    }
    let t = a / 10;
    for (let i = 1; i < 51; i++) {
        if (t < 1) {
            return i;
        }
        t /= 10;
    }
        return `Skaitmenu kiekis virsyja 50`;
}
console.log(`Skaicius -5 skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje(-5)}`);
console.log(`Skaicius true skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje(true)}`);
console.log(`Skaicius NaN skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje(NaN)}`);
console.log(`Skaicius 3 skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje(3)}`);
console.log(`Skaicius 781 skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje(781)}`);
console.log(`Skaicius 370688123456789 skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje(370688123456789)}`);
console.log(`Skaicius 3.14 skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje(3.14)}`);
console.log(`Skaicius "aBc" skaitmenu kiekis : ${skaitmenuKiekisSkaiciuje("aBc")}`);
console.log(`----------------------------------`);
function didziausiasSkaiciusSarase(a) {
    if (a.length === 0) {
        return `Sarasas negali buti tuscias`;
    } else if (typeof(a[0]) !== "number") {
        return `Pateikta netinkamo tipo reiksme`;
    }
    let ilgis = a.length; 
    let max = a[0];
    for (let i = 1; i < ilgis; i++){
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
const bad = ['a', 'b', 'c'];
let param = [];
console.log(didziausiasSkaiciusSarase(param));
param = [1];
console.log(didziausiasSkaiciusSarase(param));
param = [1, 2, 3];
console.log(didziausiasSkaiciusSarase(param));
console.log(didziausiasSkaiciusSarase(5));
console.log(didziausiasSkaiciusSarase('A'));
console.log(didziausiasSkaiciusSarase(NaN));
console.log(didziausiasSkaiciusSarase(bad));
param = [-5, 78, 14, 0, 18];
console.log(didziausiasSkaiciusSarase(param));
param = [69, 69, 69, 69, 66];
console.log(didziausiasSkaiciusSarase(param));
param = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log(didziausiasSkaiciusSarase(param));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(`----------------------------`);
function isrinktiRaides(txt, nr) {
    if (typeof(txt) !== "string") {
        return `Pirmas kintamasis yra netinkamo tipo`;
    }
    const ilgis = txt.length;
    if (ilgis === 0 || ilgis > 100) {
        return `Pirmojo kintamojo reiksme yra netinkamo dydzio`;
    }
    if (typeof(nr) !== "number" || nr % 1 !== 0) {
        return `Antrasis kintamasis yra netinkamo tipo`;
    }
    if (nr === 0) {
        return `Antrasis kintamasis turi buti didesnis uz nuli`;
    }
    let rez = ``;
    for (let i = nr-1; i < ilgis; i += nr) {
        rez += txt[i];       
    }
    return rez;
}
console.log(isrinktiRaides("abcdefg", 2));
console.log(isrinktiRaides("", 2));
console.log(isrinktiRaides("abcdefghijkl", 3));
console.log(isrinktiRaides("abcdefghijkl", 3.5));
console.log(isrinktiRaides("abcdefghijkl", "A"));
console.log(isrinktiRaides("abc", 0));
console.log(isrinktiRaides(1561, 2));
console.log(`----------------------------`);
function dalyba(a, b) {
    if (typeof(a) !== "number" || Number.isNaN(a) || a === Infinity) {
        return `Neteisingas pirmas parametras`;
    }
    if (typeof(b) !== "number" || Number.isNaN(b) || b === Infinity) {
        return `Neteisingas antras parametras`;
    }
    if (b === 0) {
        return `Dalinti is nulio negalima`;
    }
    const rez = a / b;
    return rez;
}
console.log(`-- 01: `,dalyba(6, 3));
console.log(`-- 02: `,dalyba(-5, 3));
console.log(`-- 03: `,dalyba(3.14, -8.2));
console.log(`-- 04: `,dalyba("A", 3));
console.log(`-- 05: `,dalyba(6, true));
console.log(`-- 06: `,dalyba(6, NaN));
const bad2 = [3, 5, -3];
console.log(`-- 07: `,dalyba(6, bad2));
console.log(`-- 08: `,dalyba(6, Infinity));
console.log(`-- 09: `,dalyba(7, 0));
console.log(`-- 10: `,dalyba(0, 33));
console.log(`-- 11: `,dalyba(11, 1));
console.log(`-- 12: `,dalyba(NaN, NaN));
console.log(`-----------------------`);










