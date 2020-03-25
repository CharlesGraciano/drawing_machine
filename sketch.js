function setup() {
  createCanvas(600, 1000);
  background(5, 89, 470);
  strokeWeight(25);

}

function draw() {

if (mouseIsPressed==true){
	stroke(map(mouseX,0,500,0,300,true));
	line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
	line(mouseX, mouseY, pmouseX, pmouseY);


}
  

}
function keyTyped(){

	if(key==='s'){
	//save this image
	saveCanvas('fileName', 'png');
	} 
	return false;  
}