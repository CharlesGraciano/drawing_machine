let array = [];

function setup() {
  createCanvas(1000, 1000);
  background(5, 89, 470);
  strokeWeight(25);



}

function draw() {
 if (mouseIsPressed){
//if (mouseIsPressed==true){
	//stroke(map(mouseX,0,500,0,300,true));
	//line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
	//line(mouseX, mouseY, pmouseX, pmouseY);
	array.push([mouseX,mouseY]);


}
  

}
function keyTyped(){

	if(key==='s'){
	//save this image
	saveCanvas('fileName', 'png');

	} else if (key==='d'){
		//display image

		for(let i = 0; i < array.length - 1; i++){
			line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);

		}

		
		//line(array[0][0], array[0][1],array[2][0],array[2][1]);
	}
	return false;  
}