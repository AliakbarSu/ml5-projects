let video
let detector
let results = []

function gotResults(error, res) {
  if (error) {
    console.log('Error thrown', error)
  } else {
    results = res
  }
  detector.then((rs) => rs.detect(video, gotResults))
}

function preload() {
  detector = ml5.objectDetector('cocossd')
}

function setup() {
  createCanvas(640, 480)
  video = createCapture(VIDEO)
  video.size(640, 480)
  video.hide()
  detector.then((rs) => rs.detect(video, gotResults))
}

function draw() {
  image(video, 0, 0)
  results.forEach((res) => {
    stroke(0, 255, 0)
    strokeWeight(4)
    noFill(0)
    rect(res.x, res.y, res.width, res.height)
    noStroke()
    fill(255)
    textSize(24)
    text(res.label, res.x + 12, res.y + 24)
  })
}
