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
    track3 : undefined,
    track4: undefined,
    currentPage : 0,
    buttonSrc : undefined,
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

function flipSound(){
	track.track4.play();
}

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
		track.buttonSrc.src ='images/button_audio.png';
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
	getButtonSrc();
	track.buttonSrc.src = 'images/button_audio_off.png'; 
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

	mainPage : "<img src='images/dinomyte.png' style='display:block;width:80%;height:auto;margin:auto;margin-top:9%'>" + 
	"<button onclick='pageOptions.setPage2(this.reference)' id='playButton'>Play</button>" + 
	"<button onclick='pageOptions.setLevelPage()' id='levelModeButton'>Levels</button>" +
	"<img src='images/button_audio.png' style='position:absolute;width:70px;height:auto;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
	"<img src='images/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='' id='menu'>",

	levelPage : "<img src='http://androidapptraining.com/wp/wp-content/uploads/Level1Button.jpg' onclick='pageOptions.setPage2()' width='60px' height='60px' style='margin-left:12%;margin-top:10%'/>" + 
				"<img src='http://androidapptraining.com/wp/wp-content/uploads/Level2Button.jpg' onclick='pageOptions.setPage2()' width='60px' height='60px' style='margin-left:12%;margin-top:10%'/>" +
				"<img src='http://liberty.ops.org/portals/0/STAFF_FOLDERS/T_Rotherham_Jeffrey/grade%20level%20buttons/BUTTON%203.jpg' onclick='pageOptions.setPage3()' width='60px' height='60px' style='margin-left:12%;margin-top:10%'/>" +
				"<img src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-3d-buttons-icons-business/080332-glossy-black-3d-button-icon-business-lock6-sc48.png' onclick = 'alert(\" You must unlock this level first\")' width='60px' height='60px' style='margin-left:12%;margin-top:10%'>" +
				"<img src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-3d-buttons-icons-business/080332-glossy-black-3d-button-icon-business-lock6-sc48.png' onclick = 'alert(\" You must unlock this level first\")' width='60px' height='60px' style='margin-left:12%;margin-top:10%'>" +
				"<img src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-3d-buttons-icons-business/080332-glossy-black-3d-button-icon-business-lock6-sc48.png' onclick = 'alert(\" You must unlock this level first\")' width='60px' height='60px' style='margin-left:12%;margin-top:10%'>" +
				"<img src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-3d-buttons-icons-business/080332-glossy-black-3d-button-icon-business-lock6-sc48.png' onclick = 'alert(\" You must unlock this level first\")' width='60px' height='60px' style='margin-left:12%;margin-top:10%'>" +
				"<img src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-3d-buttons-icons-business/080332-glossy-black-3d-button-icon-business-lock6-sc48.png' onclick = 'alert(\" You must unlock this level first\")' width='60px' height='60px' style='margin-left:12%;margin-top:10%'>" +
				"<img src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-3d-buttons-icons-business/080332-glossy-black-3d-button-icon-business-lock6-sc48.png' onclick = 'alert(\" You must unlock this level first\")' width='60px' height='60px' style='margin-left:12%;margin-top:10%'>" +
	"<img src='images/button_audio.png' style='position:absolute;width:70px;height:auto;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
	"<img src='images/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>",


	level2 : "<h3 style='font-size:29px;color:white;position:absolute;left:10px;'> Level 2</h3>"+
        "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;'>2:00</h3>"+
        "<div id='threeBoard'>"+
               "<div id='threeByThree0' onclick='rotateNub(\"threeByThree0\")'></div>"+
               "<div id='threeByThree1' onclick='rotate90(\"threeByThree1\")'></div>"+
               "<div style='clear:both'></div>"+
				"<div id='threeByThree2' onclick='rotateLine(\"threeByThree2\")'></div><div id='threeByThree3' onclick='rotateNub(\"threeByThree3\")'></div></div>"+
                //"<button onclick='pageOptions.setPage()' id='playButton'>Back</button>"+
                "<img src='images/button_audio.png' style='position:absolute;width:70px;height:70px;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
                "<img src='images/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>",


	/* level3 : "<h3 style='font-size:29px;color:green;'>Level 3</h3>"+
        "<h3 style='font-size:29px;color:green;top:0;right:0;position:absolute'>2:00</h3>"+
        "<div id='threeBoard'>"+
               "<div id='threeByThree'>"  + "</div>"+
                "<div id='threeByThree'></div>"+
               "<div id='threeByThree'></div>" + 
                    "<div style='clear:both'></div>"+
				"<div id='threeByThree'></div><div id='threeByThree'></div><div id='threeByThree'></div><div style='clear:both'></div><div id='threeByThree'></div>"+
                "<div id='threeByThree'></div><div id='threeByThree'></div></div></div>"+
                //"<button onclick='pageOptions.setPage()' id='playButton'>Back</button>"+
                "<img src='images/button_audio.png' style='position:absolute;width:70px;height:70px;bottom:0;left:0' onclick='playBackground()' id='ayy'>" +
                "<img src='images/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>", */

    level3 : "<div id='threeByThreeBoard'>" + 
                "<div id='threeByThree_Tile1' onclick='clickMaster(\"threeByThree_Tile1\",flipSound())'></div>"+
                "<div id='threeByThree_Tile2' onclick='clickMaster(\"threeByThree_Tile2\",flipSound())'></div>"+
                "<div id='threeByThree_Tile3' onclick='clickMaster(\"threeByThree_Tile3\",flipSound())'></div>"+
                   "<div style='clear:both'></div>"+
                "<div id='threeByThree_Tile4' onclick='clickMaster(\"threeByThree_Tile4\",flipSound())'></div>"+
                "<div id='threeByThree_Tile5' onclick='clickMaster(\"threeByThree_Tile5\",flipSound())'></div>"+
                "<div id='threeByThree_Tile6' onclick='clickMaster(\"threeByThree_Tile6\",flipSound())'></div>"+
                    "<div style='clear:both'></div>"+
                "<div id='threeByThree_Tile7' onclick='clickMaster(\"threeByThree_Tile7\",flipSound())'></div>"+
                "<div id='threeByThree_Tile8' onclick='clickMaster(\"threeByThree_Tile8\",flipSound())'></div>"+
                "<div id='threeByThree_Tile9' onclick='clickMaster(\"threeByThree_Tile9\",flipSound())'></div>"+
               "</div>"+
               "<img src='images/button_audio.png' style='position:absolute;width:70px;height:70px;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
                "<img src='images/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>",
    init: function(id){
    	this.reference = document.getElementById(id);
    },
	setPage : function(){
		stopBackground();
		track.currentPage = 0;
		playBackground();
		this.reference.innerHTML = this.mainPage;
	},	

	setLevelPage : function(){
		this.reference.innerHTML = this.levelPage;
	},

	setPage2 : function(){
		stopBackground();
		track.currentPage = 0;
		playBackground();
		this.reference.innerHTML = this.level2;
	},

	setPage3 : function(){
		stopBackground();
		track.currentPage = 1;
		playBackground();
		this.reference.innerHTML = this.level3;
		arrayData.setIds();
	}

}


function displayWin(){
	pageOptions.reference.innerHTML = "<img src='http://ajournalofmusicalthings.com/wp-content/uploads/YouWin.png' style='display:block;width:100%;height:100%'>"+
	"<img src='images/button_audio.png' style='position:absolute;width:70px;height:70px;bottom:10px;left:10px' onclick='playBackground()' id='ayy'>" +
                "<img src='images/button_menu.png' style='position:absolute;width:70px;height:70px;bottom:10px;right:10px' onclick='pageOptions.setPage()' id='menu'>";
      stopBackground();
      track.track3.play();
}

// function theclick(){
// 	var lol = document.getElementById('threeByThree');
// 	lol.setAttribute("class","underground");
// }

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


    //window.onload = arrayData.setIds();

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

    function resetBoard(){
        for(var i=0;i<arrayData.tileIdArray.length;i++){
            arrayData.tileIdArray[i].style.backgroundImage = "url('images/grass.jpg')"
        }
    }

    function clickMaster(id){
        var k = document.getElementById(id);
        computeCurrentId(id);

        if(arrayData.state===0){
            for(var i=0;i<arrayData.tileIdArray.length;i++){
              if(i!=arrayData.currentTile){
                arrayData.tileIdArray[i].style.backgroundImage = "url('images/grass.jpg')"
              }
             
            }

            if(arrayData.currentImageTile===0){
                k.style.backgroundImage = "url('images/tile_90_0.jpg')";
                arrayData.currentImageTile++;
            }else if(arrayData.currentImageTile===1){
                k.style.backgroundImage = "url('images/tile_90_1.jpg')";
                arrayData.currentImageTile++;
            }else if(arrayData.currentImageTile===2){
                k.style.backgroundImage = "url('images/tile_90_2.jpg')";
                arrayData.currentImageTile++;
            }else if(arrayData.currentImageTile===3){
                k.style.backgroundImage = "url('images/tile_90_3.jpg')";
                arrayData.currentImageTile=0;
            }




        }
        
    }

    function playFlipSound(){

    }


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

          this.a.src='images/tile_90_0.jpg';
          this.b.src='images/tile_90_1.jpg';
          this.c.src='images/tile_90_2.jpg';
          this.d.src='images/tile_90_3.jpg';
        }
    };