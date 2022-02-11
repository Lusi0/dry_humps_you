let img;
function preload() {
  img = loadImage('content/img/avery.png');
}

// get veiwport width
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255,255,255);
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(255,255,255);
    frameRate(100);
  }
  

let framecount = 0;
  function draw() {
    

    rotateY(framecount * -0.01);
    texture(img);
    // draw a circle
    sphere(400,400,400);
    framecount++;
  }