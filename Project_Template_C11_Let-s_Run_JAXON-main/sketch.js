var bg;
var background;
var boi, path;
var running, pathImg;

var edge1, edge2;

function preload(){
  //pre-load images
  running = loadAnimation('Runner-1.png', 'Runner-2.png');

  pathImg = loadImage('path.png');

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);

  boi = createSprite(280, 340, 50, 50);
  boi.addAnimation('Humanrunning', running);
  boi.scale = 0.1;

  edge1 = createSprite(-10, 0, 100, 800);
  edge2 = createSprite(410, 0, 100, 800);

  edge1.visible = false;
  edge2.visible = false;
 
  


  
  

}

function draw() {
  background(0);
  path.velocityY = -6;
  console.log(boi.x);
  

  if(path.y < 0){
    path.y = 490;
  }
  
  boi.x = World.mouseX;
  boi.collide(edge1);
  boi.collide(edge2);


  

  console.log(frameCount);
  boi.bounceOff(edge1);
 

  drawSprites();
  
}


