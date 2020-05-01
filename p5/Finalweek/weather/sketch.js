var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var tp = 0;

function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=2becc5e63195ef767b0db7cd871a5950'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  tp = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill("green");
      text("we have weather", 20, 20);
      // parse the weather object and put some text or images using at least 3 different weather data!
      text("the temperature is " + weather.main.temp, 20, 40);
      text("the humidity is " + weather.main.humidity, 20, 60);
      text("the windspeed is " + weather.wind.speed, 20, 80);

      fill("white");
      noStroke();
      ellipse(x, 250, 200, 100);
      x = x + ws/3;
      if (x > width) x = 0;

      fill("red")
      var tmp = 0;
       tmp = map (tp, -10, 90, 2, height-10);
      rect(width-40, height-10, 30, -tmp);
      break;

  }
}
