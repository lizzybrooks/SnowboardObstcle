let snowscape = [];
let me;
let groundtest = [0,200,230,255];

function setup(){
    createCanvas(800,400)
    me = new Avatar(200,height/2);
}


function draw() {

  background(0,200,230);


  let drift = new Snow(width,frameCount,200);
  snowscape.push(drift);

  for (let i = 0; i<snowscape.length; i++){
    snowscape[i].drawSnow();
    snowscape[i].moveSnow();
  }


  if (snowscape.length>width){
    snowscape.shift();
  }
if (frameCount<650){
  textAlign(CENTER)
  noStroke();
  text("Welcome to this game! Move the snowboarder to jump over the snow. Your game will begin in a few seconds", width/2,height/2)
}
if(frameCount>650){
  me.drawMe();
  me.moveMe();
}


  groundtest = get(me.x,me.y+21);





}

class Snow{
  constructor(x,startx,top_of_the_snow){
    this.x=x;
    this.startx = startx;
    this.top_of_the_snow = top_of_the_snow;
  }

  drawSnow(){
    let noiseScale=0.02;
    let noiseVal = noise((this.startx)*noiseScale/2, 80*noiseScale);
    stroke(235);
    this.top_of_the_snow = noiseVal*200+200
    line(this.x, this.top_of_the_snow, this.x, height);

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
    fill("black")
    stroke("black")
    ellipse(this.x,this.y,20,20)
    //print(this.y)
  }

  moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= 10;
    }

    if (groundtest[0]<100) { // if you hold the down arrow, move down by speed
        this.y += 3;
    }

	}



}
