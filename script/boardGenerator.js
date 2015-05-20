/******************************************************************************************
 * This program extends from the capabilties of "tile_assign.js" 
 * This program reads the adjacent matrix and values identified that are true in the adjacent matrix 
 * to assign values accordingly
 *
 *Bugs fixed, path assigned and rotate funtion is working! 
 *now we have a bug that i will fix, I SWEAR. 
 *
 *
 * v 4.0 : game board generator is taken from previous working js files 
 * this one is meant to be fit for the 
 * 
 * @author Eva Yu
 * @version 4.o
 *
 ******************************************************************************************
/**
 * [tile_90] is represetented with a value of 0 in the switch statements 
 * [tile_nub]is represetented with a value of 1 in the switch statements 
 * [tile_t]is represetented with a value of 2 in the switch statements 
 * [tile_line]is represetented with a value of 3 in the switch statements 
 *
 * @type {Array} [of images]
 *
 *  [tile_cross] is represetented with a value of 5 in the switch statements 
 *@type {String} [image]
 */
var tile_90 = ["img/tile_90_0.jpg","img/tile_90_1.jpg","img/tile_90_2.jpg","img/tile_90_3.jpg" ];
var tile_nub =["img/tile_nub_0.jpg","img/tile_nub_1.jpg","img/tile_nub_2.jpg","img/tile_nub_3.jpg" ];
var tile_t = ["img/tile_t_0.jpg","img/tile_t_1.jpg","img/tile_t_2.jpg","img/tile_t_3.jpg" ];
var tile_line = ["img/tile_line_0.jpg","img/tile_line_1.jpg"];
var tile_cross = "img/tile_cross.jpg";

/**
 * [tile_exit_counter description] counter the number of exits any given position has
 * [grid_image_positionId description] stores the id of the users image board images
 * [grid_solution_positionId description] stores the id of the solution boards images
 * [grid_image_counter description] stores position of the image and allows the rotation to look 
 * like a 90 degree change every turn 
 * 
 * @type {Array}
 */

var tile_exit_counter;
var grid_image_positionId;
//var grid_solution_positionId;
var grid_image_counter;


function initAssignmentArrays(){
	tile_exit_counter = new Array(MAX*MAX);
	grid_image_positionId = new Array(MAX*MAX);
	//grid_solution_positionId = new Array(MAX*MAX);
	grid_image_counter = new Array(MAX*MAX);
}
/**
 * This function is called by the initAll function in init.js
 * this funtion will initialize and assign values i nthe tile_exit_counters
 * and then assign the image accordingly by calling the tileAssign3x3 function. 
 *  
 */

function assignPath3x3(){
	initAssignmentArrays();
	
	tile_exit_counterInit();
	tileExitCount();
	
	tileAssign3x3();
	generateGameBoard();
}

/**
 * This function is called by the initAll function in init.js
 * this funtion will initialize and assign values i nthe tile_exit_counters
 * and then assign the image accordingly by calling the tileAssign3x3 function. 
 *  
 */
function assignPath4x4(){
	initAssignmentArrays();
	
	tile_exit_counterInit();
	tileExitCount();
	
	tileAssign4x4();
	generateGameBoard();
}
/**
 * It also assigns a solution grid to be compared against the user's grid.
 *for the visuals so far , there will be a oard rendered to be able to play it accordingly and find bugs. 
 * 
 * @author Eva Yu
 * @version 3.0
 */
function tileAssign3x3(){
	for(var i = 0; i < tile_exit_counter.length; i++){
		//grid_solution_positionId[i] = document.getElementById('threeByThree_sol_'+i);
		grid_image_positionId[i] = document.getElementById('threeByThree_'+i);
		switch(tile_exit_counter[i]){
			case 1: 
				oneSide(i) ;
				break;
			case 2:
				twoSide(i) ;
				break;
			case 3:
				threeSide(i);
				break; 
			case 4:
				tile_cross;
				break;
			default:
				break;
		}
	}
}

 /**
 * This function goes through all the tiles and randomly assigns them by rotating them 
 * this function does note change according to the matrix size with the variables set. 
 * v 2.0 the 3x3 and 4x4 seprations are no longer necessary 
 * @version 2.0
 * */
function generateGameBoard(){
	for(var i = 0; i < tile_exit_counter.length; i++){
		rotate(i);
	}
}

/**
 * It also assigns a solution grid to be compared against the user's grid.
 *for the visuals so far , there will be a oard rendered to be able to play it accordingly and find bugs. 
 * 
 * @author Eva Yu
 * @version 3.0
 */
function tileAssign4x4(){
	for(var i = 0; i < tile_exit_counter.length; i++){
		//grid_solution_positionId[i] = document.getElementById('fourByFour_sol_'+i); 
		grid_image_positionId[i] = document.getElementById('fourByFour_'+i);
		switch(tile_exit_counter[i]){
			case 1: 
				oneSide(i) ;
				break;
			case 2:
				twoSide(i) ;
				break;
			case 3:
				threeSide(i);
				break; 
			case 4:
				tile_cross;
				break;
			default:
				break;
		}
	}
}
	
/**
 * Initializes all the exit counter indices to zero. 
 *
 */
function tile_exit_counterInit(){
	for (var i = 0; i < tile_exit_counter.length; i++){
		tile_exit_counter[i] = 0;
	}
}

/**
 * This function runs through each vertex on the adjcency matrix and read the number of 
 * trues it has. 
 * it will store these values according to its grid position (vertex)
 */
function tileExitCount(){
	for(var i = 0; i < adj_matrix.length; i++){
		for(var ii = 0; ii < adj_matrix.length; ii++){
			if(adj_matrix[i][ii]){
				tile_exit_counter[i]++;
			}
		}
	}
	
}

/**
 * If there is only one tile connected to the current tile the loop is reading, 
 * then the corresponding numb image will be asisgned.
 *
 * v2.0: [bug fix: asisnged the right tile array (Yeah, that was stupid)]
 * v3.0: [the tile of position 0 and MAX^2 -1 are assigned a nub and facing the
 * 		 way towards the solution. they arehard coded into place in the onSideRotate function]
 * v 4.0: [only randomly generates a number]
 * 
 * @version 4.0 
 * 
 */
function oneSide(til){
	var tile = parseInt(til);
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
}
/**
 * If tile is connected to two of its surrounding tiles, the image will be assinged here. 
 * there is potential to shorten this function further
 *for prevention of evolutionary bugs reasons, I have decided to keep this as is. 
 * 
 * v.3.0 [randomly genereates a number that signifies the tile that will be on display]
 * 
 *@param   {number}  til [number of the tile]
 * @return  {String}  [an array that will reassign the src of the tile image ]
 * @version 3.0 [fixed a few bugs in code.]
 * 
 */
function twoSide(til){
	var tile = parseInt(til)
			// if it any of the corner pieces
	if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);				
	
	}else if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
	
	}else if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 2);
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-MAX]){
		grid_image_counter[tile] = Math.floor(Math.random() * 2);
	}
}
/**
 * 
 *If tile is connected to two of its surrounding tiles, the image will be assinged here.
 *v 2.0 [ randomly gnerates a number between 0-4 that will represent the 
 *tile_t randmoized direction]
 * 
 * @version 2.0
 * 
 */
function threeSide(til){
	var tile = parseInt(til);
	grid_image_counter[tile] = Math.floor(Math.random() * 4);
}

