var block1;
var block2;
var digits=5;
var PICount=0;
var timeStep=1000000;
function setup(){
    createCanvas(900,400);
    block1=new Block(100,1,0,50);
    block2=new Block(200,pow(100,digits-1),-5/timeStep,100);
}
function draw(){
  background(0);
  for(var i=0;i<timeStep;i++){
    if(block1.collide(block2)){
      var v1=block1.computeVelocity(block2);
      var v2=block2.computeVelocity(block1);
      block1.v=v1;
      block2.v=v2;
      PICount++;
    }
    if(block1.hitWall()){
      block1.reverseVelocity();
      PICount++;
    }
    block1.update();
    block2.update();
  }
  block1.show();
  block2.show();
  stroke(255);
  text(PICount,10,30);
}
