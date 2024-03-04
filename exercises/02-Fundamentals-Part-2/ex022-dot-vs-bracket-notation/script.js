"use strict";

const joao = {
    firstName: "João",
    lastName: "Góes",
    age: 2037 - 2001,
    job: "Developer",
    friends: ["Daniel", "Murilo", "José"]
};

console.log(joao);

console.log(joao.lastName);
console.log(joao["lastName"]);

const nameKey = "Name";
console.log(joao['first' + nameKey]);
console.log(joao['last' + nameKey]);

//console.log(joao."last" + nameKey);
/*
const interestedIn = prompt("What do you want to know about João? Choose between firstName, lastName, age, job, and friends");

console.log(joao[interestedIn]);

if (!joao[interestedIn]) {
    console.log(`João's ${interestedIn} is undefined yet, try one of these: firstName, lastName, age, job, and friends`)
}
*/

joao.location = "Brazil";

console.log(joao.location);

console.log(`${joao.firstName} has ${joao.friends.length} friends, and his best friend is called ${joao.friends[0]}`);