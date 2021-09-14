var car
var wall,thickness
var speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  car=createSprite(50, 200, 50,30);
  wall=createSprite(1200,200,thickness,100);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(0); 
  if (wall.x-car.x < (car.width/2+wall.width/2))
  {
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation>180)
    {
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>80);
    {
      car.shapeColor="white";
      wall.shapeColor="yellow";
    }
    if(deformation<80);
    {
      car.shapeColor="white";
      wall.shapeColor="green";
    }

    
  }
  drawSprites();

}

