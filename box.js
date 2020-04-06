class Box
{
    constructor(x,y,w,h)
    {
        this.body=Matter.Bodies.rectangle(x,y,w,h)
        Matter.World.add(world,this.body)
        this.w=w
        this.h=h
    }

display()
{

    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
}
}