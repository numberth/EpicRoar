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
var tile_exit_counter_user;
var grid_image_positionId;
var grid_solution_positionId;
var grid_image_counter;

function initAssignmentArrays(){
	tile_exit_counter = new Array(MAX*MAX);
	tile_exit_counter_user = new Array(MAX*MAX);
	grid_image_positionId = new Array(MAX*MAX);
	grid_solution_positionId = new Array(MAX*MAX);
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

    solutionPathId(); // from check_solution_3x3.js
	nonSolutionGridsId();// from check_solution_3x3.js
	
	tile_exit_counterInit();
	tileExitCount();

	tile_exit_counter_userInit();
	tile_exit_counter_userChange();
	
	tileAssign3x3();
	generateGameBoard3x3();
}

/**
 * This function is called by the initAll function in init.js
 * this funtion will initialize and assign values i nthe tile_exit_counters
 * and then assign the image accordingly by calling the tileAssign3x3 function. 
 *  
 */
function assignPath4x4(){
	initAssignmentArrays();

    solutionPathId(); // from check_solution_3x3.js
	nonSolutionGridsId();// from check_solution_3x3.js
	
	tile_exit_counterInit();
	tileExitCount();

	tile_exit_counter_userInit();
	tile_exit_counter_userChange();
	
	tileAssign4x4();
	generateGameBoard4x4();
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
		grid_solution_positionId[i] = document.getElementById('threeByThree_sol_'+i);
		switch(tile_exit_counter[i]){
			case 1: 
				grid_solution_positionId[i].style.backgroundImage = "url('" + oneSide(i) + "')";
				break;
			case 2:
				grid_solution_positionId[i].style.backgroundImage = "url('" + twoSide(i) + "')";
				break;
			case 3:
				grid_solution_positionId[i].style.backgroundImage = "url('" + threeSide(i) + "')";
				break; 
			case 4:
				grid_solution_positionId[i].style.backgroundImage = "url('" + tile_cross + "')";
				break;
			default:
				break;
		}
	}
}
/**
 * This function randomly generates the user board in the same way the tileAssign3x3ment assigns the board. 
 * but, the tiles will be randmly gerneated in the assigned array of images;
 * it calls the rotate function in order to reposition the tile. 
 * 
 *  */
function generateGameBoard3x3(){
	for(var i = 0; i < tile_exit_counter_user.length; i++){
		grid_image_positionId[i] = document.getElementById('threeByThree_'+i);
		switch(tile_exit_counter_user[i]){
			case 1: 
				grid_image_positionId[i].style.backgroundImage = "url('" +  oneSide(i) + "')";
				oneSideRotate(i);
				break;
			case 2:
				grid_image_positionId[i].style.backgroundImage = "url('" +  twoSide(i) + "')";
				twoSideRotate(i);
				break;
			case 3:
				grid_image_positionId[i].style.backgroundImage = "url('" +  threeSide(i) + "')";
				threeSideRotate(i);
				break; 
			case 4:
				grid_image_positionId[i].style.backgroundImage = "url('" +  tile_cross + "')";
				break;
			default:
				break;
		}
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
		grid_solution_positionId[i] = document.getElementById('fourByFour_sol_'+i);
		switch(tile_exit_counter[i]){
			case 1: 
				grid_solution_positionId[i].style.backgroundImage = "url('" + oneSide(i) + "')";
				break;
			case 2:
				grid_solution_positionId[i].style.backgroundImage = "url('" + twoSide(i) + "')";
				break;
			case 3:
				grid_solution_positionId[i].style.backgroundImage = "url('" + threeSide(i) + "')";
				break; 
			case 4:
				grid_solution_positionId[i].style.backgroundImage = "url('" + tile_cross + "')";
				break;
			default:
				break;
		}
	}
}
/**
 * This function randomly generates the user board in the same way the tileAssign4x4ment assigns the board. 
 * but, the tiles will be randmly gerneated in the assigned array of images;
 * it calls the rotate function in order to reposition the tile. 
 * 
 *  */
function generateGameBoard4x4(){
	for(var i = 0; i < tile_exit_counter_user.length; i++){
		grid_image_positionId[i] = document.getElementById('fourByFour_'+i);
		switch(tile_exit_counter_user[i]){
			case 1: 
				grid_image_positionId[i].style.backgroundImage = "url('" +  oneSide(i) + "')";
				oneSideRotate(i);
				break;
			case 2:
				grid_image_positionId[i].style.backgroundImage = "url('" +  twoSide(i) + "')";
				twoSideRotate(i);
				break;
			case 3:
				grid_image_positionId[i].style.backgroundImage = "url('" +  threeSide(i) + "')";
				threeSideRotate(i);
				break; 
			case 4:
				grid_image_positionId[i].style.backgroundImage = "url('" +  tile_cross + "')";
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

function tile_exit_counter_userInit(){
  	for(var i = 0 ; i < tile_exit_counter.length; i++){
  		tile_exit_counter_user[i] = tile_exit_counter[i];
  	}

}
/**
 * in v 1.0 this function changes anythign thing that is in the nonSolution Values array 
 * into a tile_nub image with one exit. 
 * so that the user play does not match the computer play 
 * 
 *  In v2.0 This fucntion ONLY changes the tiles 0 ,and MAX^2- 1 
 *  in order for them to be tile_nub images 
 *  
 * the function  in the assignment of oneSide() will be changed accordingly 
 * to accomodate the fixing of the posistion of the nub in tile 0 and the last tile 
 * 
 * @version 2.0
 * @return  {[type]}  [description]
 */
function tile_exit_counter_userChange(){
// version 1.0 : 
	// for(var i = 0 ; i < nonSolutionValues.length; i++){
	// 	tile_exit_counter_user.splice(nonSolutionValues[i],1,1);
	// 	}
	// 	
//version 2.0:
	tile_exit_counter_user[0] = 1;
	tile_exit_counter_user[MAX*MAX -1] = 1;
}
/**
 * This functions takes the adjacent matrix and counts all the values in the atrix to see 
 * how many trues values per row. for eery true value, the associating tile_exit_counter will increment.  
 * 
 */
function tileExitCount(){
	for(var i = 0; i < adj_matrix.length; i++){
		for(var ii = 0; ii < adj_matrix.length; ii++){
			if(adj_matrix[i][ii]){
				tile_exit_counter[i]++;
			}
		}
	}
	tile_exit_counter[0] = 1;
	tile_exit_counter[MAX*MAX -1] = 1;
}
/**
 * If there is only one tile connected to the current tile the loop is reading, 
 * then the corresponding numb image will be asisgned.
 *
 * v2.0: [bug fix: asisnged the right tile array (Yeah, that was stupid)]
 * v3.0: [the tile of position 0 and MAX^2 -1 are assigned a nub and facing the
 * 		 way towards the solution. they arehard coded into place in the onSideRotate function]
 * 		 
 * @param   {number}  til [number position of the tile]
 * @return  {String}  [an array that will reassign the src of the tile image ]
 * @version 3.0 
 * 
 */
function oneSide(til){
	var tile = parseInt(til);
	if(tile === 0){
		if( grid_solution_tracer[grid_solution_tracer.length - 2] === 1){
			grid_image_counter[tile] = 1;
			return tile_nub[1];
		}else if(grid_solution_tracer[grid_solution_tracer.length - 2] === MAX){
			grid_image_counter[tile] = 2;
			return tile_nub[2];
		}
	}else if( tile === (MAX*MAX-1)){
		if (grid_solution_tracer[1] === (MAX*MAX - 2)){
			grid_image_counter[tile] = 3;
			return tile_nub[3];
		}else if(grid_solution_tracer[1] === (MAX*MAX - MAX)){
			grid_image_counter[tile] = 0;
			return tile_nub[0];	
		} 
	}else if (adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_nub[1];
	}else if (adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_nub[3];
	} else if( adj_matrix[tile][tile + MAX]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_nub[2];
	}else if ( adj_matrix[tile][tile - MAX]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_nub[0];
	}
}
/**
 * If tile is connected to two of its surrounding tiles, the image will be assinged here. 
 *
 * 
 *@param   {number}  til [number of the tile]
 * @return  {String}  [an array that will reassign the src of the tile image ]
 * @version 2.0 [fixed a few bugs in code.]
 */
function twoSide(til){
	var tile = parseInt(til)
			// if it any of the corner pieces
	if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_90[0];
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_90[1];				
	
	}else if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_90[3];
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_90[2];
	
	}else if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 2);
		return this.tile_line[1];
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-MAX]){
		grid_image_counter[tile] = Math.floor(Math.random() * 2);
		return this.tile_line[0];
	}
}
/**
 * 
 * Three Side Function is in the works. Please await for version update.
 *
 * @version 1.0
 * @return  {String}  [an array that will reassign the src of the tile image ]
 */
function threeSide(til){
	var tile = parseInt(til);
	//if it is connected to up, down, right
	if(adj_matrix[tile][tile - MAX] && adj_matrix[tile][tile + MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[1];
	//if it is connected to up, down, left
	}else if(adj_matrix[tile][tile - MAX] && adj_matrix[tile][tile + MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[3];
	//if it is connected to up, left, right 
	}else if(adj_matrix[tile][tile - MAX] && adj_matrix[tile][tile-1] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[0];
	// if it is connected to down, left, right
	}else if(adj_matrix[tile][tile-1] && adj_matrix[tile][tile + MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[2];
	}
}
