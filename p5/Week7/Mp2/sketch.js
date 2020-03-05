var myState = 0;
var timer = 0;
var illenium;
var illenium2;
var illenium3;
var illenium4;
var song1, song2, song3
var x = 0;


function preload() {
  song1 = loadSound('assets/sound.mp3');
  song2 = loadSound('assets/sound2.mp3');
  song3 = loadSound('assets/sound3.mp3');

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
}

function setup() {
  // put setup code here
  createCanvas(800, 800);

  //images
  illenium = loadImage("assets/illenium.jpg");
  illenium2 = loadImage("assets/illenium2.jpg");
  illenium3 = loadImage("assets/illenium3.jpg");
  illenium4 = loadImage("assets/illenium4.jpg");
}

function draw() {
  // put drawing code here
  background("purple");
  switch (myState) {
    case 0:
      textSize(30, 30);
      text("Illenium is one of my favorite artists!", 50, 100);

      //image
      image(illenium, 50, 200, 400, 300);
      image(illenium2, 400, 500, 300, 300);

      timer++;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      //songs
      song1.play();
      myState = 2;
      break;

    case 2:
      text("He makes EDM music like this...", x, 100);
      x++;
      if (x>width){
        x = 0;
      }

      //images
      image(illenium3, 200, 200, 400, 300);
      image(illenium4, 50, 500, 300, 300);

      timer++;
      if (timer > 800) {
        myState = 3;
        timer = 0;
        song1.pause();
      }
      break;

    case 3:
      text("I jam out to his music all of the time :)", 100, 100);
      timer++;
      if (timer > 200) {
        myState = 4;
        timer = 0;
      }
      break;

    case 4:
      //songs
      song2.play();
      myState = 5;
      break;

    case 5:
      text("This is my one of my favorite songs!", 100, 100);
      timer++;
      if (timer > 800) {
        myState = 0;
        timer = 0;
        song2.pause();
      }
      break;
  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}
