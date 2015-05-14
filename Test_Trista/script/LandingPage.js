/***************************************************************************************
 * This program manages everything within our web app, from managing all of the sound effects
 * the implementation of the timer, displaying appropriate screens for each level or menu, and 
 * should harmonize with any addition to the page by simply adding to the content division.
 * 
 * -Most of the content are saved and loaded before the index page is actually loaded
  * into javascript strings by the use of a script called Lab.min.js, which uses the wait()
  * function to sequentially load each javascript file in their corresponding orders.  
 * 
 * @author Daniel Tian/Epic Roar
 * @version 1.00
 ***************************************************************************************
 */


/**
*The track variable holds all of the sound files which
*will be used in our game. 
*
*the init function initializes track1 and track2, then starts the song by using
*playBackground();
*/
var track = {
	state : 0,    //if state is 0, then music is playing. If the state is 1, then music should stop playing.
    track1 : undefined, //first mp3 file
    track2 : undefined,  //second mp3 file
    track3 : undefined, //third mp3 file
    track4: undefined, //4th mp3 file
    currentPage : 0,  //current page (such as level selection or menu)
    buttonSrc : undefined, //source of the button (so we can get the id with document.getElementByid('x'))
    
    /**
	* This function initializes the sound files and loads them into the variables from track1-4
    */
    init : function(){
    	this.track1 = new Audio();
    	this.track1.src = "sounds/umbala.mp3";
    	this.track1.volume = 0.3;
    	this.track1.loop = true;
    	this.track2 = new Audio();
    	this.track2.src = "sounds/jpark.mp3";
    	this.track3 = new Audio();
    	this.track3.src = 'sounds/congrats.mp3';
    	this.track4 = new Audio();
    	this.track4.src = 'sounds/cardflip.mp3';
    	playBackground();
    }
};


/**
 * This functiona plays a card flipping sound when called.
 * 
 */
function flipSound(){
	track.track4.play();
}

/**
*This function sets the source of the button to the page that is currently displayed
*/
function getButtonSrc(){
	track.buttonSrc = document.getElementById('ayy');
}

track.init();  //initializes the track variable when everything is ready

/*
* This function plays background music, by first detecting if track.state is equal to 0
* since if it's equal to 1, then we stop playing the music. 
*/
function playBackground(){
	if(track.state===0){
		getButtonSrc();
		track.buttonSrc.src ='img/button_audio.png';
		switch(track.currentPage){   //the switch statement detects which page the game is on
									// and plays the correct background music.
			case 0:
				track.track1.play();
				break;
			case 1:
				track.track2.play();
				break;
			default: console.log("error song");
			break;
		}
		track.state++;    //track state represents whether something is playing or not.
	}else{
		stopBackground();
		track.state=0;
	}
}

/**
 * This function changes the audio button to visually represent that sound has stopped playing,
 * and then resets every single track on the page, and also stops them via the pause() method.
 * state is also changed to 0 so that next time a user presses the play button, the 
 * playBackground() method will correctly cycle through the first if condition.
 * 
 */
function stopBackground(){
	getButtonSrc();
	track.buttonSrc.src = 'img/button_audio_off.png'; 
	track.track1.pause();
	track.track1.currentTime=0;
	track.track2.pause();
	track.track2.currentTime=0;
    track.track3.pause();
    track.track3.currentTime=0;

    track.track4.pause();
    track.track4.currentTime=0;

    track.state = 0;
}

/**
 * This functiona refreshes the paragraph with the id "timesquare"
 * by using the window.setTimeout method every 0.1 seconds. In this manner,
 * we have a variable that holds the data for how much time has passed, and can be
 * used for any purpose : such as a countdown, or a count up. We can also easily check
 * if a user has spent too much time on a level with an if statement within a check function.
 * 
 */
function timeMode(){

	if(!clock.lost){
		clock.timerReference = document.getElementById('timeSquare');
		if(clock.timerReference==null){  //if the user is not in the time mode page, then we jump out of this method.
			return;
		}
		clock.timerReference.innerHTML = "Time left: " + clock.seconds;
		clock.checkTime();    //checks if the user has time left.
		if(!clock.pause2){
				clock.seconds--;
				window.setTimeout(timeMode,1000);
		}
	}else{
		displayLoss();
	}
}



function setPause(){
	if(clock.pauseState==0){
		clock.pause2 = true;
		clock.pauseState++;
		document.getElementById('pauseTimer').src = 'img/button_pause.png';
	}else{
		clock.pause2 = false;
		clock.pauseState = 0;
		document.getElementById('pauseTimer').src = 'img/button_check.png';
	}
	timeMode();
}

/**
 * This function is called when the player runs out of time. Resets the time left and boolean clock.lost, so that
 * the player can try again if they wish or go back to the main menu.
 */


function displayLoss(){
	pageOptions.reference.innerHTML = 	"<img src='img/bg_2.png' style='display:block;width:100%;height:100%'>"+
//	"<button onclick='pageOptions.testTimeMode()' style='position:absolute;top:0'>Restart Level</button>"+
	"<img src='img/tryagain.png' style='display:block;width:80%;height:auto;margin:auto;margin-top:9%;position:absolute;bottom:260px;right:28px'>" +
	"<img src='img/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>" +
	"<img src='img/button_audio.png' style='position:absolute;width:70px;height:70px;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
    "<img src='img/button_check.png' onclick='pageOptions.testTimeMode()' style='position:absolute;width:70px;height:auto;bottom:160px;left:80px' onclick='playBackground()' id='ayy'>" +
	"<img src='img/button_xmark.png' style='position:absolute;width:70px;height:70px;bottom:160px;right:80px' onclick='pageOptions.setPage()' id='menu'>";

      stopBackground();
      clock.totalTimeInTenths = 50;
      clock.lost = false;
}

/**
 * This object holds variables for the time mode of our game.
 * 
 */
var clock = {
	pause2 : false,    //pause boolean
	pauseState : 0,   //state of pause
	lost : false, // lose game boolean
	timerReference : undefined, //this variable will be used to point towards the id that we will need to refresh 
								//to animate the timer
	seconds : 20,				//variable that represents seconds (60 seconds per minute)
	/**
	 * This function checks if the user has run out of time.
	 */
	 checkTime : function(){
	 	if(this.seconds<=0){
	 		this.lost = true;
	 	}
	 }

}

/*
*This variable contains the string data for each of our pages, and puts them
*in the divisions.
*/
var pageOptions = {

	reference : undefined,  //reference variable that will point towards the content division, for easy updating of our app content

	/**
	 * Here is the mainPage string, which saves what our main menu looks like on an html page. 
	 */
	mainPage : "<img src='img/dinomyte.png' style='display:block;width:80%;height:auto;margin:auto;margin-top:9%'>" + 
//	"<button onclick='pageOptions.reference.innerHTML=pageOptions.modeSelectionPage' id='playButton'>Play</button>" + 
//	"<button onclick='pageOptions.setLevelPage()' id='levelModeButton'>Levels</button>" +
//	"<button onclick='pageOptions.setSignUpPage()' id='signUpButton'>Sign Up</button>" +
//	"<button onclick='pageOptions.setScorePage()' id='scoreButton'>High Scores</button>"
	
	"<img src= 'img/button_play.png' onclick='pageOptions.reference.innerHTML=pageOptions.modeSelectionPage' id='playButton'>" +
	"<img src= 'img/button_levels.png' onclick='pageOptions.setLevelPage()' id='levelModeButton'>" +
	"<img src= 'img/button_scores.png' onclick='pageOptions.setScorePage()' id='scoreButton'>" +
	"<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
	"<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",

	//Half circle style selection gui for either zen or time mode.
	modeSelectionPage : "<img src='img/halfCircle2a.png' onclick='pageOptions.setPage1()' style='display:block;width:80%;height:39%;margin:auto;margin-top:10%'/>"+
						"<img src='img/halfCircle3a.png' onclick='pageOptions.testTimeMode()' style='display:block;width:80%;height:39%;margin:auto'/>"+
						"<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
					"<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",

	/**
	 *This string represents the level selection page. Currently there are 9 levels, but we can alway add more later.
	 */
	levelPage : "<img src='img/level_1.png' onclick='pageOptions.setPage1()' width='18%' height='auto' style='margin-left:12%;margin-top:10%'/>" + 
				"<img src='img/level_2.png' onclick='pageOptions.setPage2()' width='18%' height='auto' style='margin-left:12%;margin-top:10%'/>" +
				"<img src='img/level_3.png' onclick='pageOptions.setPage3()' width='18%' height='auto' style='margin-left:12%;margin-top:10%'/>" +
				"<img src='img/level_4.png' onclick = 'pageOptions.setPage3()' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/level_5.png' onclick = 'pageOptions.setPage3()' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/level_6.png' onclick = 'pageOptions.setPage4()' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/level_7.png' onclick = 'pageOptions.testTimeMode()' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/button_lock.png' onclick = 'alert(\" You must unlock this level first\")' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/button_lock.png' onclick = 'alert(\" You must unlock this level first\")' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/button_lock.png' onclick = 'alert(\" You must unlock this level first\")' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/button_lock.png' onclick = 'alert(\" You must unlock this level first\")' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
				"<img src='img/button_lock.png' onclick = 'alert(\" You must unlock this level first\")' width='18%' height='auto' style='margin-left:12%;margin-top:10%'>" +
	"<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
	"<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",

	/**
	 * This string represents the sign up form in our game
	 
	signUpPage :    "<div width='70%' height='70%' style='position:relative; margin-top:100px; margin-left:50px;margin-right:50px'>" +
						"<form action='demo_form.asp' method='get'>" + 
	  						"<p style='text-align:center;font-size:3em;color:white'>Sign up</p>" +
	  						"<p style='font-size:1em;color:white'>Username: <input type='name' name='username' size='30'></p><br>" + 
	  						"<img src='img/joinbutton.png' alt='join' onclick='Submit' width='120px' height='100px' style='margin-left:85px'>" +
						"</form>" +
					"</div>" +
					"<img src='img/button_audio.png' style='position:absolute;width:70px;height:auto;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
					"<img src='img/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>",
	*/
	/**
	 * This string represents the high score board in our game
	 */
	highScorePage : "<div width='70%' height='80%' style='position:relative;margin-top:60px;margin-left:50px;margin-right:50px'>" +
						 "<img src='img/highscore.png' alt='high score' style='width:90%;height:70%;margin-left:16px;margin-top:-20px'>" +
						 "<table style='border:1px solid white;width:100%;margin-top:10px'>" +
  							"<tr>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>username</td>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>scores</td>" +
						  	"</tr>" +
						  	"<tr>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>username</td>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>scores</td>" +
						  	"</tr>" +
						  	"<tr>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>username</td>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>scores</td>" +
						  	"</tr>" +
						  	"<tr>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>username</td>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>scores</td>" +
						  	"</tr>" +
						  	"<tr>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>username</td>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>scores</td>" +
						  	"</tr>" +
						  	"<tr>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>username</td>" +
							    "<td style='border:1px solid white;width:50%;height:40px'>scores</td>" +
						  	"</tr>" +
						"</table>" +
					"</div>" +
					"<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
					"<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",

	/**
	 * This string represents level 1 in our game
	 */
	
	level1 : "<h3 style='font-size:29px;color:white;position:absolute;left:10px;margin-top:15px;'> Level 1</h3>"+
        "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;'></h3>"+
        "<div id='twoBoard'>"+
        "<div id='twoBoardCover'>"+
        		"<div id='cover0' onclick='flip02(\"twoByTwo_00\")'></div>"+
               "<div id='cover1' onclick='flip02(\"twoByTwo_01\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='cover2' onclick='flip02(\"twoByTwo_02\")'></div>"+
               "<div id='cover3' onclick='flip02(\"twoByTwo_03\")'></div>"+
               "</div>"+
               "<div id='twoByTwo_00' onclick='rotateNubx1(\"twoByTwo_00\")'></div>"+
               "<div id='twoByTwo_01' onclick='rotateLinex1(\"twoByTwo_01\")'></div>"+
               "<div style='clear:both'></div>"+
				"<div id='twoByTwo_02' onclick='rotate90x1(\"twoByTwo_02\")'></div><div id='twoByTwo_03' onclick='rotateNubx1(\"twoByTwo_03\")'></div></div>"+

                //"<button onclick='pageOptions.setPage()' id='playButton'>Back</button>"+
                "<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
                "<img src='' onclick='flipAll(\"twoByTwo_0\")' id='allFlip'>" +
                "<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",

    	/**
	 * This string represents level 2 in our game
	 */
	
	level2 : "<h3 style='font-size:29px;color:white;position:absolute;left:10px;margin-top:15px;'> Level 2</h3>"+
        "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;'></h3>"+
        "<div id='twoBoard'>"+
        "<div id='twoBoardCover'>"+
        		"<div id='cover0' onclick='flip2(\"twoByTwo_0\")'></div>"+
               "<div id='cover1' onclick='flip2(\"twoByTwo_1\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='cover2' onclick='flip2(\"twoByTwo_2\")'></div>"+
               "<div id='cover3' onclick='flip2(\"twoByTwo_3\")'></div>"+
               "</div>"+
               "<div id='twoByTwo_0' onclick='rotateNubx(\"twoByTwo_0\")'></div>"+
               "<div id='twoByTwo_1' onclick='rotate90x(\"twoByTwo_1\")'></div>"+
               "<div style='clear:both'></div>"+
				"<div id='twoByTwo_2' onclick='rotateLinex(\"twoByTwo_2\")'></div><div id='twoByTwo_3' onclick='rotateNubx(\"twoByTwo_3\")'></div></div>"+

                //"<button onclick='pageOptions.setPage()' id='playButton'>Back</button>"+
                "<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
                "<img src='img/button_flipall_3.png' onclick='flipAll(\"twoByTwo_\")' id='allFlip'>" +
                "<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",

     /**
	 * This string stores level3 of our game
	 */
    level3 : "<h3 style='font-size:29px;color:white;position:absolute;left:10px;margin-top:15px;'> Level 3</h3>"+
        "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;'></h3>"+
    	"<div id='threeBoard'>"+
        "<div id='threeBoardCover'>"+
        		"<div id='threeCover0' onclick='flip3(\"threeByThree_0\")'></div>"+
               "<div id='threeCover1' onclick='flip3(\"threeByThree_1\")'></div>"+
               "<div id='threeCover2' onclick='flip3(\"threeByThree_2\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='threeCover3' onclick='flip3(\"threeByThree_3\")'></div>"+
               "<div id='threeCover4' onclick='flip3(\"threeByThree_4\")'></div>"+
               "<div id='threeCover5' onclick='flip3(\"threeByThree_5\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='threeCover6' onclick='flip3(\"threeByThree_6\")'></div>"+
               "<div id='threeCover7' onclick='flip3(\"threeByThree_7\")'></div>"+
               "<div id='threeCover8' onclick='flip3(\"threeByThree_8\")'></div>"+
               "</div>"+
               
        "<div id='threeByThree_0' onclick='rotateAndCheck(0)'></div>"+
        "<div id='threeByThree_1' onclick='rotateAndCheck(1)'></div>"+
        "<div id='threeByThree_2' onclick='rotateAndCheck(2)'></div>"+
        "<div style='clear:both'></div>"+
				"<div id='threeByThree_3' onclick='rotateAndCheck(3)'></div>"+
				"<div id='threeByThree_4' onclick='rotateAndCheck(4)'></div>"+
				"<div id='threeByThree_5' onclick='rotateAndCheck(5)'></div>"+
				"<div style='clear:both'></div>"+
				"<div id='threeByThree_6' onclick='rotateAndCheck(6)'></div>"+
				"<div id='threeByThree_7' onclick='rotateAndCheck(7)'></div>"+
				"<div id='threeByThree_8' onclick='rotateAndCheck(8)'></div>"+
		"</div>"+
        
        //the invisible solution grid 
        "<div id = 'threeByThree_sol'>"+
          "<div id='threeByThree_sol_0'></div>"+
          "<div id='threeByThree_sol_1'></div>"+
          "<div id='threeByThree_sol_2'></div>"+
          "<div style='clear:both'></div>"+
          "<div id='threeByThree_sol_3'></div>"+
          "<div id='threeByThree_sol_4'></div>"+
          "<div id='threeByThree_sol_5'></div>"+
          "<div style='clear:both'></div>"+
          "<div id='threeByThree_sol_6'></div>"+
          "<div id='threeByThree_sol_7'></div>"+
          "<div id='threeByThree_sol_8'></div>"+
        "</div>"+
        
        "<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
        "<img src='img/button_flipall_3.png' onclick='flipAll(\"threeByThree_\")' id='allFlip'>" +
        "<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",


     /**
	 * This string stores level 4 of our game
	 */
    level4 : "<h3 style='font-size:29px;color:white;position:absolute;left:10px;margin-top:15px;'> Level 4</h3>"+
        "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;'></h3>"+
      "<div id='fourBoard'>"+
        "<div id='fourBoardCover'>"+
            "<div id='fourCover0' onclick='flip4(\"fourByFour_0\")'></div>"+
               "<div id='fourCover1' onclick='flip4(\"fourByFour_1\")'></div>"+
               "<div id='fourCover2' onclick='flip4(\"fourByFour_2\")'></div>"+
               "<div id='fourCover3' onclick='flip4(\"fourByFour_3\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='fourCover4' onclick='flip4(\"fourByFour_4\")'></div>"+
               "<div id='fourCover5' onclick='flip4(\"fourByFour_5\")'></div>"+
               "<div id='fourCover6' onclick='flip4(\"fourByFour_6\")'></div>"+
               "<div id='fourCover7' onclick='flip4(\"fourByFour_7\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='fourCover8' onclick='flip4(\"fourByFour_8\")'></div>"+
               "<div id='fourCover9' onclick='flip4(\"fourByFour_9\")'></div>"+
               "<div id='fourCover10' onclick='flip4(\"fourByFour_10\")'></div>"+
               "<div id='fourCover11' onclick='flip4(\"fourByFour_11\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='fourCover12' onclick='flip4(\"fourByFour_12\")'></div>"+
               "<div id='fourCover13' onclick='flip4(\"fourByFour_13\")'></div>"+
               "<div id='fourCover14' onclick='flip4(\"fourByFour_14\")'></div>"+
               "<div id='fourCover15' onclick='flip4(\"fourByFour_15\")'></div>"+
               "</div>"+

        "<div id='fourByFour_0' onclick='rotateAndCheck(0)'></div>"+
        "<div id='fourByFour_1' onclick='rotateAndCheck(1)'></div>"+
        "<div id='fourByFour_2' onclick='rotateAndCheck(2)'></div>"+
        "<div id='fourByFour_3' onclick='rotateAndCheck(3)'></div>"+
        "<div style='clear:both'></div>"+
        "<div id='fourByFour_4' onclick='rotateAndCheck(4)'></div>"+
        "<div id='fourByFour_5' onclick='rotateAndCheck(5)'></div>"+
        "<div id='fourByFour_6' onclick='rotateAndCheck(6)'></div>"+
        "<div id='fourByFour_7' onclick='rotateAndCheck(7)'></div>"+
        "<div style='clear:both'></div>"+
        "<div id='fourByFour_8' onclick='rotateAndCheck(8)'></div>"+
        "<div id='fourByFour_9' onclick='rotateAndCheck(9)'></div>"+
        "<div id='fourByFour_10' onclick='rotateAndCheck(10)'></div>"+
        "<div id='fourByFour_11' onclick='rotateAndCheck(11)'></div>"+
        "<div style='clear:both'></div>"+
        "<div id='fourByFour_12' onclick='rotateAndCheck(12)'></div>"+
        "<div id='fourByFour_13' onclick='rotateAndCheck(13)'></div>"+
        "<div id='fourByFour_14' onclick='rotateAndCheck(14)'></div>"+
        "<div id='fourByFour_15' onclick='rotateAndCheck(15)'></div>"+
        
        "<div id='fourByFour_sol'>"+
          "<div id='fourByFour_sol_0'></div>"+
          "<div id='fourByFour_sol_1'></div>"+
          "<div id='fourByFour_sol_2'></div>"+
          "<div id='fourByFour_sol_3'></div>"+
          "<div style='clear:both'></div>"+
          "<div id='fourByFour_sol_4'></div>"+
          "<div id='fourByFour_sol_5'></div>"+
          "<div id='fourByFour_sol_6'></div>"+
          "<div id='fourByFour_sol_7'></div>"+
          "<div style='clear:both'></div>"+
          "<div id='fourByFour_sol_8'></div>"+
          "<div id='fourByFour_sol_9'></div>"+
          "<div id='fourByFour_sol_10'></div>"+
          "<div id='fourByFour_sol_11'></div>"+
          "<div style='clear:both'></div>"+
          "<div id='fourByFour_sol_12'></div>"+
          "<div id='fourByFour_sol_13'></div>"+
          "<div id='fourByFour_sol_14'></div>"+
          "<div id='fourByFour_sol_15'></div>"+
        "</div>"+
                //"<button onclick='pageOptions.setPage()' id='playButton'>Back</button>"+
                "<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
                "<img src='img/button_flipall_3.png' onclick='flipAll(\"fourByFour_\")' id='allFlip'>" +
                "<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>",



    /**
	 * This String will be deleted soon when we polish our time mode. For now it is just
	 * a prototype of the timed mode, and works well.
	 */
    timeModeLevel1 : 
    "<h3 style='font-size:29px;color:white;position:absolute;left:10px;margin-top:15px;'> Level 3</h3>"+
    "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;margin-top:15px;' id='timeSquare'></h3>"+
    // "<p id='timeSquare' style='display:block;margin:auto;text-align:center;height:90px;padding-top:20px;color:white;font-size:18px'></p>" +
    	"<div id='threeBoard'>"+
        "<div id='threeBoardCover'>"+
        		"<div id='threeCover0' onclick='flip3(\"threeByThree_0\")'></div>"+
               "<div id='threeCover1' onclick='flip3(\"threeByThree_1\")'></div>"+
               "<div id='threeCover2' onclick='flip3(\"threeByThree_2\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='threeCover3' onclick='flip3(\"threeByThree_3\")'></div>"+
               "<div id='threeCover4' onclick='flip3(\"threeByThree_4\")'></div>"+
               "<div id='threeCover5' onclick='flip3(\"threeByThree_5\")'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='threeCover6' onclick='flip3(\"threeByThree_6\")'></div>"+
               "<div id='threeCover7' onclick='flip3(\"threeByThree_7\")'></div>"+
               "<div id='threeCover8' onclick='flip3(\"threeByThree_8\")'></div>"+
               "</div>"+
               
        "<div id='threeByThree_0' onclick='rotateAndCheck(0)'></div>"+
        "<div id='threeByThree_1' onclick='rotateAndCheck(1)'></div>"+
        "<div id='threeByThree_2' onclick='rotateAndCheck(2)'></div>"+
        "<div style='clear:both'></div>"+
				"<div id='threeByThree_3' onclick='rotateAndCheck(3)'></div>"+
				"<div id='threeByThree_4' onclick='rotateAndCheck(4)'></div>"+
				"<div id='threeByThree_5' onclick='rotateAndCheck(5)'></div>"+
				"<div style='clear:both'></div>"+
				"<div id='threeByThree_6' onclick='rotateAndCheck(6)'></div>"+
				"<div id='threeByThree_7' onclick='rotateAndCheck(7)'></div>"+
				"<div id='threeByThree_8' onclick='rotateAndCheck(8)'></div>"+
		"</div>"+
        
        //the invisible solution grid 
        "<div id = 'threeByThree_sol'>"+
          "<div id='threeByThree_sol_0'></div>"+
          "<div id='threeByThree_sol_1'></div>"+
          "<div id='threeByThree_sol_2'></div>"+
          "<div style='clear:both'></div>"+
          "<div id='threeByThree_sol_3'></div>"+
          "<div id='threeByThree_sol_4'></div>"+
          "<div id='threeByThree_sol_5'></div>"+
          "<div style='clear:both'></div>"+
          "<div id='threeByThree_sol_6'></div>"+
          "<div id='threeByThree_sol_7'></div>"+
          "<div id='threeByThree_sol_8'></div>"+
        "</div>"+

                //"<button onclick='pageOptions.setPage()' id='playButton'>Back</button>"+
                "<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
                "<img src='' onclick='flipAll(\"threeByThree_\")' id='allFlip'>" +
                "<img src='img/button_pause.png' onclick='setPause()' id='pauseTimer'>" +
                "<img src='img/button_menu.png' onclick='pageOptions.setPage()'' id='menu'>",
	 /**
	 * This function initializes the reference variable to whichever id we need to change the content of.
	 * in our app, this id is called "a"
	 */
    init: function(id){
    	this.reference = document.getElementById(id);
    },

    //This function sets the page to the main menu.
	setPage : function(){
		stopBackground();
		track.currentPage = 0;
		playBackground();
		this.reference.innerHTML = this.mainPage;
	},	

	//sets page to level selection page
	setLevelPage : function(){
		this.reference.innerHTML = this.levelPage;
	},

	/*sign up page
	setSignUpPage : function(){
		this.reference.innerHTML = this.signUpPage;
	},*/

	//high score page
	setScorePage : function(){
		this.reference.innerHTML = this.highScorePage;
	},

	//sets the game to level 1
	setPage1 : function(){
		stopBackground();
		track.currentPage = 0;
		playBackground();
		this.reference.innerHTML = this.level1;
		flipImg();
	},

	//sets the game to level 2
	setPage2 : function(){
		stopBackground();
		track.currentPage = 1;
		playBackground();
		this.reference.innerHTML = this.level2;
		arrayData.setIds();
		flipImg();
	},

	//sets the game to level 3
	setPage3 : function(){
		stopBackground();
		track.currentPage = 1;
		playBackground();
		this.reference.innerHTML = this.level3;
		arrayData.setIds();
		initBoard3x3();
		flipImg();
	},

	//sets the game to level 3
	setPage4 : function(){
		stopBackground();
		track.currentPage = 1;
		playBackground();
		this.reference.innerHTML = this.level4;
		arrayData.setIds();
		initBoard4x4();
		flipImg();
	},

	  //This function is just a placeholder, later on we will be implementing timed mode only if the user
	  //clicks the timed mode
	  testTimeMode : function(){
	    stopBackground();
	    track.currentPage = 1;
	    playBackground();
	    this.reference.innerHTML = this.timeModeLevel1;
	    arrayData.setIds();
	    timeMode();
	    initBoard3x3();
	    flipImg();
	  },

	  difficultySelect : function(){
	  	this.reference.innerHTML = this.modeSelectionPage;
	  }

}


/**
 * This function is called when the player wins. A win image pops up, as well as victory music.
 */
function displayWin(){

	pageOptions.reference.innerHTML = "<img src='img/youwin.png' style='display:block;margin-left:45px;margin-top:80px;width:80%;height:30%'>"+
									"<form style='margin-top:50px;margin-left:65px'>" +
										"<p>Your name: <input type='text' name='name'></p>" +
										"<input type='submit' value='Submit' style='margin-left:90px;margin-top:20px'>" +
									"</form>" +
				"<img src='img/button_audio.png' style='position:absolute;width:70px;height:70px;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
                "<img src='img/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>";
      stopBackground();
      track.track3.play();
}


/**
 * This Object holds data for the array of our tiles
 */
 var arrayData = {
      clicked : false,
      state : 0,
      tempTile : 0,
      curentTile:0,
      currentImageTile :0,
      tileIdArray : [],

      setIds : function(){
        for(var i=0;i<9;i++){
            this.tileIdArray[i] = document.getElementById("threeByThree_Tile" + (i+1));
         }
        console.log("initialized tileIdArray");
      }
    };


/**
 * This function returns the current id for the tile that the player is clicking on.
 * a switch statement is used to assign an integer value for each id scenario.
 */
    function computeCurrentId(id){
        switch(id){
          case "threeByThree_Tile1":
            arrayData.currentTile = 0;
            break;
          case "threeByThree_Tile2":
            arrayData.currentTile = 1;
            break;
          case "threeByThree_Tile3":
            arrayData.currentTile = 2;
            break;

          case "threeByThree_Tile4":
            arrayData.currentTile = 3;
            break;
          
          case "threeByThree_Tile5":
            arrayData.currentTile = 4;
            break;
          
          case "threeByThree_Tile6":
            arrayData.currentTile = 5;
            break;
          
          case "threeByThree_Tile7":
            arrayData.currentTile = 6;
            break;
          
          case "threeByThree_Tile8":
            arrayData.currentTile = 7;
            break;
          
          case "threeByThree_Tile9":
            arrayData.currentTile = 8;
            break;

        }
    }

    /**
	 * This function is a placeholder for the actual reset board, but basically what it does is 
	 * loop through every matrix and flips them over to the grass.
	 */
    function resetBoard(){
        for(var i=0;i<arrayData.tileIdArray.length;i++){
            arrayData.tileIdArray[i].style.backgroundImage = "url('img/grass.jpg')"
        }
    }

    /**
	 * master function which gets called everytime a player clicks on a tile
	 */
    function clickMaster(id){
        var k = document.getElementById(id);
        computeCurrentId(id);

        if(arrayData.state===0){
            for(var i=0;i<arrayData.tileIdArray.length;i++){
              if(i!=arrayData.currentTile){
                arrayData.tileIdArray[i].style.backgroundImage = "url('img/grass.jpg')"
              }
             
            }

            if(arrayData.currentImageTile===0){
                k.style.backgroundImage = "url('img/tile_90_0.jpg')";
                arrayData.currentImageTile++;
            }else if(arrayData.currentImageTile===1){
                k.style.backgroundImage = "url('img/tile_90_1.jpg')";
                arrayData.currentImageTile++;
            }else if(arrayData.currentImageTile===2){
                k.style.backgroundImage = "url('img/tile_90_2.jpg')";
                arrayData.currentImageTile++;
            }else if(arrayData.currentImageTile===3){
                k.style.backgroundImage = "url('img/tile_90_3.jpg')";
                arrayData.currentImageTile=0;
            }




        }
        
    }


    //test variable, probably not going to be used.
    var tileType1 = {
         a : undefined,
         b : undefined,
         c : undefined,
         b : undefined,

         setTiles1 : function(){
          this.a = new Image();
          this.b = new Image();
          this.c = new Image();
          this.d = new Image();

          this.a.src='img/tile_90_0.jpg';
          this.b.src='img/tile_90_1.jpg';
          this.c.src='img/tile_90_2.jpg';
          this.d.src='img/tile_90_3.jpg';
        }
    };