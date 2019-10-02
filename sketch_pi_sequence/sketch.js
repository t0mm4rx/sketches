const CIRCLE_RADIUS = 700;
var points = [null, null, null, null, null, null, null, null, null, null];
var current = 0;
var graph;
var graph2;
var font;

function preload() {
	font = loadFont("../fonts/PlayfairDisplay-Bold.ttf");
}

function setup() {
	frameRate(4);
	createCanvas(800, 800);
	graph = createGraphics(800, 800);
	graph2 = createGraphics(800, 800);
	graph.textFont(font);
	graph2.textFont(font);
	graph2.background(0);
	angleMode(RADIANS);
	graph2.stroke(255);
	graph2.noFill();
	graph2.strokeWeight(3);
	graph2.ellipseMode(CENTER, CENTER);
	graph2.ellipse(width / 2, height / 2, CIRCLE_RADIUS, CIRCLE_RADIUS);
	let vector = createVector(0, -CIRCLE_RADIUS / 2);
	for (let i = 0; i < 10; i++)
	{
		points[i] = vector.copy();
		vector.rotate(.1 * PI * 2);
		graph2.ellipse(width / 2 + vector.x, height / 2 + vector.y, 3, 3);
		graph2.textSize(30);
		graph2.textAlign(CENTER, CENTER);
		graph2.noStroke();
		graph2.fill(255);
		graph2.text((i + 1) % 10, width / 2 + vector.x * 1.08, height / 2 + vector.y * 1.08);
	}
}

function draw() {
	background(0);
	graph2.strokeWeight(1);
	graph2.stroke(255, 255, 255, 20);
	graph2.line(points[parseInt(pi_digits[current])].x + width / 2, points[parseInt(pi_digits[current])].y + height / 2, points[parseInt(pi_digits[current + 1])].x + width / 2, points[parseInt(pi_digits[current + 1])].y + height / 2);

	graph.stroke(200, 100, 100);
	graph.strokeWeight(2);
	graph.line(points[parseInt(pi_digits[current])].x + width / 2, points[parseInt(pi_digits[current])].y + height / 2, points[parseInt(pi_digits[current + 1])].x + width / 2, points[parseInt(pi_digits[current + 1])].y + height / 2);

	graph.textAlign(CENTER, CENTER);
	graph.fill(255);
	graph.noStroke();
	graph.textSize(50);
	let t = "3.14";
	if (current > 2) {
		t += "..";
	}
	if (current >= 2) {
		t += pi_digits[current] + pi_digits[current + 1];
	}
	graph.text(t, width / 2, height / 2);

	image(graph2, 0, 0);
	image(graph, 0, 0);
	graph.clear();
	current++;
}
