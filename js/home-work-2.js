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
    if (typeof(a) !== "number" || a === NaN || a === Infinity) {
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
    
}












