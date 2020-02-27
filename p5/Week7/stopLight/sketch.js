var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);

  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  // yellow rectangle
  background("teal");
  fill(225, 222, 173);
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0: //red light
      fill("red");
      ellipse(400, 260, 100, 100);

      fill("black");
      ellipse(400, 540, 100, 100);
      ellipse(400, 400, 100, 100);

      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 1;
      }
      break;

    case 1: //green light
      fill("green");
      ellipse(400, 540, 100, 100);

      fill("black");
      ellipse(400, 260, 100, 100);
      ellipse(400, 400, 100, 100);


      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2: //yellow light
    fill("yellow")
    ellipse(400, 400, 100, 100);

    fill("black");
    ellipse(400, 540, 100, 100);
    ellipse(400, 260, 100, 100);

      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 0;
      }
      break;
  }
}
