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
var MAX = 3;

var tile_90 = ["img/tile_90_0.jpg","img/tile_90_1.jpg","img/tile_90_2.jpg","img/tile_90_3.jpg" ];
var tile_nub =["img/tile_nub_0.jpg","img/tile_nub_1.jpg","img/tile_nub_2.jpg","img/tile_nub_3.jpg" ];
var tile_t = ["img/tile_t_0.jpg","img/tile_t_1.jpg","img/tile_t_2.jpg","img/tile_t_3.jpg" ];
var tile_line = ["img/tile_line_0.jpg","img/tile_line_1.jpg"];
var tile_cross = "img/tile_cross.jpg";


/**
 * This function is called by the initAll function in init.js
 * this funtion will initialize and assign values i nthe tile_exit_counters
 * and then assign the image accordingly by calling the tileAssign3x3 function. 
 *  
 */
function assignPath3x3(){

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
 * [tile_exit_counter description] counter the number of exits any given position has
 * [grid_image_positionId description] stores the id of the users image board images
 * [grid_solution_positionId description] stores the id of the solution boards images
 * [grid_image_counter description] stores position of the image and allows the rotation to look 
 * like a 90 degree change every turn 
 * 
 * @type {Array}
 */
var tile_exit_counter = new Array(MAX*MAX);
var tile_exit_counter_user = new Array(MAX*MAX);
var grid_image_positionId = new Array(MAX*MAX);
var grid_solution_positionId = new Array(MAX*MAX);
var grid_image_counter = new Array(MAX*MAX);

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

function tile_exit_counter_userChange(){
	for(var i = 0 ; i < nonSolutionValues.length; i++){
		tile_exit_counter_user.splice(nonSolutionValues[i],1,1);
		}
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
}
/**
 * If there is only one tile connected to the current tile the loop is reading, 
 * then the corresponding numb image will be asisgned.
 * 
 * @param   {number}  til [number position of the tile]
 * @return  {String}  [an array that will reassign the src of the tile image ]
 * @version 2.0 [bug fix: asisnged the right tile array (Yeah, that was stupid)]
 */
function oneSide(til){
	var tile = parseInt(til);
	if (adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_nub[1];
	}else if (adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_nub[3];
	} else if( adj_matrix[tile][tile + 3]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return this.tile_nub[2];
	}else if ( adj_matrix[tile][tile - 3]){
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
			if(tile === 0 ||tile === 2 ||tile === 6 || tile === 8 ){
				switch(tile){
					case 0:
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[1];
						break;
					case 2:
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[2];
						break;
					case 6:
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[0];
						break;
					case 8:
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[3];
						break;
				} //tile_90[array]
			}else if(tile === 1 ||tile === 7){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
						grid_image_counter[tile] = Math.floor(Math.random() * 2);
						return this.tile_line[1];	
						 //tile_lne [array]
				}else{
					switch(tile){
						case 1:
							if(adj_matrix[tile][0]){
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[2];
							}else{
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[1];
							}
							break;
						case 7:
							if(adj_matrix[tile][6]){
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[3];
							}else{
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[0];
							} //tile_90[array]
							break;
						default:
							break;
					}
				}
			}else if(tile === 3 || tile === 5){
				if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile] = Math.floor(Math.random() * 2);
					return tile_line[0]; //tile_t[array]
				}else{
					switch(tile){
						case 3:
							if(adj_matrix[tile][0]){
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[0];
							}else{
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[1];
							}
							break;
						case 5:
							if(adj_matrix[tile][2]){
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[3];
							}else{
								grid_image_counter[tile] = Math.floor(Math.random() * 4);
								return this.tile_90[2];
							} //tile_90[array]
							break;
						default:  
							break;
					}
				}
			}else if(tile === 4){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
					grid_image_counter[tile] = Math.floor(Math.random() * 2);
					return this.tile_line[1]; //tile_t[array]
				}else if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile] = Math.floor(Math.random() * 2);
					return this.tile_line[0]; //tile_t[array]
				}else{
					if(adj_matrix[tile][1] && adj_matrix[tile][5]){
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[0];
					}else if(adj_matrix[tile][5] && adj_matrix[tile][7]){
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[1];
					}else if(adj_matrix[tile][3] && adj_matrix[tile][7]){
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[2];
					}else{
						grid_image_counter[tile] = Math.floor(Math.random() * 4);
						return this.tile_90[3];
					}
				} 
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
	if(adj_matrix[tile][tile - 3] && adj_matrix[tile][tile + 3] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[1];
	//if it is connected to up, down, left
	}else if(adj_matrix[tile][tile - 3] && adj_matrix[tile][tile + 3] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[3];
	//if it is connected to up, left, right 
	}else if(adj_matrix[tile][tile - 3] && adj_matrix[tile][tile-1] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[0];
	// if it is connected to down, left, right
	}else if(adj_matrix[tile][tile-1] && adj_matrix[tile][tile + 3] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = Math.floor(Math.random() * 4);
		return tile_t[2];
	}
}

/******************************************************************************************
 * 
 * This Part of the program is part 2 : this is where I will implement rotation abilities 
 * and find the solution as well. 
 * 
 * @author Eva Yu
 * @version 1.0
 *
 ******************************************************************************************


/**
 * This function is called upon the click of the image, and it will turn the image according 
 * to the number of exits it has and its current picture index in the array assinged. 
 * 
 * @param   {Number}  til [the number of the tile position]
 *
 */
function rotate(til){
if(enable){
var tile = parseInt(til);
		switch(tile_exit_counter_user[tile]){
			case 1: 
				oneSideRotate(tile);
				break;
			case 2:
				twoSideRotate(tile);
				break;
			case 3:
				threeSideRotate(tile);
				break; 
			case 4:
				grid_image_positionId[tile].style.backgroundImage = "url('" + tile_cross + "')";
			default:
				break;
		}
	}
}

/**
 * If tile is connected to one of its surrounding tiles,
 *  the image will appear to rotate on click according to this function. 
 *
 * 
 *@param   {number}  til [number of the tile]
 */
function oneSideRotate(til){
	var tile = parseInt(til);

	grid_image_counter[tile]++;
	if(grid_image_counter[tile]>3){
		grid_image_counter[tile] = 0;
	}
	var temp = grid_image_counter[tile]
	grid_image_positionId[tile].style.backgroundImage = "url('" + tile_nub[grid_image_counter[tile]] + "')";

}

/**
 * If tile is connected to two of its surrounding tiles,
 *  the image will appear to rotate on click according to this function. 
 *
 * 
 *@param   {number}  til [number of the tile]
 */
function twoSideRotate(til){
		var tile = parseInt(til)
			if(tile === 0 ||tile === 2 ||tile === 6 || tile === 8 ){
				grid_image_counter[tile]++;
				if(grid_image_counter[tile]>3){
					grid_image_counter[tile] = 0;
				}
				grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";
				
			}else if(tile === 1 ||tile === 7){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1) {
						grid_image_counter[tile] = 0;					
				}
					grid_image_positionId[tile].style.backgroundImage = "url('" + tile_line[grid_image_counter[tile]] + "')";	
						 //tile_lne [array]
				}else{
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>3){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";

				}
			}else if(tile === 3 || tile === 5){
				if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].style.backgroundImage = "url('" + tile_line[grid_image_counter[tile]] + "')";
				}else{
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>3){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";
				}
			}else if(tile === 4){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].style.backgroundImage = "url('" + tile_line[grid_image_counter[tile]] + "')";
				}else if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].style.backgroundImage = "url('" + tile_line[grid_image_counter[tile]] + "')";
				}else{
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>3){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";
				}



				} 
}

/**
 * If tile is connected to three of its surrounding tiles,
 *  the image will appear to rotate on click according to this function. 
 *
 * 
 *@param   {number}  til [number of the tile]
 */
function threeSideRotate(til){
	var tile = parseInt(til);
	grid_image_counter[tile]++;
	if(grid_image_counter[tile]>3){
		grid_image_counter[tile] = 0;
	}
	grid_image_positionId[tile].style.backgroundImage = "url('" + tile_t[grid_image_counter[tile]] + "')";	
}


