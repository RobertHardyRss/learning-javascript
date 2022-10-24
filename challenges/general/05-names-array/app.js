/*** Check out 00-getting-started before starting this challenge! ***

CHALLENGE: Create an array of names from an array of objects
    
	An experienced JavaScript developer should have a proper working knowledge 
	of arrays and objects because these data structures are heavily used in 
	modern JavaScript development.

	Given the input variable below, extract the value of the "name" property 
	from every object and store it in an array. The output should be like the 
	following: 
	
	["John", "Mike", "Danny", "Lisa", "Sophie"];

	Checkout these resources for guidance:
	- Objects: https://javascript.info/object
	- Foreach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

//@ts-check
export {};
/** @type {HTMLPreElement} */ //@ts-ignore
const output = document.getElementById("output-container");

let input = [
	{ name: "John", age: 21, city: "New York" },
	{ name: "Mike", age: 28, city: "Moscow" },
	{ name: "Danny", age: 30, city: "London" },
	{ name: "Lisa", age: 26, city: "Paris" },
	{ name: "Sophie", age: 19, city: "Berlin" },
];

// your code will start here.
