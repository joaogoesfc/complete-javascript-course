"use strict";

const friend1 = "Daniel";
const friend2  = "Murilo";
const friend3 = "José";

const friends = ["Daniel", "Murilo", "José"];
console.log(friends);

const y = [ 1991, 2001, 2000, 2019];


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = [5, 32, 1];

const firstName = "João"
const joao = [firstName, "Góes", 2037 - 2001, "Developer", friends];
console.log(joao);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = new Array(1990, 1967, 2002, 2010, 2018);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);