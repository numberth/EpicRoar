"use strict"

var Mouse = {
	position : {
		x : 0, y : 0
	},
	leftDown : false,
	leftPressed : false,
	initialize : function(){
		document.onmousemove = handleMouseMove;
		document.onmousedown = handleMouseDown;
		document.onmouseup = handleMouseUp;
	},
	reset : function(){
		this.leftPressed = false;
	}
}

function handleMouseMove(event){
	//console.log(event.pageX + " " + event.pageY);
	Mouse.position = { x: event.pageX, y: event.pageY};
}

function handleMouseDown(event){
	if(event.which === 1){
		if(!Mouse.leftDown){
			Mouse.leftPressed = true;
		}
		Mouse.leftDown = true;
	}
}

function handleMouseUp(event){
	if(event.which === 1){
			console.log(event.pageX + " " + event.pageY);
		Mouse.leftDown = false;
	}
}