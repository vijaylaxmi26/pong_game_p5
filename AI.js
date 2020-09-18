function AI() {
  this.w = player.w;
  this.h = player.h;
  this.pos = createVector(width-this.w*3, height/2 - this.h/2);
   this.acc = createVector(0,0);
   this.spd =10;
   this.maxSpd =20;

   this.show = function(){
     noStroke();
     fill(255);
     rect(this.pos.x, this.pos.y,this.w,this.h);
   }

   this.update = function() {
     let d1 = dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y);
     let d2 = dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y+this.h);
     let d = (d1+d2)/2;


    if(d<450) {
        if(ball.pos.y<this.pos.y-this.h/2){
         this.acc.y-=this.spd;
       }else {
         this.acc.y+=this.spd;
       }

       this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);
     }
     else {
      this.acc.y+=random(-this.spd*0.9, this.spd);
    }

    this.pos.add(this.acc);
    this.pos.y = constrain(this.pos.y, 0, height-this.h);


   }
}
