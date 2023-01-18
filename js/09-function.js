console.clear();
function sudetis(a, b) {
    return a + b;
}
const s1 = sudetis(7, 5);
console.log(s1);
function arLyginis(params) {
    if (params % 2 === 0) {
        return `lyginis`;
    }
    return 'ne lyginis';
}
const l1 = arLyginis(7);
console.log(`7 yra ${l1}`);
const l2 = arLyginis(88);
console.log(`88 yra ${l2}`);

