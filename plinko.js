class Plinko {
    constructor(x, y,radius) {
      var options = {
          'isStatic':true
          
      }
      
      //this.width = width;
      //this.height = height;
      this.radius = radius;
      this.body = Bodies.circle(x, y, this.radius, options);
      World.add(world, this.body);
    }
    display(){
      var pos =   this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("white");
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }