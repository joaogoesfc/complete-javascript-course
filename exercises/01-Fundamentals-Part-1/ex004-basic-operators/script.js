// Math operators
const now = 2037;
const ageJoao = now - 2001;
const ageSarah = now - 2020;
console.log(ageJoao, ageSarah);

console.log(ageJoao * 2, ageJoao / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = 'João';
const lastName = 'Góes';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--; 
console.log(x);

// Comparison operators
console.log(ageJoao > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);