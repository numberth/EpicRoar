/**
The track variable holds all of the sound files which
will be used in our game. 

the init function initializes track1 and track2, then starts the song by using
playBackground();
*/
var track = {
	state : 0,
    track1 : undefined,
    track2 : undefined,
    currentPage : 0,
    buttonSrc : undefined,
    init : function(){
    	this.track1 = new Audio();
    	this.track1.src = "sounds/umbala.mp3";
    	this.track1.volume = 0.3;
    	this.track1.loop = true;
    	this.track2 = new Audio();
    	this.track2.src = "sounds/umbala.mp3";
    	playBackground();
    }
};

/**
*This function sets the source of the button to the page that is currently displayed
*/
function getButtonSrc(){
	track.buttonSrc = document.getElementById('ayy');
}

track.init();

/*
* This function plays background music, by first detecting if track.state is equal to 0
* since if it's equal to 1, then we stop playing the music. 
*/
function playBackground(){
	if(track.state===0){
		getButtonSrc();
		track.buttonSrc.src ='../../img/button_audio_off.png';
		switch(track.currentPage){
			case 0:
				track.track1.play();
				break;
			case 1:
				track.track1.play();
				break;
			default: console.log("error song");
			break;
		}
		track.state++;
	}else{
		stopBackground();
		track.state=0;
	}
}


function stopBackground(){
	getButtonSrc();
	track.buttonSrc.src = '../../img/button_audio.png'; 
	track.track1.pause();
	track.track1.currentTime=0;
	track.track2.pause();
	track.track2.currentTime=0;
    track.state = 0;
}

/*
This variable contains the string data for each of our pages, and puts them
in the divisions.
*/
var pageOptions = {

	reference : undefined,

	mainPage : "<img src='../../img/dinomyte.png' style='display:block;width:80%;height:auto;margin:auto;margin-top:9%'>" + 
	"<button onclick='pageOptions.setPage3(this.reference)' id='playButton'>Play</button>" + 
	"<button onclick='' id='timeModeButton'>Time Mode</button>" +
	"<img src='../../img/button_audio_off.png' style='position:absolute;width:70px;height:auto;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>",

	level3 : "<h3 style='font-size:29px;color:white;position:absolute;left:10px;'> Level 2</h3>"+
        "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;'>2:00</h3>"+
        "<div id='threeBoard'>"+
               "<div id='threeByThree0' onclick='rotateNub(\"threeByThree0\")'></div>"+
               "<div id='threeByThree1' onclick='rotate90(\"threeByThree1\")'></div>"+
               "<div style='clear:both'></div>"+
				"<div id='threeByThree2' onclick='rotateLine(\"threeByThree2\")'></div><div id='threeByThree3' onclick='rotateNub(\"threeByThree3\")'></div></div>"+
                "<button onclick='pageOptions.setPage()' id='playButton'>Back</button>"+
                "<img src='../../img/button_audio_off.png' style='position:absolute;width:70px;height:70px;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>",

    init: function(id){
    	this.reference = document.getElementById(id);
    },
	setPage : function(){
		stopBackground();
		track.currentPage = 0;
		playBackground();
		this.reference.innerHTML = this.mainPage;
	},	

	setPage3 : function(){
		stopBackground();
		track.currentPage = 1;
		playBackground();
		this.reference.innerHTML = this.level3;
	}

}

// function theclick(){
// 	var lol = document.getElementById('threeByThree');
// 	lol.setAttribute("class","underground");
// }

