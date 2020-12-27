const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball1,ball2;
var ball3,ball4;
var ballB,ballB2;
var ball5,ball6;
var ball7,ball8;
var ball9,ball10;
var ball11,ball12;
var rect1,ground,rect2;
var round,round2;
var score = 0 ;
 
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  
// ball bodies
ball1 = new Ball(250,110);
ball2 = new Ball(250,180);
ball3 = new Ball(250,250);
ball4 = new Ball(250,320);
ballB = new Ball(345,475)

ball5 = new Ball(440,110);
ball6 = new Ball(440,180);
ball7 = new Ball(440,250);
ball8 = new Ball(440,320);
ballB2 = new Ball(520,475);

ball9 = new Ball(630,110);
ball10 = new Ball(630,180);
ball11 = new Ball(630,250);
ball12 = new Ball(630,320);


//rect bodies
rect1 = new Rect(90,415,20,350);
ground = new Rect(450,580,700,20);
rect2 = new Rect(810,415,20,350);

//big bodies
round = new Big(340,50);
round2 = new Big(530,30);

 Engine.run(engine);
}

function draw() {
  background("black");  
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ballB.display();
 ball5.display(); 
 ball6.display();
 ball7.display();
 ball8.display();
 ballB2.display();
 ball9.display();
 ball10.display();
 ball11.display();
 ball12.display();
 rect1.display();
 ground.display();
 rect2.display();
 round.display();
 round2.display();
 //score
 round.score();
 round2.score();
 text("score : "+score,700,50)


 
  drawSprites();
}
