"use strict";

const friends = ["Daniel", "Murilo", "José"];
// Add elements
const any = friends.push("Jay");
console.log(friends);
console.log(any);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Murilo"));
console.log(friends.indexOf("Muri"));

friends.push(23);
console.log(friends.includes("Daniel"));
console.log(friends.includes("Dani"));
console.log(friends.includes(23));

if(friends.includes("Daniel")) console.log("You have a friend called Daniel!");