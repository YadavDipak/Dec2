// ==== Problem #2 ====
/* The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*";
*/

function lastCarInfo(carData) {
  if (Array.isArray(carData)) {
    const lastInfo = carData[carData.length - 1];
    return lastInfo;
  }

  return null;
}

module.exports = lastCarInfo;
