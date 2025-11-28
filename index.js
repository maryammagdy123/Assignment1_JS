/**
 *1. Convert the string "123" to a number and add 7. (0.5 Grade)
• Output Example: 130
 * 
 */

const { use } = require("react");

let srtNum = "123";
let num = 7;
console.log(Number(srtNum) + num);
// ------------------------------------------------------------------------------
/**
 * 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
• Input Example: 0
• Output Example: "Invalid"
 */

// 1-
let val = 0
let checkFalsy = val || "invalid"
console.log(Boolean(checkFalsy));
// 2-
function checkIsFalsy(value) {
	return value ? value : "invalid"
	// return val || "invalid"
}
console.log(checkIsFalsy(0));
// 3-
if (Boolean(val) === false) {
	console.log("invalid if condition")
}
// ------------------------------------------------------------------------------
/**
 * 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
• Output Example:1, 3, 5, 7, 9
 */
for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) continue;
	console.log(i)
}
// ------------------------------------------------------------------------------
/**
 *4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
• Input Example: [1, 2, 3, 4, 5]
• Output Example: [2,4]
 */
let myArr = [1, 2, 3, 4, 5]
let evenNumbers = myArr.filter((num) => {
	return num % 2 == 0
})
console.log(evenNumbers)
// ------------------------------------------------------------------------------
/**
 * 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
• Input Example: [1, 2, 3], [4, 5, 6]
• Output Example: [1, 2, 3, 4, 5, 6]
 */
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
function handleMergeArray(arr1, arr2) {
	let mergedArr = [...arr1, ...arr2]
	console.log("Merged arrays :", mergedArr)
}
handleMergeArray(arr1, arr2);
// ------------------------------------------------------------------------------
/**
 *6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
• Input Example: 2
• Output Example: “Monday”
 */

function handleDayOfTheWeek(day) {
	switch (day) {
		case 1:
			return console.log("Sunday")
			break;
		case 2:
			return console.log("Monday");

			break;
		case 3:
			return console.log("Tuesday");

			break;
		case 4:
			return console.log("Wednesday");

			break;
		case 5:
			return console.log("Thursday");

			break;

		case 6:
			return console.log("Friday");

			break;

		case 7:
			return console.log("Saturday");

			break;

		default:
			return console.log("Enter valid day !");

			break;
	}
}
handleDayOfTheWeek(5)
// ------------------------------------------------------------------------------
/**
 *7. Create an array of strings and return their lengths using map method (0.5 Grade)
• Input: ["a", "ab", "abc"]
• Output Example: [1, 2, 3]
 */

function checkStringsLength(arrOfStr) {
	return arrOfStr.map((str) => str.length);
}
console.log(checkStringsLength(["O", "fr", "ree"]));
// ------------------------------------------------------------------------------

/**
 *8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
• Input Example: 15
• Output Example: “Divisible by both”
 */

function handleDivision(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		console.log("Divisible by both")
	} else {
		console.log("Not Divisible by both")
	}
}
handleDivision(30)
// ------------------------------------------------------------------------------
/**
 * 9.Write a function using arrow syntax to return the square of a number (0.5 Grade)
• Input Example: 5
• Output Example: 25
 */

/**
 let sqrNum=(num)=>{
	return num**2
	}
 */
let sqrNum = (num) => num ** 2;  // short hand arrow function
console.log(sqrNum(2))
// ------------------------------------------------------------------------------
/**
 * 10.Write a function that destructure an object to extract values and returns a formatted string. (0.5 Grade)
• Input Example: const person = {name: 'John', age: 25}
• Output Example: 'John is 25 years old'
 */
const person = { name: 'John', age: 25 }
const formattedPerson = (person) => {
	const { name, age } = person
	return `${name} is ${age} years old`;
}

console.log(formattedPerson());

// ------------------------------------------------------------------------------
/**
 * 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
• Input Example: 1, 2, 3, 4, 5
• Output Example: 15
 */

let summation = (a, b, c, d, e) => {
	return a + b + c + d + e;
}

console.log(summation(1, 2, 3, 4, 5))
// ------------------------------------------------------------------------------

/**
 * 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
• Output Example: “Success”
 */

function resolveSuccess() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Success!!!")
		}, 3000);
	})
}

resolveSuccess().then((result) => {
	console.log(result);
});

// ------------------------------------------------------------------------------
/**
 *13. Write a function to find the largest number in an array. (0.5 Grade)
• Input Example: [1, 3, 7, 2, 4]
• Output Example: 7
 */
let numbers = [1, 3, 7, 2, 4]
function findMaxNum(numbers) {
	return Math.max(...numbers)
}
console.log(findMaxNum(numbers))

function findLargest(numbers) {

	let largestNumber = numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > largestNumber) {
			largestNumber = numbers[i];
		}
	}

	return largestNumber;
}

console.log(findLargest(numbers));

// ------------------------------------------------------------------------------
/**
 * 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
• Input Example: name: "John", age: 30}
• Output Example: ["name", "age"]
 *  */
function getKeys(obj) {
	return Object.keys(obj);
}

const personObj = { name: "John", age: 30 };
console.log(getKeys(personObj));
// ----------------------------------------------------------------------------

/**15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
• Input: "The quick brown fox"
• Output: ["The", "quick", "brown", "fox"] */
function splitString(str) {
	return str.split(" ");
}

console.log(splitString("The quick brown fox"));


