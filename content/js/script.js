let img;
function preload() {
  img = loadImage('content/img/balls.png');
}

// get veiwport width
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255,255,255);
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(200,255,255);
    frameRate(100);
  }
  

let framecount = 0;
  function draw() {
    background(200,255,255);

    rotateY(framecount * -0.01);
    texture(img);
    // draw a circle
    translate(0,0,-100);
    sphere(100,25,25);
    translate(0,0,200);
    sphere(100,25,25);

    framecount++;
  }