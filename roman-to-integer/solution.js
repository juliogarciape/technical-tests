/**
 * @param {string} s
 * @return {number}
*/

var romanToInt = function(s) {
    
    var number = 0;
    const symb = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };

    for(let i = 0; i < s.length; i++){
        const curr = symb[s[i]];
        const next = symb[s[i+1]];

        if(curr < next){
            number += next-curr;
            i++;
        }else{
            number += curr;
        }
    }

    return number;
};


//** =========== Result =========== */

console.log(romanToInt('XXXV'))
console.log(romanToInt('III'))
console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('XV'))