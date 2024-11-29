// ==== Problem #3 ====
/* The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
 */

function carModelsAlphabetically(arr) {
  if (Array.isArray(arr)) {
    const carModel = [];
    for (let index = 0; index < arr.length; index++) {
      carModel.push(arr[index].car_model);
    }
    // carModel.sort();
    carModel.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    return carModel;
  }
  return null;
}

module.exports = carModelsAlphabetically;
