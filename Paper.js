class Paperball{
    constructor(x,y,width,height){
    var options={
        'isStatic':false,
    'restitution':1,
    'friction':0.5,
    'density':1.2
    }
    
    this.width=width
    this.height=height
    this.x=x
    this.y=y
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.image = loadImage("paper.png")
    World.add(world,this.body)
    }

    display(){
    var pos =this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop()
    }
    }