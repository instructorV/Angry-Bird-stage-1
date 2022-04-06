class Log{
    constructor(xPos,yPos,height,angle){
        this.x = xPos
        this.y = yPos
        this.width = 20
        this.height = height
        var options = {
            'restitution':0.8,
            friction:0.9

           
        }
        this.angle = angle
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,options)
       Matter.Body.setAngle(this.body , this.angle)
        Matter.World.add(world1,this.body)
       


    }

    displayLog(){
        push()
         rectMode(CENTER)
        
         translate(this.body.position.x,this.body.position.y)
         rotate(this.body.angle)
        fill("yellow")
        rect(0,0,this.width,this.height)
        pop()
    }
}

