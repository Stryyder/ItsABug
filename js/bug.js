window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

	// Constants and variables
		const cvs = document.getElementById('board').getContext('2d');;
		const unitsOfMovement = 20;             // Unit of movement within game
		const gameSpeed = 100;          // Interval of Redraw
		const scoreIncrease = 1;        // Unit of score increase
					
			// Gravestone locations [ [Location , x , y][Location, x, y] ]
				var gravestones = [];
			
			// How many points between additional enemy spawns
				var enemySpawningScale=200;
			
			// Current Badlib
				var badlib = {
					saying:"",
					toggle:false
				};
			
			// Current Soundtrack
				var gameTrack = "title";
			
			// Show extra status for troubleshooting
				var debugMode = 0;
			
			// Pause sound flag
				var sndPause = 0;
			
			// Game's Characters and Objects	
				var border = {
					minX:20,
					maxX:580,
					minY:20,
					maxY:580
				};	

				var shopkeeper = {
					saying:"test",
					name:"McMiccam",
					randomSaying:0,
					toggle:false
				};		
		
				var coin = {
					x:100,
					y:100
				
				};
				
				var rock = {
					x:100,
					y:100
				
				};
				
				var water = {
					x:100,
					y:100
				
				};
				
				var snowball = {
					x:100,
					y:100
				
				};
				
				var clod = {
					x:100,
					y:100
				
				};
				
				
				var megaCoin = {
					x:200,
					y:100
				
				};
				var bomb = {
					x:300,
					y:300
				
				};
				var shield = {
					x:400,
					y:400
				
				};
		
				var player = {
					x:420,
					y:320,
					l:"town",
					deaths:0,
					toggle:true,
					level:0,
					score:0,
					coins:0,
					rocks:0,
					waters:0,
					clods:0,
					snowballs:0,
					timeAlive: 0,
					shield: false
				};
	
		
			// Template for Enemies
			var spawnLevel = 1; var enableSpawning = false; 
				var enemy = [
					[200, 580], // Enemy1 coords, level up causes push to this array (add enemy)
				
				];
				
				

/* =========== L O A D   A S S E T S=====================>>>>> TITLE SCREEN */	
		// Graphics
			let imgGameStart = new Image(); imgGameStart.src = "img/gameStart.png";
			let imgPlayer = new Image(); imgPlayer.src = "img/player.png";
			let imgPlayerShielded = new Image(); imgPlayerShielded.src = "img/playerShielded.png";
			let imgGrass = new Image();	imgGrass.src = "img/grass.png";
			let imgTown = new Image(); imgTown.src = "img/town.png";
			let imgCave = new Image(); imgCave.src = "img/cave.png";
			let imgLava = new Image(); imgLava.src = "img/lava.png";
			let imgSnow = new Image(); imgSnow.src = "img/snow.png";
			let imgScore = new Image();	imgScore.src = "img/score.png";
			let enemyPlayer = new Image(); enemyPlayer.src = "img/enemy.png";
			let enemyPlayer2 = new Image(); enemyPlayer2.src = "img/enemy2.png";
			let enemyPlayer3 = new Image(); enemyPlayer3.src = "img/enemy3.png";
			let enemyPlayer4 = new Image(); enemyPlayer4.src = "img/enemy4.png";
			let enemyPlayer5 = new Image(); enemyPlayer5.src = "img/enemy5.png";
			let enemyPlayer6 = new Image(); enemyPlayer6.src = "img/enemy6.png";
			let enemyPlayer7 = new Image(); enemyPlayer7.src = "img/enemy7.png";
			let enemyPlayer8 = new Image(); enemyPlayer8.src = "img/enemy8.png";
			let enemyPlayer9 = new Image(); enemyPlayer9.src = "img/enemy9.png";
			let enemyPlayer10 = new Image(); enemyPlayer10.src = "img/enemy10.png";
			let imgGrave = new Image(); imgGrave.src = "img/grave.png";
			let imgShop = new Image(); imgShop.src = "img/mcmicam.png";
			let imgCoin = new Image(); imgCoin.src = "img/coin.png";
			let imgMegaCoin = new Image(); imgMegaCoin.src = "img/megaCoin.png";
			let imgBomb = new Image(); imgBomb.src = "img/bomb.png";
			let imgShield = new Image(); imgShield.src = "img/shield.png";
			let imgRock = new Image(); imgRock.src = "img/rock.png";
			let imgWater = new Image(); imgWater.src = "img/water.png";
			let imgClod = new Image(); imgClod.src = "img/clod.png";
			let imgSnowball = new Image(); imgSnowball.src = "img/snowball.png";
		
		// Load or play audio
			let sndFootstep = new Audio(); sndFootstep.src ="snd/footstep.mp3"; 
			let sndDeath = new Audio();	sndDeath.src ="snd/death.mp3";
			let sndGrass = new Audio();	sndGrass.src = "snd/grass.mp3";
			let sndCave = new Audio(); sndCave.src = "snd/cave.mp3";
			let sndLava = new Audio(); sndLava.src = "snd/lava.wav";
			let sndSnow = new Audio(); sndSnow.src = "snd/snow.mp3";
			let sndTown = new Audio(); sndTown.src = "snd/town.mp3";
			let sndShop = new Audio(); sndShop.src = "snd/shop.mp3";
			let sndWin = new Audio(); sndWin.src = "snd/win.mp3";
			let sndLevelUp = new Audio(); sndLevelUp.src = "snd/levelUp.mp3";
			let sndCoin = new Audio(); sndCoin.src = "snd/collectCoin.wav";
			let sndMegaCoin = new Audio(); sndMegaCoin.src = "snd/collectMegaCoin.wav";
			let sndBomb = new Audio(); sndBomb.src = "snd/bomb.mp3";
			let sndShield = new Audio(); sndShield.src = "sndNate/shield.mp3";
			let sndZap = new Audio(); sndZap.src = "sndNate/zap.wav";
			let sndRock = new Audio(); sndRock.src = "snd/rock.wav";
			let sndWater = new Audio(); sndWater.src = "snd/water.wav";
			let sndClod = new Audio(); sndClod.src = "snd/clod.wav";
			let sndSnowball = new Audio(); sndSnowball.src = "snd/snowball.wav";
			let sndTitle = new Audio(); sndTitle.src = "snd/title.mp3"; sndTitle.loop=true;
		// 540 x 280 cave to lava
			
/* =========== K E Y    D O W N =========================>>>>> PLAY LOOPS */
function gameTitleScreen(){
			window.addEventListener("keydown", direction); // Listen for Arrows to move game forward
			cvs.drawImage(imgGameStart, 0, 0);             // draw title screen image
			sndTitle.play();                               // play title soundtrack
	}
	
function playGame(){	
			sndTitle.pause();   // Turn title music off and begin game loops
			setInterval(draw, gameSpeed, player.x, player.y, enemy.x, enemy.y); // main draw game loop
				
				// play music only if not paused sound
					if (sndPause == 0){
						setInterval(bgMusic, 1000); 
					} 				
				// coin loop	
					setInterval(placeCoin, 30000); 
				// Mega coin loop	
					setInterval(placeMegaCoin, 60000); 
				// shield loop	
					setInterval(placeShield, 40000); 
				// bomb loop	
					setInterval(placeBomb, 35000); 
					
				// rock loop	
					setInterval(placeRock, 45000); 
				// water loop	
					setInterval(placeWater, 44000);
				// clod loop	
					setInterval(placeClod, 43000);
				// snowball loop	
					setInterval(placeSnowball, 42000);
					

	}

	
function placeSnowball(){
	if (player.l == "snow"){
		snowball.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
		snowball.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}
}	
	
	
function placeClod(){
	if (player.l == "grass"){
		clod.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
		clod.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}
}

	
function placeWater(){
	if (player.l == "lava"){
		water.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
		water.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}
}	
	
	
function placeRock(){
	if (player.l == "cave"){
		rock.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
		rock.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}else {
		rock.x = 240; rock.y = 655;
		return;}
}						
function placeCoin(){
			coin.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
			coin.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}
function placeMegaCoin(){
			megaCoin.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
			megaCoin.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}
function placeShield(){
	if (player.shield){ return;}
			shield.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
			shield.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}
function placeBomb(){
			bomb.x = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
			bomb.y = (unitsOfMovement * (Math.floor(Math.random() * 29) + 1));
	}
function bgMusic(){
	
	( !sndPause && switchMusic() ); // if music is paused, skip this function
		
		function switchMusic(){
			
			switch(player.l){
				
				case "town":
					sndTown.play();
					sndGrass.pause();
					sndShop.pause();
					sndCave.pause();
					sndLava.pause();
					sndSnow.pause();
					break;
			
				case "shop":
					sndShop.play();
					sndTown.pause();
					break;
				
				case "grass":
					sndTown.pause();
					sndGrass.play();
					sndCave.pause();
					sndSnow.pause();
					break;
			
	
				case "cave":
					sndCave.play();
					sndGrass.pause();
					sndLava.pause();
					break;
					
				case "lava":
					sndLava.play();
					sndCave.pause();
					break;
					
				case "snow":
					sndSnow.play();
					sndGrass.pause();
					break;
			}
		}
		
}

	function direction(event){
	let key = event.keyCode;
	
	// detect to start the game from Title Screen
	if (gameTrack == "title"){
		gameTrack = "play";
		playGame();
	}
	
	if(key == 37 && player.l != "shop"){
		// LEFT
		player.x -= unitsOfMovement;
		
	}else if(key == 38 && player.l != "shop"){
		// UP
		player.y -= unitsOfMovement;
		
	}else if(key == 39 && player.l != "shop"){
		// RIGHT
		player.x += unitsOfMovement;
		
	}else if(key == 40 && player.l != "shop"){
		// DOWN
		player.y += unitsOfMovement;
		
	}else if(key == 27){
		// ESCAPE KEY
		// Leave the shop or do nothing
		if (player.l=="shop"){
			player.l = "town";
			player.toggle = true;
			shopkeeper.toggle = false;
			player.x=140; 
			player.y=120;
			}
	}else if(key == 97){
		// NUMPAD 1
		if (debugMode == 1){ debugMode = 0; return;}
		if (debugMode == 0){ debugMode = 1; return;}
	}else if(key == 105){
		// NUMPAD 9
		
		if (sndPause == 0){	
			sndTown.pause(); 
			sndGrass.pause();
			sndCave.pause(); 
			sndLava.pause();
			sndSnow.pause();
			sndShop.pause();	
			sndFootstep.pause();
			sndPause = 1;
		}
	}
	
	if (enableSpawning && player.l == "grass"){ player.score += scoreIncrease;	}
	if (enableSpawning && player.l == "cave"){ player.score += scoreIncrease * 2;	}
	if (enableSpawning && player.l == "snow"){ player.score += scoreIncrease * 3;	}
	
	
	
	checkPlayerLocation();
	detectHit();
	sndFootstep.play();
}

	function checkPlayerLocation(){

		
		function setEnemyCaveChaseCoordinates(){ 
			for (var i = 0; i < enemy.length; i++){
				enemy[i][0] = 40; enemy[i][1] = 40;
			}
		}
		function setEnemySnowChaseCoordinates(){ 
			for (var i = 0; i < enemy.length; i++){
				enemy[i][0] = 300; enemy[i][1] = 240;
			}
		}
		function setEnemyGrassChaseCoordinates(){ 
			for (var i = 0; i < enemy.length; i++){
				enemy[i][0] = 560; enemy[i][1] = 560;
			}
		}
	// Movement between maps
	switch(player.l){
		case "shop":
			function shopOperation(){
				
				// Enter Town
				if (player.x == 280 && player.y == 540){
					player.l="town"; 
					player.x=140; 
					player.y=120; 
			
					// Allow random saying function to get a new saying
						shopkeeper.toggle = false;
					// Turn visibility of player back on when we leave
						player.toggle = true;
						sndPause = 0;
				}		

			}
			
				shopOperation();
				break; 	
	
		case "town":
			function townOperation(){
				resetEnemyCoordinates();
				// Enter Grassy Area
				if (player.x == 580 && player.y == 360){
					player.l="grass"; 
					player.x=60; 
					player.y=60; 
					sndPause = 0;
					enableSpawning = true;
				}
				
				// going into the shop
				if (player.x == 140 && player.y == 100){
					player.l="shop"; 
					player.x=300; 
					player.y=560;
					player.toggle = false;
					sndPause = 0;
				}
			}
			
				townOperation();
				break; 

		case "grass":
		
			function grassOperation(){
				
				// Enter Town
					if (player.x == 40 && player.y == 40){
						player.l="town"; 
						player.x=560; 
						player.y=340; 
						sndPause = 0;
						enableSpawning = false;
						resetEnemyCoordinates();
						return;
					}
				
				// Enter Cave
					if (player.x == 560 && player.y == 560){
						player.l="cave"; 
						player.x=100; 
						player.y=100; 
						sndPause = 0;
						setEnemyCaveChaseCoordinates();
						
						return;
					}
					
					
				// Enter Snow
					if (player.x == 560 && player.y == 40){
						player.l="snow"; 
						player.x = 60; 
						player.y = 520; 
						sndPause = 0;
						setEnemySnowChaseCoordinates();
						
						return;
					}
					
				/* Show Gravestones
					for (var i = 0; i <= gravestonesGrass.length; i++){
						for (var j = 0; j <= 2; j++){
							cvs.drawImage(imgGrave, gravestonesGrass[i][0], gravestonesGrass[i][1]);
						}
					} */		
			}
			
				grassOperation();
				break; 
	
		case "cave":
			
			function caveOperation(){	
				
				// Enter Grass
					if (player.x == 40 && player.y == 40){
						player.l="grass"; 
						player.x=500; 
						player.y=500; 
						sndPause = 0;
						setEnemyGrassChaseCoordinates();
						return;
				}	
				
									
				// Enter Lava
					if (player.x == 560 && player.y == 280){
						player.l="lava"; 
						player.x = 560; 
						player.y = 80; 
						sndPause = 0;
						enableSpawning = false;
						
						return;
					}
				
				/* Show Gravestones
				for (var i = 0; i <= gravestonesCave.length; i++){
					for (var j = 0; j <= 2; j++){
						cvs.drawImage(imgGrave, gravestonesCave[i][0], gravestonesCave[i][1]);
					}
				} */
			}
			
				caveOperation();
				break; 
				
		case "snow":
			
			function snowOperation(){	
				
				// Enter Grass
				if (player.x == 40 && player.y == 560){
					player.l="grass"; 
					player.x=500; 
					player.y=40; 
					sndPause = 0;
					resetEnemyCoordinates();
					return;
				}	
				
				/* Show Gravestones
				for (var i = 0; i <= gravestonesCave.length; i++){
					for (var j = 0; j <= 2; j++){
						cvs.drawImage(imgGrave, gravestonesCave[i][0], gravestonesCave[i][1]);
					}
				} */
			}
			
				snowOperation();
				break;
		
		case "lava":
			
			function lavaOperation(){	
				
				// Enter Cave
				if (player.x == 540 && player.y == 40){
					player.l="cave"; 
					player.x=520; 
					player.y=60; 
					sndPause = 0;
					resetEnemyCoordinates();
					enableSpawning = true;
					return;
				}

				// Enter Diamond
				if (player.x == 20 && player.y == 580){
						
						badlib.saying = "It's just a diamond, no big deal right? You have nothing to break it.";
					
					return;
				}					
				
				/* Show Gravestones
				for (var i = 0; i <= gravestonesCave.length; i++){
					for (var j = 0; j <= 2; j++){
						cvs.drawImage(imgGrave, gravestonesCave[i][0], gravestonesCave[i][1]);
					}
				} */
			}
			
				lavaOperation();
				break;
		
		
		default:
		break;
	}
}	


function enemyAI(){
	var movAI=0;
	// Skip Enemy AI if in town
		if (player.l == "town"){ return; }
	
	// Pick a random number
		movAI = Math.floor(Math.random() * 14) + 1;
	
	// Enemy AI behavior based on random number
		switch (movAI){
			case 1:
				enemy[0][0] += unitsOfMovement;
				if (spawnLevel >= 2){enemy[1][1] += unitsOfMovement;}
				if (spawnLevel >= 3){enemy[2][1] += unitsOfMovement;}
				if (spawnLevel >= 4){enemy[3][0] += unitsOfMovement;}
				if (spawnLevel >= 5){enemy[4][1] += unitsOfMovement;}
				if (spawnLevel >= 6){enemy[5][1] += unitsOfMovement;}
				if (spawnLevel >= 7){enemy[6][0] += unitsOfMovement;} 
				if (spawnLevel >= 8){enemy[7][1] += unitsOfMovement;}
				if (spawnLevel >= 9){enemy[8][1] += unitsOfMovement;}
				
				break;
						
			case 2:
				enemy[0][0] -= unitsOfMovement;
				if (spawnLevel >= 2){enemy[1][1] -= unitsOfMovement;}
				if (spawnLevel >= 3){enemy[2][0] -= unitsOfMovement;}
				if (spawnLevel >= 4){enemy[3][1] -= unitsOfMovement;}
				if (spawnLevel >= 5){enemy[4][0] -= unitsOfMovement;}
				if (spawnLevel >= 6){enemy[5][0] -= unitsOfMovement;}
				if (spawnLevel >= 7){enemy[6][0] -= unitsOfMovement;}
				if (spawnLevel >= 8){enemy[7][0] -= unitsOfMovement;}
				if (spawnLevel >= 9){enemy[8][1] -= unitsOfMovement;}
				
				break;
						
			case 3:
				enemy[0][1] += unitsOfMovement;
				if (spawnLevel >= 2){enemy[1][0] += unitsOfMovement;}
				if (spawnLevel >= 3){enemy[2][0] += unitsOfMovement;}
				if (spawnLevel >= 4){enemy[3][1] += unitsOfMovement;}
				if (spawnLevel >= 5){enemy[4][0] += unitsOfMovement;}
				if (spawnLevel >= 6){enemy[5][0] += unitsOfMovement;}
				if (spawnLevel >= 7){enemy[6][1] += unitsOfMovement;}
				if (spawnLevel >= 8){enemy[7][1] += unitsOfMovement;}
				if (spawnLevel >= 9){enemy[8][0] += unitsOfMovement;}
				
						
			case 4:
				enemy[0][1] -= unitsOfMovement;
				if (spawnLevel >= 2){enemy[1][0] -= unitsOfMovement;}
				if (spawnLevel >= 3){enemy[2][1] -= unitsOfMovement;}
				if (spawnLevel >= 4){enemy[3][0] -= unitsOfMovement;}
				if (spawnLevel >= 5){enemy[4][1] -= unitsOfMovement;}
				if (spawnLevel >= 6){enemy[5][1] -= unitsOfMovement;}
				if (spawnLevel >= 7){enemy[6][1] -= unitsOfMovement;}
				if (spawnLevel >= 8){enemy[7][1] -= unitsOfMovement;}
				if (spawnLevel >= 9){enemy[8][0] -= unitsOfMovement;}
				
				break;
						
			case 5:
			case 6:
			case 7:
			case 8:
			
				chase();
				break;
				
			case 9:
				// do nothing
				break;
				
			case 10:
				enemy[0][0] -= unitsOfMovement;
				break;
			case 11:
				enemy[0][1] -= unitsOfMovement;
				break;
			case 12:
			if (spawnLevel >= 2){enemy[1][0] -= unitsOfMovement;}
				break;	
			case 13:
			if (spawnLevel >= 2){enemy[1][1] -= unitsOfMovement;}
				break;
			case 14:
			if (spawnLevel >= 3){enemy[2][0] -= unitsOfMovement;}
				break;	
			case 15:
			if (spawnLevel >= 3){enemy[2][1] -= unitsOfMovement;}
				break;
			case 16:
			if (spawnLevel >= 4){enemy[3][0] -= unitsOfMovement;}
				break;	
			case 17:
			if (spawnLevel >= 4){enemy[3][1] -= unitsOfMovement;}
				break;
			case 18:
			if (spawnLevel >= 5){enemy[4][0] -= unitsOfMovement;}
				break;	
			case 19:
			if (spawnLevel >= 5){enemy[4][1] -= unitsOfMovement;}
				break;
			case 20:
			if (spawnLevel >= 6){enemy[5][0] -= unitsOfMovement;}
				break;	
			case 21:
			if (spawnLevel >= 6){enemy[5][1] -= unitsOfMovement;}
				break;
			case 22:
			if (spawnLevel >= 7){enemy[6][0] -= unitsOfMovement;}
				break;	
			case 23:
			if (spawnLevel >= 7){enemy[6][1] -= unitsOfMovement;}
				break;
			case 24:
			if (spawnLevel >= 8){enemy[7][0] -= unitsOfMovement;}
				break;	
			case 25:
			if (spawnLevel >= 8){enemy[7][1] -= unitsOfMovement;}
				break;
			case 26:
			if (spawnLevel >= 9){enemy[8][0] -= unitsOfMovement;}
				break;	
			case 27:
			if (spawnLevel >= 9){enemy[8][1] -= unitsOfMovement;}
				break;				
		}	
	}
		
function chase(){
	
		// If in playable area get closer to player
			for (var i = 0; i < enemy.length; i++){
				if (enemy[i][0] < player.x){enemy[i][0] += unitsOfMovement;}
				if (enemy[i][1] < player.y){enemy[i][1] += unitsOfMovement;}
				if (enemy[i][0] > player.x){enemy[i][0] -= unitsOfMovement;} 
				if (enemy[i][1] > player.y){enemy[i][1] -= unitsOfMovement;}
			}
		
		//See if enemy hit anything important
			detectHit();
	}

function detectHit(){

	
		// loops through all enemies to make sure they can't leave map
			for (var i = 0; i < enemy.length; i++){
				if (enemy[i][0] <= border.minX){enemy[i][0] = border.minX;}
				if (enemy[i][0] >= border.maxX){enemy[i][0] = border.maxX;}
				if (enemy[i][1] <= border.minY){enemy[i][1] = border.minY;}
				if (enemy[i][1] >= border.maxY){enemy[i][1] = border.maxY;}
				
			}

		// Player Collides with Wall
			if (player.x <= border.minX){player.x = border.minX;}		
			if (player.y <= border.minY){player.y = border.minY;}		
			if (player.x >= border.maxX){player.x = border.maxX;}		
			if (player.y >= border.maxY){player.y = border.maxY;}
			

			
		// Enemies kill player
			
			switch (player.shield){
				
				case false:
					if (enableSpawning){
						for (var i = 0; i < enemy.length; i++){
							if (enemy[i][0] == player.x && enemy[i][1] == player.y){
											
											sndDeath.play();
											player.deaths += 1;
											player.score -= (100 * spawnLevel);
											//gravestoneGrass.push([enemy.x, enemy.y]);
											//gravestoneCave.push([enemy.x, enemy.y]);
											player.l = "town"; player.x = 40; player.y = 540;
											resetEnemyCoordinates();
											enableSpawning = false;
											badlibGenerator();
											badlib.toggle = false;
											// placeGravestone();
								
							}	
						}
					}	
				break;
				
				case true:
				if (enableSpawning){
						for (var i = 0; i < enemy.length; i++){
							if (enemy[i][0] == player.x && enemy[i][1] == player.y){
								sndZap.play();
								player.shield = false;
								resetEnemyCoordinates();
							}
						}
				}
			}
		// Player eats coin	
			if (player.x == coin.x && player.y == coin.y){
				player.score +=25;
				player.coins += 1;
				sndCoin.play();
				placeCoin();
			} 
			
		// Player eats rock	
			if (player.x == rock.x && player.y == rock.y){
				player.score +=25;
				player.rocks += 1;
				sndRock.play();
				placeRock();
			}

		// Player eats water	
			if (player.x == water.x && player.y == water.y){
				player.score +=25;
				player.waters += 1;
				sndWater.play();
				placeWater();
			}

		// Player eats clod	
			if (player.x == clod.x && player.y == clod.y){
				player.score +=25;
				player.clods += 1;
				sndClod.play();
				placeClod();
			}

		// Player eats snowball	
			if (player.x == snowball.x && player.y == snowball.y){
				player.score +=25;
				player.snowballs += 1;
				sndSnowball.play();
				placeSnowball();
			}			
			
		
		// Player eats Mega coin	
			if (player.x == megaCoin.x && player.y == megaCoin.y){
				player.score +=35;
				player.coins += 10;
				sndMegaCoin.play();
				placeMegaCoin();
			}
			
		// Player eats shield
			if (player.x == shield.x && player.y == shield.y){
				player.score += 10;
				player.shield = true;
				sndShield.play();
				placeShield();
			} 
			
		// Player eats bomb	
			if (player.x == bomb.x && player.y == bomb.y){
				player.score -= 100;
				player.coins -= 10;
				sndBomb.play();
				player.shield = false;
				placeBomb();
				player.deaths += 1;
				player.score -= 10;
				//gravestoneGrass.push([enemy.x, enemy.y]);
				//gravestoneCave.push([enemy.x, enemy.y]);
				player.l = "town"; player.x = 40; player.y = 540;
				resetEnemyCoordinates();
				enableSpawning = false;
				// placeGravestone();
			} 
			
	}			
function resetEnemyCoordinates(){
	switch (player.l){
		
		case "grass":
		case "cave":
		case "town":
		case "lava":
		
			for (var i = 0; i < enemy.length; i++){
				enemy[i][0] = 200; enemy[i][1] = 580;
			}
		break;
		
		case "snow":
			
			for (var i = 0; i < enemy.length; i++){
				enemy[i][0] = 300; enemy[i][1] = 240;
			}
	}
}
function drawBackdrop(){
		
		
		if (player.l == "town") { 
				cvs.drawImage(imgTown, 0, 0);
				mapChange = 0;
			}else if (player.l == "grass"){ 
				cvs.drawImage(imgGrass, 0, 0);
				mapChange = 0;
			}else if (player.l == "cave") { 
				cvs.drawImage(imgCave, 0, 0);
				mapChange = 0;
			}else if (player.l == "snow") {
				cvs.drawImage(imgSnow, 0, 0);
				mapChange = 0;
			}else if (player.l == "lava"){
				cvs.drawImage(imgLava, 0, 0);
				mapChange = 0;
			}else if (player.l == "shop") {
				cvs.drawImage(imgShop, 0, 0);
				mapChange = 0;
			}
}			

function showStatus(){
	// Show Score and stop scoring if in town or shop
		cvs.drawImage(imgScore, 0, 620);
		
	
	// Display Player Score
		cvs.fillStyle = "orange";
		cvs.font = "16px Arial";
		cvs.fillText(player.score, 70,675);
		
	// Show Dies Count
		cvs.fillStyle = "maroon";
		cvs.font = "16px Arial";
		cvs.fillText(player.deaths, 70,655);
		
	// Show Level Count
		cvs.fillStyle = "green";
		cvs.font = "16px Arial";
		cvs.fillText(player.level, 70,635);
		
	// Show Coin Count
		cvs.fillStyle = "yellow";
		cvs.font = "16px Arial";
		cvs.fillText(player.coins, 190,700);
		
		// Show Rock Count
		cvs.fillStyle = "yellow";
		cvs.font = "16px Arial";
		cvs.fillText(player.rocks, 285,700);
		
			// Show Water Count
		cvs.fillStyle = "yellow";
		cvs.font = "16px Arial";
		cvs.fillText(player.waters, 370,700);
		
			// Show Clod Count
		cvs.fillStyle = "yellow";
		cvs.font = "16px Arial";
		cvs.fillText(player.clods, 445,700);
		
			// Show Snowball Count
		cvs.fillStyle = "yellow";
		cvs.font = "16px Arial";
		cvs.fillText(player.snowballs, 525,700);
		
		
	// Show Bad Lib
		cvs.fillStyle = "white";
		cvs.font = "12px Arial";
		cvs.fillText(badlib.saying, 180,645);
		
		
	
	// show a random saying in the shop	
		if (player.l == "shop"){
			cvs.fillStyle = "gold";
			cvs.font = "12px Arial";
			shopkeeperSays();
			badlib.saying = "";
			cvs.fillText(shopkeeper.saying, 180,645);
		}
	
	// HIDE DEBUG INFO BY DEFAULT	
	 (debugMode && showDebugMode()); // Toggle Debug Mode
		function showDebugMode(){
			cvs.fillStyle = "white";
			cvs.font = "10px Arial";
			cvs.fillText("px: " + player.x + 
						"| py: " + player.y + 
						"| spawnL: " + spawnLevel +
						"| Shield: " + player.shield +
						"| Rocks: " + player.rocks +
						"| Waters: " + player.waters +
						"| Clods: " + player.clods +
						"| Snowballs: " + player.snowballs +
						"| Level: " + player.level +
						"| Coins: " + player.coins, 20,615);
		}
	
}

function badlibGenerator(){
	if (badlib.toggle){ return; }
	
	var randAdjective = ["slimy", "poopy", "grimy", "stupid", "spanky", "stinky", "red", "green", "hairy", "freaky", "crazy", "idiotic", "slinky", "pokey", "cheesy", 
	"salty", "ish..y", "scary", "spooky", "green", "skeletaly", "fattening", "squeezy", "ploppy", "crappy", "random", "retarded","blue","round","triangular","fat..ish","skinny","ugly","stanky","stick licking","rabid","scabby","weird","scraggily","poop covered","poofy"
	,"stabby","cranky","creative","slanted","flattened","porous","booger-filled","slippery","slender-man-like","splitty","stabbish","nauseating", "sandwich-like", "pukey", "drooly", "splashy"
	,"pasty","ogre-like","moronic","orange","tangy","acrobatic","stacked up","crashy","slashy","crispy","poundy","cyan","purple","blurple","yoda-like","baggish","cramping","poopety","zebra-like","puppy-loving"
	];
	
	var randVerbage = ["pony", "rock", "poop", "plank", "car", "cow", "cramp", "video game",	"spleen", "liver", "hamburger", "elephant", "spiderman", "batman", "trail", "brownstreak man", 
	"mouse", "bus", "fat guy", "carpet", "spider", "ant", "crab", "crap", "stump", "pump", "ting","object","place","thing","person","idea","noun","adjective","verb","guy named Um","paper","rock","Donald Trump","Hillary Clinton"
	,"Rondal Mcdonald","printer","monitor","bag","stick","stuff","coyote","whale","monkey","rabbit","liver","onion","coffee maker","Gi-Uh-OOOO","panther","car","duck"
	,"road","tv","fireplace","wall","window","tree","panda","leaf","candy","calendar","toe","kneecap","elbow","zit","pimple","throat","pouch","intestine","dinner","lunch"
	];
	
	var randNouner = ["butt", "shoulder", "shoe", "sandwhich", "tail", "face", "eyeball", "foot", "plate", "chores", "Walter", "homework", "computer", "lamborghini", "video tape", 
	"horse", "school", "fork", "remote", "spoon", "knife", "poop log", "candle", "spandex", "shorts", "hairball", "tinkerbell","teeth","eyelashes","lips","ears","nose","buttcrack","weener","hot dog","sausage","bread","taco","meat","boots","pen","pencil"
	,"diamond","banana","hot sauce","gold","emerald","rock","coal","medal","pants","shirt","shoe","x-box controller","blinds","mailbox","semi-truck"
	,"laser","LED","robot","mechanical arm","battery","clock","star","typewriter","eyebrow","airplane","Pluto","peacock","spear","minigun","brick","tile","laugh","pootis","nothing","lint"
	];
	
	var randActions = ["stab", "punch", "breathe", "poop", "pee", "puke", "BARRF", "slap", "dance", "run", "trip", "eat", "fly", "shoot", "look", 
	"prance", "kick", "drizzle", "push", "pull", "stomp", "crash", "fart", "belch", "make rabies", "build a house", "crap","crinkle","squeeze","explode","wrinkle","be angry","scrape","poke","roast","pound","cry","crank","spit","throw a pie",
	"munch","razzle dazzle","sing","shout","spin","speak like a ding dong","make a big deal","plop","scrounge","Gi-Uh-OOO","filet","spread butter","spread jelly","puke water","throw bananas","plaster potatoes","perform lots of math"
	,"make a chart","make an idea","build a scream","sail a boat","screech like a bird","stand","do nothing","wiggle","squirm","do the baloney dance","yank","stroke","push and pull and poop","flake","make stitches","threaten","build a satchel","climb several mountains","ride a unicorn","play Halo 7"
	];
	
	var randAdverbs = ["sleepily", "angrily", "quickly", "sloppily", "dangerously", "scarily", ".. possibly", "precariously", "as fast as I can", "while dying", "swiftly", "impossibly", "crankily", "craftily", "squarely", 
	"like a Minecraft Pig named Goober", "quietly", "like a maniac", "like a terrible spider", "like a piece of cheese", "like a boss", "like a DAP Master", "with a vengeance", "like a crooked carrot", 
	"like a teenaged mutant ninja kitten", "like a sausage maker", "like a piece of German bread","like a piece of bacon","like a crazed bat","like a moose with only three legs","like a hamburger that is angry about being mad"
	,"like a pound of beef","like a ham sandwhich","like a banana sandwhich","like a terrible speller","like a beanbag baby","like a grain of sand with fleas on it","like a bakery that's on fire because there's too much water on it"
	,"like a bad flavor of soda","like a cranberry soup","like a pile of peas and carrots with puke on it","like a stick with eyes","like a super duper fat skinny guy","like a crayon that is happy about being angry"
	,"like a sad sack","like a youtube video that no one likes","like a huge ton of bricks that is lighter than air","like a pony with an attitude","like a beaver","like a booger","scratchily","squishily","like a disease","like John Cena","like Chuck Norris","like somebody you do not know","like a human turd"
	,"like a pound of raw worms","like a half pound of hairballs","like a sack of buttholes","like a cringe","like the grinch","like a master of baloney making","like a sandwhich with no bread","like a ghost","like a ton of buildings","like a poker player"
	,"like an angry kid","like an attitude that has an attitude","like part of a story that has never been told","like the end of a movie","like Batman","like Sponge Man","like Wonderwoman","like Wolverine","like a flower","like a knife that hates cutting things"
	];
	
	var randStructStart = ["I have a ", "He has a ", "She has a ", "It has a ", "Those things over there have a ", "Shiny things have a "];
	
	
	var randNoun = Math.floor(Math.random() * 75) + 1;
	var randVerb = Math.floor(Math.random() * 75) + 1;
	var randAdj = Math.floor(Math.random() * 75) + 1;
	var randAction = Math.floor(Math.random() * 75) + 1;
	var randAdverb = Math.floor(Math.random() * 75) + 1;
	//var randNoun2 = Math.floor(Math.random() * 75) + 1;
	//var randVerb2 = Math.floor(Math.random() * 75) + 1;
	//var randAdverb2 = Math.floor(Math.random() * 75) + 1;
	var randStruct1 = Math.floor(Math.random() * 5) + 1;
	
	badlib.saying = randStructStart[randStruct1] + randAdjective[randAdj] + " " + randVerbage[randVerb] + " on my " + randNouner[randNoun] + ".";
	badlib.toggle = true;
	 
	
}
	
function draw(){
	
		drawBackdrop();
		showStatus();
		levelUp();
		drawCharacters();
		drawCoins();
		drawMegaCoins();
		drawCurrencies();
		drawShields();
		drawBombs();
		
		//drawGravestones();

									
function drawCharacters(){
	// Draw Player if not in shop
		if (player.toggle && player.shield == false){
			cvs.drawImage(imgPlayer, player.x, player.y);
		}else if (player.toggle && player.shield == true){
			cvs.drawImage(imgPlayerShielded, player.x, player.y);
		}
	
		if (enableSpawning){
			
			
			if (spawnLevel >= 1){cvs.drawImage(enemyPlayer, enemy[0][0], enemy[0][1]);} // draw enemy at level 1
			if (spawnLevel >= 2){cvs.drawImage(enemyPlayer2, enemy[1][0], enemy[1][1]);}
			if (spawnLevel >= 3){cvs.drawImage(enemyPlayer3, enemy[2][0], enemy[2][1]);}
			if (spawnLevel >= 4){cvs.drawImage(enemyPlayer4, enemy[3][0], enemy[3][1]);}
			if (spawnLevel >= 5){cvs.drawImage(enemyPlayer5, enemy[4][0], enemy[4][1]);}
			if (spawnLevel >= 6){cvs.drawImage(enemyPlayer6, enemy[5][0], enemy[5][1]);}
			if (spawnLevel >= 7){cvs.drawImage(enemyPlayer7, enemy[6][0], enemy[6][1]);}
			if (spawnLevel >= 8){cvs.drawImage(enemyPlayer8, enemy[7][0], enemy[7][1]);}
			if (spawnLevel >= 9){cvs.drawImage(enemyPlayer9, enemy[8][0], enemy[8][1]);}
			if (spawnLevel >= 10){cvs.drawImage(enemyPlayer10, enemy[9][0], enemy[9][1]);}
			
			enemyAI();
		}
}

function drawCoins(){
	// Draw Coin if not in town or shop
		if (enableSpawning){
				cvs.drawImage(imgCoin, coin.x, coin.y);
			}else {
				coin.x = 160; 
				coin.y = 655;
			}
		
}

function drawCurrencies(){
	// Draw currencies when in appropriate areas
		if (player.l == "cave"){
				cvs.drawImage(imgRock, rock.x, rock.y);
		}else if (player.l == "snow"){
				cvs.drawImage(imgSnowball, snowball.x, snowball.y);
		}else if (player.l == "grass"){
				cvs.drawImage(imgClod, clod.x, clod.y);
		}else if (player.l == "lava"){
				cvs.drawImage(imgWater, water.x, water.y);
		}else {
				rock.x = 240; rock.y = 655;
				snowball.x = 260; snowball.y = 655;
				clod.x = 280; clod.y = 655;
				water.x = 300; water.y = 655;
			}
		
}

function drawMegaCoins(){
	// Draw Mega Coin if not in town or shop
		if (enableSpawning){
				cvs.drawImage(imgMegaCoin, megaCoin.x, megaCoin.y);
			}else {
				megaCoin.x = 180; 
				megaCoin.y = 655;
			}
		
}
function drawShields(){
	// Draw shield if not in town or shop and avoid drawing if shield is already worn
	
		if (enableSpawning && player.shield == false){
				cvs.drawImage(imgShield, shield.x, shield.y);
			}else {
				shield.x = 200; 
				shield.y = 655;
			}
		
}
function drawBombs(){
	// Draw Bomb if not in town or shop
		if (enableSpawning){
				cvs.drawImage(imgBomb, bomb.x, bomb.y);
			}else {
				bomb.x = 220; 
				bomb.y = 655;
			}
		
}	

	
}


function levelUp(){
					

			// Decide how many enemies to draw
			
			
		// decide level up cutoffs for the player
		if (player.score >= 500 && player.level == 0){	
			player.level=1; 
			sndLevelUp.play();
			enemy.push([200,580]);
			spawnLevel += 1;
			}
			
		if (player.score >= 1000 && player.level == 1){	
			player.level=2;	
			sndLevelUp.play();
			enemy.push([200,580]);
			spawnLevel += 1;
			}
			
		if (player.score >= 1500 && player.level == 2){	player.level=3;	sndLevelUp.play();enemy.push([200,580]);spawnLevel += 1;}
		if (player.score >= 2000 && player.level == 3){	player.level=4;	sndLevelUp.play();enemy.push([200,580]);spawnLevel += 1;}
		if (player.score >= 2500 && player.level == 4){	player.level=5;	sndLevelUp.play();enemy.push([200,580]);spawnLevel += 1;}
		if (player.score >= 3000 && player.level == 5){	player.level=6;	sndLevelUp.play();enemy.push([200,580]);spawnLevel += 1;}
		if (player.score >= 3500 && player.level == 6){	player.level=7;	sndLevelUp.play();enemy.push([200,580]);spawnLevel += 1;}
		if (player.score >= 4000 && player.level == 7){	player.level=8;	sndLevelUp.play();enemy.push([200,580]);spawnLevel += 1;}
		if (player.score >= 4500 && player.level == 8){	player.level=9;	sndLevelUp.play();enemy.push([200,580]);spawnLevel += 1;}
		if (player.score >= 5000 && player.level == 9){	player.level=10;}
			
		checkForVictory();
}

function checkForVictory(){
	if (player.level == 10){
		player.score = 0; 
		player.level = 0;
		enemy = [ [200,580]];
		spawnLevel = 1;
		resetEnemyCoordinates();
		sndWin.play();
	}
}
function shopkeeperSays(){
		
		// If we already have a saying, don't get another one
			if (shopkeeper.toggle){ return; }
		// Get a random number
		shopkeeper.randomSaying = Math.floor(Math.random() * 48) + 1;
		// Array of sayings
			var shopResponses = ["Wha? I wasn't sleeping. Whattya want?", 
							"Grumble grumble. Here's what you can buy.",
							"This is a shop. Here's what you can buy.",
							"I like potatoes.",
							"Boogers are delicious if you're a nasty dude.",
							"I want to tell you a secret.... but I don't have any.",
							"There are things to buy. Here they are buddy.",
							"AUUUUUUGHHHH!!!! I thought you were a zombie.",
							"In case I don't see ya, good afternoon, good evening, and good night!",
							"Get your fresh hot items here!",
							"I want to tell you why these are good. But I can't. I'm an idiot.",
							"I love eating oxygen. Wanna buy some stuff?",
							"These are planes. Well okay, you're right.. they aren't.",
							"I have a stomach. It's full of food.",
							"I'm gonna.... splash... a .... pony... with a ... parachute... pancake!",
							"Dude it's a shop bro. Just buy stuff already.",
							"I'm gonna spend all this money on lint.",
							"I'm gonna eat your gold koins for breakfast.",
							"I'm gonna puke randomly.",
							"I'm gonna poop my pants on purpose.",
							"I'm a big fat baby. I need your money for milk.",
							"I know math. I know a guy named Math.", 
							"I want to explode. But I can't. I don't know how.",
							"My eyeballs smell funny.",
							"I know how to chew things. I'm pretty good at it.",
							"I need to tell you something.. what I just said was it. That's it.",
							"My boots are made of fire.",
							"I hate chores. That's why I sell chore destroyer potions. Try them out!",
							"School sucks! Why do they want to make me smarter anyway?",
							"I hate learning. That's why I never learned how to walk.",
							"My brain is made of cheese.",
							"Wanna see me DAP? Well? Do you? Well I can't. I don't know what that is.",
							"I'm going to invent a game system called a Y-Box.",
							"My tv is broken. So I just look out the window.",
							"I ate a cheeseburger. It later came back and ate me.",
							"I have plastered a sandwhich with peanut butter. I then ate it. Are you proud of me?",
							"I am unbelievable. I'm the best shopkeeper that ever sat here. I have no legs.",
							"I'm saving up for a sandwhich. Give me all your money.",
							"If only I were rich ... I could buy some poorness.",
							"I accidentally ate the sun. I have heartburn.",
							"My poop is red. Is that bad?",
							"I want to rock and roll. I need a rocking chair and a ball.",
							"Mmmmmmm tater tots!",
							"Pepperoni!",
							"I like trains!",
							"Math is my favorite potato!",
							"Don't get your fingers all cheeeeessy!",
							"If you add twenty nine to thirty nine you get seven. I am absolutely positive about that."
						];
	
	
	shopkeeper.saying = "McMiccam: " + shopResponses[shopkeeper.randomSaying];
	shopkeeper.toggle = true;
		
	}