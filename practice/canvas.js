let canvas = document.getElementById("canvas-1");
/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let squares = [];

drawSquare(0, 0, "red");
drawSquare(25, 0, "blue");
drawSquare(50, 0, "green");
drawSquare(75, 0, "purple");

function drawSquare(x, y, color, size = 25) {
	let square = new Path2D();
	square.rect(x, y, size, size);

	squares.push(square);

	context.fillStyle = color;
	context.fillRect(x, y, size, size);
}

console.log(squares);
