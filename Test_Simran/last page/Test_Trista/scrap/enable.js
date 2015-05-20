var enable = false;
var idName = '';

/* Facilitate fetching of "id". */
function $(id){
	var element = document.getElementById(id);
	if( element == null )
		alert( 'Programmer error: ' + id + ' not found.' );
	return element;
}

/**
 * [checkId checks ]
 * @param  {[type]} clicked_id [description]
 * @return {[type]}            [description]
 */
function checkId(clicked_id){
	idName = clicked_id;
	return idName;
}
// Enable rotation
function enableFunction(id) {
	checkId(clicked_id);
	if(idName == id) {	
		enable = true;
		alert('enabled');
	} else if(idName != id) {
		enable = false;
		alert('disabled');
	}
	return enable;
}

function activatedFunction(id) {
	if (enableFunction(id)) {
		if (enable) {
		$('img1').className = 'img3';
		}
	} else if (!enableFunction(id)) {
		$('img1').className = '';
	}
	$('testResult').innerHTML = clicked;
}