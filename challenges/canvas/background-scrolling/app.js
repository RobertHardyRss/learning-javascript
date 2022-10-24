//@ts-check
export {};
/** @type {HTMLCanvasElement} */ //@ts-ignore
const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */ //@ts-ignore
const context = canvas.getContext("2d");
/** @type {HTMLImageElement} */ //@ts-ignore
const imageElement = document.getElementById("bg-image");

canvas.width = 800;
canvas.height = 600;

let x = 0;
let scrollSpeed = -10;

function animate() {
	//HINT: Your code will go in this function

	// clear the canvas on each animation
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.drawImage(imageElement, x, 0);
	context.drawImage(imageElement, x + imageElement.width, 0);

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
