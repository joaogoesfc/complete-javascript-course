// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperature = [3, -2, -6, -4, "error", 9, 13, 17, 15, 14, 9, 5];


function calcAmplitude(temperature) {
  let minimum = temperature[0];
  let maximum = temperature[0];

  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] !== "number") continue;
    if (minimum > temperature[i]) minimum = temperature[i];
    if (maximum < temperature[i]) maximum = temperature[i];
  }
  return maximum - minimum;
}

function calcAmplitudeNew(temps1, temps2) {
  const temperature = temps1.concat(temps2);
  let minimum = temperature[0];
  let maximum = temperature[0];

  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] !== "number") continue;
    if (minimum > temperature[i]) minimum = temperature[i];
    if (maximum < temperature[i]) maximum = temperature[i];
  }
  return maximum - minimum;
}

console.log(calcAmplitude(temperature));
console.log(calcAmplitudeNew([32, 21, 10], [-1, 12, 5, 15]));
