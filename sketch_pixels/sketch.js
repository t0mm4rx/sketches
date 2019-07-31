var image;
var data;

const REDUCTION = 10;
const SPEED = 0.1;

function preload() {
    image = loadImage("image6.jpeg");
	data = [];
}

function setup() {
    createCanvas(image.width, image.height);
	background(255);
	load_pixels();
}

function load_pixels() {
	image.loadPixels();
    for (let x = 0; x < image.width; x += REDUCTION) {
        for (let y = 0; y < image.height; y += REDUCTION) {
            let index = (x + y * image.width) * 4;
			data.push({
				target_x: x,
				target_y: y,
				x: random(0, width),
				y: random(0, height),
				r: image.pixels[index],
				g: image.pixels[index + 1],
				b: image.pixels[index + 2]
			});
        }
    }
}

function draw_data()
{
	noStroke();
	for (let pixel of data)
	{
		fill(pixel.r, pixel.g, pixel.b);
		ellipse(pixel.x, pixel.y, REDUCTION, REDUCTION);
	}
}

function update_data()
{
	for (let pixel of data)
	{
		pixel.x += (pixel.target_x - pixel.x) * SPEED;
		pixel.y += (pixel.target_y - pixel.y) * SPEED;
	}
}

function draw() {
    background(255);
	draw_data();
	update_data();
}
