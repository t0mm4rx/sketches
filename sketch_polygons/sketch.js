const SIZE = 300;
var n = 2;
var way = 1;

function setup() {
	createCanvas(800, 800);
	frameRate(15);
}

function draw()
{
	draw_polygon(n);
	n += way;
	if (n >= 70 && way > 0)
		way *= -1
	if (n <= 2 && way < 0)
		way *= -1
}

function draw_polygon(n)
{
	background(50, 50, 70);
	let points = [];
	let vector = createVector(0, SIZE);
	let rotation = Math.PI * 2 / n;

	for (let i = 0; i < n; i++)
	{
		let v = vector.copy();
		v.add(createVector(width / 2, height / 2));
		points.push(v);
		vector.rotate(rotation);
	}

	fill(255);
	noStroke();
	ellipseMode(CENTER);
	for (let point of points)
		ellipse(point.x, point.y, 10, 10);

	stroke(255);
	strokeWeight(.5);
	for (let o1 of points)
	{
		for (let o2 of points)
			line(o1.x, o1.y, o2.x, o2.y);
	}
}
