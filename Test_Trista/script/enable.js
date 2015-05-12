var enable = false;
var tile_zIndex;
var cover_zIndex;

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
		for(var i=0; i < 16; i++){
			document.getElementById('threeByThree' + i).style.zIndex = 2;

		setTimeout(flipAllBack,2000);
}
}

function flipAllBack(){
		for(var i=0; i < 16; i++){
			document.getElementById('threeByThree' + i).style.zIndex = '-1';
		}
}