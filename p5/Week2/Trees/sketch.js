function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 620);
}

function draw() {
  // put drawing code here
  background(15, 153, 217);
  noStroke();

  fill(255, 221, 0);
  ellipse(700, 0, 300, 300);

  fill(0);
  textSize(30);
  text("Good Morning!",100,100);

  fill(0);
  textSize(30);
  text(mouseX + ", " + mouseY,50,50);

//tree 1
  fill(0);
  rect(440,350,50,400);

  fill(2, 97, 38);
  arc(460, 350, 220, 280, PI, TWO_PI);

//tree 2
  fill(0);
  rect(229,450,50,400);

  fill(2, 97, 38);
  arc(250, 450, 200, 200, PI, TWO_PI);

//clouds
fill(225);
arc(190, 200, 100, 100, PI, TWO_PI);

fill(225);
arc(160, 225, 100, 100, PI, TWO_PI);

fill(225);
arc(230, 225, 100, 100, PI, TWO_PI);
}
