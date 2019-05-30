function setup () {

  createCanvas(800, 800)
  background(50, 50, 70)

  drawShape(width / 2, height / 2, 200)

}

function drawShape(x, y, h) {

  if (h < 10)
    return

  noFill()
  stroke(200)

  let w = h / 2

  beginShape()
  vertex(x, y - h / 2)
  vertex(x + w, y - h / 2)
  vertex(x, y + h / 2)
  vertex(x - w, y + h / 2)
  vertex(x, y - h / 2)
  endShape()

  /*if (h == 200)
    ellipse(x + w, y - h / 2, 20, 20)*/

  drawShape(x + w, y - h / 2, h / 2)
  drawShape(x - w, y + h / 2, h / 2)
  drawShape(x, y - h / 2, h / 2)
  drawShape(x, y + h / 2, h / 2)


}
