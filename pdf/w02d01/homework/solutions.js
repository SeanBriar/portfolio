// Setup
// What is the difference between a parameter and an argument?
// A parameter is a variable that is temporary and is used within the function.
// An argument is whatever information we want to set in the parameter.

// Within a function, what is the difference between return and console.log?
// Return will stop the function and return whatever value is specified.
// Console.log, is a method and will show whatever parameter is inputed.


// Palindrome

// define function
// change input to toUpperCase
// check input by splitting string, reversing the string, then joining the string
// define checked string to variable
// compare checked string with original strings

const palindrome = (str) => {
  let toUppercase = str.toUpperCase();
  let checkPalindrome = toUppercase.split('').reverse().join('');
   return (toUppercase === checkPalindrome);
}

console.log(palindrome('RaceCar'));

// Digit Sum

// convert number to string .toString()
// make string into an array .split()
// loop through the array
// add each array item together
// print sum

const sumDigits = (num) => {
  let sum = 0;
  let str = num.toString().split('');
    for (i = 0; i < str.length; i++) {
    let newStr = parseInt(str[i]);
    console.log(newStr);
      sum += newStr;
    }
    return sum;
}

console.log(sumDigits(55));

// Pythagoras
// a*a + b*b = c*c
// get sqrt of a and b and add together and return sqrt of that sum

const calculateSide = (sideA, sideB) => {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(calculateSide(4, 3));


// Sum Array
//
const sumArray = (arr) => {
  let i;
  let sum = 0
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4]));



//Triangle - **Unfinished**
const triangle = () => {
  let hash = '#'
  let sum = 0;
    for (let i = 0; i < ; i++) {
    hash++
  }
  return hash
}

console.log(triangle(7));


// Prime Numbers
// Step one
// if prime number return true
// if not, return false

const checkPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0)
    return false;
    }
  return true;
}

console.log(checkPrime(3));

// Step Two
// use checkPrime to check argument for prime numbers
const printPrimes = () => {

}
