let canvas = document.getElementById("canvas-1");
canvas.width = 100;
canvas.height = 100;

/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let squares = [];
let gridSize = 4;
let size = canvas.width / gridSize;
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// All of these incrementors do the same
// row = row + 1
// row +=  1
// row++
for (let row = 0; row < gridSize; row++) {
	for (let col = 0; col < gridSize; col++) {
		let colorIndex = Math.floor(Math.random() * colors.length);
		let color = colors[colorIndex];
		drawSquare(col * size, row * size, color, size);
	}
}

// drawSquare(0, 0, "red");
// drawSquare(25, 0, "blue");
// drawSquare(50, 0, "green");
// drawSquare(75, 0, "purple");

function drawSquare(x, y, color, size = 25) {
	let square = new Path2D();
	square.rect(x, y, size, size);

	squares.push(square);

	context.fillStyle = color;
	context.fillRect(x, y, size, size);
}

console.log(squares);
