const LINES = 6;
const NOISE_REDUCTION = 0.02;
const AMPLITUDE = 100;
const MARGIN = 50;
const MARGIN_START = 260;

function setup() {
	createCanvas(800, 800);
	this.canvas.style.cursor = "none";
}

function draw() {
	blendMode(BLEND);
	background(0);
	strokeWeight(3);
	stroke(255);

	for (let i = 0; i < LINES; i++)
	{
		let y = MARGIN_START + i * MARGIN;
		for (let x = 0; x < width; x++)
		{
			let d = noise((x + mouseX * 1.5 * (i + 1)) * NOISE_REDUCTION, (i * 100 * NOISE_REDUCTION)) * AMPLITUDE;
			stroke((200 / LINES) * (i + 1));
			line(
				x,
				y + d,
				x + 1,
				height
			);
		}
	}
	blendMode(DIFFERENCE);
	ellipseMode(CENTER, CENTER);
	fill(255);
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);
}
