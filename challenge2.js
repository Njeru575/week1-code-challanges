function checkSpeed() {
    // Asks user to enter speed of car
  let speed = prompt("Enter speed of the car:");
  // Defeine speed limit
  const speedLimit = 70;
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Culculates number of demerit points
    let demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (demeritPoints > 12) {
      console.log("Lincense sespended");
    } else {
      console.log("Points:" + demeritPoints);
    }
  }
}
