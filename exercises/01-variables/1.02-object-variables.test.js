/*
EXERCISE 1.02: Learning about Arrays & Objects

	In this exercise, you will demonstrate your ability to declare array 
	and object variables.  Arrays are actually a type of object, but you can
	think of arrays as a list of data.

	Resources to Enhance Your Learning:
		Array tutorial: https://javascript.info/array
		Object tutorial: https://javascript.info/object

		Array's in detail on the MDN docs:
		https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays

	Getting Started:
		Open a new terminal by pressing Ctrl + Shift + ` or by selecting 
		Terminal > New Terminal from the VS Code menu. In the terminal, type the
		following command to run the tests in this file automatically:
		
			npm run test-watch -- 1.02

		Once you are done, you can kill the jest process by typing Q in the 
		terminal.
*/

/*	
TASK #1
	Create an array variable named fruits and create at least two elements
	that are string values in the array that are names of fruits.
*/

// your code goes here

/* 
TASK #2
	Create an empty array variable named mixedData.
*/

// your code goes here

/*
TASK #3
	Arrays can hold more than one type of data at a time, they can even hold 
	other arrays! Arrays also have lots of methods that are provided out of
	box by JavaScript.  The Array.push() method is used to add new elements
	onto the end of an array. You can see how to use it here:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

	Use the push method to add the following data to the mixedData array you 
	just created (make sure you do this in order otherwise the tests will not pass):
	1: Push any number
	2: Push any string value
	3: Push a boolean value
*/

// your code goes here

/* ****************************************************************************
   ***           DO NOT MODIFY ANYTHING AFTER THIS SECTION                  ***
   ****************************************************************************
   
   The following code will run tests against the code you write above. Changing
   anything beyond this point could cause confusion, unless you know what you
   are doing. Change at your own risk :) 
*/

describe("Fruits Array Tests", () => {
	test("is an array", () => {
		expect(typeof fruits).toBe("object");
		expect(Array.isArray(fruits));
	});

	test("first element is a string", () => {
		expect(typeof fruits[0]).toBe("string");
	});

	test("second element is a string", () => {
		expect(typeof fruits[1]).toBe("string");
	});

	test("has at least 2 elements", () => {
		expect(fruits.length).toBeGreaterThan(1);
	});
});

describe("Mixed Data Array Tests", () => {
	test("is an array", () => {
		expect(typeof mixedData).toBe("object");
		expect(Array.isArray(mixedData));
	});

	test("first element is a number", () => {
		expect(typeof mixedData[0]).toBe("number");
	});

	test("second element is a string", () => {
		expect(typeof mixedData[1]).toBe("string");
	});

	test("third element is a boolean", () => {
		expect(typeof mixedData[2]).toBe("boolean");
	});
});
