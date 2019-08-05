const ITERS = 1000;
const SIZE = 40;
const MAX_VERTICES = 100;
var grain_texture;

function preload()
{
	grain_texture = loadImage("grain.jpg");
}

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
	tint(255, 30);
	image(grain_texture, 0, 0);
	draw_vignette();
	setTimeout(gen, 1500);
}

function draw_vignette()
{
	noFill();
	ellipseMode(CENTER);
	for (var i = 0; i < width * 1.5; i++)
	{
		stroke(0, 0, 0, i / (width * 2.7) * 255);
		ellipse(width / 2, height / 2, i, i);
	}
}
