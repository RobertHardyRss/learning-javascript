/* EXERCISE 1.01: Learning about Variables

	In this exercise, you will demonstrate your ability to declare variables
	of different "primitive" data types, like numbers, strings, booleans and
	undefined. Although there are other primitive data types, these four are 
	the ones you will most commonly encounter. 

	Resources to Enhance Your Learning:
		I highly recommend checking out this excellent tutorial on JavaScript 
		variables: https://javascript.info/variables

		If you want to learn even more, the Mozilla Document Network (MDN) has
		in depth information on all things JavaScript.  This article goes into
		excellent detail around all of the data types and structures available:
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

	Getting Started:
		Open a new terminal by pressing Ctrl + Shift + ` or by selecting 
		Terminal > New Terminal from the VS Code menu. In the terminal, type the
		following command to run the tests in this file automatically:
		
			npm run test-watch -- 1.01

		Once you are done, you can kill the jest process by typing Q in the 
		terminal.
***************************************************************************** */

/* TASK #1
	Create a variable named x and do not assign a value to it. Once created,
	this variable will have a data type of "undefined" since it has not been
	assigned a value of any kind.
*/

// your code goes here

/* TASK #2
    Create a variable named age and set it's value to your age in years. Once 
	created, this variable will will have a data type of "number"
*/

// your code goes here

/* TASK #3
	Create a variable named myName and set it's value to your name. Once 
	created, this variable will will have a data type of "string"
*/

// your code goes here

/* TASK #4
	Create a variable named isCodingFun and set it's value to true Once created, 
	this variable will will have a data type of "boolean"
*/

// your code goes here

/* TASK #5
	Create a new variable called nameCopy and assign it to the myName variable 
	that you created earlier.  Notice that if you change the value assigned to 
	myName above, this variable's value also changes.
*/

// your code goes here

/* ****************************************************************************
   ***           DO NOT MODIFY ANYTHING AFTER THIS SECTION                  ***
   ****************************************************************************
   
   The following code will run tests against the code you write above. Changing
   anything beyond this point could cause confusion, unless you know what you
   are doing. Change at your own risk :) 
*/

describe("Task #1: Variable x", () => {
	test("Variable x is declared but undefined", () => {
		expect(x === undefined);
	});
});

describe("Task #2: Variable age", () => {
	test("is a number", () => {
		expect(typeof age).toBe("number");
	});
	test("is greater than 10", () => {
		expect(age).toBeGreaterThan(10);
	});
	test("is less than 20", () => {
		expect(age).toBeLessThan(20);
	});
});

describe("Task #3: Variable myName", () => {
	test("is a string", () => {
		expect(typeof myName).toBe("string");
	});
	test("length is greater than 1", () => {
		expect(myName.length).toBeGreaterThan(1);
	});
	test("length is less than 50", () => {
		expect(myName.length).toBeLessThan(50);
	});
});

describe("Task #4: Variable isCodingFun", () => {
	test("is a boolean", () => {
		expect(typeof isCodingFun).toBe("boolean");
	});
	test("value is true", () => {
		expect(isCodingFun === true);
	});
});

describe("Task #5: Copy a value", () => {
	test("Variable nameCopy has the same value as myName.", () => {
		expect(nameCopy === myName);
	});
});
