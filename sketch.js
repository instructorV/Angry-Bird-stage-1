
var engine,world1,ground, groundOptions,ball,ballOptions,box1,box2,box10,box11
var box12,log1, box3,box4,log2,box5,log3,log4
function setup() {
  createCanvas(1200,600);
  engine = Matter.Engine.create()
  world1 = engine.world

 groundOptions = {
   isStatic:true
 }

  ground = Matter.Bodies.rectangle(600,570,1200,40,groundOptions)
  Matter.World.add(world1,ground)

 

box1 = new Box(700,450,70,70)
box2 = new Box(1000,450,70,70);
log1 = new Log(850,380,380,PI/2)

box3 = new Box(700,330,70,70)
box4 = new Box(1000,330,70,70)
log2 = new Log(850,270,380,PI/2)

box5 = new Box(850,150,70,70)

log3 = new Log(770,150,170,PI/6)
log4 = new Log(930,150,170,-PI/6)

 
}

function draw() {
  background("black");  
  Matter.Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,40)

box1.displayBox()
box2.displayBox()

log1.displayLog()

box3.displayBox()
box4.displayBox()

log2.displayLog()

box5.displayBox()
log3.displayLog()
log4.displayLog()



}