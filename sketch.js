function setup() {
  createCanvas(600, 600);
  background(456, 345, 678);
  srtokeWeight(30);

}

function draw() {

if (mouseIsPressed==true){
	line(mouseX, mouseY, pmouseX, pmouseY);


}
  
}