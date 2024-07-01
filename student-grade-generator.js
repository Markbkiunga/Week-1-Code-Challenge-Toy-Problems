let mark = parseFloat(prompt("Enter your mark"));
function userMarks(mark) {
  //function expression with mark parameter to accept a mark as the argument
  if (mark >= 0 && mark <= 100) {
    //The mark only gets graded if it satisfies the condition of being between 0 and 100
    if (mark > 79) {
      console.log("Grade: A");
      return "Grade :A";
    } else if (mark > 59) {
      console.log("Grade: B");
      return "Grade: B";
    } else if (mark > 49) {
      console.log("Grade: C");
      return "Grade: C";
    } else if (mark > 39) {
      console.log("Grade: D");
      return "Grade: D";
    } else {
      console.log("Grade: E");
      return "Grade: E";
    }
  } else {
    //Executes if the mark is not between 0 and 100
    console.error("Invalid mark , mark must be between 0 and 100");
    return "Invalid mark, mark must be between 0 and 100";
  }
}
userMarks(mark);
