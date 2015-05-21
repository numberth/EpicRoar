"use strict";

function handleKeyDown(event){
	Keyboard.keyDown = event.keyCode;
}

function handleKeyUp(event){
	Keyboard.keyDown = -1;
}

var Keyboard = { 
	keyDown : -1,
	initialize : function(){
		document.onkeydown = handleKeyDown;
		document.onkeyup = handleKeyUp;
	}

};

