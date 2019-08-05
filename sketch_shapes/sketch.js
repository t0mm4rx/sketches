const ITERS = 400;
const SIZE = 50;
const MAX_VERTICES = 100;

function setup() {
	createCanvas(800, 800);
	gen();
}

function draw() {}

function gen()
{
	background(0);
	noStroke();
	ellipseMode(CENTER);
	for (let _ = 0; _ < ITERS; _++)
	{
		fill(random(255));
		let vertices_n = random(3, MAX_VERTICES);
		let origin = createVector(random(width), random(height));
		beginShape();
		for (let i = 0; i < vertices_n; i++)
		{
			let p = createVector(random(-SIZE, SIZE), random(-SIZE, SIZE));
			p.add(origin);
			vertex(p.x, p.y);
		}
		endShape(CLOSE);
	}
	setTimeout(gen, 1500);
}
