var enable = false;
var tile_zIndex;
var cover_zIndex;
var flipped = 0;

// /* Facilitate fetching of "id". */
// function $(id){
// 	var element = document.getElementById(id);
// 	if( element == null )
// 		alert( 'Programmer error: ' + id + ' not found.' );
// 	return element;
// }

/**
 * [checkId checks ]
 * @param  {[type]} clicked_id [description]
 * @return {[type]}            [description]
 */
function checkId(id){
	idName = id;
	return idName;
}

function flip(id){
	document.getElementById(id).style.zIndex = '-1';
	cover_zIndex = document.getElementById(id).style.zIndex;
}

// Enable rotation
function enableFunction(id) {
	tile_zIndex = document.getElementById(id).style.zIndex;
	if(cover_zIndex == '-1') {	
		enable = true;
		alert('enabled'); 
	} else if(cover_zIndex != '-1') {
		enable = false;
		alert('disabled');
	}
	return enable;
}

function flipAll(){
	if(flipped == 0){
		for(var i=0; i < 16; i++){
			document.getElementById('threeByThree' + i).style.zIndex = 2;
			flipped = 1;
		}
	} else if(flipped == 1){
		for(var i=0; i < 16; i++){
			document.getElementById('threeByThree' + i).style.zIndex = 1;
			flipped = 0;
		}
	}
}