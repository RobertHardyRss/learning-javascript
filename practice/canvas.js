//@ts-check
/** @type {HTMLCanvasElement} */ //@ts-ignore
let canvas = document.getElementById("canvas-1");
canvas.width = 100;
canvas.height = 100;

/** @type {CanvasRenderingContext2D} */ //@ts-ignore
let context = canvas.getContext("2d");

class ClickBox {
	constructor(x, y, size, colors) {
		this.x = x + 2;
		this.y = y + 2;
		this.size = size - 4;

		this.isClicked = false;
		this.refreshRate = 500;
		this.lastRefresh = 0;
		this.colors = colors;
		this.color = "red";

		this.setColor();
	}

	setColor() {
		let colorIndex = Math.floor(Math.random() * this.colors.length);
		this.color = this.colors[colorIndex];
	}

	amIClicked(x, y) {
		if (x < this.x) return false; // clicked to my left
		if (x > this.x + this.size) return false; // clicked to my right
		if (y < this.y) return false; // clicked above me
		if (y > this.y + this.size) return false; // clicked below me
		return true;
	}

	update(timeElapsed) {
		if (this.isClicked) return;

		this.lastRefresh += timeElapsed;

		if (this.lastRefresh < this.refreshRate) return;

		// reset the last refresh counter
		this.lastRefresh = 0;

		// set a new random color to myself
		this.setColor();
	}

	draw() {
		// let square = new Path2D();
		// square.rect(x, y, size, size);

		context.beginPath();
		context.rect(this.x, this.y, this.size, this.size);
		context.fillStyle = this.color;
		context.fill();

		if (this.isClicked) {
			context.strokeStyle = "black";
			context.stroke();
		}

		context.closePath();

		//context.fillRect(this.x, this.y, this.size, this.size);
	}
}

let squares = [];
let gridSize = 4;
let size = canvas.width / gridSize;
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let winningColor = "";

for (let row = 0; row < gridSize; row++) {
	for (let col = 0; col < gridSize; col++) {
		let x = col * size;
		let y = row * size;
		let box = new ClickBox(x, y, size, colors);
		squares.push(box);
	}
}

canvas.addEventListener("click", (e) => {
	console.log(e.offsetX, e.offsetY);

	squares.forEach((b) => {
		if (b.amIClicked(e.offsetX, e.offsetY)) {
			b.isClicked = true;
			if (winningColor == "") {
				winningColor = b.color;
			}
		}
	});
});

let currentTime = 0;
let score = 0;

function drawLoop(timestamp) {
	let elapsedTime = timestamp - currentTime;
	currentTime = timestamp;

	squares.forEach((b) => {
		b.update(elapsedTime);
		b.draw();
	});

	let isGameOver = squares.filter((b) => b.isClicked == false).length == 0;

	if (isGameOver) {
		score = squares.filter((b) => b.color == winningColor).length;
	} else {
		requestAnimationFrame(drawLoop);
	}
}

requestAnimationFrame(drawLoop);
