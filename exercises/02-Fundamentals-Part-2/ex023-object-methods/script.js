"use strict";

const joao = {
    firstName: "João",
    lastName: "Góes",
    birthYear: 2001,
    job: "Developer",
    friends: ["Daniel", "Murilo", "José"],
    hasDriversLicense: true,

    //calcAge: function() {
    //    //console.log(this)
    //    return 2037 - this.birthYear;
    //}
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "not a"} driver's license.`;
    }
};

console.log(joao.calcAge());

console.log(joao.age);
console.log(joao.age);
//console.log(joao["calcAge"]());

//console.log(`${joao.firstName} is a ${joao.age}-years old ${joao.job}, and he has ${joao.hasDriversLicense ? "a" : "not a"} driver's license.`);

console.log(joao.getSummary());



