/*
 * Author: Archisha Bhattacharya
 * Course: CTCH 204 - Assignment 2
 * Description: The following code draws a still life image of a green bottle, red cup and an orange.
 * Reference: Link to original image - https://www.artstation.com/artwork/lx6DO5
 */

// setup function to create canvas
function setup() {
  createCanvas(630, 800);
}

//function to draw different components on the canvas
function draw() {
  background(220);
  noStroke();

  // Add shadow beneath all the objects
  fill(0, 30);
  ellipse(400, 720, 450, 70);

  // Green bottle
  // Draw the bottle neck - the loop is used to draw multiple lines in a gradient effect
  for (let i = 0; i < 50; i++) {
    let inter = map(i, 0, 60, 0, 1);
    let c = lerpColor(color(9, 121, 105), color(0, 0, 0, 50), inter);
    stroke(c);
    line(335 + i, 100, 335 + i, 300);
  }

  //remove previously specified stroke
  noStroke();

  //Add black label over the bottle neck
  fill(0, 0, 0);
  rect(325, 110, 68, 100);
  rect(320, 110, 78, 30);

  // Draw the bottle body in a similar gradient effect as the bottle nech
  for (let i = 0; i < 120; i++) {
    let inter = map(i, 0, 120, 0, 1);
    let c = lerpColor(color(9, 121, 105), color(0, 0, 0, 50), inter);
    stroke(c);
    line(300 + i, 250, 300 + i, 700);
  }
  noStroke();

  // Red cup
  // Draw the cup handle using an arc
  stroke(139, 0, 0);
  strokeWeight(20);
  noFill();
  arc(170, 570, 180, 170, 0, PI + PI, OPEN);

  // draw the cup body using a simlar gradient effect as the bottle
  for (let i = 0; i < 170; i++) {
    let inter = map(i, 0, 170, 0, 1);
    let c = lerpColor(color(139, 0, 0), color(0, 0, 0, 50), inter);
    stroke(c);
    line(170 + i, 430, 170 + i, 710);
  }
  noStroke();

  // Orange
  // Draw multiple ellipses using a gradient from light to dark orange to give it a spherical appearance
  for (let r = 95; r > 0; r -= 2) {
    let inter = map(r, 0, 95, 0, 1);
    let c = lerpColor(color(255, 140, 0), color(255, 205, 0), inter);
    fill(c);
    ellipse(450, 630, r * 2, r * 2);
  }
}
