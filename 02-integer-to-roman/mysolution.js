/**
 * @param {number} num
 * @return {string}
*/

var intToRoman = function(num) {
    
    var roman = "";
    const symb = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }
    
    var long = Object.keys(symb).length;
    var n = num;
    
    for (let i = long; i > 0; i--) {

        let list = Object.values(symb)[i-1];
        let new_roman = Object.keys(symb)[i-1];

        while (list <= n){
            roman = roman + new_roman
            n -= list;
        }
    }

    return roman;
};


//** =========== Result =========== */

console.log(intToRoman(58)) //! LVIII
