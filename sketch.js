var doreamon,doreamon_img;                 
var ground;
var doracake;

 var PLAY = 1;
 var END = 2;
 var gameState = 1;

 var score = 0;

function preload()
{     
  bg= loadImage("bg1.png");
  doreamon_img = loadAnimation("doreamon1.png"); 
  ground_img = loadImage("ground.png");
  doracake_img = loadImage("food.png");
  mouse_img = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png","mouse5.png")
}

function setup() {
 createCanvas(displayWidth,displayHeight);
   
 background= createSprite(0,-90,displayWidth,displayHeight);
 background.velocityX=-7;
 background.addImage(bg);
 
 invisibleground = createSprite(0, displayHeight-450, 1000, 20);
 invisibleground.visible = false;
}


function draw() {
  score = score + Math.round(getFrameRate()/60);
   background.velocityX = -(6 + 3*score/100);

if(gameState=== 1)
{
 if(background.x < 0)
 {
   background.x = background.width/2;
 }
  
 if(keyCode === 32 ) 
 {
  doreamon.velocityY = -10; 
}
 spawnmouse();
 doracakes();
 doreamonrun();
}
drawSprites();
textSize(20);
fill("black");
text("SCORE : " + score , 1200,25);
}


function doracakes()
{ 
   if(frameCount %60 === 0)
   {
    doracake = createSprite(800,300,20,20);
    doracake.y = Math.round(random(300,500));
    doracake.addImage(doracake_img);
    doracake.velocityX = -3;
    doracake.scale = 0.2;
   }
}

function spawnmouse()
{ 
   if(frameCount%80 === 0)
   {
    mice = createSprite(600,500,20,20);
    mice.x = Math.round(random(500,1000));
    mice.addAnimation("mouse image" ,mouse_img);
    mice.velocityX = -3;
    mice.scale = 0.5;
   }
}

function doreamonrun()
{
  doreamon = createSprite(120, 380, 50, 50);
  doreamon.addAnimation("doreamon", doreamon_img);
  doreamon.scale = 0.9;
  doreamon.debug = true;
  doreamon.collide(invisibleground);
 
}