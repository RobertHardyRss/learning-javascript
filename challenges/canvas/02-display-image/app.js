//@ts-check
export {};
/** @type {HTMLCanvasElement} *///@ts-ignore
const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;

/** @type {CanvasRenderingContext2D} *///@ts-ignore
const context = canvas.getContext("2d");

/* 
	Now that we are in code, the first thing we will need to do is define 
	a variable that holds a reference to the image tag we defined in our HTML
	page.  If you look at the canvas variable above on line 1, you can see 
	we did the same thing to let JavaScript know about our canvas element, by 
	using the getElementById method.  Pass the method the ID that you gave 
	your element on the HTML page.  The ID's have to match exactly, capitalization
	matters!  You can learn more about getElementById here:
	https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
*/

// Add your new variable here, using the document.getElementById() method.

/* 
	Once you have a variable that points to your HTML image, you can now
	use the drawImage method on our 2D canvas context which will display our
	image on the canvas.  This context is already available to you using the context 
	variable defined on line 6 above. You can see the special comment on line 5, 
	which tells VS Code what "type" of variable context is, so we can get intellisense
	when writing our code.  If you want to let VS Code know the data type
	for your image variable, you can add a similar comment telling VS code your
	variable is an HTMLImageElement.
*/

// Add some code here to call the drawImage method of the context variable
// HINT: this will look something like context.drawImage(yourImageVariableName, 0, 0);

/* 
	The most basic form of the drawImage method takes 3 parameters:
		image: You can pass it the image variable you created above
		dx: The x coordinate of the top left corner of where to draw the image
			on the canvas
		dy: The y coordinate of the top left corner of where to draw the image
			on the canvas
	
	You can place the image at 0,0 to start, which will place it in the top
	left corner of the canvas.  You can draw the same image on the canvas in 
	different positions, by calling drawImage again with different coordinates.
	Place a couple images and see how they overlap.
*/

// Add some code here to call the drawImage method of the context variable again
// with different dx and dy values.

/* 
	Now that you are familiar with the basic drawImage method, checkout 
	the other things you can do when drawing images to the HTML canvas
	by going through some of the examples found here:
	https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#drawing-images
*/
