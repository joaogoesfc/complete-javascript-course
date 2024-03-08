"use strict";

const joao = [
    "João",
    "Góes",
    2037 - 2001,
    "developer",
    ["Daniel", "John", "José"]
];

for(let i = joao.length - 1; i >= 0; i--) {
    console.log(i, joao[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);

    for(let rep =1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}