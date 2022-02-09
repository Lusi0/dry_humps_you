let img;
function preload() {
  img = loadImage('content/img/dry_humps_you.png');
}

// get veiwport width
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  }
  

let framecount = 0;
  function draw() {
    background(220);


    rotateX(framecount * 0.1);
    rotateY(framecount * 0.1);
    rotateZ(framecount * 0.1);
    texture(img);
    // draw a circle
    box(400,400,400);
    framecount++;
  }