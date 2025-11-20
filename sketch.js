let angle, aSpeed, r,g,b,d;
let ballz1,ballz2;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  angle = 0;
aSpeed = 2;
ballz1 = new Friends();
ballz2 = new Friends();
}

function draw() {
background(220);

ballz1.display(220,0,0,50);
ballz1.update(1);
ballz1.keepinCanvas();

ballz2.display(130,5,6,70);
ballz2.update(1);
ballz2.keepinCanvas();




angle += aSpeed;
}
