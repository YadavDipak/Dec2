/* Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*";
*/

// Imported Data

const problem2 = require("../problem2");
const carData = require("../carData");

const lastCarInformation = problem2(carData);

console.log(
  `Last car is a ${lastCarInformation.car_make} ${lastCarInformation.car_model}`
);
