"use strict";
/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
/* Write your code below. Good luck! 🙂 */

let bills = [];

let tips = [];

let totals = [];

addValues(125, bills, tips, totals);
addValues(555, bills, tips, totals);
addValues(44, bills, tips, totals);

console.log(bills, tips, totals);

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

function addValues(bill, bills, tips, totals) {
    bills.push(bill);
    tips.push(calcTip(bill));
    totals.push(calcTip(bill) + bill);
}