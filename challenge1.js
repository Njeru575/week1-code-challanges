function getGrade() {
  // Asks user to input marks
  let marks = prompt("Enter student marks (between 0 and 100):");
  marks = Number(marks);
  // Checks if marks are between 0 and 100
  if (marks < 0 || marks > 100 || isNaN(marks)) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
    return;
  }
  // Determine the grade based on marks
  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Output the grade
  console.log(`The grade is: ${grade}`);
}


// Call the function
getStudentGrade();
