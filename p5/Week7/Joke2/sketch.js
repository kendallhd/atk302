var myState = 0;
var timer = 0;

function preload() {

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background("black");
  switch(myState) {
    case 0;
    text("Why did the bike fall over?", 100, 100);
    timer++ ;
    if (timer > 200) {
      myState = 1;
      tiemr = 0 ;
    }
    break;

    case 1;
    text("Because it was TWO tired.", 100, 100);
    timer++ ;
    if (timer > 200) {
      myState = 0;
      tiemr = 0 ;
    break;
  }
}

function mouseReleased() {
  myState = myState + 1;
  if(myState > 1) {
    myState = 0;
  }
}
