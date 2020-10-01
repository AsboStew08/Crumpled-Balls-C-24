class Dustbin{
    constructor(x,y){
        this.x = x
        this.y = y
        this.dwidth = 200;
        this.dheight = 100;
        this.thickness= 200;
        this.angle = 0;
        this.bottom = Bodies.rectangle(this.x,this.y, this.dwidth,this.thickness,{isStatic: true});
        this.right = Bodies.rectangle(this.x + this.dwidth/2 + this.y-dheight/2,this.thickness,this.dheight,{isStatic:true});
        Matter.Body.setAngle(this.right,-1*this.angle);
    
        this.left = Bodies.rectangle(this.x + this.dwidth/2 + this.y-dheight/2,this.thickness,this.dheight,{isStatic:true});
        Matter.Body.setAngle(this.left,this.angle);

        World.add(world,this.bottom);
        World.add(world,this.right);
        World.add(world,this.left);

    }

    display(){
        var leftp=this.body.position;
        push();
        translate(leftp.x,leftp.y);
        strokeWeight(10);
        stroke("blue");
        fill("turquoise");
        rectMode(CENTER)
        rotate(this.angle)
        rect(0,0,this.thickness, this.dheight);
        pop();


        var rightp=this.body.position;
        push();
        translate(rightp.x,rightp.y);
        strokeWeight(10);
        stroke("blue");
        fill("turquoise");
        rectMode(CENTER)
        rotate(-1*this.angle)
        rect(0,0,this.thickness, this.dheight);
        pop();


        var bottomp=this.body.position;
        push();
        translate(bottomp.x,bottomp.y);
        strokeWeight(10);
        stroke("blue");
        fill("turquoise");
        rectMode(CENTER)
        rotate(this.angle)
        rect(0,0,this.thickness, this.dheight);
        pop();
    }
}