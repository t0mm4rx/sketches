var points = [];
var weights = [];

var x = 800 / 2;
var y = 800 / 2;

var go = false;
var lpoint = null;

function setup() {
	createCanvas(800, 800);
	background(50, 50, 70);

	fill(255);
	noStroke();
	ellipseMode(CENTER);
	for (var p of points) {
		ellipse(p.x, p.y, 10, 10);
	}

}

function draw() {

	if (go && points.length > 1) {
		for (var i = 0; i < 1000; i++) {
			go_to(random_point());
			ellipse(x, y, 1, 1);
		}
	}

}

function get_weights() {
	let s = [];
	for (var p of points) {
		for (var i = 0; i < p.prob; i++) {
			s.push(points.indexOf(p));
		}
	}
	return s;
}

function random_point() {
	cb = document.querySelector('#chk').checked;
	p = points[random(weights)];
	if (cb && lpoint == p) {
		return random_point();
	} else {
		lpoint = p;
		return p;
	}
}

function go_to(point) {
	vx = point.x - x;
	vy = point.y - y;
	x += vx / 2;
	y += vy / 2;
}

function mousePressed() {
	if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height || go)
		return
	points.push({
		'x': mouseX,
		'y': mouseY,
		'prob': 1
	});
	ellipse(mouseX, mouseY, 10, 10);
	weights = get_weights();
}
