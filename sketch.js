let ghost = { x: 240, y: 180 };
let haunter = {x: 360 , y:200}
let score = 0;

let duration = 30;
let startTime;

function setup() {
  createCanvas(480, 360);
  startTime = millis();
}

function draw() {
  let elapsed = (millis() - startTime) / 1000;
let timeLeft = max(0, duration - elapsed);
  // background(15, 10, 25);
  // noStroke();
  // drawGhost(50,50)
  // fill(40, 30, 50);
  
  rect(0, 300, 460, 60); //light purples
    background("#3b258e");



drawGhost(ghost.x, ghost.y);
  drawhaunter(haunter.x, haunter.y);

textAlign(LEFT, TOP)
fill(255);
textSize(16);
text('Score: ' + score, 12, 26);

  
textAlign(RIGHT, TOP);
text('Time: ' + ceil(timeLeft), width - 12, 10);



  
}


function drawGhost(x, y) {
  noStroke();
  fill("#8A0303");
  ellipse(x, y, 60, 60);

  fill("#FFFFFF");
  ellipse(x - 10, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
}

function drawhaunter(x, y) {
  noStroke();
  fill("#ffffff");
  ellipse(x, y, 60, 60);

  fill("#121212");
  ellipse(x - 15, y - 8, 10);
  ellipse(x + 16, y - 8, 10);
}

function mousePressed() {
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    ghost.x += random(-50, 50);
  ghost.y += random(-80, 80);
  drawGhost(ghost.x, ghost.y);
    haunter.x += random(-50, 50);
  haunter.y += random(-80, 80);
  drawhaunter(ghost.x, ghost.y);
  } else if(dist(mouseX, mouseY, haunter.x, haunter.y) < 30) {
    score--;
    haunter.x += random(-100, 100);
  haunter.y += random(-100, 100);
  drawhaunter(ghost.x, ghost.y);
        ghost.x += random(-50, 50);
  ghost.y += random(-80, 80);
  drawGhost(ghost.x, ghost.y);
  }
}






