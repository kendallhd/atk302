var myFont;

function preload() {
  myFont = loadFont('assets/Nature.ttf');  // find an otf or ttf
}

function setup() {
  createCanvas(800, 800) ;
}
function draw() {
  fill('#ED225D');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(36);	// SETS the size of the font
  text("Coding is UGH", 100, 100); // DISPLAYS TEXT WITH THE FONT
}
