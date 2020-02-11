var x = 0;

function setup() {
  // put setup code here
createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background("gray");
  //rect(x,100,100,100);
  fill("purple");
  textSize(40);
  text("Parasite", x, 100);
x += 5;
  if(x > width) {
    x = 0
    }
}
