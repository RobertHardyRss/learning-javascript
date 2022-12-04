//@ts-check
export {};
/** @type {HTMLCanvasElement} */ //@ts-ignore
let canvas = document.getElementById("click-box-canvas");
canvas.width = 500;
canvas.height = 500;

/** @type {CanvasRenderingContext2D} */ //@ts-ignore
let context = canvas.getContext("2d");

class ClickBox {
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} size
	 * @param {number} speed
	 * @param {string[]} colors
	 */
	constructor(x, y, size, speed, colors) {
		this.x = x + 2;
		this.y = y + 2;
		this.w = size - 4;
		this.h = this.w;
		this.colors = colors;
		this.color = "";
		this.path = new Path2D();
		this.path.rect(this.x, this.y, this.w, this.h);
		this.isClicked = false;
		this.colorInterval = speed;
		this.lastChange = 0;

		this.setColor();
	}

	setColor() {
		let colorIndex = Math.floor(Math.random() * this.colors.length);
		this.color = this.colors[colorIndex];
	}

	setClicked() {
		if (this.isClicked) return;

		this.isClicked = true;
		// change the path from a square to a circle when clicked
		let r = this.w / 2; // set radius for circle to half the width
		this.path = new Path2D();
		this.path.arc(this.x + r, this.y + r, r, 0, Math.PI * 2);
	}

	/**
	 * @param {number} timeElapsed
	 */
	update(timeElapsed) {
		if (this.isClicked) return;
		this.lastChange += timeElapsed;
		if (this.lastChange < this.colorInterval) return;
		this.lastChange = 0;

		this.setColor();
	}

	draw() {
		context.save();
		context.beginPath();
		context.fillStyle = this.color;
		context.fill(this.path);
		context.restore();
	}
}

let game = {
	/** @type {Array<ClickBox>} */
	clickBoxes: [],
	currentTime: 0,
	/** @type {string} */
	winningColor: "",
	startTime: 0,
	endTime: 0,
	gridSize: 4,
	boxSize: 25,
	init: function () {
		// @ts-ignore
		document
			.getElementById("click-box-start")
			.addEventListener("click", () => {
				game.start();
			});

		canvas.addEventListener("click", (e) => {
			let x = e.offsetX;
			let y = e.offsetY;

			game.clickBoxes
				.filter((b) => !b.isClicked)
				.forEach((b) => {
					if (context.isPointInPath(b.path, x, y)) {
						b.setClicked();
						if (!game.winningColor) game.winningColor = b.color;
					}
				});
		});
	},
	start: function () {
		const gridSizeSelection =
			// @ts-ignore
			+document.getElementById("grid-size").value || 4;
		const colorSelection =
			// @ts-ignore
			+document.getElementById("color-count").value || 7;
		// @ts-ignore
		const speed = +document.getElementById("difficulty").value || 1000;

		let colors = [
			"red",
			"green",
			"blue",
			"orange",
			"yellow",
			"indigo",
			"violet",
			"black",
			"silver",
			"chartreuse",
		];

		this.gridSize = gridSizeSelection;
		this.boxSize = canvas.width / this.gridSize;

		this.winningColor = "";
		this.clickBoxes = [];
		for (let row = 0; row < this.gridSize; row++) {
			for (let col = 0; col < this.gridSize; col++) {
				this.clickBoxes.push(
					new ClickBox(
						col * this.boxSize,
						row * this.boxSize,
						this.boxSize,
						speed,
						colors.slice(0, colorSelection)
					)
				);
			}
		}
		this.startTime = performance.now();
		requestAnimationFrame(game.loop);
	},
	loop: function (/** @type {number} */ timestamp) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		let timeElapsed = timestamp - game.currentTime;
		game.currentTime = timestamp;

		game.clickBoxes.forEach((b) => {
			b.update(timeElapsed);
			b.draw();
		});

		if (!game.checkGameOver()) {
			requestAnimationFrame(game.loop);
		}
	},
	checkGameOver: function () {
		const gameOver = this.clickBoxes.every((b) => b.isClicked);
		if (!gameOver) return false;

		this.endTime = performance.now();
		let gameTime = Math.floor((this.endTime - this.startTime) / 1000);
		// @ts-ignore
		document.getElementById("click-box-time").innerText = gameTime;

		let score = this.clickBoxes.filter(
			(b) => b.color === this.winningColor
		).length;
		// @ts-ignore
		document.getElementById("click-box-score").innerText = score;

		return true;
	},
};

game.init();
game.start();
