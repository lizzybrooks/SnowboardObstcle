let noiseScale=0.02;

function draw() {
background(0,200,230);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(235);
    line(x, mouseY+noiseVal*80, x, height);
  }
}
