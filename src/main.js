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
		// Set body awaye as an attempt to prevernt tunneling. Didn't do much
		body.SetAwake(true);
	}
	updateCoordinates(x, y, body){
		this.x = x;
		this.y = y;
		// this.x = body.x = this.restrictMotion(body.x, x, 1);
		// this.y = body.y = this.restrictMotion(body.y, y, 1);
		body.x = this.x 
		body.y = this.y
		// Set body awaye as an attempt to prevernt tunneling. Didn't do much
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

class FallingShape{
	constructor(){

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
}

class FallingObject {
	constructor(){
		this.type = objType;
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
var color = dark; // or any HTML color such as "violet" or "#333333"
var outerColor = light;
var game = new Game();
var paddleControl = game.paddleControl;
var debug2D = false;

var frame = new Frame(scaling, width, height, color, outerColor);
frame.on("ready", function() {
	zog("ready from ZIM Frame");

	var stage = frame.stage;
	var stageW = frame.width;
	var stageH = frame.height;

	// ZIM BITS - Physics with Box2D (2016)

	// Make a new Physics object passing in the ZIM frame and borders
	// it needs a frame so it can get scale to match the debug canvas
	var borders = {x:0, y:0, width:stageW, height:stageH-120};

	var physics = new zim.Physics(frame, borders);

	// EXTRA
	// for custom Box2D you may want access to the b2World
	// and scale that is used
	// var world = physics.world;
	// var scale = physics.scale;
	physics.scale = 200;

	// GAME DIFFICULTY factor TODO: Move to the game class eventually
	var diffFactor = game.diffLevel;

	// Alternatively remove any of the borders
	// also borderTop, borderLeft, borderRight
	// physics.remove(physics.borderBottom);

	// INITIAL VARS
	// here we specify width, height, radius
	// so we can use both for Box2D shapes and ZIM shapes
	// TODO: Turn this into classes, so we can make shapes fall from above

	var barW = 600;
	var barH = 70;
	var circleR = 40;
	var boxW = 80;
	var boxH = 80;

	// Triangles do not behave good with the paddle bar
	// var tri1 = 80;
	// var tri2 = 80;
	// var tri3 = 80;

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

	// Position paddle (only at start)
	paddleBody.x = 300;
	paddleBody.y = 300;

	// Falling shapes
	// CIRCLE
	// Box2D body assets specifying dynamic and other properties

	var circleBody = physics.makeCircle({
		radius: circleR,
		angular: .75,
		restitution: .6 * diffFactor,
		density: 1,
		dynamic: true,
		friction: .7 / diffFactor,
		bullet: true
	});

	// Initial position
	circleBody.x = 400;
	circleBody.y = 40;

	// BOX
	
	var boxBody = physics.makeRectangle({
		width: boxW,
		height: boxH, 
		restitution: .6 * diffFactor,
		density: 1,
		dynamic: true,
		friction: .7 / diffFactor,
		bullet: true
	});

	// Initial position
	boxBody.x = 200;
	boxBody.y = 40;


	// Set optional mouse dragging
	// optionally pass in a list of bodies to receive mouse movement
	// otherwise defaults to all moveable bodies
	// physics.drag([boxBody, triangleBody]); // would not drag circleBody
	physics.drag();

	// DEBUG
	// optionally see the BOX 2D debug canvas 
	if (debug2D === true){
		physics.debug();
		frame.on("resize", function() {
			physics.updateDebug();
		});
	}

	// Create ZIM assets to match physics world
	// Box2D bodies (made by physics.js) have centered positions
	// so center the registration points for ZIM assets
	var bar = new Rectangle(barW, barH, frame.silver);
    bar.centerReg();
    bar.cursor = "pointer";

	var circle = new Circle(circleR, frame.pink)
		.center();
	circle.cursor = "pointer";

	var box = new Rectangle(boxW, boxH, frame.orange)
		.centerReg();
	box.cursor = "pointer";

	// MAPPING
	// Map the ZIM assets to the Box2D assets
	// this puts the ZIM assets on the Box2D assets
	// and rotates them to the same rotation
	physics.addMap(paddleBody, bar);
	physics.addMap(circleBody, circle);
	physics.addMap(boxBody, box);

	// you can also remove maps and shapes:
	// physics.removeMap(circleBody);
	// physics.remove(circleBody);
	// stage.removeChild(circle);

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
			var paddleX = indexFingerX * motionScaleRate + width / 2;
			var paddleY = (height * 1.2 - indexFingerY * motionScaleRate);

			// Use specific methods on the HandController object to update positions read from the leap motion device
			paddleControl.updateRollAngle(indexFingerX,indexFingerY, pinkyFingerX, pinkyFingerY, paddleBody);
			paddleControl.updateCoordinates(paddleX, paddleY, paddleBody);
			
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
		
}); // end of ready
