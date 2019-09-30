const LINES = 4;
const MARGIN_START = 200;
const MARGIN = 90;
const AMPLITUDE = 200;
const NOISE_REDUCTION = 0.005;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(3);
	for (let i = 0; i < LINES; i++)
	{
		let y = MARGIN_START + MARGIN * i;
		for (let x = 0; x < width; x++)
		{
			let d1 = noise(x * NOISE_REDUCTION, i * NOISE_REDUCTION * 100 + mouseY / 40) * AMPLITUDE;
			let d2 = noise((x + 1) * NOISE_REDUCTION, i * NOISE_REDUCTION * 100 + mouseY / 40) * AMPLITUDE;

			line(x, y + d1, x + 1, y + d2);
		}
	}

}
