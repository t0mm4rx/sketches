var font;
const grid_size = 50;
const line_width = 6;
let grid = [];

function preload() {
	font = loadFont('../fonts/PlayfairDisplay-Regular.ttf');
}

function setup() {
	createCanvas(800, 800);
	this.canvas.style.cursor = 'none';
	textFont(font);
	// frameRate(1);
	create_grid();
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

function create_grid()
{
	grid = [];
	const choices = [0, 1, 2, 3];
	for (let x = 0; x < width; x += grid_size)
	{
		let line = [];
		for (let y = 0; y < width; y += grid_size)
		{
			line.push(random(choices));
		}
		grid.push(line);
	}
}

function draw_grid()
{
	for (let x = 0; x < grid.length; x++)
	{
		for (let y = 0; y < grid[0].length; y++)
		{
			draw_case(x * grid_size, y * grid_size, grid[x][y]);
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