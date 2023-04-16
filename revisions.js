
//1. Write a function that takes in a string and returns it when reversed
//let food = “eating”
function reverseString(str) {
  return str.split('').reverse().join('');
}
let food = "eating";
let result = reverseString(food);
console.log(result);
//2. Write a function that takes in the following array and consoles the target if it is found else null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function findTarget(arr, target) {
  if (arr.indexOf(target) !== -1) {
    console.log(target);
  } else {
    console.log(null);
  }
}
let num = [2, 8, 0, 23, 5, 45, 76];
let target = 23;
findTarget(num, target);
//3. Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let year = 2000; year <= 2023; year++) {
    if (isLeapYear(year)) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }
  function isLeapYear(year) {
    if (year % 4 === 0 && (year % 300 !== 0 || year % 800 === 0)) {
      return true;
    } else {
      return false;
    }
  }
//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (let num = 0; num <= 100; num++) {
    let result = "";
    if (num % 3 === 0) {
      result += "Fizz";
    }
    if (num % 5 === 0) {
result += "Buzz";
    }
    if (result === "") {
      result = num;
    }
    console.log(result);
  }
//5. Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
function multiplyByFour(numArray) {
    let result = [];
    for (let i = 0; i < numArray.length; i++) {
      result.push(numArray[i] * 4);
    }
    return result;
  }
  let numArray = [12, 87, 45, 75, 23, 64, 73];
  let multipliedArray = multiplyByFour(numArray);
  console.log(multipliedArray);
//6. Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]
function convertToNumber(strArray){
    let answer = [];
    for (let i = 0; i < strArray.length; i++){
        answer.push(number(strArray[i]));
    }
    return answer;
}



