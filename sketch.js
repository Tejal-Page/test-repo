//C22- INTRO TO PHYSICS ENGINE 
//C23  CREATE BOX, GROUND CLASS
//C24- CREATE PIG(X,Y), LOG(X,Y,H,ANG), BIRD(X,Y MOVE WITH MOUSE) CLASS
//C25-ADDING INHERITANCE AND IMAGES, ADD BACKGROUND IMAGE
//C26- CREATING PLATFORM AND GITHUB
//C27- CONSTRAINT- BIRD AND POINT
//C28- CONTRAINT- BIRD AND POINT AND MOUSE DRAGGED, MOUSE REALEASED.
//C20- CATAPULT AND COLOR PICKER, CATAPULT TO ADD TO CHAIN CLASS
//C30- VISIBILITY AND TINTING TO CRRATE VANISHING PIGS


//NAMESPACE: NICK NAMES TO THE MODULES OF MATTER.JS
const World= Matter.World;
const Engine= Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

//GLOBAL VARIABLES
var engine, world;
var ground1;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4,log5;
var pig1,pig2,pig3,pig4;
var bird;
var bgImage;
var chain1;
//PRELOAD FOR BACKGROUND
function preload(){
bgImage = loadImage("sprites/bg.png");
}
//SETUP- CREATING YOUR WORLD, ENGINE, BODIES
function setup(){
createCanvas(1400,600);
//CREATING YOUR ENGINE AND WORLD
engine = Engine.create();
world= engine.world;
//GROUND
ground1 = new Ground(700,575,1400,50);
//BOXES
box1= new Box(150,50,100,100)
box2= new Box(150,150,100,100)
box3= new Box(150,250,100,100)
box4= new Box(150,350,100,100)
box5= new Box(150,450,100,100)
//LOGS
log1= new Log(400,540,200,PI/2);
log2= new Log(290,440,200,PI);
log3= new Log(510,440,200,PI);
log4= new Log(400,340,300,PI/2);
log5= new Log(200,200,200,PI/2);//created for chain
//PIGS
pig1 = new Pig(800,500);
pig2 = new Pig(800,400);
pig3 = new Pig(800,300);
pig4 = new Pig(800,200);

//BIRD
bird= new Bird(100,100);

//ROPE
//chain1 = new Chain(bird.body , log5.body)
chain1 = new Chain(bird.body , {x:330,y:180});

}

//DRAW- ALL INSTRUCTIONS
function draw(){
//background("lightblue");
background(bgImage);
Engine.update(engine);
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
log1.display();
log2.display();
log3.display();
log4.display();
pig1.display();
pig2.display();
pig3.display();
pig4.display();
bird.display();

log5.display();
chain1.display();
}

//EVENT BASED FUNCTION
//C28
/*WE WANT THE BIRD TO MOVE WHEN WE DRAG THE MOUSE, IT HAS TO MOVE WITH 
THE MOUSE AND GET RRELEASED WHEN WE RELEASE THE MOUSE*/

function mouseDragged(){
/* WEHN WE DRAG THE MOUSE WE SET IT'S POSITION TO MOVE WITH THE MOUSE*/

Matter.Body.setPosition(bird.body, {x:mouseX, y: mouseY});

}
 
function mouseReleased(){


chain1.fly();
}
