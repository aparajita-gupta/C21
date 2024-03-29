var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500)

  car = createSprite(50,150,50,50);
  car.shapeColor = "blue";
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
}
function draw() {
  background(255,255,255);  

if(wall.x - car.x < (car.width + wall.width)/2)
{
  car.velocityX = 0;
  var deformation = (0.5 * weight * speed * speed)/22509;
  if(deformation > 180)
  { 
    wall.shapeColor = color(255,0,0);
  } 
  else{ 
    wall.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}