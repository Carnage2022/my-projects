var a,b;
function setup() {
  createCanvas(800,400);
  a =createSprite(400, 200, 50, 50);
  b =createSprite(200, 400, 50, 50);
  c =createSprite(400,100,20,20);
  c.velocityY=3;
}

function draw() {
  background(255,255,255);
  
  b.x =World.mouseX;
  b.y =World.mouseY; 

  if(a.x -b.x < a.width/2 + b.width/2 && b.x-a.x <a.width/2 + b.width/2 && a.y-b.y < a.height/2 + b.height/2 && b.y-a.y < a.height/2 + b.height/2){
    a.shapeColor=("red");
    b.shapeColor=("red");
  }
  else{
    a.shapeColor=("blue");
    b.shapeColor=("blue");
  }
  if(a.x -c.x < a.width/2 + c.width/2 && c.x-a.x <a.width/2 + c.width/2 && a.y-c.y < a.height/2 + c.height/2 && c.y-a.y < a.height/2 + c.height/2){
   a.velocityX=a.velocityX*(-1);
   a.velocityY=a.velocityY*(-1);
   c.velocityX=c.velocityX*(-1);
   c.velocityY=c.velocityY*(-1);
   
  }
  drawSprites();
}