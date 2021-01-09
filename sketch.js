const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;



var ground;

var particle = [];
var plinko = [];
var division = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(230,650,500,20);
  
  for (var k = 0; k <=width; k = k + 80){
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  
    }
for (var i = 40; i<=width; i=i+50) {
 plinko.push(new Plinko(i,75,10));
}

for (var i = 40; i<=width-10; i=i+50) {
  plinko.push(new Plinko(i,175,10));
}

for (var i = 40; i<=width; i=i+50) {
 plinko.push(new Plinko(i,275,10));
}

for (var i = 40; i<=width-10; i=i+50) {
  plinko.push(new Plinko(i,375,10));
}

if(frameCount%60===0){
particle.push(new Particle(random(width/2-10, width/2+10), 10, 10));

}
}

function draw() {
  background("black");  
  Engine.update(engine);
  
  for (var j = 0; j< particle.length; j++) {
    particle[j].display();
  }

  for (var k = 0; k< division.length; k++) {
    division[k].display();
  }

  for (var i = 0; i< plinko.length; i++) {
    plinko[i].display();
  }

  ground.display();
  drawSprites();
}