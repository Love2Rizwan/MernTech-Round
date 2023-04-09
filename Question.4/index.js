//Q.4. Write a program in JS to check whether a number is prime or not?

// methods1

function isPrime(number) {
  // Check if the number is less than 2, since prime numbers start from 2
  if (number < 2) {
    return false;
  }

  // Check if the number is divisible by any integer from 2 to its square root
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any integer from 2 to its square root, then it is a prime number
  return true;
}

// Example usage
console.log(isPrime(17)); // Output: true
console.log(isPrime(20)); // Output: false




