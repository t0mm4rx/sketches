const ITERS = 1000;
const ROT_MIN = .005;
const ROT_MAX = .01;
const SCALE_RANDOMNESS = .05;
const COLOR_RANDOMNESS = 5;
let total_rotation;

function setup() {
	createCanvas(800, 800);
	background(50, 50, 70);

	let vector = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2));
	let color = [100 + random(155), 100 + random(155), 100 + random(155)];
	total_rotation = 0;

	while (total_rotation < Math.PI * 2)
	{
		stroke(color);
		line(width / 2, height / 2, width / 2 + vector.x, height / 2 + vector.y);
		let rotation = random(ROT_MIN, ROT_MAX);
		vector.rotate(rotation);
		total_rotation += rotation;
		vector.mult(random(1 - SCALE_RANDOMNESS, 1 + SCALE_RANDOMNESS));
		color[0] += random(-COLOR_RANDOMNESS, COLOR_RANDOMNESS);
		color[1] += random(-COLOR_RANDOMNESS, COLOR_RANDOMNESS);
		color[2] += random(-COLOR_RANDOMNESS, COLOR_RANDOMNESS);
		for (let j = 0; j > 3; j++)
		{
			if (color[i] > 255)
				color[i] = 255;
			if (color[i] < 0)
				color[i] = 0;
		}
		if (vector.mag() > width / 2)
			vector.mult(1 - SCALE_RANDOMNESS);
	}
	//setTimeout(setup, 1000);
}

function draw() {}
