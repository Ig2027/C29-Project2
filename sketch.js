const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope
var fruit
var fruit_con
var bg_image, food, bunnyimage
var bunny
var cutbutton

function preload(){
  bg_image= loadImage("background.png")
  food= loadImage("melon.png")
  bunnyimage= loadImage("Rabbit-01.png")
}

function setup() {
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  rope = new Rope(6,{x:250, y:20});
  ground = new Ground(250,690,600,20);
  fruit = Bodies.circle(250,100,25);
  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  bunny = createSprite(225,600)
  bunny.addImage(bunnyimage)
  bunny.scale = 0.2

  cutbutton= createImg("cut_btn.png");
  cutbutton.position(225, 20)
  cutbutton.size(50, 60)
  cutbutton.mouseClicked(drop)
}

function draw() {
  background(51);
  image(bg_image, 0, 0, 500, 700)
  ground.show();
  rope.show();
  Engine.update(engine);
  
  image(food, fruit.position.x, fruit.position.y, 80, 80)

 drawSprites()
   
}

function drop(){
  rope.break();
  fruit_con.detach()
  fruit_con= null

}