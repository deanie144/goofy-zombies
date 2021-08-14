const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = [];
var bridge;
var ground;
var jointLink;
var wall1;
var wall2;
var engine;
var world;
var jointPoint;
var jointLink;




function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  bridge = new Bridge(15, {x: width / 2 - 400, y: height / 2 });
   ground = new Base(100,500,200,20);
  wall1=new Base(200,180,300,200);
  wall2=new Base(50, 180, 300, 200);
  jointPoint=new Base(150, 300, 200, 100);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
   
  for(var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show()
  ground.show();
  
  wall1.show()
  wall2.show()

  for(var stone of stones) {
    stone.show()
  }

}
