console.clear()
function nthLetter(str, step) {
    if(typeof str !== `string` || str ===``) {
        return 'ERROR: pirmasis parametras t.b. ne tuscias tekstas';
    }
    // if(typeof step !== `number` || !isFinite(step)) {
    if(!Number.isInteger(step)) {
        return 'ERROR: pirmasis parametras t.b. normalus skaicius';
    }
    if (str.length < step) {
        return `ERROR: tekstas per trumpas`;
    }
    if(step === 0) {
        return `ERROR: zingsnis negali buti lygus 0`;
    }
    let text = ``;
    for (let i = step-1; i < str.length; i += step) {
        text +=  str[i];
    }    
    return text;
}

console.log(nthLetter(`abcdefg`,2));
console.log(nthLetter(`abcdefghijk`,3));
console.log(nthLetter(`abc`,0));
console.log(nthLetter(`abc`,4));


