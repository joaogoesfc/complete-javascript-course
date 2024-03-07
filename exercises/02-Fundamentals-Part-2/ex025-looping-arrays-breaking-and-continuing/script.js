"use strict";

const joao = [
    "João",
    "Góes",
    2037 - 2001,
    "developer",
    ["Daniel", "John", "José"],
    true
];
const types = [];

for(let i = 0; i < joao.length; i++) {
    console.log(joao[i], typeof joao[i]);

    types.push(typeof joao[i])
}

console.log(types)

const years = [1991, 2001, 2019, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages)

// Continue and break
console.log("------ONLY STRINGS---------")

for (let i = 0; i < joao.length; i++) {
    
    if (typeof joao[i] !== 'string') continue;
    
    console.log(joao[i]);
}
console.log("------BREAK WITH NUMBER ------")
for (let i = 0; i < joao.length; i++) {
    
    if (typeof joao[i] == 'number') break;
    
    console.log(joao[i]);
}

