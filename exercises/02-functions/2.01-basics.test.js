/*
EXERCISE 2.01: Functions

	In this exercise, you will demonstrate your ability to declare and define
	function variables.  According to the MDN Docs: 
	
	"Functions are one of the fundamental building blocks in JavaScript. A 
	function in JavaScript is similar to a procedure — a set of statements that 
	performs a task or calculates a value, but for a procedure to qualify as a 
	function, it should take some input and return an output where there is some 
	obvious relationship between the input and the output. To use a function, 
	you must define it somewhere in the scope from which you wish to call it."

	
	Resources to Enhance Your Learning:
		Function Basics: https://javascript.info/function-basics
		Functions in detail on the MDN docs:
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

	Getting Started:
		Open a new terminal by pressing Ctrl + Shift + ` or by selecting 
		Terminal > New Terminal from the VS Code menu. In the terminal, type the
		following command to run the tests in this file automatically:
		
			npm run test-watch -- 2.01

		Once you are done, you can kill the jest process by typing Q in the 
		terminal.
*/

/* TASK #1
	Define a new function variable named "add" that takes in two numeric parameter
	values and returns the sum of the values added together.
*/

// your code goes here

/* TASK #2
	Define a new function variable named "sayHello" that takes in two parameters.
	The first parameter should be a string called name, and the second paramater 
	should be a number called age.  The function should return a string that
	combines the two inputs such that if name was "John Doe" and age was 15, it 
	would output "Hello, my name is John Doe and I am 15 years old.".
	Your function should throw an error if the first parameter is not a string or 
	the if the secod parameter is not a number. For help on testing for the 
	data type of a variable, and how to throw an error, check out the following
	resources:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
*/

// your code goes here

/* ****************************************************************************
   ***           DO NOT MODIFY ANYTHING AFTER THIS SECTION                  ***
   ****************************************************************************
   
   The following code will run tests against the code you write above. Changing
   anything beyond this point could cause confusion, unless you know what you
   are doing. Change at your own risk :) 
*/

describe("Basic Functions", () => {
	test("Function named add is defined and is a function variable", () => {
		expect(typeof add).toBe("function");
	});
	test("add function returns sum of two numbers", () => {
		const a = 2;
		const b = 3;
		const result = add(a, b);
		expect(result).toBe(a + b);
	});

	test("Function namd sayHello is defined and is a function variable", () => {
		expect(typeof sayHello).toBe("function");
	});

	test("sayHello returns a string", () => {
		const result = sayHello("myName", 12);
		expect(typeof result).toBe("string");
	});

	test("sayHello returns a string that contains the name parameter passed in", () => {
		const name = "John Jacob Jingleheimer Schmidt";
		const age = 99;
		const result = sayHello(name, age);
		expect(result).toEqual(expect.stringContaining(name));
	});

	test("sayHello returns a string that contains the age parameter passed in", () => {
		const name = "John Jacob Jingleheimer Schmidt";
		const age = 99;
		const result = sayHello(name, age);
		expect(result).toEqual(expect.stringContaining(age.toString()));
	});

	test("sayHello throws an error when called without parameters", () => {
		expect(typeof sayHello).toBe("function");
		expect(() => {
			sayHello();
		}).toThrow();
	});

	test("sayHello throws an error when called with name only", () => {
		expect(typeof sayHello).toBe("function");
		expect(() => {
			sayHello("some name");
		}).toThrow();
	});

	test("sayHello throws an error when name is not a string", () => {
		expect(typeof sayHello).toBe("function");
		expect(() => {
			sayHello(true, 99);
		}).toThrow();
	});

	test("sayHello throws an error when age is not a number", () => {
		expect(typeof sayHello).toBe("function");
		expect(() => {
			sayHello("some name", "nine");
		}).toThrow();
	});
});
