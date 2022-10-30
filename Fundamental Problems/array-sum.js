//Find the summation of all array elements
const numbers = [3, 4, 5, 6, 1];
const allElementSum = (arr) => {
  let sum = 0;
  for (let element of arr) {
    sum = sum + element;
  }
  return sum;
};

console.log(`Summation of all elements = ${allElementSum(numbers)}`);

//Find the summation of odd elemts and even
function oddevenSum(arr) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddSum = oddSum + arr[i];
    } else {
      evenSum = evenSum + arr[i];
    }
  }
  console.log('oddSum =', oddSum);
  console.log('evenSum =', evenSum);
}

//call the function for getting the summation
oddevenSum(numbers);
