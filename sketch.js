var thickness,wall;
var speed,bullet,weight;





function setup() {

  createCanvas(1200,400);

  thickness=random(22,83);
  
  speed=random(223,321);
  weight=random(30,52);
 bullet=createSprite(50,200,50,10);
 bullet.velocityX=speed;

 wall=createSprite(1000,200,thickness,height/2);
wall.shapeColor="green";


 
}

function draw() {
  background("lightblue"); 

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<0){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true
  }
return false
}