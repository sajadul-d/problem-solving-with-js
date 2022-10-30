//How to find a large number from inside an array
let marks = [50, 70, 88, 23, 98, 36, 45, 78, 82];
let max = marks[0];
//min function
function maxNumber(marks) {
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > max) {
      max = marks[i];
    }
  }
  return max;
}

//max function
let min = marks[0];
function minNumber(marks) {
  for (let mark of marks) {
    if (mark < min) {
      min = mark;
    }
  }
  return min;
}

console.log(`The maximum marks is ${maxNumber(marks)}`);
//expected output: 98
console.log(`The minimum marks is ${minNumber(marks)}`);
//expected output: 23
