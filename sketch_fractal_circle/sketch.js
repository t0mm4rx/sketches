const DEPTH = 5

function setup() {

  createCanvas(800, 800)
  background(50, 50, 70)

  ellipseMode(CENTER)
  drawCircle(width / 2, height / 2, 200)

}

function drawCircle(x, y, r) {

  if (r < 5)
    return

  noFill()
  stroke(200)
  ellipse(x, y, r, r)

  drawCircle(x + r / 2, y, r / 2)
  drawCircle(x - r / 2, y, r / 2)
  drawCircle(x, y - r / 2, r / 2)
  drawCircle(x, y + r / 2, r / 2)

}
