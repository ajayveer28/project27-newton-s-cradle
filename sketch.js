var roof1,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobDiameter=200;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(400,100,600,20); 
   bob1=new Bob(100,300,50)
   bob2=new Bob(200,300,50);
   bob3=new Bob(300,300,50);
   bob4=new Bob(400,300,50);
   bob5=new Bob(500,300,50);
   rope1=new Rope(bob1.body,roof1.body,-bobDiameter*1.0,0);
   rope2=new Rope(bob2.body,roof1.body,-bobDiameter*0.5,0);
   rope3=new Rope(bob3.body,roof1.body,0,0);
   rope4=new Rope(bob4.body,roof1.body,bobDiameter*0.5,0);
   rope5=new Rope(bob5.body,roof1.body,bobDiameter*1,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);

  

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display()
  rope4.display();
  rope5.display();


  drawSprites();  
 
}
function keyPressed(){
	if(keyCode=== LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:300});
		
	}
  else if (keyCode=== RIGHT_ARROW)
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:200,y:300});

 
}
