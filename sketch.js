
function setup()
{
    gs=0
    boxes=[]
 createCanvas(400,400)
 engine=Matter.Engine.create();
 world=engine.world;
 var o=
 
 {
     isStatic:true
 }
 ground=Matter.Bodies.rectangle(200,390,400,30,o);
 Matter.World.add(world,ground)
 gslider=createSlider(1,10,3);

}
function draw()
{
   background(0)
    
   engine.world.gravity.y=gslider.value();
   Matter.Engine.update(engine)
   rectMode(CENTER)
   rect(ground.position.x,ground.position.y,400,30)
   if(gs==1)
   {
       for(var i=0;i<boxes.length;i++)
       {
          boxes[i].display()
       }
   }
}
function mousePressed()
{
    console.log(2)
       
    box=new Box(mouseX,mouseY,Math.round(random(5,10)),Math.round(random(5,10)))
    boxes.push(box)
    gs=1
}