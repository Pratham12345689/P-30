const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  b1=new Block(300,280,30,40);
  b2=new Block(330,280,30,40);
  b3=new Block(360,280,30,40);
  b4=new Block(390,280,30,40);
  b5=new Block(420,280,30,40);
  b6=new Block(450,280,30,40);
  b7=new Block(480,280,30,40);
 
  
  b8=new Block(330,240,30,40);
  b9=new Block(360,240,30,40);
  b10=new Block(390,240,30,40);
  b11=new Block(420,240,30,40);
  b12=new Block(450,240,30,40);

  b13=new Block(360,200,30,40);
  b14=new Block(390,200,30,40);
  b15=new Block(420,200,30,40);


  b16=new Block(680,180,30,40);
  b17=new Block(650,180,30,40);
  b18=new Block(710,180,30,40);
  b19=new Block(665,160,30,40);
  b20=new Block(695,160,30,40);
  b21=new Block(680,120,30,40);
 




  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  fill("red");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("blue");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
fill("lime");
b13.display();
b14.display();
b15.display();
fill("purple");
b16.display();
b17.display();
b18.display();
fill("skyblue")
b19.display();
b20.display();
b21.display();

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}