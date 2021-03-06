
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

/**
 * Number of times that flipAll is allowed. It's set to 3 to start.
 * @type {Number}
 */
var allowedFlip = 3;

//temporary flip function for testing purposes
function flip(id){
	document.getElementById(id).style.zIndex = '-1';
	var cover_zIndex = document.getElementById(id).style.zIndex;
}

/**
 * Enable function is mostly made to ensure the road tiles can only be rotated when they are revealed.
 * This function detects the z-index of the cover tiles. 
 * When it is -1 (therefore road tiles show through), function is true, therefore rotate can happen.
 * (It is assumed that cover tile will start with z-index of 1, road tile with 0.)
 * 
 * @param  {[ID input]} id [indicates the ID for which the function will be used.]
 * @return {[boolean]}    [indicates whether a function is allowed or not.]
 */
function enableFunction(id) {
	var road_zIndex = document.getElementById(id).style.zIndex;
	if(road_zIndex == '1') {	
		enable = true;
		alert('enabled'); 
	} else if(road_zIndex != '1') {
		enable = false;
		alert('disabled');
	}
	return enable;
}


/**
 * Function to flip all cover cards for (2) seconds for players to see all road cards.
 * It will automatically flip back the cover cards after (2) seconds.
 * 
 * Variable enable is set to false to make sure that rotate will not happen when all cover cards are flipped over.
 *
 * FlipAll can only happen when allowedFlip is more than 0.
 * FlipAll image will change according to the amount of flipAlls left.
 */
function flipAll(){
	if(allowedFlip > 0){
	switch(allowedFlip){
		case 3:
			document.getElementById('allFlip').src = 'img/button_flipall_2.png';
			break;

		case 2:
			document.getElementById('allFlip').src = 'img/button_flipall_1.png';
			break;

		case 1:
			document.getElementById('allFlip').src = 'img/button_flipall_0.png';
			break;
	}
		enable = false;
		allowedFlip--;

		setTimeout(flipAllBack,2000);

		for(var i=0; i < 16; i++){
			document.getElementById('threeByThree' + i).style.zIndex = 2;
		}
	}
}

/**
 * Function to flip all cover cards back over the rod tiles.
 * All road tiles will be assigned z-index of -1 to hide the road tiles.
 * 
 * It is called automatically by flipAll() after (2) seconds.
 */
function flipAllBack(){
		for(var i=0; i < 16; i++){
			document.getElementById('threeByThree' + i).style.zIndex = '-1';
		}
}