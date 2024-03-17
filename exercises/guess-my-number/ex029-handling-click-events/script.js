'use strict';


let ramdomNumber = 15;
addEventListener("click", function() {
    const guess = document.querySelector(".guess").value;
    console.log();

    const score = document.querySelector(".score").value;


    if(!guess) {
        console.log("No number!");
    } else if (guess < 0 || guess > 20) {
        console.log("The number is between 0 and 20");
    } else if (guess > ramdomNumber) {
        document.querySelector(".message").textContent = "minus";
        document.querySelector(".score").textContent--;
    } else if (guess < ramdomNumber) {
        document.querySelector(".message").textContent = "plus";
    } else {
        document.querySelector(".message").textContent = "Correct!";
        ramdomNumber = 10;
    }

    document.querySelector(".message").textContent
})