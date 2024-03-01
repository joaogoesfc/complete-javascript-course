"use strict";

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2001, "João"));
console.log(yearsUntilRetirement(1980, "Bob"));