console.clear();
function numSize(num) {
    if (!Number.isInteger(num)) {
        return `ERROR: duok skaiciu`;

    }
    const numAsText = `` + num;
    let size = numAsText.length;
    if(num < 0) { size--; }
    // if(numAsText.includes(`.`)) { size--; }
    if(num % 1 !== 0) { size--; }

    return size;
}

console.log(numSize());
console.log(numSize(true));
console.log(numSize(`true`));
console.log(numSize([]));
console.log(numSize(null));
console.log(numSize(undefined));
console.log(numSize(Infinity));
console.log(numSize(-Infinity));
console.log(numSize(NaN));

console.log(numSize(5));
console.log(numSize(567));
console.log(numSize(37069928286));
console.log(numSize(-567));

// Problrma sus l.dideliais skaiciais > 26 "0"