var bola;



function setup() {
  createCanvas(2000,1000);
bola=createSprite(100,100,30,30);




}

function draw() 
{
  background(30);

if (keyIsDown(LEFT_ARROW)){
  bola.x=bola.x-5;
}
if (keyIsDown(RIGHT_ARROW)){
  bola.x=bola.x+5;
}
if (keyIsDown(UP_ARROW)){
  bola.y=bola.y-5;
}
  if (keyIsDown(DOWN_ARROW)){
    bola.y=bola.y+5;
}

  drawSprites();
}




