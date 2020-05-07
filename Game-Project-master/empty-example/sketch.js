let noiseScale=0.02;

function draw() {
  createCanvas(400,400)
background(0,200,230);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((x)*noiseScale/2, 80*noiseScale);
    stroke(235);
    line(x, noiseVal*200+200, x, height);
    
  }
}
