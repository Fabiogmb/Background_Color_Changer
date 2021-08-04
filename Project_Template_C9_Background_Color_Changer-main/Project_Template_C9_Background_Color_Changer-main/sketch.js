var btn_red;
var btn_green;
var btn_blue;
var btn_mgn;
var btn_ylw
var btn_cyan


var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  //Red Button
  btn_red=createButton("RED");
  btn_red.position (100,50);
  btn_red.mousePressed(red_bg);

  //Green Button
  btn_green=createButton("GREEN");
  btn_green.position (250,50);
  btn_green.mousePressed(green_bg);

  //Blue Button
  btn_blue=createButton("BLUE");
  btn_blue.position (175,50);
  btn_blue.mousePressed(blue_bg);

  //Magenta Button
  btn_mgn=createButton("MAGENTA");
  btn_mgn.position (100,100);
  btn_mgn.mousePressed(magenta_bg);

  //Yellow Button
  btn_ylw=createButton("YELLOW");
  btn_ylw.position (250,100);
  btn_ylw.mousePressed(yellow_bg);

  //Cyan Button
  btn_cyan=createButton("CYAN");
  btn_cyan.position (190,100);
  btn_cyan.mousePressed(cyan_bg);
}

//Function for the Red Button
function red_bg () {
  r=255;
  g=0;
  b=0;
}

//Function for the Green Button
function green_bg () {
  r=0;
  g=255;
  b=0;
}

//Function for the Blue Button
function blue_bg () {
  r=0;
  g=0;
  b=255;
}

//Function for the Magenta Button
function magenta_bg () {
  r=255;
  g=0;
  b=255;
}

//Function for the Yellow Button
function yellow_bg () {
  r=255;
  g=255;
  b=0;
}

//Function for the Cyan Button
function cyan_bg () {
  r=0;
  g=255;
  b=255
}


function draw() {
  background(r,g,b);
  
}

