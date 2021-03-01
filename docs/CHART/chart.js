const canvas = document.getElementById('canvas_chart');
const chart = canvas.getContext('2d');

//Array of Fruits
var fruits = {
	"name":["Apple","Orange", "Banana", "Kiwi", "Blueberry", "Grapes"],
	"quantity":[20,10,15,3,5,8],
	"color":['red','orange','yellow','green','skyblue','purple']
};

function drawchart(x, y, length, width, color){
	chart.fillStyle = color;
  	chart.fillRect(x, y, length, width);
}

function filltext(text, font, color, x, y){
  	chart.font = font;
  	chart.fillStyle= color;
  	chart.textAlign = "center";
  	chart.fillText(text, x, y);
  
} 

function findchartfit(){
	var fit = 0;
	for (var i in fruits.quantity) {
		if(fruits.quantity[i] > fit){
     		fit = fruits.quantity[i];
   		}
	//draw chart from bottom to up
    	var chartfit = -(canvas.height/fit);
   	return chartfit;
 	}
}

var fitnum = findchartfit();

for(var f = 0; f < canvas.height/100; f++) {
	drawchart(f*100, 500, 100, (fruits.quantity[f])*fitnum, fruits.color[f]);
	filltext(fruits.quantity[f],'bold 20px arial','black',((f*100) + 50),550);
	filltext(fruits.name[f],'bold 18px arial','black',(f*100)+50,575);
}
