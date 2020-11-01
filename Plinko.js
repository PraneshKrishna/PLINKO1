class Plinko {
    constructor(x,y,rect) {
      var options = {
          restitution:0.4
      }
      this.r=r=10
      this.body = Bodies.circle(x,y,width,height,options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      ellipseMode(RADIUS);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };