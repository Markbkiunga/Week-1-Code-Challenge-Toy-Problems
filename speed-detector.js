//Enter the car speed into the variable below
let carSpeed = 135;
if (carSpeed < 70) {
  console.log("Ok");
} else {
  console.log("Speed Limit is 70km/s!");
}
if (carSpeed > 70) {
  let speedAboveLimit = carSpeed - 70; //calculates the speed above 70km/s
  let numberOfDemeritPoints = speedAboveLimit / 5; //calculates the number of demerit points
  if (numberOfDemeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + numberOfDemeritPoints);
  }
}
