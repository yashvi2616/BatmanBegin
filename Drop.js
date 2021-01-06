class Drop{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.0001
          }
          this.rain = Bodies.circle(x, y, 5, options);
          this.radius = 5;
         // this.image = loadImage("paper.png");
          World.add(world, this.rain);
    }
   
    updateY(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0, 400), y:random(0, 400)});
      }
    }

    showDrop(){
      fill("blue");
      stroke("white");
      strokeWeight(1);
      
      ellipseMode(CENTER);
      ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
    }


}