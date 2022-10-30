//Time complexity: O(sqrt(n))

//Space complexity: O(1)
//find the
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

console.log(isPrime(2));
