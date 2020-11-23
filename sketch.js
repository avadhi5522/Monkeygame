var monkey, monkey_running;
var ground,invisibleground;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;

function preload() {

  //loading Animation for monkey
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  //loading Image for banana and obstacles
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  }

function setup() {
  createCanvas(400, 400);
  
  // making monkey
  monkey = createSprite(50, 310, 100, 100);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  //making ground and scrooling ground
  ground = createSprite (100,378,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0;

}

function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil (frameCount/frameRate());
  text("Survival Time : " + survivalTime,150,25);
  
  // making monkey jump by space key
  if (keyDown("space") && monkey.y >= 100){
      monkey.velocityY = -12;
    }
  
  // adding gravity to monkey
  monkey.velocityY = monkey.velocityY + 0.5
  //collinding monkey to ground
  monkey.collide(ground);
  
  if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

  // calling function for bananas and fruit
  Food();
  obstacles();
  
  drawSprites();
}

function Food () {
  if(World.frameCount % 80 === 0){
    var food = createSprite (400,80,20,20);
     food.y = Math.round(random(120,200));
     food.addImage(bananaImage);
     food.scale = 0.1;
     food.velocityX = -6;
    
     food.lifetime = 150;
    
     bananaGroup.add(food);
                                 
  }
}

function obstacles (){
  if(World.frameCount % 300 === 0){
    var obstacle = createSprite (400,335,40,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.2;
     obstacle.velocityX = -8;
     obstacle.lifetime = 100;
     obstacleGroup.add(obstacle);
  }
}
