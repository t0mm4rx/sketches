var t = -3;
const speed = .01;

var x0 = t;
var y0 = t;

const w = 15;
const h = 15;

function setup() {
	createCanvas(800, 800);
	background(50, 50, 70);
	ellipseMode(CENTER);
}

function draw() {

	//t = document.querySelector("input").value;

	noStroke();
	fill(255, 255, 255, 70);


	x0 = next_x(1, 1);
	y0 = next_y(1, 1);

	draw_point(x0, y0, [180, 180, 240]);

	x1 = next_x(x0, y0);
	y1 = next_y(x0, y0);
	draw_point(x1, y1, [180, 240, 180]);

	x2 = next_x(x1, y1);
	y2 = next_y(x1, y1);
	draw_point(x2, y2, [240, 100, 130]);

	x3 = next_x(x2, y2);
	y3 = next_y(x2, y2);
	draw_point(x3, y3, [240, 240, 100]);

	x4 = next_x(x3, y3);
	y4 = next_y(x3, y3);
	draw_point(x4, y4, [100, 240, 200]);

	x5 = next_x(x4, y4);
	y5 = next_y(x4, y4);
	draw_point(x5, y5, [150, 140, 140]);

	x6 = next_x(x5, y5);
	y6 = next_y(x5, y5);
	draw_point(x6, y6, [180, 90, 190]);

	/*x1 = next_x(x0, y0);
	y1 = next_y(x0, y0);
	draw_point(x1, y1);
	console.log(x1, y1);

	x2 = next_x(x1, y1);
	y2 = next_y(x1, y1);
	draw_point(x2, y2);
	console.log(x2, y2);*/

	t += speed;

	//throw new Error("Ok !");

}

function next_x(x, y) {
	return -(y**2) - (t**2) + t*x;
}

function next_y(x, y) {
	return y*t + x*y;
}

function draw_point(x, y, color) {
	noStroke();
	color.push(100);
	fill(color);
	ncoords = map_coords(x, y);
	ellipse(ncoords[0], ncoords[1], 5, 5);
}

function map_coords(x, y) {
	return [
		map(x, -w, w, 0, width),
		map(y, h, -h, 0, height)
	];
}
