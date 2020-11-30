/*class Pig{
    //size fixed
    constructor(x,y){
        var options= {
            restitution: 0.8,
            friction:0.5,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,,options);
        this.width= 50;
        this.height= 50;
        World.add(world,this.body);

    }


    display(){
        push();
        translate(this.body.position.x , this.body.position.y);
        rotate(this.body.angle);
        fill("green");
        strokeWeight(3);
        stroke("black");
        rectMode(CENTER);
        rect(0, 0 , this.width,this.height);
        pop();
    }
}
*/
//C25 AND
//CLASS 30:
//1. ADD NEW VAR THIS.VISIBILITY
//2. GIVE THRESHOLD FOR SPEED...BELOW THRESHOLD KEEP THE PI, ABOVE THRESHOLD, REMOVE THE PIG
//3. MAKE THE PIG VANISH GRADUALLY BY USING TINT- TINT ADD TRANSPARENT LAYER TO THE IMAGE
    //FOR THIS...REMOVE THE PIG
    //THEN CHANGE THE VISIBILITY BY REDIUCING IT GRADUALLY
    //GIVE TINT
    //REPLACE IT WIHT THE IMAGE OF OBJECT WHICH SOLOWYLY FADES AWAY
    //DONT FORGET PUDP N POP
class Pig extends BaseClass{

    constructor(x,y){
        super(x,y,50,50);
        this.image= loadImage("sprites/enemy.png");
        //JUST A NEW AVRIABLE TO STORE VISIBILITY
        this.Visibility = 255;
    }
    //ADDED FOR CLASS 30
    display(){
        console.log(this.body.speed);
        if(this.body.speed<15){
            super.display();
        }
        else{
            push();
            World.remove(world,this.body);
            this.Visibility= this.Visibility-5;
            tint(255,this.Visibility);
            image(this.image, this.body.position.x, this.body.position.y,50,50)
            pop();
        }
       
    }
}