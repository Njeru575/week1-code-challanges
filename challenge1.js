function getGrade() {
  // Asks user to input marks
  let marks = prompt("Enter student marks:");

  // Checks if marks are between 0 and 100
  if (marks >= 0 && marks <= 100) {
    // Determines grades based on marks
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
    // Disaplays the grade
    alert("The grade is:" + grade);
  } else {
    // If the input is not between 0 and 100
    alert("Pleas enter a valid number between 0 and 100.");
  }
}
getGrade();
