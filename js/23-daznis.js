console.clear()

// const str2 = 'lalalas';

function daznis(str) {
    const abc = {};
    for(const symbol of str) {
        if(symbol in abc) {
            abc[symbol]++;
        } else {
            abc[symbol] = 1;
        }
    }
    // console.log(abc);

    let max = 0;
    maxLetter = '';
    for(const symbol in abc) {
        if(abc[symbol] > max) {
            max = abc[symbol];
            maxLetter = symbol;
        }
    }
    const maxSymbols = [];
    for(const symbol in abc ) {
        if(abc[symbol] === max) {
            maxSymbols.push(symbol);
        }
    }
    // return [max, maxLetter];
    return { symbols:maxSymbols, max};
}


console.log(daznis('vasara'));
console.log(daznis('cipolinas'));
console.log(daznis('savas'));
console.log(daznis('mama'));



