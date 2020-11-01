const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisionHeight=300;
var divisions

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,height,1200,20)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();  
  divisions.display();
  for(var k=0; k<=Width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  drawSprites();
}