const ITERS = 700;
const TRIANGLES_SIZE = 200;

function setup() {
	createCanvas(800, 800);
	gen();
}

function draw() {}

function gen()
{
	background(0);
	noStroke();
	for (let _ = 0; _ < ITERS; _++)
	{
		let p1 = createVector(random(0, width), random(0, height));
		let p2 = createVector(random(-TRIANGLES_SIZE, TRIANGLES_SIZE), random(-TRIANGLES_SIZE, TRIANGLES_SIZE));
		p2.add(p1);
		let p3 = createVector(random(-TRIANGLES_SIZE, TRIANGLES_SIZE), random(-TRIANGLES_SIZE, TRIANGLES_SIZE));
		p3.add(p1);

		fill(random(255));
		beginShape();
		vertex(p1.x, p1.y);
		vertex(p2.x, p2.y);
		vertex(p3.x, p3.y);
		endShape(CLOSE);
	}
	setTimeout(gen, 1000);
}
