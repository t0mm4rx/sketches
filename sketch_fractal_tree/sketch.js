var angle = 0
var iManager

function setup() {
  createCanvas(800, 800)
  background(50, 50, 70)
  angleMode(DEGREES)

  iManager = new InterpolationManager()

  iManager.interpolate(0, 38, 10000, InterpolationTypes.easeInOutCubic, function (v) {
      angle = v
  }, function () {});

}

function draw() {
  background(50, 50, 70)
  drawLine(width / 2, 700, 150, 0)


  iManager.update()

}

function drawLine(x, y, h, a) {

  if (h < 5)
    return

  let v = createVector(0, h)
  v.rotate(a)

  stroke(200)
  line(x, y, x - v.x, y - v.y)

  drawLine(x - v.x, y - v.y, h * 0.75, a - angle)
  drawLine(x - v.x, y - v.y, h * 0.75, a + angle)

}
