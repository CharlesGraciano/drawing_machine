let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  
  noFill();



}

function draw() {
 //if (mouseIsPressed){
// if (mouseIsPressed==true){
	background(200,0,0,10);
	strokeWeight(strokeWidth);

noiseOffset += 0.07;
strokeWidth = noise(noiseOffset) * 100;


	stroke(map(mouseX,0,500,0,300,true));
	line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
	line(mouseX, mouseY, pmouseX, pmouseY);
	//background(0);
	array.push([mouseX,mouseY]);


}
  


function keyTyped(){

	if(key==='s'){
	//save this image
	saveCanvas('fileName', 'png');

	} else if (key === 'c'){
		clear();
	}

	//else if (key==='d'){
		//display image
		background(255);


beginShape();
		for(let i = 0; i < array.length; i++){
			//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
			curveVertex(array[i][0], array[i][1]);

		}
endShape();{
		
		//line(array[0][0], array[0][1],array[2][0],array[2][1]);
	}
	return false;  
}