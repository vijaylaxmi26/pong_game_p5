function Player()
{
   this.w=15;
   this.h= 80;

   this.pos = createVector(this.w*2,height/2-this.h/2);
   this.acc = createVector(0,0);
   this.spd = 10;
   this.maxSpd = 10;

   this.show = function(){
     noStroke();
     fill(255);
     rect(this.pos.x, this.pos.y,this.w,this.h);
   }

   this.up = function(){this.acc.y-=this.spd;}
   this.down = function(){this.acc.y+=this.spd;}
   this.stp = function() {this.acc.y=0;}

   this.update=function() {
     this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);
     this.pos.add(this.acc);
     this.pos.y = constrain(this.pos.y, 0, height-this.h);

   }


}
