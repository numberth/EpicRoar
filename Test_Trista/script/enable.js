
/***************************************************************************************
 * This file contains functions enable and flipAll.
 * 
 * Enable function is made to be used to ensure that only when the cover tile is flipped can rotate happen.
 *
 * FlipAll function will flip all cover cards to reveal all tiles for 2 seconds.
 * 
 * @author Trista Huang
 * @version [1.0]
 ***************************************************************************************/

/**
 * Variable to allow or disallow a function.
 * @type {Boolean}
 */
var enable = false;
var detectLvl;

/**
 * Number of times that flipAll is allowed. It's set to 3 to start.
 * @type {Number}
 */
var allowedFlip = 3;

/**
 * Outputs the image for flip all according to the number of flips still allowed.
 */
function flipImg(){
	switch(allowedFlip){
		case 2:
			document.getElementById('allFlip').src = 'img/button_flipall_2.png';
			break;

		case 1:
			document.getElementById('allFlip').src = 'img/button_flipall_1.png';
			break;

		case 0:
			document.getElementById('allFlip').src = 'img/button_flipall_0.png';
			break;
		default:
			document.getElementById('allFlip').src = 'img/button_flipall_3.png';
			break;
	}
}

//temporary flip function for testing purposes
function flip2(id){
	var two = "twoByTwo_";
	for(var i=0; i < 16; i++){
			document.getElementById(two + i).style.zIndex = '-1';
			document.getElementById(id).style.zIndex = '1';
			enable = true;
		}
}

function flip02(id){
	var two = "twoByTwo_0";
	for(var i=0; i < 16; i++){
			document.getElementById(two + i).style.zIndex = '-1';
			document.getElementById(id).style.zIndex = '1';
			enable = true;
		}
}

function flip3(id){
if(clock.pause2 == false){
	var three = "threeByThree_";
	for(var i=0; i < 16; i++){
			document.getElementById(three + i).style.zIndex = '-1';
			document.getElementById(id).style.zIndex = '1';
			enable = true;
		}
	}else if(clock.pause2 == true){
		enable = false;
	}
}

function flip4(id){
	var four = "fourByFour_";
	for(var i=0; i < 16; i++){
			document.getElementById(four + i).style.zIndex = '-1';
			document.getElementById(id).style.zIndex = '1';
			enable = true;
		}
}

/**
 * Enable function is mostly made to ensure the road tiles can only be rotated when they are revealed.
 * This function detects the z-index of the cover tiles. 
 * When it is -1 (therefore road tiles show through), function is true, therefore rotate can happen.
 * (It is assumed that cover tile will start with z-index of 1, road tile with 0.)
 * /////////////////////////////
 * Function may not be used; only variable is being used to disable rotate when necessary.
 * /////////////////////////////
 * @param  {[ID input]} id [indicates the ID for which the function will be used.]
 * @return {[boolean]}    [indicates whether a function is allowed or not.]
 */
function enableFunction(id) {
	// var road_zIndex = document.getElementById(id).style.zIndex;
	// if(road_zIndex == '1') {	
	// 	enable = true;
	// 	alert('enabled'); 
	// } else if(road_zIndex != '1') {
	// 	enable = false;
	// 	alert('disabled');
	// }
	return enable;
}


/**
 * Function to flip all cover cards for (1.5) seconds for players to see all road cards.
 * It will automatically flip back the cover cards after (1.5) seconds.
 * 
 * Variable enable is set to false to make sure that rotate will not happen when all cover cards are flipped over.
 *
 * FlipAll can only happen when allowedFlip is more than 0.
 * FlipAll image will change according to the amount of flipAlls left.
 */
function flipAll(id){
if(allowedFlip > 0){
		enable = false;
		allowedFlip--;
		flipImg();
		setTimeout(function(){ flipAllBack(id);},1500);

		for(var i=0; i < 16; i++){
			document.getElementById(id + i).style.zIndex = 1;
		}
	}
}

/**
 * Function to flip all cover cards back over the rod tiles.
 * All road tiles will be assigned z-index of -1 to hide the road tiles.
 * 
 * It is called automatically by flipAll() after (1.5) seconds.
 */
function flipAllBack(id){
		for(var i=0; i < 16; i++){
			document.getElementById(id + i).style.zIndex = '-1';
		}
}

/**
 * Flips all cards over after routes have been connected. 
 * Temporary place holder until function is created for only flipping over the solution path.
 */

function detect(object) {
    detectLvl = object.id;
    return detectLvl;
}


function flipWin(){
	enable = false;
	clock.pause2 = true;
	setTimeout(displayWin, 2000);

if(detectLvl == "threeBoard"){
	for(var i=0; i < 16; i++){
			document.getElementById("threeByThree_" + i).style.zIndex = 1;
		}
	}else if(detectLvl == "fourBoard"){
		for(var i=0; i < 16; i++){
			document.getElementById("fourByFour_" + i).style.zIndex = 1;
		}
	}
}

function flipWin2(){
	enable = false;
	setTimeout(displayWin, 1500);
	for(var i=0; i < 16; i++){
			document.getElementById("twoByTwo_" + i).style.zIndex = 1;
			}
}

function flipWin02(){
	enable = false;
	setTimeout(displayWin, 1500);
	for(var i=0; i < 16; i++){
			document.getElementById("twoByTwo_0" + i).style.zIndex = 1;
		}
}