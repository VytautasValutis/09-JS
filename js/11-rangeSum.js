console.clear();
function rangeSum(a, b) {
    return 10;    
}
/*
console.log(true, 4);
console.log(4, false);
console.log(`true`, 7);
console.log(2, `qwerty`);
console.log([], 4);
console.log(4);

console.log(3.14, 2);
console.log(5, -0.2);
console.log(3.14, 2);
console.log(3.14, 2);
*/
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity))

const fff = NaN;
console.log(`` + fff);
console.log(Number.isInteger(3.14));
console.log(Number.isInteger([]));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(-Infinity));

function rangeSum(a, b) {
    let k = 1;
    let sum = 0;
    if(a > b) {k = -1}
    for (let i = a; i * k <= b; i += k) {
        sum += i;
    }
    return sum;
}
console.log(rangeSum(100, 0));
console.log(rangeSum(0, 100));

