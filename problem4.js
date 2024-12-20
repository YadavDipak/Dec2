// ==== Problem #4 ====
/* The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
 */

function yearWiseData(arr) {
  const carYears = [];
  for (let year = 0; year < arr.length; year++) {
    carYears.push(arr[year].car_year);
  }
  return carYears;
}

module.exports = yearWiseData;
