// ==== Problem #6 ====
/* A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
 */

function specificCar(data) {
  const bmwAndAudi = [];
  for (let car = 0; car < data.length; car++) {
    if (data[car].car_make === "BMW" || data[car].car_make === "Audi") {
      bmwAndAudi.push(data[car]);
    }
  }
  return bmwAndAudi;
}

// Exported data
module.exports = specificCar;
