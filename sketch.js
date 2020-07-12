// global variables
var car,weight,speed,reset,deformation
var wall,wall1,wall2,wall3,wall4


function setup() {
  createCanvas(1525,400);
  // creating car
 car=createSprite(50,200,50,20)
 // creating walls
 wall=createSprite(1400,200,20,height/2)
 wall.shapeColor="brown"
 wall1=createSprite(825,290,1350,20)
 wall1.shapeColor="brown" 
 wall2=createSprite(825,110,1350,20)
 wall2.shapeColor="brown" 
 wall3=createSprite(150,110,20,50)
 wall3.shapeColor="brown"
 wall4=createSprite(150,290,20,50)
 wall4.shapeColor="brown"
 // setting speed , weight , reset
 speed=random(55,90)
 weight=random(400,1500)
 reset=createSprite(width/2,380,70,50)
 reset.shapeColor=" gold"
}

function draw() {
  background(0,0,0);  
  //setting car velocity and color
  car .velocityX=speed
  car.shapeColor="grey"
 // writing reset text
  textFont('Georgia');
  textSize(16);
  text("reset",width/2-15,350)
 // writing text command 
  if(deformation>180){
    textFont('Georgia');
    textSize(16);
    text("car's strength is extremely weak ",750,80)
  }
  if(deformation<180 && deformation>100){
    textFont('Georgia');
    textSize(16);
    text("car's strength is moderate ",750,80)
  }
  if(deformation<100){
    textFont('Georgia');
    textSize(16);
    text("car's strength is strong ",750,80)
  }
 // writing color function
  main()
 // writing reset function similar to main function
  if(mouseDown() && car.x===1380){
    car.x=200
    car.velocityX=speed
    speed=random(55,90)
    weight=random(400,1500)
    deformation=0.5 *weight*speed*speed/22509
    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
    if(deformation<180){
      car.shapeColor=color(230,230,0)
    
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
  }


  drawSprites();
}

function main(){
  if(car.isTouching(wall)){
    car.velocityX=0
    car.x=1380
     deformation=0.5 *weight*speed*speed/22509
    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
    if(deformation<180){
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
  }

}