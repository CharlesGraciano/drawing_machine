function setup() {
  createCanvas(600, 1000);
  background(255, 30, 115);
  srtokeWeight(5);

}

function draw() {

if (mouseIsPressed==true){
	stroke(map(mouseX,0,600,0,255,true))
	line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
	line(mouseX, mouseY, pmouseX, pmouseY);


}
  
}