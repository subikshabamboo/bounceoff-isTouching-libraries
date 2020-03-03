  var movingRect ,fixedRect;


  function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600,400,50,80);
  movingRect.shapeColor = "violet";
  fixedRect = createSprite(600,0,80,50);
  fixedRect.shapeColor = "violet";
 
}

  function draw() {
  background(255,255,255); 

  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  
   if(isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}

else {

  movingRect.shapeColor = "violet";
  fixedRect.shapeColor = "violet";


}


drawSprites();
}


      
  
    
