class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
         bodyA:body1,
         bodyB:body2,
         pointB:{x:this.offsetX,y:this.offsetY},
        // stiffness:0.04,length:10 
         
        } 

       this.rope=Constraint.create(options)
       World .add(world,this.rope)
    
    }
    display(){
    //  if(this.rope.bodyA)
var bodyA = this.rope.bodyA.position;
 var bodyB = this.rope.bodyB.position;
 push();
 
 stroke(48,22,8);
strokeWeight(3);
stroke(48,22,8);
strokeWeight(3);
 line(bodyA.x , bodyA.y, bodyB.x+this.offsetX , bodyB.y+this.offsetY);
      pop();  
       
    }    
}








