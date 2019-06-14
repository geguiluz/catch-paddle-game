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
		// Game config
		this.levelCatchLimit = 5;
		this.gameOverFlag = false;
		this.pauseFlag = false;

		// Game Summary
		this.levelCount = 1;
		this.diffLevel = 1;
		this.catchCount = 0;
		this.strikesLeft = 4;
		this.globalScore = 0;

		// this.reStartGame();

		// Supporting structures for frontend
		this.catchSquareArray = ['x'];
		this.strikesSquareArray = ['x', 'x', 'x', 'x'];

		// Hand controller
		this.paddleControl = new HandController(300,300);

		// Falling shapes related
		this.validShapeTypes = ['circle', 'rectangle'];
		this.fsSize = '65'
		this.fsArray = [];
		this.fsCount = 0;
	}

	gameOver(){
		this.gameOverFlag = true;
		// TODO: Show splash screen on top of canvas
		gameVue.gameSummary.gameOverFlag = this.gameOverFlag;

	}

	pauseGame(){
		this.pauseFlag = !this.pauseFlag;
		// TODO: Show splash screen on top of canvas
		
		// TODO: Toggle flag in vue, so button text can change between
		// pause/resume
		gameVue.gameSummary.pauseFlag = this.pauseFlag;
		gameVue.gameSummary.pauseButtonText = this.pauseFlag ? 'Resume' : 'Pause';

	}

	reStartGame(){
		// TODO: Either efresh page or navigate back to start screen (it could
		// be a different HTML)
		gameVue.gameSummary.pauseFlag = this.pauseFlag;
		window.location.reload()
	}

	generateFallingShape(physics){
		// Try and use the Ticker on physics in order to generate new random
		// shapes at random times by flipping a coin
		this.fsCount ++;
		var rnd = Math.floor(Math.random()*2);
		var newShape = new FallingShape(this.validShapeTypes[rnd], this.fsSize, this.diffLevel, physics);
		this.fsArray.push(newShape);
		return newShape;
	}

	destroyShape(physics, fsToDestroy, event){
		// This function is called from contact listener instead of destroying
		// bodies directly there in order to destroy all falling shapes that touch
		// the ground

		// This function is also called from game.checkCaughtShapes after N seconds
		// on the paddle

		// Instead of using just the physics removal methods, query the
		// fsArray
		game.fsArray.map((item, index) => {
			if (item.body === fsToDestroy){
				// Destroy the Box2D bodies and mappings. Just removing them
				// from the array doesn't kill them in the game world
				physics.removeMap(item.body);
				physics.remove(item.body);
				// Also remove the ZIM Asset
				item.asset.dispose();
				// Remove the current item from the array
				this.fsArray.splice(index, 1);
				this.fsCount --;
				if (event === 'touched-ground') {
					// If event === 'touched-ground', also decrease game.strikesLeft
					this.strikesLeft --;
					this.updateGameBars();
					console.log('Strikes left =', this.strikesLeft);
				}
				if (event === 'good-catch') {
					// If event === 'good-catch', the game.catchCount by 1 (this is the
					// game score)
					this.increaseCatches();
				}
			}
		});
	}

	increaseCatches(){
		this.catchCount ++;
		this.globalScore ++;
		this.updateGameBars();
		if (this.catchCount >= this.levelCatchLimit + 2){
			// Reset level scores
			this.strikesLeft = 4;
			this.catchCount = 1;
			this.levelCount ++;
			this.diffLevel = this.diffLevel + (this.levelCount) / 10;
			console.log("Valor de diffLevel", this.diffLevel);
		}
		console.log('Catch count =', this.catchCount);
	}

	checkCaughtShapes(physics){
		// This function is called from the Ticker to continually check for
		// good catches

		game.fsArray.map((item) => {
			if (item.crashFlag === true){
				// Look for all bodies in game.fsArray with crashFlag === true and
				// increase secondsOnPaddle by one every second (timing controlled by Ticker
				// call)
				item.secondsOnPaddle ++;
				if (item.secondsOnPaddle >= 3){
					// Check if secondsOnPaddle >= 3. If so, we need to destroy the ball
					// even if it's fallen off the bar. The destroy function will update
					// the game score 
					this.destroyShape(physics, item.body, 'good-catch');
				}
			}
		});

	}

	updateGameBars(){
		var catchDelta = this.catchCount - this.catchSquareArray.length;
		var strikesDelta = this.strikesLeft - this.strikesSquareArray.length;
		this.catchCount <= this.levelCatchLimit + 1 ? this.matchBarArrays(catchDelta, 'catch-bar') : true;
		this.matchBarArrays(strikesDelta, 'strikes-bar');

		// Update values in gameVue
		gameVue.gameSummary.diffLevel = this.levelCount;
		gameVue.gameSummary.catchCount = this.catchCount;
		gameVue.gameSummary.strikesLeft = this.strikesLeft;
		gameVue.gameSummary.globalScore = this.globalScore;


		gameVue.gameSummary.catchSquareArray = this.catchSquareArray;
		gameVue.gameSummary.strikesSquareArray = this.strikesSquareArray;
		console.log('Catch Array', gameVue.gameSummary.catchSquareArray);
		console.log('Strikes Array', gameVue.gameSummary.strikesSquareArray);
	}

	matchBarArrays(delta, barType){
		if (delta < 0) {
			for (i = 0; i < Math.abs(delta); i++){
				// Remove array elements until quantities match
				if (barType === 'catch-bar'){
					game.catchSquareArray.pop();
				} else {
					game.strikesSquareArray.pop();
				}
			}
		} else if (delta > 0){
			for (i = 0; i < Math.abs(delta); i++){
				// Add array elements until quantities match
				if (barType === 'catch-bar'){
					game.catchSquareArray.push('x');
				} else {
					game.strikesSquareArray.push('x');
				}                
			}
		}
	}
}

class FallingShape {
	constructor(shapeType, size, diffFactor, physics){
		this.shapeType = shapeType;
		this.size = size;
		this.physics = physics;
		this.friction = .7;
		// Restitution limited to 2, otherwise shapes would bounce outside the
		// top of the canvas and higher levels would actually turn easier
		this.restitution = .6 * (diffFactor > 2 ? 2 : diffFactor);
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
		} else {
			var asset = new Rectangle(this.size, this.size, '#f58e25')
				.centerReg();
			asset.cursor = "pointer";
		}
		return asset;

	}
	setStartPosition(){
		// The value of X should be a random between the start and the end
		// of the paddleController width
		this.body.x = 300 + Math.floor(Math.random() * 600);
		// console.log(this.body.x);
		this.body.y = 80;
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

	var barW = 500;
	var barH = 30;

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
	
	var bar = new Rectangle(barW, barH, frame.silver);
    bar.centerReg();
    bar.cursor = "pointer";
	
	// Must sinchronize position on the paddleControl, so keyboard control
	// doesn't fail when first moved
	paddleControl.updateCoordinates(600, 500, paddleBody);
	
	// Falling shapes
	// var circle2 = new FallingShape('circle', fsSize, diffFactor, physics);
	var circle2 = game.generateFallingShape(physics);
	var rectangle2 = game.generateFallingShape(physics);

	// USING TICKER TO GENERATE FALLING SHAPES
	// physics.Ticker.add(function);
	// physics.Ticker.remove(function);
	var tickCount = 0;
	physics.Ticker.add(() => {
		tickCount ++;
		if(game.strikesLeft > 0 && !game.gameOverFlag){
			// Count the number of strikes left. If they equal zero, call game
			// over function

			// Lower tick control values increase the frequency in which shapes
			// are dropped
			var tickControl = 30 - (game.diffLevel * 5); // Reasonably eaasy to get to level 9
			// var tickControl = 25 - (game.diffLevel * 4); // Difficult since level 2

			
			if(tickCount % tickControl === 0) {
				// Flip a coin to see if we drop a shape or not
				var coin = Math.floor(Math.random()*2);
				if (coin === 1 && !game.pauseFlag){
					// Coin has spoken! Let's generate a random shape and let it
					// fall
					// console.log('Message from Ticker');
					game.generateFallingShape(physics);
					physics.addMap(game.fsArray[game.fsCount - 1].body, game.fsArray[game.fsCount - 1].asset);
					}
				}
		} else {
			console.log('Game Over');
			game.gameOver();
			physics.dispose();
		}
		});

		tickCountCatch = 0;
		physics.Ticker.add(() => {
			tickCountCatch ++;
			if(tickCountCatch % 30 === 0) {
				// console.log('Message from Ticker');
			game.checkCaughtShapes(physics);
		}
	})
	
	// Set optional mouse dragging
	// optionally pass in a list of bodies to receive mouse movement
	// otherwise defaults to all moveable bodies
	// physics.drag([boxBody, triangleBody]); // would not drag circleBody
	physics.drag();



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
			var handY = (height * 1.1 - indexFingerY * motionScaleRate);

			// Use specific methods on the HandController object to update
			// positions read from the leap motion device
			paddleControl.updateRollAngle(indexFingerX,indexFingerY, pinkyFingerX, pinkyFingerY, paddleBody);
			paddleControl.updateCoordinates(handX, handY, paddleBody);
			
			// console.log('X:', paddleBody.x, 'Y:', paddleBody.y);
			// console.log('X:', paddleControl.x, 'Y:', paddleControl.y);	
		}
	}); // end of Leap loop

	// Keyboard input
	window.addEventListener('keydown', e => {
		var inc = 50;
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

	// It does not seem to make a difference wether if we use BeginContact or
	// EndContact for shape deletion
	contactListener.EndContact = function(e) {
		// console.log('Contact Started with',e.m_fixtureA.m_body);
		// console.log(e.m_fixtureA, e.m_fixtureB); 

		// Check if paddle was hit, then determine if crash event stored the
		// paddle in either fixtureA or fixtureB (it's not always consistent)
		var fsCrashed = '';
		if(e.m_fixtureA.m_body === paddleBody){
			// console.log('paddleBody Hit');
			fsCrashed = e.m_fixtureB.GetBody();
		} else if(e.m_fixtureB.m_body === paddleBody) {
			// console.log('paddleBody Hit');
			fsCrashed = e.m_fixtureA.GetBody();
		}

		// TODO: Query game.fsArray inside a function in game instead 
		// Query game.fsArray for the shape that has just touched the paddleBody
		// (fsCrashed) and set crashFlag = true
		game.fsArray.map((item) => {
			if (fsCrashed === item.body){
				item.crashFlag = true;
			}
		});

		// Check if paddle was hit, then determine if crash event stored the
		// paddle in either fixtureA or fixtureB (it's not always consistent)

		var fsDropped = '';
		if(e.m_fixtureA.m_body.height > 300){
			// console.log('stage Hit');
			fsDropped = e.m_fixtureB.GetBody();
			game.destroyShape(physics, fsDropped, 'touched-ground');
		} else if(e.m_fixtureB.m_body.height > 300) {
			// console.log('stage Hit');
			fsDropped = e.m_fixtureA.GetBody();
			game.destroyShape(physics, fsDropped, 'touched-ground');
		}
		// TODO: Only remove shapes if their Y is close to the ground (this will
		// help us ensuring shapes only get distructed when they hit the ground)


	}

	// contactListener.EndContact = function(e) {
		// console.log('Contact Ended');

	// }

	// set the contact listener on the world
	world.SetContactListener(contactListener);

		
}); // end of ready
