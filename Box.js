/*class Box{

        constructor(x,y,width,height){
            var options= {
                restitution: 0.8,
                friction:0.5,
                density:1.0
            }
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width= width;
            this.height= height;
            World.add(world,this.body);

        }


        display(){
            push();
            translate(this.body.position.x , this.body.position.y);
            rotate(this.body.angle);
            fill("yellow");
            strokeWeight(3);
            stroke("black");
            rectMode(CENTER);
            rect(0, 0 , this.width,this.height);
            pop();
        }

}
*/

//C25
class Box extends BaseClass{

constructor(x,y,width,height){
    super(x,y,width,height);
    this.image= loadImage("sprites/wood1.png");
}


}