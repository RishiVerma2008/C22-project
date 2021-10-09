const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball;

function setup() {
  engine =Engine.create();
  world =engine.world;

  createCanvas(400,400);
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  var ball_options = {
    restitution: 1
  }
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world, ball);
}

function draw() {
 Engine.update(engine);
  background(0);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);


}