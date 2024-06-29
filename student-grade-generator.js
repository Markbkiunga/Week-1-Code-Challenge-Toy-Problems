function userMarks(mark) {
  if (mark >= 0 && mark <= 100) {
    if (mark > 79) {
      console.log("A");
      return "A";
    } else if (mark > 59) {
      console.log("B");
      return "B";
    } else if (mark > 49) {
      console.log("C");
      return "C";
    } else if (mark > 39) {
      console.log("D");
      return "D";
    } else {
      console.log("E");
      return "E";
    }
  } else {
    console.error("Invalid mark , mark must be between 0 and 100");
    return "Invalid mark, mark must be between 0 and 100";
  }
}
userMarks(101);
