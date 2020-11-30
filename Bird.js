/*class Bird{

    constructor(x,y){
        var options= {
            restitution: 0.8,
            friction:0.5,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width= 50;
        this.height= 50;
        World.add(world,this.body);

    }


    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y= mouseY;
        push();
        translate(pos.x , pos.y);
        rotate(this.body.angle);
        fill("red");
        strokeWeight(3);
        stroke("black");
        rectMode(CENTER);
        rect(0, 0 , this.width,this.height);
        pop();
    }
}
*/

//C25
class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image= loadImage("sprites/bird.png");
    }
    display(){
        //C28= COMMENT THE FOLLOWING BECAUSE WE WANT THE BIRD TO MOVE WITHOUT THE MOUSE
        //this.body.position.x= mouseX;
       // this.body.position.y=mouseY;
        super.display();
    }
}