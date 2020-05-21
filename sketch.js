// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var snowboarder;
let minimum = 5;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  snowboarder = loadAnimation('Sprites/Snowboarder1.png', 'Sprites/Snowboarder24.png');

}

let snowscape = [];
var bubbles = [];
let me
let groundtest = [0,200,230,255];


function setup() {
  createCanvas(800, 400);
  for (var i = 0; i < 5; i++) {
    bubbles[i] = new Bubble();
    }
    me = new Avatar(200,300)
  }


function draw() {
  background(0,200,230);

  for (var i = 1; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    let drift = new Snow(width,frameCount);
    snowscape.push(drift);

    for (let i = 0; i<snowscape.length; i++){
      snowscape[i].drawSnow();
      snowscape[i].moveSnow();
    }

    if (snowscape.length>width){
      snowscape.shift();
    }
    if (frameCount<150){
  textAlign(CENTER)
  noStroke();
  text("Welcome to this game! Move the snowboarder to jump over the snow. Your game will begin in a few seconds", width/2,height/2)
}
if(frameCount>150){
  me.drawMe();
  me.moveMe();
}

  groundtest = get(me.x,me.y+21);

    fill(255,255,51)
    ellipse(750,50,60,60)



  }


}

function Bubble(){
  this.x = random(1, width);
  this.y = random(1, height);

  this.display = function() {

    stroke(255);
     strokeWeight(1);
     fill(255)
    ellipse(this.x, this.y, 24, 27);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);




  }

  this.move = function() {
    this.x = this.x += 4 ;
    this.y = this.y + random(-1, 1);

    if(this.x >= width){
    this.x = -1;



    }
  }
}
  class Snow{
  constructor(x,startx){
    this.x=x;
    this.startx = startx;
  }

  drawSnow(){
    let noiseScale=0.012;
    let noiseVal = noise((this.startx)*noiseScale/2, 80*noiseScale);
    stroke(235);
    line(this.x, noiseVal*200+200, this.x, height);

  }

  moveSnow(){
    this.x = this.x -1;

  }

}
class Avatar{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }

  drawMe(){
    animation(snowboarder, this.x, this.y);
    //print(this.y)
  }

  moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= 10;
    }


    if (groundtest[0]<100) { // if you hold the down arrow, move down by speed
        this.y += minimum+5;
    }

	}



}
