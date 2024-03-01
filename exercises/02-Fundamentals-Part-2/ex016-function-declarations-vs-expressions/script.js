"use strict";
//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2001);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 =  calcAge2(2019);

console.log(age1, age2);