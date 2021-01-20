class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    attached(body){
        this.chain.bodyA = body;
    }

    display(){
        image(this.sling1,200,30);
        image(this.sling2,175,30);
        
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        if (pointA.x<220){
            strokeWeight(10);
            line(pointA.x-21, pointA.y, pointB.x, pointB.y);
            line(pointA.x-21, pointA.y, pointB.x+25, pointB.y);
            image(this.sling3,pointA.x-21, pointA.y-11,10,30);
            
        }else{
            strokeWeight(4);
            line(pointA.x+21, pointA.y, pointB.x, pointB.y);
            line(pointA.x+21, pointA.y, pointB.x+25, pointB.y);
            image(this.sling3,pointA.x+21, pointA.y-11,10,30);
        }
        
        }
    }
    
}