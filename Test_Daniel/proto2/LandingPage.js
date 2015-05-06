	var track ={
	state : 0,
    track1 : undefined,
    track2 : undefined,
    currentPage : 0,
    init : function(){
    	this.track1 = new Audio();
    	this.track1.src = "sounds/bg3.mp3";
    	this.track1.loop = true;
    	this.track2 = new Audio();
    	this.track2.src = "sounds/bg2.mp3";
    }
};

track.init();

function playBackground(){
	if(track.state===0){
		switch(track.currentPage){
			case 0:
				track.track1.play();
				break;
			case 1:
				track.track2.play();
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
	track.track1.pause();
	track.track1.currentTime=0;
	track.track2.pause();
	track.track2.currentTime=0;
    track.state = 0;
}

var pageOptions = {

	reference : undefined,

	mainPage : "<img src='images/pic1.png' style='display:block;width:80%;height:200px;margin:auto;margin-top:9%'>" + 
	"<button onclick='pageOptions.setPage3(this.reference)' id='playButton'>Play</button>" + 
	"<button onclick='' id='timeModeButton'>Time Mode</button>" +
	"<img src='images/pause.png' style='position:absolute;width:70px;height:70px;border-style:solid;bottom:0;left:0' onclick='playBackground()'>",

	level3 : "<h3 style='font-size:29px;color:green;'>Level 3</h3>"+
        "<h3 style='font-size:29px;color:green;top:0;right:0;position:absolute'>2:00</h3>"+
        "<div id='threeBoard'>"+
               "<div id='threeByThree'>"  + "</div>"+
                "<div id='threeByThree'></div>"+
               "<div id='threeByThree'></div>" + 
                    "<div style='clear:both'></div>"+
				"<div id='threeByThree'></div><div id='threeByThree'></div><div id='threeByThree'></div><div style='clear:both'></div><div id='threeByThree'></div>"+
                "<div id='threeByThree'></div><div id='threeByThree'></div></div></div>"+
                "<button onclick='pageOptions.setPage()' id='playButton'>Back</button>" + 
                "<img src='images/pause.png' style='position:absolute;width:70px;height:70px;border-style:solid;bottom:0;left:0' onclick='playBackground()'>",

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

function theclick(){
	var lol = document.getElementById('threeByThree');
	lol.setAttribute("class","underground");
}