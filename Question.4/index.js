//Q.4. Write a program in JS to check whether a number is prime or not?

// methods1

function isPrime(number) {

  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isPrime(17)); // Output: true
console.log(isPrime(20)); // Output: false




