//creating all global variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  //loading all the animation and images requires
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  //creating sprite for monkey, giving animation, and scale
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating sprite for ground, giving velocity, and dividing by twi to make it look infinity
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  //adding banana and obstacle to groups
  banana= new Group(); 
  obstacleGroup= new Group(); 
}

function draw() {
  //clearing the screen
  background("lightgreen");
  
  //making the ground never ending
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  //giving function for jump
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  //gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //colliding monkey with ground
  monkey.collide(ground);
  
  //giving survival time
  var survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  drawSprites();
  
  //calling food and obstacle functions
  food();
  obstacle();
}

//food function
function food(){
  //spawning a banana every 80 frames
 if (frameCount % 80 === 0){
   var banana = createSprite(410,165,10,40);
   banana.velocityX = -4;
   
   //giving random y velocity to banana
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   
   banana.lifetime = 150;
   banana.scale = 0.1;
 }
}

//obstacle frunction
function obstacle(){
  //making an obstacle appear every 300 frames
 if (frameCount % 300 === 0){
   var obstacle = createSprite(410,325,10,40);
   obstacle.velocityX = -4;
   
   obstacle.addImage(obstacleImage);
   
   obstacle.lifetime = 150;
   obstacle.scale = 0.15;
 }
}
