console.clear();
function liekanos(start, finish, divide = 1) {
let count = 0;
// for (let i = start; i <= finish; i++){
//         if( i % divide === 0) {
//             count ++;
//         }
//     }

// for (let i = start; i <= finish; i += divide){
//         count ++;
//     }

    if(start <0) {}

    // console.log(`Skaiciu intervale tarp ${start} ir ${finish}, besidalijaciu be liekanos is ${divide} yra ${count} vienetai`);
    return count;
}

console.log(liekanos());
console.log(liekanos(8, 31, 7));