var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('teal');

push();
translate(y,0);
//avatar
  noStroke();
  //body
  fill(46, 190, 230);
    arc(390, 360, 240, 200, 250, PI + QUARTER_PI, OPEN);
    quad(325,444,492,408,487,543,371,552);
    quad(337,554,514,531,480,581,370,597);
  ///Arms
  fill(46, 190, 230);
    quad(430,216,444,276,297,319,284,272);
    //right
    quad(430,215,612,247,594,308,434,276);
    quad(607,247,539,488,607,460,678,259);
  //left
    quad(298,315,288,271,91,334,104,390);
    quad(79,181,114,184,104,389,54,405);
  ///neck
  fill(46, 190, 230);
    quad(336,257,301,212,330,176,387,242);
    ///legs
    quad(516,528,476,581,568,766,652,750);
    quad(377,597,337,555,168,744,260,768);
    quad(715,569,778,619,649,749,612,700);
    quad(259,745,168,745,240,799,287,800);
  ///head
  stroke("blue");
  fill(46, 190, 230);
    quad(296,36,340,203,244,288,184,152);
    stroke("black");
  //cd
  fill(255, 212, 128);
    ellipse(390, 360, 100, 100);
    ellipse(390, 360, 45, 45);
    ellipse(390, 360, 20, 20);
    //eye
    fill(0,0,225);
    arc(240, 150, 30, 40, 400, PI + QUARTER_PI, OPEN);
    pop();

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
