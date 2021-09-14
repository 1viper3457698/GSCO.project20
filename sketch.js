var bullet
var wall,thickness
var speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  bullet=createSprite(50, 200, 30,10);
  wall=createSprite(1200,200,thickness,100);
  speed=random(55,90);
  weight=random(400,1500);
  bullet.velocityX=speed;
}

function draw() {
  background(0); 
  if (wall.x-bullet.x < (bullet.width/2+wall.width/2))
  {
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation>180)
    {
      bullet.shapeColor="white";
    }
    if(deformation>180 && deformation>100);
    {
      bullet.shapeColor="white";
    }
    if(deformation<100);
    {
      bullet.shapeColor="white";
    }

    if (hasCollied(bullet,wall)){
      bullet.velocityX=0;
      var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  
      if(damage>10);
      {
        wall.shapeColor="red";
      }

      if(damage<10);
      {
        wall.shapeColor="green";
      }   


    }
  }
  drawSprites();

}

function hasCollied(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}