var sec,secAngle;
var min,minAngle;
var hr,hrAngle;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  sec=second();
  min=minute();
  hr=hour(); 
  console.log(hr+":"+min+":"+sec);
  hrAngle=map(hr,0,12,0,360);
  minAngle=map(min,0,60,0,360);
  secAngle=map(sec,0,60,0,360);
  
  translate(250,250);
  rotate(-90);

  push()

  strokeWeight(10)
  fill("black")

  push()
  stroke("green")
  arc(0,0,400,400,0,secAngle);
  pop()

  push()
  stroke("blue")
  arc(0,0,350,350,0,minAngle);
  pop()
  
  push()
  stroke("red")
  arc(0,0,300,300,0,hrAngle);
  pop()

pop()
  

  push()
  strokeWeight(7)
  stroke("green")
  rotate(secAngle)
  line(0,0,150,0);
  pop()

  push()
  strokeWeight(9)
  stroke("blue")
  rotate(minAngle)
  line(0,0,100,0)
  pop()

  push()
  strokeWeight(11)
  stroke("red")
  rotate(hrAngle)
  line(0,0,70,0);
 
  pop()
}