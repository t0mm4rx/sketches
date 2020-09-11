var font;
const grid_size = 50;
const line_width = 6;
const perlin_reduction_factor = 10;
const mouse_factor = 10;

function preload() {
	font = loadFont('../fonts/PlayfairDisplay-Regular.ttf');
}

function setup() {
	createCanvas(800, 800);
	this.canvas.style.cursor = 'none';
	textFont(font);
}

function draw() {
	blendMode(BLEND);
	background(0);

	draw_grid();

	blendMode(DIFFERENCE);
	ellipseMode(CENTER, CENTER);
	fill(255);
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);
}

function draw_grid()
{
	for (let x = 0; x < floor(width / grid_size); x++)
	{
		for (let y = 0; y < floor(height / grid_size); y++)
		{
			let value = noise(
				x / perlin_reduction_factor,
				y / perlin_reduction_factor);
			value = parseInt(floor(value * 4));
			draw_case(x * grid_size, y * grid_size, value);
		}
	}
}

function draw_case(x, y, type)
{
	stroke(255);
	strokeWeight(line_width);
	if (type == 0)
		draw_vertical(x, y);
	if (type == 1)
		draw_horizontal(x, y);
	if (type == 2)
		draw_diagonal1(x, y);
	if (type == 3)
		draw_diagonal2(x, y);
}

function draw_vertical(x, y)
{
	line(x + grid_size / 2, y, x + grid_size / 2, y + grid_size);
}

function draw_horizontal(x, y)
{
	line(x, y + grid_size / 2, x + grid_size, y + grid_size / 2);
}

function draw_diagonal1(x, y)
{
	line(x, y, x + grid_size, y + grid_size);
}

function draw_diagonal2(x, y)
{
	line(x + grid_size, y, x, y + grid_size);
}