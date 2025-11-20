class Friends{
  constructor(posX,posY){
    this.x = random(width);
    this.y = random(height);
    this.d = random(30,100);
    
    this.xDir = random(-1,1);
    this.xDir = random(-1,1);

    this.r = 242;
    this.g = 193;
    this.b = 58;
  }
   
display(r,g,b,d){
    this.r = r;
    this.g = g;
    this.b = b;
    this.d = d;

fill(this.r,this.g,this.b);
  circle(this.x,this.y,this.d);
  fill(this.r+50,this.g,this.b+30);
  circle(this.x+20,this.y,this.d);
}

update(s){
  this.x += this.xDir*s;
  this.y += this.yDir*s;
}
keepInCanvas(){
if ((this.x > width)||(this.x < 0))
{
this.xDir = -this.xDir;
}
if ((this.y > height)||(this.y < 0))
{
this.yDir = -this.yDir;
}
}


}