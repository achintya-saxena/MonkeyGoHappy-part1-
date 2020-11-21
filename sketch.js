    //declaring all the variables
    var monkey,monkey_running;
    var banana ,bananaImage
    var obstacle,obstacleImage;
    var foodGroup,obstacleGroup;
    var score;
    var ground;
    var survivalTime=0;

function preload(){

        //loading the monkey animation with alot of images so that it looks like it is           moving
        monkey_running=                   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

        //loading the banana and obstacle images
        bananaImage = loadImage("banana.png");
        obstacleImage = loadImage("obstacle.png");
       }



function setup() {
      //creating the canvas of 400 by 400
      createCanvas(400,400);

      //creating the monkey sprite with location and size and adding its image
      monkey= createSprite(80,315,20,20);
      monkey.addAnimation("moving",monkey_running);
      monkey.scale=0.1;

      //creating the ground sprite with location and size and velocity
      ground= createSprite(400,350,900,10);
      ground.velocityX=-4;

      //creating the food and obstacles groups
      obstacleGroup = new Group();
      foodGroup= new Group();

    }


function draw() {
  
      //setting the background to light blue
      background("lightblue");

      //giving infinite scroll to the ground
      ground.x=ground.width/2;

     //displaying the score with text size and colour and giving instructions to it that       how to increase it
      textSize(20);
      fill("black");
      survivalTime=Math.ceil(frameCount/frameRate())
      text("Survival Time:" + survivalTime,100,50);

      //making the monkey jump when spacebar is pressed but it will not jump higher than       y location 225
      if(keyDown("space")&& monkey.y >= 225 ) {
      monkey.velocityY=-12;
      }
      //giving the monkey a gravity and making it collide with the ground
      monkey.velocityY=monkey.velocityY+0.8;
      monkey.collide(ground);

      //calling the obstacle and food functions
      spawnObstacles();
      spawnFood();

     //drawing all the sprites
     drawSprites();
 
        }

//function to spawn the obstacles
function spawnObstacles() {
  
     //obstacles will get created at multiples of 300
      if(frameCount%300===0) {
      
        //creating the obstacle sprite,adding its Image with size and giving it a              velocity and lifetime
        obstacle=createSprite(375,330,20,20);
        obstacle.addAnimation("rocks",obstacleImage);
        obstacle.scale=0.1;
        obstacle.lifetime=200;
        obstacle.velocityX=-7;

        //adding the obstacles in the obstacle group
        obstacleGroup.add(obstacle);
      }
      }

//function to spawn the bananas/food
function spawnFood() {
  
      //banana will get created at multiples of 80
      if(frameCount%80===0) {

        //creating rhe banana sprite,adding its image with size,giving it a velocity and         lifetime
        banana=createSprite(375,330,20,20);
        banana.addImage("yum",bananaImage);
        banana.scale=0.1; 
        banana.lifetime=300;
        banana.velocityX=-5;

        //creating the banana at random y positions between 120 and 200
        banana.y =Math.round(random(50,200));

        //adding the banana in the food group
        foodGroup.add(banana);
      }
      }