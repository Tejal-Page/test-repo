/*class Log{
    //angle to be changed, width remains same
    constructor(x,y,height,angle){
        var options= {
            restitution: 0.8,
            friction:0.5,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width= 20;
        this.height= height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }


    display(){
        push();
        translate(this.body.position.x , this.body.position.y);
        rotate(this.body.angle);
        fill("orange");
        strokeWeight(3);
        stroke("black");
        rectMode(CENTER);
        rect(0, 0 , this.width,this.height);
        pop();
    }

}
*/

class Log extends BaseClass{
    constructor(x,y,height,angle){
        super(x,y,20,height,angle);
        this.image= loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body,angle);
    }
    
}