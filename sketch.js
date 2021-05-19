
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,bin,base;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ball = new Paper(56,46,55,55);
	 bin = new dustbin(120,680,20,30);
	 base = new ground(20,800,10,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  
  drawSprites();


}

;
 

function keyPressesd(){
	if (keycode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position(x=85,y=-85))
	}
}



