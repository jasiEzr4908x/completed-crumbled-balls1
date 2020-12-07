
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,550,1600,20)

	dustbin1=new Dustbin(1000,465,150,150)
	

	paper=new Paperball(100,500,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  

  ground.display()
 
  paper.display()
  dustbin1.display()



 
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1100,y:100})
		
		}

}

