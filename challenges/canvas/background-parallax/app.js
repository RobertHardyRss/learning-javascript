//@ts-check
export {};
/** @type {HTMLCanvasElement} */ //@ts-ignore
const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */ //@ts-ignore
const context = canvas.getContext("2d");
/** @type {HTMLImageElement} */ //@ts-ignore
const cloudsNear = document.getElementById("clouds-near");
/** @type {HTMLImageElement} */ //@ts-ignore
const cloudsClose = document.getElementById("clouds-close");
/** @type {HTMLImageElement} */ //@ts-ignore
const cloudsMedium = document.getElementById("clouds-medium");
/** @type {HTMLImageElement} */ //@ts-ignore
const cloudsFar = document.getElementById("clouds-far");

canvas.width = 800;
canvas.height = 600;

class ParallaxBackgroundImage {
	/**
	 * @param {HTMLImageElement} image
	 */
	constructor(image) {
		// HINT: You will probably need to pass in more info to the constructor
		this.image = image;
		this.x = 0;
	}

	update() {
		// HINT: You will need to add code here to make your image scroll. If
		// you have done the background scrolling challenge, you can look to
		// that for some tips.
	}

	draw() {
		context.drawImage(this.image, this.x, 0);
		context.drawImage(this.image, this.x + this.image.width, 0);
	}
}

let images = [
	new ParallaxBackgroundImage(cloudsFar),
	new ParallaxBackgroundImage(cloudsMedium),
	new ParallaxBackgroundImage(cloudsClose),
	new ParallaxBackgroundImage(cloudsNear),
];

function animate() {
	// clear the canvas on each animation
	context.clearRect(0, 0, canvas.width, canvas.height);

	images.forEach((i) => {
		i.update();
		i.draw();
	});

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
