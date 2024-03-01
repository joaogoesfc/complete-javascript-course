"use strict";

function cutFruitPieces(fruit) {
    return fruit * 10;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));