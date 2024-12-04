// Imported Data

const problem5 = require("../problem5");
const carData = require("../carData");

const olderCars = problem5(carData);
console.log(olderCars);

console.log(
  `Length of an array which are older than 2000 is: ${olderCars.length}`
);
