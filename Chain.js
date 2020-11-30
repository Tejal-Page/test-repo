/*
class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
*/
/*//C28
class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
     
        this.rope = Constraint.create(options);
        this.pointB= pointB;
        World.add(world, this.rope);
    }
    fly(){

        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
*/

//C29
class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
     this.sling1= loadImage("sprites/sling1.png");
     this.sling2= loadImage("sprites/sling2.png");
     this.sling3= loadImage("sprites/sling3.png");


        this.rope = Constraint.create(options);
        this.pointB= pointB;
        World.add(world, this.rope);
    }
    fly(){

        this.rope.bodyA = null;
    }

    display(){
        image(this.sling1,330,150 );
        image(this.sling2, 300,150);
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x-10, pointA.y, pointB.x-25, pointB.y);
        line(pointA.x-10, pointA.y, pointB.x+25, pointB.y);
        image(this.sling3,pointA.x-30, pointA.y,10,30 )

        }
    }
}