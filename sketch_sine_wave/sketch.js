var g = null

var points = []
var a = 0

var slider_speed_x = null

function setup() {

  createCanvas(600, 600)
  g = createGraphics(width, height)

}

function draw() {

  background(50, 50, 70)

  a += get_speed_y()

  points.push([ 1.75 * width / 2, height / 2 + Math.sin(a) * get_magnitude() ])

  stroke(255)
  strokeWeight(7)
  points[0][0] -= get_speed_x()
  for (var i = 1; i < points.length; i++) {
    points[i][0] -= get_speed_x()
    line(points[i-1][0], points[i-1][1], points[i][0], points[i][1])
    if (points[i][0] < -200)
      points.splice(i, 1)
  }

}

function get_speed_x() {
  return document.querySelector("#speed_x").value
}

function get_speed_y() {
  return document.querySelector("#speed_y").value / 100
}

function get_magnitude() {
  return document.querySelector("#magnitude").value
}
