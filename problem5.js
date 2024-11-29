// ==== Problem #5 ====
/* The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
 */

function olderCarsThan2000(carYears) {
  const olderCars = [];
  for (let year = 0; year < carYears.length; year++) {
    if (carYears[year].car_year < 2000) {
      olderCars.push(carYears[year]);
    }
  }
  return olderCars;
}

module.exports = olderCarsThan2000;
