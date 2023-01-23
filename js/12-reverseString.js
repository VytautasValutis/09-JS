console.clear();
function reverseString(str) {
    if (typeof str !== `string`) {
        return `ERROR: reikalingas tekstas`;
    }
    if (str === ``) {
        return `ERROR: reikalingas ne tuscias tekstas`;
    }
    let ats = ``

    // 1 
    // for (let i = str.length-1; i >= 0; i--) {
    //     ats += str[i];        
    // }

    // 2 
    // for (let i = 0; i str.length; i++) {
    //     ats = str[i] + ats;        
    // }

    // 3 
    // for (let i = 0; i str.length; i++) {
    //     ats += str[str.length - i - 1];        
    // }

    // 0
    // ats = str.split(``).reverse().join(``); 

    return ats;
}

console.log(reverseString());
console.log(reverseString(5));
console.log(reverseString(``));
console.log(reverseString(`abc`));
console.log(reverseString(`labas`));
console.log(reverseString(`alus`));