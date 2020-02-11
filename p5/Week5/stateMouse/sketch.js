var state = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
switch (state) {
  case 0:
  background("purple")
  textSize(40)
  text("Haikus are easy", 100, 100);
    break;

  case 1:
  background("green")
  textSize(40)
  text("But sometimes they dont make sense", 100, 100);
    break;

  case 2:
  background("blue")
  textSize(40)
  text("Refrigerator", 100, 100);
    break;

  case 3:
    break;

  case 4:
    break;

  }

}

function mouseReleased() {
  state = state + 1;
  if(state > 3) {
    state = 0;
  }
}
