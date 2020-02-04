var steven;
var cookie;
var rose;

function setup() {
  // put setup code here
  createCanvas(800,800);

  steven = loadImage("assets/steven.jpg");
  cookie = loadImage("assets/cookie.jpg");
  rose = loadImage("assets/rose.jpg");

}

function draw() {
  // put drawing code here
  image(steven, 0, 0, 200, 200);
  image(cookie, 0, 200, 200, 200)
  image(rose, 0, 400, 200, 200)
}
