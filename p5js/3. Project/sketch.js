/*
 * Author: Archisha Bhattacharya
 * Course: CTCH 204 - Project 1
 * Description: Repeating tile pattern
 */

let colors;
let tileSize = 450;

function setup() {
  colors = [
    color("#F6CCC0"), // light pink
    color("#CE8785"), // dark pink
    color("#F2E9E2"), // antique white
    color("#E1CDAA"), // mustard
    color("#6F5651"), // brown
    color("#C1D2CA"), // light green
    color("#699EA4"), // turquoise
  ];
  createCanvas(windowWidth, windowHeight);
  noLoop(); //uncomment to stop loop and make colour static
}

function draw() {
  background(colors[0]);
  
  for (let i = 3; i < colors.length-1; i++) {
    colors[i] = color(
      128 + 128 * sin(frameCount * 0.01 + i),
      128 + 128 * sin(frameCount * 0.02 + i),
      128 + 128 * sin(frameCount * 0.03 + i)
    );
  }

  let colsToDraw = ceil(width / tileSize);
  let rowsToDraw = ceil(height / tileSize);

  // Draw a grid of tiles
  for (let row = 0; row < rowsToDraw; row++) {
    for (let col = 0; col < colsToDraw; col++) {
      let x = col * tileSize;
      let y = row * tileSize;

      drawTile(x, y);
    }
  }
}

function drawTile(tileX, tileY) {
  push();
  translate(tileX, tileY);

  // diagonal stripes
  drawTopDiagonalLine(0, 20, colors[4]);
  drawBottomDiagonalLine(0, 20, colors[4]);
  drawTopDiagonalLine(25, 20, colors[3]);
  drawBottomDiagonalLine(-25, 20, colors[3]);
  drawTopDiagonalLine(50, 20, colors[5]);
  drawBottomDiagonalLine(-50, 20, colors[5]);

  // triangle shapes in tiles
  drawTriangle(20, 160, colors[5]);
  drawTriangle(40, 160, colors[3]);
  drawTriangle(60, 160, colors[4]);
  drawTriangle(80, 160, colors[0]);

  drawTriangle(-20, -210, colors[4]);
  drawTriangle(-40, -210, colors[3]);
  drawTriangle(-60, -210, colors[5]);
  drawTriangle(-80, -210, colors[0]);

  //flower center in each corner of the tile
  cornerCircle(200, colors[2]);
  cornerCircle(150, colors[6]);
  cornerCircle(100, colors[1]);

  //draw pentagon petals
  drawPetal(0, 0, 50, 8, 130, colors[2]);
  drawPetal(450, 450, 50, 8, 130, colors[2]);

  drawPetal(0, 0, 20, 8, 130, colors[1]);
  drawPetal(450, 450, 20, 8, 130, colors[1]);

  // arcs and flower in the centre of the tile
  drawCenteredArc(10, 80);

  drawPetal(450 / 3, (2 * 450) / 3, 30, 8, 10, colors[5]);
  drawPetal((2 * 450) / 3, 450 / 3, 30, 8, 10, colors[5]);

  pop();
}

function drawCenteredArc(offset, arcHeight) {
  noStroke();
  fill(colors[4]);
  push();
  arc(450 / 2 + offset, 450 / 2 - offset, arcHeight, arcHeight, 5, 6);
  arc(450 / 2 - offset, 450 / 2 + offset, arcHeight, arcHeight, 1.9, 2.9);
  pop();
}

function cornerCircle(radius, fillColor) {
  noStroke();
  fill(fillColor);
  circle(0, 0, radius);
  circle(450, 450, radius);
}

function cornerInvertedCircle(radius, fillColor) {
  noStroke();
  fill(fillColor);
  circle(450, 0, radius);
  circle(0, 450, radius);
}

function drawPetal(
  centerX,
  centerY,
  petalSize,
  numPetals,
  flowerRadius,
  fillColor
) {
  noStroke();
  fill(fillColor);
  for (let i = 0; i < numPetals; i++) {
    let angle = (TWO_PI / numPetals) * i;
    let petalX = centerX + cos(angle) * flowerRadius;
    let petalY = centerY + sin(angle) * flowerRadius;

    push();
    translate(petalX, petalY);
    rotate(angle + PI);
    drawPentagon(0, 0, petalSize);
    pop();
  }
}

function drawPentagon(x, y, size) {
  const angleOffset = TWO_PI / 10;
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = (TWO_PI / 5) * i + angleOffset;
    let vx = x + size * cos(angle);
    let vy = y + size * sin(angle);
    vertex(vx, vy);
  }
  endShape(CLOSE);
}

function drawTopDiagonalLine(offset, lineWidth, strokeColor) {
  strokeWeight(lineWidth);
  stroke(strokeColor);
  line(450 / 2 + offset, 0, 0, 450 / 2 + offset);
}

function drawBottomDiagonalLine(offset, lineWidth, strokeColor) {
  strokeWeight(lineWidth);
  stroke(strokeColor);
  line(450, 450 / 2 - offset, 450 / 2 - offset, 450);
}

function drawTriangle(offset1, offset2, fillColor) {
  noStroke();
  fill(fillColor);
  triangle(
    450 / 2 - offset1,
    450 / 2 - offset1,
    450 / 2 - offset1,
    450 / 2 - offset2,
    450 / 2 - offset2,
    450 / 2 - offset1
  );
}
