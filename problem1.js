// ==== Problem #1 ====
/* The dealer can not recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of :
"Car 33 is a *car year goes here* * car make goes here* *car model goes here*"
 */

function carDetailsById(carData, id) {
  if (Array.isArray(carData)) {
    for (let index = 0; index < carData.length; index++) {
      if (carData[index].id == id) {
        return carData[index];
      }
    }
  }
  return null;
}

// Exported Data
module.exports = carDetailsById;
