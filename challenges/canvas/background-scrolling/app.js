/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");
/** @type {HTMLImageElement} */
const imageElement = document.getElementById("bg-image");
//@ts-check

canvas.width = 800;
canvas.height = 600;

let x = 0;
let scrollSpeed = -10;

function animate() {
	//HINT: Your code will go in this function

	// clear the canvas on each animation
	this.context.clearRect(0, 0, canvas.width, canvas.height);

	context.drawImage(imageElement, x, 0);
	context.drawImage(imageElement, x + imageElement.width, 0);

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
