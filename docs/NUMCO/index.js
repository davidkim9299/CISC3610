/* 
 * DONGRYUL KIM
 * CISC 3610
 * 1st assignemt - Cartoon
 */

var canvas = document.getElementById("myCanvas");

//Background
var background = canvas.getContext("2d");
	//background color and position
	background.fillStyle = "cyan";
	background.fillRect(0, 0, canvas.width, canvas.height);

	//insert text in backgroud
	background.font = "20px Arial";
	background.fillStyle = "black";
	var line = 1;

	var height = 130;
	background.fillText("DONGRYUL KIM's LAB2", 15, height*line);
	

