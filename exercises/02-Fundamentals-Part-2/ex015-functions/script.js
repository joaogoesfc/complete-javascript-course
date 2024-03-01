"use strict";

function logger() {
    console.log("My name is João");
}

//calling / rubnning / invoking function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(10, 0);
console.log(appleJuice);

console.log(fruitProcessor(101, 4));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

