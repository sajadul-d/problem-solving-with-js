//Find the greatest number among three numbers
//without using built in function
function maxThreeNumber(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1 + ' ' + 'is the largest number');
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2 + ' ' + 'is the largest number');
  } else {
    console.log(n3 + ' ' + 'is the greatest number');
  }
}

let num1 = 454;
let num2 = 654;
let num3 = 432;
maxThreeNumber(num1, num2, num3);
