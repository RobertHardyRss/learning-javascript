console.log("Hello world!");

// then I can write anything I want
// and it wont get errors because it is a comment
let x = 500; // set x to have the value 500
let y = 276;

let sum = x + y;
let pi = 3.14;

console.log("x is ", x);

let myname = "Robert Hardy";

// strings have a length property
myname.length;

let whatWillHappen = myname + x;

console.log(whatWillHappen, sum);

let crazMAth; // = (100 * x) / (sum + whatWillHappen) - y;

console.log(crazMAth);

let isGameOver = false;

console.log(isGameOver, typeof isGameOver);

// arrays can hold lists of values
let ages = [25, 17, 16, 85];

console.log("ages is an array", ages);

let secondAge = ages[1];

let student = {
	name: "Toby",
	grade: "A++",
	gpa: 4.0,
	wearsAHat: true,
	friends: ["Jackson", "Lukas"],
};

console.log("student is", student);
console.log("student name is", student.name);

student.gradeLevel = 9;
