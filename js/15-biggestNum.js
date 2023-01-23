console.clear();
function biggestNum(list) {
    if(!Array.isArray(list) || list.length === 0) {
        return `ERROR: duok ne tuscia skaiciu sarasa`;
    }
    let biggest = -Infinity;
    for (let i = 0; i < list.length; i++) {
        if(typeof list[i] || !isFinite(list[i])) {
            continue;
        }
        const num = list[i];
        if(num > biggest) { biggest = num; }
    }
    if(biggest === -Infinity) {
        return `ERROR: visi skaiciai - nenormalus`;
    }
    return biggest;
}

console.log(biggestNum());
console.log(biggestNum(undefined));
console.log(biggestNum(true));
console.log(biggestNum(`adsf`));
console.log(biggestNum(null));

console.log(biggestNum([0]));
console.log(biggestNum([1, 2, 3]));