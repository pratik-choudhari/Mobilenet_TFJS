console.log('ml5 version:', ml5.version);
let clf;
let vid;
let pred='Initializing...';
let flag=false;
function modelReady(){
  console.log('model ready!');
  flag=true;
  clf.predict(resultsReady);
  console.log('Classifying now...')
}

function resultsReady(err,res){
  pred = res[0]['label'];
  clf.predict(resultsReady);
}

function setup() {
  createCanvas(600,530);
  vid = createCapture(VIDEO);
  vid.hide();
  background(0);
  //get mobilenet model
  console.log('Loading model')
  clf = ml5.imageClassifier('MobileNet',vid, modelReady);
}

function draw() {
  // put drawing code here
  background(0);
  //flip webcam input
  if (flag){
    push();
    translate(width,0);
    scale(-1, 1);
    image(vid,0,0);
    pop();
  }
  fill(255);
  textSize(15);
  text("Predicted: "+pred,10,510);
}