class Box{
    constructor(xPos,yPos,rectWidth,rectHeight){
        this.x = xPos
        this.y = yPos
        this.width = rectWidth
        this.height = rectHeight
        this.options = {
            restitution:0.8,
            friction:0.9
           
        }
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,this.options)
        Matter.World.add(world1,this.body)
    }

    displayBox(){
        rectMode(CENTER)
        push()
        rotate(this.body.angle)
        translate(this.body.position.x,this.body.position.y)
        fill("orange")
        rect(0,0,this.width,this.height)
        pop()
    }

    

}