let mobilenet
let video
let label = ''

function gotResults(error, results) {
  if (error) {
    console.log('Error thrown', error)
  } else {
    //console.log(results)
    label = results[0].label
    mobilenet.predict(gotResults)
  }
}

function modelReady() {
  console.log('model is ready!!')
  mobilenet.predict(gotResults)
}

function imageReady() {
  console.log('Image is ready!!')
  image(cat, 0, 0, width, height)
}

function setup() {
  createCanvas(640, 500)

  video = createCapture(VIDEO)
  video.hide()
  background(0)
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady)
}

function draw() {
  image(video, 0, 0)
  fill(0)
  textSize(64)
  text(label, 10, height - 100)
}
