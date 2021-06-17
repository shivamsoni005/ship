var sea,sea_animation, edges;
var ship,ship_animation;


function preload(){
  sea_animation = loadAnimation("sea.png")
 ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  }

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addAnimation("flowing",sea_animation)
  sea.scale = 0.2



  ship = createSprite(70,200,20,20);
  ship.scale = 0.1
  ship.addAnimation("ship",ship_animation)
  edges = createEdgeSprites()

}

function draw() {
  background("blue");

if(keyDown("space")){
  sea.velocityX=-2;
  sea.velocityY=0;
}

  if(sea.x < 0){
    sea.x = sea.width/10;
  }

console.log(ship.y);
 drawSprites();
}
