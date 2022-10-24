//@ts-check
export {};
/** @type {HTMLCanvasElement} *///@ts-ignore
const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;

/** @type {CanvasRenderingContext2D} *///@ts-ignore
const context = canvas.getContext("2d");

/* 
	Drawing rectangles on the canvas is pretty simple, once you get familiar 
	with few methods available to us in the canvas 2D rendering context.
	This context is already available to you using the context variable defined 
	on line 6 above. You can see the special comment on line 5, which tells VS 
	Code what "type" of variable context is, so we can get intellisense when 
	writing our code.

	To start, we are going to use the fillRect() method of the context, which
	will draw a filled rectangle. The fillRect() method takes four input 
	parameters:
		x: the x coordinate of the top left hand corner of the rectangle 
		y: the y coordinate of the top left hand corner of the rectangle
		w: the width in pixels of the rectangle
		h: the height in pixels of the rectangle

	You can start by placing your rectangle at x = 0 and y = 0 so you are sure 
	to see it on the canvas.  The default fill style is black.
*/

// Add some code here by typing context.fillRect and let intellisense help you
// to complete the statement. 

/* 
	This should draw a black rectangle on the canvas at the x and y coordinates
	and with a width and height that you specified. Let's draw another
	rectangle, but this time lets make it red.  If you set the fillStyle property
	of the context BEFORE you draw your rectangle, it will change it's color.
*/

// Add some code here to set the fillStyle property of the context to red
// HINT: this should look something like this: context.fillStyle = "red"; 

// Add some code to draw another rectangle.  Make sure you change the x and y
// coordinates, otherwise it will draw over your first rectangle!


/* 
	Now that you are familiar with the basic fillRect method, you should
	checkout the HTML 5 Canvas Cookbook and learn about strokeRect and clearRect:
	https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#simple-shapes-rectangles

	Feel free to play with these new methods and see what they do!
*/
