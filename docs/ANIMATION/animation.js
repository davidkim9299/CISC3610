"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

Scene.start = function () {
	// Get the canvas and it's context.
	Scene.canvas = document.getElementById("myCanvas");
	Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Seup the skeleton to be displayed.
	Scene.sprite = Skeleton;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
	Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the skeleton image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    		Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);



Scene.clearCanvas = function () {
	var background = Scene.canvas.getContext("2d");
		background.fillStyle = "#6cdef5";
		background.fillRect(0, 0, 500, 500);
		background.font = "20px Arial";
		background.fillStyle = "#000000";
		var line = 1;
		var height = 20;
		background.fillText("SKY", 0, height*line);
};




Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	//Scene.canvas.width = window.innerWidth;
	
	// Set the location of the next frame. 
  	Scene.sprite.offset+=6;
	if(Scene.sprite.offset>Scene.canvas.width)
 		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,
					Scene.sprite.frames[Scene.sprite.frame].frame.x,
					Scene.sprite.frames[Scene.sprite.frame].frame.y,
					Scene.sprite.frames[Scene.sprite.frame].frame.w,
					Scene.sprite.frames[Scene.sprite.frame].frame.h,
					Scene.sprite.offset,300,
					Scene.sprite.frames[Scene.sprite.frame].frame.w,
					Scene.sprite.frames[Scene.sprite.frame].frame.h);
	
	// Advance to the next frame.
	Scene.sprite.frame++;

	// At the end of the sprite sheet, start at the first frame.
	if(Scene.sprite.frame==Scene.sprite.frames.length)
		Scene.sprite.frame=0;
};


Scene.ground = function() {
	var ground = Scene.canvas.getContext("2d");
		ground.fillStyle = "#8f5335";
		ground.fillRect(0, 450, 500, 500);
		ground.font = "20px Arial";
		ground.fillStyle = "#000000";
		var line = 1;
		var height =490;
		ground.fillText("GROUND", 0, height*line);
};

Scene.mountain = function() {
	var mountain = Scene.canvas.getContext("2d");
		//draw mountain using moveTo/ lineTo
		mountain.beginPath();
		mountain.moveTo(0, 300);
		mountain.lineTo(100,200);
		mountain.lineTo(200,270);
		mountain.lineTo(250,250);
		mountain.lineTo(300,180);
		mountain.lineTo(450,320);
		mountain.lineTo(500,290);
		mountain.lineTo(500,450);
		mountain.lineTo(0,450);
		mountain.closePath();
		//width of line
		mountain.lineWidth = 2;
		mountain.strokeStyle = "#5af533";
		mountain.stroke();
		mountain.fillStyle = "#5af533";
		mountain.fill();
		mountain.font="20px Arial";
		mountain.fillStyle = "#000000";
		var line=1;
		var height=300;
		mountain.fillText("Mountain",300,height*line);
};

Scene.sun = function() {
	var sun = Scene.canvas.getContext("2d");
		//create a circle to draw the sun
		sun.beginPath();
		sun.arc(430,70, 50, 50, 100*Math.PI, false);
		sun.closePath();
		sun.strokeStyle = "yellow";
		sun.stroke();
		sun.fillStyle = "yellow";
		sun.fill();
		sun.font="20px Arial";
		sun.fillStyle = "#000000";
		var line=1;
		var height=75;
		sun.fillText("Sun",410,height*line);
};

Scene.fence = function() {
	var fence = Scene.canvas.getContext("2d");
		var step;
		//using for loop to draw fence from left to right
		//each fence has 40 length, so variable will be added 40 in every loop
		for (step = 0; step <=Scene.canvas.width; step +=40) {
			fence.beginPath();
			fence.moveTo(step, 452);
			fence.lineTo(step, 427);
			fence.lineTo(step+20, 427);
			fence.lineTo(step+20, 452);
			fence.moveTo(step+20, 439.5);
			fence.lineTo(step+40,439.5);
			fence.closePath();
			fence.lineWidth = 1;
			fence.strokeStyle = "#000000";
			fence.stroke();	
			fence.fillStyle = "#000000";
			fence.fill();
		}
};

Scene.house = function() {
	var house = Scene.canvas.getContext("2d");
		//draw a house
		house.beginPath();
		house.moveTo(75, 450);
		house.lineTo(75, 350);
		house.lineTo(200, 350);
		house.lineTo(200, 450);
		house.moveTo(50, 350);
		house.lineTo(137.5, 280);
		house.lineTo(225, 350);
		house.closePath();
		house.lineWidth = 2;
		house.strokeStyle = "#cc2929";
		house.stroke();
		house.fillStyle = "#cc2929";
		house.fill();
		house.font="20px Arial";
		house.fillStyle = "#000000";
		var line=1;
		var height=350;
		house.fillText("house",110,height*line);
};

Scene.glass = function() {
	var glass = Scene.canvas.getContext("2d");
		//draw a window on house's wall
		glass.beginPath();
		glass.moveTo(100, 410);
		glass.lineTo(100, 360);
		glass.lineTo(175, 360);
		glass.lineTo(175, 410);
		glass.lineTo(100, 410);
		glass.closePath();
		glass.lineWidth = 3;
		glass.strokeStyle = "#FFFFFF";
		glass.stroke();	
		glass.fillStyle = "#6cdef5";
		glass.fill();
		glass.font="10px Arial";
		glass.fillStyle = "#000000";
		var line=1;
		var height=390;
		glass.fillText("Window",120,height*line);
};

Scene.grass = function() {
	var grass = Scene.canvas.getContext("2d");
		var step;
		//draw grass on the ground. using for loop to draw grass on canvas
		for (step = 0; step <=Scene.canvas.width; step +=20) {
			grass.beginPath();
			grass.moveTo(step,452);
			grass.lineTo(step+10, 442);
			grass.lineTo(step+20, 452);
			grass.lineWidth = 1;
			grass.strokeStyle = "#69911d";
			grass.stroke();	
			grass.fillStyle = "#69911d";
			grass.fill();
		}
}

Scene.mainLoop = function() {
	Scene.clearCanvas();
	Scene.ground();
	Scene.mountain();
	Scene.sun();
	Scene.fence();
	Scene.house();
	Scene.glass();
	Scene.grass();
	Scene.update();
	Scene.draw();
	
	// Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 2000 /24);
};

