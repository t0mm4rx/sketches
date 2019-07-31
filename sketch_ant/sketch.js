const config = [
	{
		'trigger': [50, 50, 70],
		'color': [210, 100, 100],
		'action': 'down'
	},
	{
		'trigger': [90, 120, 210],
		'color': [210, 100, 100],
		'action': 'left'
	},
	{
		'trigger': [210, 100, 100],
		'color': [90, 210, 120],
		'action': 'up'
	},
	{
		'trigger': [90, 210, 120],
		'color': [90, 210, 120],
		'action': 'left'
	},
	{
		'trigger': [90, 210, 120],
		'color': [90, 120, 210],
		'action': 'down'
	}
]
const PIXEL_SIZE = 10;

var x = Math.floor((800 / PIXEL_SIZE) / 2);
var y = Math.floor((800 / PIXEL_SIZE) / 2);


var grid = [];

for (var w = 0; w < Math.floor(800 / PIXEL_SIZE); w++) {
	var temp = [];
	for (var h = 0; h < Math.floor(800 / PIXEL_SIZE); h++) {
		temp.push([50, 50, 70]);
	}
	grid.push(temp);
}

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(50, 50, 70);

	noStroke();
	for (var x = 0; x < Math.floor(800 / PIXEL_SIZE); x++) {
		for (var y = 0; y < Math.floor(800 / PIXEL_SIZE); y++) {
			fill(grid[x][y]);
			rect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
		}
	}

	process();

}

function process() {
	let action = get_action(x, y);
	grid[x][y] = action.color;
	if (action.action === "left") {
		x = safe_coords(x - 1);
	} else if (action.action === "right") {
		x = safe_coords(x + 1);
	} else if (action.action === "up") {
		y = safe_coords(y - 1);
	} else if (action.action === "down") {
		y = safe_coords(y + 1);
	}
}

function get_action(x, y) {
	let c = grid[x][y];
	for (var a of config) {
		if (color_equal(a.trigger, c))
			return a;
	}
	return -1;
}

function color_equal(a, b) {
	return (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]);
}

function safe_coords(a) {
	if (a < 0)
		return Math.floor(800 / PIXEL_SIZE) - 1;
	return a % (800 / PIXEL_SIZE);
}
