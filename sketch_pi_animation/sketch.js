var position = 0;
var params_n = 4;
var current = [];
var real_current = [];
var last_frame = 0;
for (let i = 0; i < params_n; i++) {
    current.push(0);
    real_current.push(0);
}


function setup() {
    createCanvas(800, 800);
	this.canvas.style.cursor = "none";
    next();
}

function draw() {
	blendMode(BLEND);
    background(0);
    fill(255);
    noStroke();

    for (let i = 0; i < params_n; i++) {
        real_current[i] += (current[i] - real_current[i]) / 40;
    }

    ellipse(real_current[0] / 10 * width,
        real_current[1] / 10 * height,
        real_current[2] * 10,
        real_current[2] * 10);

    if (frameCount - last_frame > current[3] * 6)
        next();

    blendMode(DIFFERENCE);
    ellipseMode(CENTER, CENTER);
    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);

}

function next() {
    for (let i = 0; i < params_n; i++)
        current[i] = parseInt(pi_digits[position + i]);
    position += params_n;
    last_frame = frameCount;
}
