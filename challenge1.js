function getGrade() {
  // Prompt the user for marks between 0 and 100
  let marks = parseInt(prompt("Enter student marks (0-100):"));

  // Check if marks are in the valid range (0-100)
  if (marks < 0 || marks > 100 || isNaN(marks)) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
    return;
  }

  // Switch statement to determine the grade based on marks
  let grade;
  switch (true) {
    case marks > 79:
      grade = "A";
      break;
    case marks >= 60 && marks <= 79:
      grade = "B";
      break;
    case marks >= 49 && marks <= 59:
      grade = "C";
      break;
    case marks >= 40 && marks <= 49:
      grade = "D";
      break;
    case marks < 40:
      grade = "E";
      break;
    default:
      grade = "Invalid";
  }

  // Output the grade
  console.log(`The grade for marks ${marks} is: ${grade}`);
}

// Call the function
getGrade();
