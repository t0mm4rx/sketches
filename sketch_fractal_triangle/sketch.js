function setup() {
	createCanvas(600, 600);
	background(50, 50, 70);

	fill(255);
	beginShape();
	vertex(width / 2, height / 2 - 200);
	vertex(width / 2 - 200, height / 2 + 200);
	vertex(width / 2 + 200, height / 2 + 200);
	endShape();

	draw_triangle(width / 2, height / 2, 1)
}

function draw() {}

function draw_triangle(_x, _y, _depth) {
	noStroke();

	let x = _x;
	let y = _y;
	let depth = _depth;
	let w = 400 / Math.pow(2, depth);

	if (depth > 7)
		return;

	fill(50, 50, 70);
	beginShape();
	vertex(x - w / 2, y);
	vertex(x + w / 2, y);
	vertex(x, y + w);
	endShape();

	draw_triangle(x, y - w / 2, depth + 1);
	draw_triangle(x - w / 2, y + w / 2, depth + 1);
	draw_triangle(x + w / 2, y + w / 2, depth + 1);

}
