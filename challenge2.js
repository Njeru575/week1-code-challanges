function checkSpeed() {
    // Set the speed limit to 70
    const speedLimit = 70;
    
    // Prompt user to enter the car's speed
    let speed = parseInt(prompt("Enter the car's speed:"));
  
    // Validate speed input
    while (isNaN(speed) || speed < 0) {
      alert("Please enter a valid speed (positive number).");
      speed = parseInt(prompt("Enter the car's speed:"));
    }
  
    // Check if speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      // Calculate how much the speed exceeds the limit
      const excessSpeed = speed - speedLimit;
  
      // Calculate the number of demerit points
      const demeritPoints = Math.floor(excessSpeed / 5);
  
      // Output demerit points or license suspension if points exceed 12
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Call the function to run the program
  checkSpeed();
  