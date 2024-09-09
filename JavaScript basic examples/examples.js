1. ADD 2 Numbers - 

const num1 = 8;
const num2 = 2;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

2. square root of a numbers -

const number = prompt('Enter the number: ');
const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

3. Calculate the area of a triangle - 

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');
const areaValue = (baseValue * heightValue) / 2;
console.log(
  `The area of the triangle is ${areaValue}`
);

4. To Swap Two Variables - 

let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
let temp; //swap variables
temp = a;
a = b;
b = temp;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

5. Convert Kilometers to Miles - 

const kilometers = prompt("Enter value in kilometers: ")
const factor = 0.621371 // conversion factor
const miles = kilometers * factor // calculate miles
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

6. Check if a number is Positive, Negative, or Zero - 

const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}

