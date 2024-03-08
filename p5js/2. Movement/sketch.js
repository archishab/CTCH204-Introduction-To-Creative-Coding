/*
 * Author: Archisha Bhattacharya
 * Course: CTCH 204 - Assignment 3
 * Description: The following code draws a still life image of a green bottle, red cup and an orange and movement such as shifting gradient, moving shadow and steam on the cup
 * Reference: Link to original image - https://www.artstation.com/artwork/lx6DO5
 */

let shadowX = 315;
let shadowSpeed = 1;

// setup function to create canvas
function setup() {
  createCanvas(630, 800);
}

//function to draw different components on the canvas
function draw() {
  // Gradient's starting point based on time
  // using millis() fo a smoother shift of the gradient, using second() was not as smooth
  let gradientStart = (millis() + shadowX * 10) / 1000; // the denominator adjusts the speed, higher number for lower speed

  background(220);
  noStroke();

  // Add shadow beneath all the objects
  moveShadow();
  fill(0, 30);
  ellipse(shadowX, 720, 500, 100);

  strokeWeight(20);

  // Green bottle
  // Draw narrow bottle neck
  drawGradientBottle(335, 100, 50, 200, gradientStart);
  // Draw wider bottle body
  drawGradientBottle(300, 250, 120, 450, gradientStart);
  //Add black label over bottle neck
  fill(0, 0, 0);
  rect(325, 110, 68, 100);
  rect(320, 110, 78, 30);

  // Red cup
  // Draw cup handle
  drawGradientCupHandle(170, 570, 180, 170, 0, PI + PI, gradientStart);
  // Draw cup body
  drawGradientCup(170, 430, 170, 280, gradientStart);
  // Draw steam on top of the cup
  drawSteam(200, 425, 50, 80, 5, 10, gradientStart);
  drawSteam(255, 425, 50, 80, 5, 10, gradientStart);
  drawSteam(310, 425, 50, 80, 5, 10, gradientStart);

  // Orange
  // Draw the orange
  drawGradientOrange(450, 630, 90, gradientStart);
}

// function to move the shadow
function moveShadow() {
  shadowX += shadowSpeed;

  // Change the direction of the shadow when it reaches the canvas edges
  if (shadowX >= width - 250 || shadowX <= 250) {
    shadowSpeed *= -1; // Reverse the direction
  }
}

//function to draw a rectangle with gradient from black to green using a specific width and specifying (x, y) coordinate
function drawGradientBottle(x, y, w, h, offset) {
  for (let i = 0; i < w; i++) {
    let c = lerpColor(
      color(9, 121, 105),
      color(0, 0, 0, 50),
      (sin(offset + (i / w) * PI) + 1) / 2
    );
    stroke(c);
    line(x + i, y, x + i, y + h);
  }
  noStroke();
}

//function to draw an arc with gradient from black to red 
function drawGradientCupHandle(x, y, w, h, startAngle, stopAngle, offset) {
  let numLines = 200;
  let angleStep = (stopAngle - startAngle) / numLines;

  for (let i = 0; i < numLines; i++) {
    let angle = startAngle + i * angleStep; 

    let arcLength = (i / numLines) * (stopAngle - startAngle);
    let c = lerpColor(
      color(139, 0, 0),
      color(0, 0, 0, 50),
      (sin(offset + (i / numLines) * PI) + 1) / 2
    );
    stroke(c);
    noFill();
    arc(x, y, w, h, angle, angle + arcLength, OPEN);
  }
  noStroke();
}

//function to draw a rectangle with gradient from black to red using a specific width and specifying (x, y) coordinate
function drawGradientCup(x, y, w, h, offset) {
  for (let i = 0; i < w; i++) {
    let c = lerpColor(
      color(139, 0, 0),
      color(0, 0, 0, 50),
      (sin(offset + (i / w) * PI) + 1) / 2
    );
    stroke(c);
    line(x + i, y, x + i, y + h);
  }
  noStroke();
}

// function to draw steam on top of the cup
function drawSteam(x, y, w, h, numLines, spacing, offset) {
  for (let i = 0; i < numLines; i++) {
    let steamHeight = map(i, 0, numLines - 1, 0, h);
    let c = lerpColor(
      color(255, 255, 255, 200),
      color(255, 255, 255, 50),
      (sin(offset + (1 - i / (numLines - 1)) * PI) + 1) / 2
    );
    fill(c);
    noStroke();
    ellipse(x, y - steamHeight, w, steamHeight);
    y -= spacing;
  }
}

//function to draw a circle with gradient from black to orange using a specific radius
function drawGradientOrange(x, y, r, offset) {
  let numRectangles = 500;
  let rectWidth = (r * 2) / numRectangles;

  for (let i = 0; i < numRectangles; i++) {
    let rectX = x - r + i * rectWidth;

    let c = lerpColor(
      color(255, 140, 0),
      color(0, 0, 0, 50),
      (sin(offset + (i / numRectangles) * PI) + 1) / 2
    );

    fill(c);
    stroke(c);
    strokeWeight(5);

    let rectY = y - sqrt(sq(r) - sq(rectX - x));
    let rectHeight = 2 * sqrt(sq(r) - sq(rectX - x));

    rect(rectX, rectY, rectWidth, rectHeight);
  }
}
