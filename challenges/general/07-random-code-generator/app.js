/*** Check out 00-getting-started before starting this challenge! ***

CHALLENGE: Random Code Generator
    
	Write a function that that generates a 6 digit random code between 0 and 
	999,999.  The function should return the code as a formatted string, such
	that it looks like: 000-000. For example, if the random number is 9,765, the
	code generated would be 009-765.
	
	Once you have your function, wire up an event listener on the button element
	that calls your function on a click event.  Write the code generated to
	the output container on each click.

	Checkout these resources for guidance:
	- Math.random(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	- String.prototype.padStart(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
	- Introduction to browser events: https://javascript.info/introduction-browser-events
*/

//@ts-check
export {};
/** @type {HTMLPreElement} */ //@ts-ignore
const output = document.getElementById("output-container");
/** @type {HTMLButtonElement} */ //@ts-ignore
const button = document.getElementById("generate-code");

// your code will start here.
