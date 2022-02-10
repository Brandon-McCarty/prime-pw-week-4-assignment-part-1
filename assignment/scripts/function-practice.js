console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('in helloName');
  return  `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Samuel L. Jackson'))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers');
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Adding 16 & 78: ', addNumbers(16, 78));
console.log('Adding 102 & 673: ', addNumbers(102, 673));
console.log('Adding 12 & 42: ', addNumbers(12, 42));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2 ){
  console.log('in multiplyThree');
  let answer = num0 * num1 * num2;
  return answer;
}
console.log('Multiplying 2, 4, & 9: ', multiplyThree(2, 4, 9));
console.log('Multiplying 0.5, 400, & 234: ', multiplyThree(0.5, 400, 234));
console.log('Multiplying 0.45, 0.62, & 15: ', multiplyThree(0.45, 0.62, 15));
console.log('Multiplying 66, -2, & 1.2: ', multiplyThree(66, -2, 1.2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let animals = ['Dolphin', 'Bear', 'Parrot', 'Turtle']
let movies = ['Star Wars', 'Harry Potter', 'Avengers']
let blank =[]
let characters = ['Geralt', 'Thor', 'Ron Swanson', 'Reinhardt', 'General Grievous']
function getLast( array ) {
  console.log('in getLast');
  return array[array.length - 1];
}
console.log(getLast(animals));
console.log(getLast(movies));
console.log(getLast(blank));
console.log(getLast(characters));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array){
  for (let i = 0; i < array.length; i++){
    if (array[i] == value)
    return true;
  }
    return false;
}
console.log('Parrot is in animals: ', find('Parrot', animals));
console.log('Zebra is in animals: ', find('Zebra', animals));
console.log('Star Wars is in movies: ', find('Star Wars', movies));
console.log('Saving Private Ryan is in movies: ', find('Saving Private Ryan', movies));
console.log('Rick is in characters: ', find('Rick', characters));
console.log('Reinhardt is in characters: ', find('Reinhardt', characters));
console.log('reinhardt is in characters: ', find('reinhardt', characters));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let firstChar = string.charAt(0);
  if (firstChar == letter){
    return true;
  }
    return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
sumArray = [1, 15, 23, 45, 78]
sumArray2 = [5, 26, 76, 142, 214]
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i in array)
  sum += array[i];
  return sum;
}
console.log('The sum of the numbers in sumArray is: ', sumAll(sumArray));
console.log('The sum of the numbers in sumArray2 is: ', sumAll(sumArray2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
