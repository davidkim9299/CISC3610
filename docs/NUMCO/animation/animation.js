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
	
	// Seup the parrot to be displayed.
	Scene.sprite = number;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    	Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the parrot image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
	Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener('DOMContentLoaded', Scene.start);






Scene.clearCanvas = function () {
	Scene.canvasContext.fillStyle = "cyan";
	Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,
					Scene.sprite.frames[Scene.sprite.frame].frame.x,
					Scene.sprite.frames[Scene.sprite.frame].frame.y,
					Scene.sprite.frames[Scene.sprite.frame].frame.w,
					Scene.sprite.frames[Scene.sprite.frame].frame.h,
					60,0,
					Scene.sprite.frames[Scene.sprite.frame].frame.w,
					Scene.sprite.frames[Scene.sprite.frame].frame.h);
	
};


Scene.drawten = function(one, zero) {
	Scene.canvasContext.drawImage(Scene.sprite.img,
					Scene.sprite.frames[one].frame.x,
					Scene.sprite.frames[one].frame.y,
					Scene.sprite.frames[one].frame.w,
					Scene.sprite.frames[one].frame.h,
					12,0,
					Scene.sprite.frames[one].frame.w,
					Scene.sprite.frames[one].frame.h);

	Scene.canvasContext.drawImage(Scene.sprite.img,
					Scene.sprite.frames[zero].frame.x,
					Scene.sprite.frames[zero].frame.y,
					Scene.sprite.frames[zero].frame.w,
					Scene.sprite.frames[zero].frame.h,
					112,0,
					Scene.sprite.frames[zero].frame.w,
					Scene.sprite.frames[zero].frame.h);
};


const numbersindex = [0,1,2,3,4,5,6,7,9,10];
let count = 0;

Scene.mainLoop = function() {
	if(count > numbersindex.length){
		return;
	}
	else if(count >= 10) {
		Scene.clearCanvas();
		Scene.drawten(1,0);
	}
	else {
		Scene.clearCanvas();
		Scene.draw();
	}
	window.setTimeout(Scene.mainLoop, 500);
	Scene.sprite.frame++;
	count++;
};




