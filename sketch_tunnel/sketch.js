shapes = []

var z = 0
var c = [0, 0, 0]

const TUNNEL_LENGTH = 5000
const TUNNEL_RADIUS = 150
const INIT_N = 1500

const COLOR_CHANGE_SPEED = 2
const COLOR_DELTA = 15

const SPEED = 10

function setup () {
  createCanvas(800, 800, WEBGL)
  frameRate(32)
  c = [random(0, 255), random(0, 255), random(0, 255)]
  for (var i = 0; i < INIT_N; i++) {
    shapes.push(new Shape(random(0, -TUNNEL_LENGTH)))
  }
}

function draw() {

  background(c)

  for (var shape of shapes) {
    shape.draw()
  }

  shapes = shapes.filter(shape => !shape.toDelete)

  z+=SPEED

  c[0] += random(-COLOR_CHANGE_SPEED, COLOR_CHANGE_SPEED)
  c[1] += random(-COLOR_CHANGE_SPEED, COLOR_CHANGE_SPEED)
  c[2] += random(-COLOR_CHANGE_SPEED, COLOR_CHANGE_SPEED)

  c[0] = c[0] % 255
  c[1] = c[1] % 255
  c[2] = c[2] % 255

  if (c[0] < 0)
    c[0] = 0

  if (c[1] < 0)
    c[1] = 0

  if (c[2] < 0)
    c[2] = 0

}

class Shape {

  constructor(z) {
    this.color = [c[0] + random(-COLOR_DELTA, COLOR_DELTA), c[1] + random(-COLOR_DELTA, COLOR_DELTA), c[2] + random(-COLOR_DELTA, COLOR_DELTA)]
    this.dir = createVector(random(-1, 1), random(-1, 1)).normalize().mult(TUNNEL_RADIUS).mult(random(1, 1.2))
    this.x = this.dir.x
    this.y = this.dir.y
    this.z = z
    this.size = random(2, 80)
    this.toDelete = false
  }

  draw() {
    noStroke()
    fill(this.color)
    translate(this.x, this.y, this.z + z)
    plane(this.size)
    translate(-this.x, -this.y, -this.z - z)
    if (this.z + z > 650 && !this.toDelete) {
      this.toDelete = true
      shapes.push(new Shape(this.z - TUNNEL_LENGTH, 40))
    }

  }

}
