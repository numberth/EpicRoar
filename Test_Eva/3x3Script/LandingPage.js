
//replace all values here to accompany the algorithm 
//this page needs to have acces to a folder of "script3x3"
//
// on load, this page needs to "initBoard();"
"<h3 style='font-size:29px;color:white;position:absolute;left:10px;margin-top:15px;'> Level 3</h3>"+
        "<h3 style='font-size:29px;color:white;top:0;right:10px;position:absolute;'></h3>"+
    	"<div id='threeBoard'>"+
        "<div id='threeBoardCover'>"+
        		"<div id='threeCover0'></div>"+
               "<div id='threeCover1'></div>"+
               "<div id='threeCover2'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='threeCover3'></div>"+
               "<div id='threeCover4'></div>"+
               "<div id='threeCover5'></div>"+
               "<div style='clear:both'></div>"+
               "<div id='threeCover6'></div>"+
               "<div id='threeCover7'></div>"+
               "<div id='threeCover8'></div>"+
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
        
        //the invisible solution grid 
        "<div id = 'threeByThree_sol'>"
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
        "</div>"
        
        "<img src='img/button_audio.png' onclick='playBackground()' id='ayy'>" +
        "<img src='img/button_flipall_3.png' onclick='flipAll(\"threeByThree_\")' id='allFlip'>" +
        "<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>"