var PLAY=1;
var END=0;
var gameState=1;

var sword,swordImage;
var fruit1,fruit2,fruit3,fruit4;
var monster1,monster2;
var monsterImage,gameoverImage;
var fruitGroup,enemyGroup;
var gameOverSound,cutSound;

var gameover;
var score=0;


function preload() {
  
  //load images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png");
  gameOverSound = loadSound("gameover.mp3");
  cutSound = loadSound("knifeSwooshSound.mp3");
  
}


function setup() {
  
  createCanvas(600,600);
  
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  sword.setCollider("rectangle",0,0,20,100);
  sword.debug = false;
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  score=0;
}


function draw() {
  background("lightGreen");
  
  if(gameState === PLAY){
 
  Enemys();
  fruits();
  fruits1();
  enemys1();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+2;
    cutSound.play();
   }
     
     else if(enemyGroup.isTouching(sword)) {
      
      gameState = END;
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach=(0);
      enemyGroup.setVelocityXEach=(0);
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;
      gameOverSound.play();
      

    }
    
  }
  
  drawSprites();
  
  text("Score : " + score,500,50);
  
}


function fruits() {
  
  if(World.frameCount%80===0){ 
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   
    r=Math.round(random(1,4)); 

     if(r == 1) {
      fruit.addImage(fruit1);
     } 
     else if (r == 2){
      fruit.addImage(fruit2)
     } 
     else if (r == 3){
      fruit.addImage(fruit3)
     } 
     else if (r == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-(9+score/4);
     fruit.setlifetime=200;

     fruitGroup.add(fruit);
  }
  
}
  

function Enemys() {
  
   if(World.frameCount%200 === 0) { 
     
     monster=createSprite(600,200,20,20);
     monster.addImage("moving", monsterImage1);
     monster.y=Math.round(random(25,275)); 
     monster.velocityX=-(10+score/10);
     monster.setlifetime=50;

     enemyGroup.add(monster);  

   }
  
   if(World.frameCount%200 === 0) {
     
     monster2=createSprite(800,200,20,20);
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.velocityX=-(10+score/10);
     monster2.setlifetime=50;

     enemyGroup.add(monster2);
     
   }
   
}

 function fruits1(){
  if(World.frameCount%80 === 0){
    fruit=createSprite(100,400,20,20);
    fruit.scale=0.2;
  
     r=Math.round(random(1,4));
    
    if (r == 1) {
      fruit.addImage(fruit1);
      } 
        else if (r == 2) {
      fruit.addImage(fruit2);
      } 
        else if (r == 3) {
      fruit.addImage(fruit3);
      } 
        else if (r == 4) {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,340));
    fruit.velocityX= (9+(score/10));
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}

function enemys1(){
  if(World.frameCount%200 === 0) { 
     
     monster=createSprite(100,200,20,20);
     monster.addImage("moving", monsterImage1);
     monster.y=Math.round(random(25,275)); 
     monster.velocityX=(10+score/10);
     monster.setlifetime=50;

     enemyGroup.add(monster);  

   }
  
   if(World.frameCount%200 === 0) {
     
     monster2=createSprite(200,200,20,20);
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.velocityX=(10+score/10);
     monster2.setlifetime=50;

     enemyGroup.add(monster2);
     
   }
   
}
  

