const N = 100;
const RADIUS = 400;
const AMPLITUDE = 2;
const NOISE_REDUCTION = 0.01;
const VARIATION = 300;

function setup() {
    createCanvas(800, 800);
	this.canvas.style.cursor = "none";
}

function draw() {
	blendMode(BLEND);
    background(0);
    noStroke();
    fill(255);
    let vector = createVector(0, -RADIUS / 2);
    beginShape();
    for (let i = 0; i < N; i++) {
        let local = vector.copy();
        let scale = noise((frameCount + (i / N) * VARIATION) * NOISE_REDUCTION, mouseX * NOISE_REDUCTION * .4, mouseY * NOISE_REDUCTION * .4) * AMPLITUDE;
        local.mult(scale);
        /*line(width / 2,
			 height / 2,
			 width / 2 + local.x,
	 		 height / 2 + local.y);*/

        vertex(width / 2 + local.x,
            height / 2 + local.y);
        vector.rotate(PI * 2 / N);
    }
    endShape();

	blendMode(DIFFERENCE);
	ellipseMode(CENTER, CENTER);
	fill(255);
	ellipse(mouseX, mouseY, 20, 20);

}
