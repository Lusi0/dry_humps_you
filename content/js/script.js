let img;
function preload() {
  img = loadImage('content/img/avery.png');
}

// get veiwport width
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0,0,0);
  }
  

let framecount = 0;
  function draw() {
    background(255,255,255);

    rotateY(framecount * -0.01);
    texture(img);
    // draw a circle
    sphere(400,400,400);
    framecount++;
  }