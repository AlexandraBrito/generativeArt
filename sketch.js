const xSpacing = 50;
const ySpacing = 50;
let colors = [];

function setup() {
  createCanvas(400, 500);
  background(255);
  for (var i = 0; i < 50; i++) {
    var newColor = color(random(360), random(100), random(100), random(50, 100));
    colors.push(newColor); 
  }

  for (var i = 0; i < 20; i++) {
    var newColor = color(random(250), random(100), random(100), random(100, 150));
    colors.push(newColor); 
  }

}

function draw() {

  noStroke();
  for (let y = 0; y < height; y += ySpacing) {
    for (let x = 0; x < width; x += xSpacing) {
      let color = random(colors);

      if (color === undefined) {
        color = 'white';
      }
      fill(color);
      circle(x + xSpacing / 2, y + ySpacing / 2, Math.min(xSpacing, ySpacing) * .8);
    }
  }

  noLoop();
}
