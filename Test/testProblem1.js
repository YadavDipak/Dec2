// Output format ::

/* Then log the car's year, make, and model in the console log in the format of :
"Car 33 is a *car year goes here* * car make goes here* *car model goes here*
*/

// imported Data
const problem1 = require("../problem1");
const carData = require("../carData");

// Bydefault id is 33
const result = problem1(carData, (id = 33));

console.log(
  `Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`
);
