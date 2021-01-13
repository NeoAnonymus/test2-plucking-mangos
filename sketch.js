
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var boy,boyImage;
function preload()
{
	boyImage = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground1 = new Ground(600,570,1200,20);
 mango1 = new mango(200,100,20,20)
 stone1 = new stone(180,495,20,20)
 Sling = new slingshot(stone1.body,{x:173,y:495})
 boy = createSprite(180,495,50,50)
 boy.addImage(boyImage);
 boy.scale = 0.1
 tree1 = new tree(900,280,600,600)

 

	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground1.display();
  mango1.display();
  tree1.display();
  stone1.display();
  Sling.display();

  drawSprites();
 
}
function mouseDragged(){

    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

	Sling.fly()
	
	}


