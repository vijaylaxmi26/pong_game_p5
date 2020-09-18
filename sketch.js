var player,ball,ai;

var playerScore=0;
var AIScore=0;

var dots = [];
var dSize = 10;
var txtSize = 30;

var go= false;

var soud;

/*function preload() {
     soud = loadSound("ball.mp3");
}
*/

function setup() {
  // put setup code here
let cnv = createCanvas(800, 500);
cnv.position(350, 50);

   player = new Player();
   ball = new Ball();
   ai = new AI();

  for(let y=dSize/2; y<height; y+=dSize*2){
    dots.push(createVector(width/2-dSize/2, y));
  }
}

function draw()
{
  background("#008000");

if(go){

  ball.update();
  ball.edges();
  player.update();
  ai.update();
  ball.score();

}


  noStroke();
  fill(255, 100);
  drawSquares();

  ball.show();
  player.show();
  ai.show();

  drawScores();
}


function drawScores() {
  let x1 = width/4;
  let x2 = width*3/4;
  let y = txtSize*1.5;

  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(txtSize);
  text(playerScore, x1, y);
  text(AIScore, x2, y);
}

function drawSquares() {
     for (let i = 0; i < dots.length; i++) {
       let x = dots[i].x;
       let y = dots[i].y;

       rect(x, y, dSize, dSize);
     }
}

function keyPressed(){
  go =true;
  if(key == 'W' || keyCode==UP_ARROW){
    player.up();
  }
  else if (key == 'S' || keyCode == DOWN_ARROW) {
    player.down();
  }
}

function keyReleased(){
  if((key == 'W' || keyCode==UP_ARROW) || (key == 'S' || keyCode == DOWN_ARROW))
  {
     player.stp();
  }
}
