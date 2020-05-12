let snowscape = [];

function setup(){
    createCanvas(800,400)
}


function draw() {

  background(0,200,230);

  let drift = new Snow(width,frameCount);
  snowscape.push(drift);

  for (let i = 0; i<snowscape.length; i++){
    snowscape[i].drawSnow();
    snowscape[i].moveSnow();
  }

  if (snowscape.length>width){
    snowscape.shift();
  }


}

class Snow{
  constructor(x,startx){
    this.x=x;
    this.startx = startx;
  }

  drawSnow(){
    let noiseScale=0.02;
    let noiseVal = noise((this.startx)*noiseScale/2, 80*noiseScale);
    stroke(235);
    line(this.x, noiseVal*200+200, this.x, height);

  }

  moveSnow(){
    this.x = this.x -1;

  }

}
