var config = {
    	type: Phaser.AUTO,
    	width: 500,
    	height: 500,
    	backgroundColor: '#F5F5DC',
    	parent: 'game',
    	scene: {
        	preload: preload,
        	create: create
    	}
};

var game = new Phaser.Game(config);

function preload(){
    	this.load.image('eye1','images/eye1.png');
    	this.load.image('eye2','images/eye2.png');
    	this.load.image('eye3','images/eye3.png');
    	this.load.image('eye4','images/eye4.png');
    	this.load.image('face1','images/face1.png');
    	this.load.image('face2','images/face2.png');
    	this.load.image('hairline1','images/hairline1.png');
    	this.load.image('hairline2','images/hairline2.png');
    	this.load.image('lear1','images/lear1.png');
    	this.load.image('lear2','images/lear2.png');
    	this.load.image('mouse1','images/mouse1.png');
    	this.load.image('mouse2','images/mouse2.png');
    	this.load.image('mouse3','images/mouse3.png');
    	this.load.image('mouse4','images/mouse4.png');
    	this.load.image('nose1','images/nose1.png');
    	this.load.image('nose2','images/nose2.png');
    	this.load.image('nose3','images/nose3.png');
    	this.load.image('rear1','images/rear1.png');
	this.load.image('rear2','images/rear2.png');
}

function create(){
	// position of the sprite
    	var eye1 = this.add.sprite(100,100,'eye1').setInteractive();
    	var eye2 = this.add.sprite(200,100,'eye2').setInteractive();
    	var eye3 = this.add.sprite(300,100,'eye3').setInteractive();
    	var eye4 = this.add.sprite(400,100,'eye4').setInteractive();
    	var face1 = this.add.sprite(100,300,'face1').setInteractive();
    	var face2 = this.add.sprite(200,300,'face2').setInteractive();

    	// sprite that you can move around
    	this.input.setDraggable(eye1);
    	this.input.setDraggable(eye2);
    	this.input.setDraggable(eye3);
    	this.input.setDraggable(eye4);
    	this.input.setDraggable(face1);
    	this.input.setDraggable(face2);

    	this.input.on('drag', function(pointer, gameObject, dragX, dragY){
        	gameObject.x = dragX;
        	gameObject.y = dragY;
    	});
} 

