
const age = '18';

if(age === 18) console.log('You just became an adult :D (strict)'); 

if(age == 18) console.log('You just became an adult :D(loose)');

const favorite = Number(prompt("WhaT's your favorite number? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log('Cool! 7 is an amazing number!')
} else {
    console.log('Number is not 23 or 7')
}

if(favorite !== 23)console.log('Why not the 23?');