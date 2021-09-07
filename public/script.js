let img
let detector

function gotResults(error, results) {
  if (error) {
    console.log('Error thrown', error)
  } else {
    console.log(results)
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
}

function preload() {
  img = loadImage('./images/cat.jpg')
  detector = ml5.objectDetector('cocossd')
}

function setup() {
  createCanvas(640, 480)
  image(img, 0, 0)
  detector.then((rs) => rs.detect(img, gotResults))
}
