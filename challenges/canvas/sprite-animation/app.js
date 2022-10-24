//@ts-check
export {};
/** @type {HTMLCanvasElement} *///@ts-ignore
const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} *///@ts-ignore
const context = canvas.getContext("2d");
/** @type {HTMLImageElement} *///@ts-ignore
const zombieWalk = document.getElementById("zombie-walk");

canvas.width = 800;
canvas.height = 600;

// The zombie walk image is found here: assets/images/zombie-male-walk.png
// If you look at the sprite image file, you will see it is a sinlge image
// composed of 10 sprites.  A sprite is essentially a group of images in one
// file.  This sprite represents 10 total animation frames that when played
// in succession, will show a zombie walking.  The 10 frames are in 5 columns
// and 2 rows.  Each animation frame is 358 x 432 pixels (spriteWidth and
// spriteHeight below).  Can you figure out how to cycle through the frames?
// Ideally the frames should cycle at a rate of 12 frames per second.

let spriteWidth = 358;
let spriteHeight = 432;

// place the sprite in the middle of the canvas
const xPosition = (canvas.width - spriteWidth) / 2;
const yPosition = (canvas.height - spriteHeight) / 2;

let dx = 0;
let dy = 0;

let lastTimestamp = 0;

function animate(timestamp) {
	// clear the canvas on each animation
	context.clearRect(0, 0, canvas.width, canvas.height);

	const timeElapsed = timestamp - lastTimestamp;
	lastTimestamp = timestamp;

	//HINT: Your code should change dx and dy
	context.drawImage(
		zombieWalk,
		dx,
		dy,
		spriteWidth,
		spriteHeight,
		xPosition,
		yPosition,
		spriteWidth,
		spriteHeight
	);

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
