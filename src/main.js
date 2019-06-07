// Custom classes for game-related objects

class HandController {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.rollAngle = 0;
	}
	updateRollAngle(x1, y1, x2, y2, body){
		// Calculate the slope using two points as a reference
		var slope =  (y1 - y2) / (x1 -x2);
		var theta = Math.atan(slope) * -1;
		// Converting tetha from radians to degrees
		var newAngle = theta * 180 / Math.PI;
		this.rollAngle = body.rotation = this.restrictMotion(body.rotation, newAngle, 1);
		// Set body awake as an attempt to prevernt tunneling. Didn't do much
		body.SetAwake(true);
	}
	updateCoordinates(x, y, body){
		this.x = x;
		this.y = y;
		// this.x = body.x = this.restrictMotion(body.x, x, 1);
		// this.y = body.y = this.restrictMotion(body.y, y, 1);
		body.x = this.x 
		body.y = this.y
		// Set body awake as an attempt to prevernt tunneling. Didn't do much
		body.SetAwake(true);
	}

	restrictMotion(oldValue, newValue, interval = 1) {
		oldValue = Number.parseInt(Math.floor(oldValue));
		newValue = Number.parseInt(Math.floor(newValue));
		var delta = Math.abs(oldValue - newValue);
		delta < 10 ? delta = delta : delta = 10;
		if (delta > interval){
			return newValue;
		} else {
			return oldValue;
		} 
	}

	senseContact(){
		// This function will help getting all rain bodies touching and will
		// then update a custom property on them, so that we can count the
		// seconds they've stayed below ground and destroy them if needed
	}
}

class Game {
	constructor(){
		this.diffLevel = 1;
		this.catchCount = 0;
		this.strikesLeft = 4;
		this.paddleControl = new HandController(300,300);
	}

	updateScore(){

	}
	gameOver(){

	}
	startGame(){

	}
	generateFallingShape(){

	}
}

class FallingShape {
	constructor(shapeType, size, diffFactor, physics){
		this.shapeType = shapeType;
		this.size = size;
		this.physics = physics;
		this.friction = .7 / diffFactor;
		this.restitution = .6 * diffFactor;
		this.body = this.createBody(shapeType);
		this.setStartPosition();
		this.asset = this.createZimAsset(shapeType);

		// Crash/catch-related variables
		this.crashFlag = false;
		this.secondsOnPaddle = 0;
	}
	createBody(shapeType){
		// Box2D body assets specifying dynamic and other properties
		if (shapeType === 'circle'){
			var body = this.physics.makeCircle({
				radius: this.size / 2,
				angular: .75,
				restitution: this.restitution,
				density: 1,
				dynamic: true,
				friction: this.friction,
				bullet: true
			});
		} else {
			// Create a rectangle instead
			var body = this.physics.makeRectangle({
				width: this.size,
				height: this.size, 
				restitution: this.restitution,
				density: 1,
				dynamic: true,
				friction: this.friction,
				bullet: true
			});
		}
		return body;
	}
	createZimAsset(shapeType){
		// Create ZIM assets to match physics world
		// Box2D bodies (made by physics.js) have centered positions
		// so center the registration points for ZIM assets
		if (shapeType === 'circle'){
			var asset = new Circle(this.size / 2, '#e472c4')
				.center();
			asset.cursor = "pointer";
			return asset;

		} else {
			var asset = new Rectangle(this.size, this.size, '#f58e25')
				.centerReg();
			asset.cursor = "pointer";
			return asset;
		}

	}
	setStartPosition(){
		// The value of X should be a random between the start and the end
		// of the paddleController width
		this.body.x = 300 + Math.floor(Math.random() * 600);
		console.log(this.body.x);
		this.body.y = -100;
	}
}

// SCALING OPTIONS
// scaling can have values as follows with full being the default
// "fit"	sets canvas and stage to dimensions and scales to fit inside window size
// "outside"	sets canvas and stage to dimensions and scales to fit outside window size
// "full"	sets stage to window size with no scaling
// "tagID"	add canvas to HTML tag of ID - set to dimensions if provided - no scaling

var scaling = "fit"; // this will resize to fit inside the screen dimensions
var width = 1200;
var height = 800;

// This is the color of the canvas inside and surroundings
// can be any HTML color such as "violet" or "#333333"
var color = dark; 
var outerColor = light;

// GAME initialization
var game = new Game();
var paddleControl = game.paddleControl;
var diffFactor = game.diffLevel;

// Create frame that will be used for both Leap Motion and Zim
var frame = new Frame(scaling, width, height, color, outerColor);
var debug2D = false;
frame.on("ready", function() {
	zog("ready from ZIM Frame");

	var stage = frame.stage;
	var stageW = frame.width;
	var stageH = frame.height;

	// ZIM BITS - Physics with Box2D (2016)

	// Make a new Physics object passing in the ZIM frame and borders
	// it needs a frame so it can get scale to match the debug canvas
	// We're creating the ground 120px above frame bottom border
	var borders = {x:0, y:0, width:stageW, height:stageH-120};

	var physics = new zim.Physics(frame, borders);

	// EXTRA
	// for custom Box2D you may want access to the b2World
	// and scale that is used
	var world = physics.world;
	// var scale = physics.scale;

	physics.scale = 200;

	// GAME DIFFICULTY factor

	// Alternatively remove any of the borders
	// also borderTop, borderLeft, borderRight
	// physics.remove(physics.borderBottom);

	// INITIAL VARS
	// here we specify width, height, radius
	// so we can use both for Box2D shapes and ZIM shapes

	var barW = 600;
	var barH = 70;
	var fsSize = 80;

	// DEBUG
	// optionally see the BOX 2D debug canvas 
	if (debug2D === true){
		physics.debug();
		frame.on("resize", function() {
			physics.updateDebug();
		});
	}

	// PADDLE BODY
	// Box2D body assets specifying dynamic and other properties
	var paddleBody = physics.makeRectangle({
		width: barW,
		height: barH, 
		dynamic: 'kinematic', 
		friction: 0,
		density: 1,
		bullet: true
	});

	paddleBody.x = 600;
	paddleBody.y = 500;

	// Falling shapes
	var circle2 = new FallingShape('circle', fsSize, diffFactor, physics);
	var rectangle2 = new FallingShape('rectangle', fsSize, diffFactor, physics);
	
	// Set optional mouse dragging
	// optionally pass in a list of bodies to receive mouse movement
	// otherwise defaults to all moveable bodies
	// physics.drag([boxBody, triangleBody]); // would not drag circleBody
	physics.drag();

	var bar = new Rectangle(barW, barH, frame.silver);
    bar.centerReg();
    bar.cursor = "pointer";

	// Falling shape Mapping
	physics.addMap(circle2.body, circle2.asset);
	physics.addMap(rectangle2.body, rectangle2.asset);
	
	// MAPPING
	// Map the ZIM assets to the Box2D assets
	// this puts the ZIM assets on the Box2D assets
	// and rotates them to the same rotation
	physics.addMap(paddleBody, bar);

	// you can also remove maps and shapes:
	// physics.removeMap(circleBody);
	// physics.remove(circleBody);

	// EXTRA
	// you can also access the update function and add your own calls
	// after defaults to true to add your function after the world step
	// set after to false to add your function before the world step
	// physics.Ticker.add(function, after);
	// physics.Ticker.remove(function);
	// this is required for forces and torque which get applied each step
	// unless it is an impulse force which gets applied all at once

	// LEAP MOTION HAND CONTROLLER

	// Loop uses browser's requestanimationFrame
	var options = { enableGestures: true };
	// Main Loop Loop
	Leap.loop(options, function(frame) {
		var motionScaleRate = 2;
		if (frame.hands.length > 0){
			// console.log('Hand detected');
			// Reading the X Y position for the index finger on any hand detected
			var indexFingerX = frame.hands[0].fingers[1].dipPosition[0];
			var indexFingerY = frame.hands[0].fingers[1].dipPosition[1];
			// console.log('Coordinate X', handX, 'Coordinate Y', handY);
			var pinkyFingerX = frame.hands[0].fingers[4].dipPosition[0];
			var pinkyFingerY = frame.hands[0].fingers[4].dipPosition[1];
			
			// Convert coordinates to 
			var handX = indexFingerX * motionScaleRate + width / 2;
			var handY = (height * 1.2 - indexFingerY * motionScaleRate);

			// Use specific methods on the HandController object to update positions read from the leap motion device
			paddleControl.updateRollAngle(indexFingerX,indexFingerY, pinkyFingerX, pinkyFingerY, paddleBody);
			paddleControl.updateCoordinates(handX, handY, paddleBody);
			
			// console.log('X:', paddleBody.x, 'Y:', paddleBody.y);
			// console.log('X:', paddleControl.x, 'Y:', paddleControl.y);	
		}
	}); // end of Leap loop

	// Keyboard input
	window.addEventListener('keydown', e => {
		var inc = 5;
		if(e.keyCode === 38) {
			// Up Arrow
			paddleControl.updateCoordinates(paddleControl.x, paddleControl.y - inc, paddleBody);
		}
		if(e.keyCode === 40) {
			// Down Arrow
			paddleControl.updateCoordinates(paddleControl.x, paddleControl.y + inc, paddleBody);
		}
		if(e.keyCode === 37) {
			// Left Arrow
			paddleControl.updateCoordinates(paddleControl.x - inc, paddleControl.y, paddleBody);
		}
		if(e.keyCode === 39) {
			// Right Arrow
			paddleControl.updateCoordinates(paddleControl.x + inc, paddleControl.y, paddleBody);
		}
	}); // end of keyboard input

	// CONTACT LISTENERS
	var contactListener = new b2ContactListener();
	contactListener.BeginContact = function(e) {
		// console.log('Contact Started');

	}

	contactListener.EndContact = function(e) {
		// console.log('Contact Ended');

	}
	// set the contact listener on the world
	world.SetContactListener(contactListener);

		
}); // end of ready
