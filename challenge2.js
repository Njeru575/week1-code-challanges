function checkSpeed(speed) {
  const speedLimit = 70;
  const demeritThreshold = 12;

  // If speed is less than or equal to the limit
  if (speed <= speedLimit) {
      console.log("Ok");
  } else {
      // Calculate how much the speed exceeds the limit
      const excessSpeed = speed - speedLimit;
      
      // Calculate the number of demerit points 
      const demeritPoints = Math.floor(excessSpeed / 5);

      // Output demerit points or license suspension if points exceed the threshold
      if (demeritPoints > demeritThreshold) {
          console.log("License suspended");
      } else {
          console.log(`Points: ${demeritPoints}`);
      }
  }
}
