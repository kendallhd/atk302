var cars = [];
var frogPos;
var myState = -1;
var maxCars = 10;
var maxTimer = 12 * 60;
var timer = maxTimer;
var might;
var explosion;
var song1;
var hero;

function preload() {
  song1 = loadSound('Assets/sound1.mp3');

}

function setup() {
  // put setup code here
  createCanvas(800, 800);

  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 100);

  textAlign(CENTER);
  imageMode(CENTER);

  might = loadImage("Assets/might.png");
  explosion = loadImage("Assets/explosion.png");
  hero = loadImage("Assets/hero.jpg");

}

function draw() {

  switch (myState) {

    case -1: //song
      song1.loop();
      myState = 0;
      break;

    case 0: //menu
      background("red");
      fill("white");
      textSize(24);
      text("Welcome to my game!", width / 2, height / 2);
      break;

    case 1: // game state
      game();

      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 3;
      }
      break;

    case 2: // win
      background("green");
      text("Congrats! You Win! :) ---> Click to play again!", width / 2, height / 2);
      break;

    case 3: // lose
      background("purple");
      text("Oh no! You Lost! :(", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //win

      //reset timer
      timer = maxTimer;

      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0;
      break;

    case 3: //lose

      // reset timer
      timer = maxTimer;

      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0;
      break;
  }
}

function game() {
  // put drawing code here
  background("lightblue");

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

    }
  }

  if (cars.length == 0) {
    myState = 2;
  }

  //frog
  //fill('green');
  //  ellipse(frogPos.x, frogPos.y, 50, 50);
  image(might, frogPos.x, frogPos.y, 290, 290);
  checkForKeys();

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

//car class
function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));

  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 30, 30);
    image(explosion, this.pos.x, this.pos.y, 50, 50);
  }

  this.drive = function() {

    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;

    if (this.pos.y > width) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
