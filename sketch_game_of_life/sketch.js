var grid = null;
const GRID_SIZE = 100;
const PIXEL_SIZE = 8;

function setup() {
	createCanvas(800, 800);

	grid = get_empty_grid();
	for (var i = 0; i < 2000; i++) {
		grid[Math.floor(Math.random() * GRID_SIZE)][Math.floor(Math.random() * GRID_SIZE)] = 1;
	}

}

function draw() {
	background(50, 50, 70);

	/* Drawing grid */
	stroke(50, 50, 70);
	for (var x = 0; x < GRID_SIZE; x++) {
		for (var y = 0; y < GRID_SIZE; y++) {
			if (grid[x][y] != 0) {
				fill(255 - grid[x][y] ** 2 * 10, 70, max(grid[x][y] ** 2 * 10, 210));
				rect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
			}
		}
	}

	let ngrid = get_empty_grid();
	for (var x = 0; x < GRID_SIZE; x++) {
		for (var y = 0; y < GRID_SIZE; y++) {
			n = get_neighbours(x, y);

			if (grid[x][y] != 0) {
				if (n != 2 && n != 3) {
					ngrid[x][y] = 0;
				} else {
					ngrid[x][y] = grid[x][y] + 1;
					//ngrid[x][y] = 1;
				}
			} else {
				if (n == 3) {
					ngrid[x][y] = 1;
				} else {
					ngrid[x][y] = 0;
				}
			}

		}
	}
	grid = ngrid;

}

function get_empty_grid() {
	let grid = [];
	for (var x = 0; x < GRID_SIZE; x++) {
		grid.push([]);
		for (var y = 0; y < GRID_SIZE; y++) {
			grid[x].push(0);
		}
	}
	return grid;
}

function get_neighbours(x, y) {
	let s = 0;
	s += (grid[safe_coords(x - 1)][safe_coords(y)] != 0)
	s += (grid[safe_coords(x + 1)][safe_coords(y)] != 0)
	s += (grid[safe_coords(x + 1)][safe_coords(y + 1)] != 0)
	s += (grid[safe_coords(x - 1)][safe_coords(y + 1)] != 0)
	s += (grid[safe_coords(x - 1)][safe_coords(y - 1)] != 0)
	s += (grid[safe_coords(x + 1)][safe_coords(y - 1)] != 0)
	s += (grid[safe_coords(x)][safe_coords(y - 1)] != 0)
	s += (grid[safe_coords(x)][safe_coords(y + 1)] != 0)
	return s
}

function safe_coords(x) {
	if (x < 0) {
		return GRID_SIZE - 1;
	}
	else {
		return x % GRID_SIZE;
	}
}
