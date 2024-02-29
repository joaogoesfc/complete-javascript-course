
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense || hasGoodVision);

console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

//if(shouldDrive) {
//    console.log('Sarah is able to drive')
//} else {
//    console.log('Someone else should drive') 
//}

const isTired = false;

console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive...') 
}