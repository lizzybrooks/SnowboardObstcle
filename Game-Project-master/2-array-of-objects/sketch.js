
//create an empty array called balls

//let balls = [];


// ellipse(750,50,60,60)
// fill(260,210,0)
//
//
// }

var bubbles = [];


function setup() {
  createCanvas(800, 500);
  for (var i = 0; i < 3; i++) {
    bubbles[i] = new Bubble();
    }
  }


function draw() {
  background(0,240,230);
  for (var i = 1; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

  }

}

function Bubble(){
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
   stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 27, 27);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);

    ellipse(750,50,60,60)
       fill(260,210,0)



  }

  this.move = function() {
    this.x = this.x += 5 ;
    this.y = this.y + random(-1, 1);

    if(this.x >= width){
    this.x = 0;


    }
  }
}







// //	draw all the balls in that array
// 	for (let i = 0; i < balls.length; i++) {
// 	    balls[i].drawBall();
//       balls[i].moveBall();
// 	  }
// }
//
// function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
//   let  b = new Ball(100, 100);
//   balls.push(b);
//   console.log(balls);
// }
//
// //ball class from which to create new balls with similar properties.
// class Ball {
//
// 	constructor(x,y){ //every ball needs an x value and a y value
// 		    this.x = x;
//     		this.y = y;
// 	}
//
// 	drawBall(){  // draw a ball on the screen at x,y
//     		stroke(0);
//     		fill("red");
// 		    ellipse(this.x,this.y,10,10);
// 	}
//
// 	moveBall(){ //update the location of the ball, so it moves across the screen
// 		this.x = this.x+2;
// 		this.y = this.y+.5;
// 	}
//
//
// }
