
const firstName = 'Joao';
const job = 'developer';
const birthYear = 2001;
const year = 2037;

const joao = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(joao)

const joaoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(joaoNew)

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);