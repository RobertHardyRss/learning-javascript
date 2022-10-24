// Adding the special @ts-check comment below will tell VS code to tell you about
// any errors that may be in your code.
//@ts-check

// Adding a default export will allow us to reuse variable names across files
// so you can leave this alone if you see it.
export {};

// Most challenges will start with grabbing the output-content element from
// the HTML page and assigning it to a variable we can use easily.  We will
// also tell VS Code what type of element output is with the special @type
// comment which will help us with intellisense.
/** @type {HTMLPreElement} */ //@ts-ignore
const output = document.getElementById("output-container");

// We can write a single line of text by setting the innerText property
// of the output variable.
output.innerText = "I am the first thing written to the output container. ";

// If we were to write anything to innerText again, it would replace anything
// we had previously written. We can avoid this by "appending" to innerText
// instead of replacing what is already there.
// We can append more values to the innerText property by using += instead
// of =.  This says, "take the existing innerText content, and add this new
// stuff to the end".
output.innerText += "I am the second appended to the first on the same line. ";

// If we want to add content, but make it appear on a separate line, we need to
// add an "escaped control character".  These are characters preceded by a
// backslash character (\).  To add a new line, just add \n like this:
output.innerText +=
	"\n\nI am the third thing, and I am two lines down on my own line!";

// You can also add tabs with \t
output.innerText += "\n\tI am the forth thing, and I have a tab.\n\n\n";

// Of course you can always write out to the developer console by using
// console.log().
console.log("Hello to the console!");

// You can use \n and \t on the consol.log() output as well
console.log("Lots\nof\nnewlines\n\tand tabs!");

// If you want to have an alert pop up in the browser, you can use alert.
// You may want to comment this line out if it gets annoying :)
alert("Hello from JavaScript!\nCheckout line 39 to see how I did this.");

// When working with strings, you can use Template Literals to make it easy
// to build out custom strings with your variable values in them.  You can
// learn more about template literals here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Template literals are strings surrounded by backticks (`) instead of quotes.
// You can find the backtick key under your esc key on the keyboard.
let x = 500;
let soda = "Root Beer";

output.innerText += `${x} bottles of ${soda} on the wall, ${x} bottles of ${soda}\n`;
output.innerText += `Take one down, pass it around...\n`;

x = 499;
output.innerText += `${x} bottles of ${soda}!\n\n`;

// You can even write out emojis!  You can see a complete list here: https://www.alt-codes.net/
output.innerText += "I Love JavaScript! 😍";

// Feel free to change any of this code and see what happens!
