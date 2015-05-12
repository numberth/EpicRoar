/******************************************************************************************
 * This program extends from the capabilties of "tile_assign.js" 
 * This program reads the adjacent matrix and values identified that are true in the adjacent matrix 
 * to assign values accordingly
 *
 *Bugs fixed, path assigned and rotate funtion is working! 
 *now we have a bug that i will fix, I SWEAR. 
 *
 * @author Eva Yu
 * @version 2.0
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
var tile_90 = ["../img/tile_90_0.jpg","../img/tile_90_1.jpg","../img/tile_90_2.jpg","../img/tile_90_3.jpg" ];
var tile_nub =["../img/tile_nub_0.jpg","../img/tile_nub_1.jpg","../img/tile_nub_2.jpg","../img/tile_nub_3.jpg" ];
var tile_t = ["../img/tile_t_0.jpg","../img/tile_t_1.jpg","../img/tile_t_2.jpg","../img/tile_t_3.jpg" ];
var tile_line = ["../img/tile_line_0.jpg","../img/tile_line_1.jpg"];
var tile_cross = "../img/tile_cross.jpg";


/**
 * This function is called by the initAll function in init.js
 * this funtion will initialize and assign values i nthe tile_exit_counters
 * and then assign the image accordingly by calling the tileAssign function. 
 *  
 */
function assignPath(){
	tile_exit_counterInit();
	tileExitCount();
	tileAssign();
}
/**
 * This function assigns each div tile image according to the solution path created from the session
 * by reasigning the src of the image.
 * 
 */
var tile_exit_counter = new Array(9);
var grid_image_positionId = new Array(9);
var grid_image_counter = new Array(9);

function tileAssign(){
	for(var i = 0; i < tile_exit_counter.length; i++){
		grid_image_positionId[i] = document.getElementById('tile_img_'+i);
		switch(tile_exit_counter[i]){
			case 1: 
				grid_image_positionId[i].src = oneSide(i);
				break;
			case 2:
				grid_image_positionId[i].src = twoSide(i);
				break;
			case 3:
				grid_image_positionId[i].src = threeSide(i);
				break; 
			case 4:
				grid_image_positionId[i].src = tile_cross;
			default:
				break;
		}
	}
}


/**
 * [tile_exit_counterInit description]
 *
 * @return  {[type]}  [description]
 */
function tile_exit_counterInit(){
	for (var i = 0; i < tile_exit_counter.length; i++){
		tile_exit_counter[i] = 0;
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
		grid_image_counter[tile] = 1;
		return this.tile_nub[1];
	}else if (adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = 3;
		return this.tile_nub[3];
	} else if( adj_matrix[tile][tile + 3]){
		grid_image_counter[tile] = 2;
		return this.tile_nub[2];
	}else if ( adj_matrix[tile][tile - 3]){
		grid_image_counter[tile] = 0;
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
						grid_image_counter[tile] = 1;
						return this.tile_90[1];
						break;
					case 2:
						grid_image_counter[tile] = 2;
						return this.tile_90[2];
						break;
					case 6:
						grid_image_counter[tile] = 0;
						return this.tile_90[0];
						break;
					case 8:
						grid_image_counter[tile] = 3;
						return this.tile_90[3];
						break;
				} //tile_90[array]
			}else if(tile === 1 ||tile === 7){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
						grid_image_counter[tile] = 1;
						return this.tile_line[1];	
						 //tile_lne [array]
				}else{
					switch(tile){
						case 1:
							if(adj_matrix[tile][0]){
								grid_image_counter[tile] = 2;
								return this.tile_90[2];
							}else{
								grid_image_counter[tile] = 1;
								return this.tile_90[1];
							}
							break;
						case 7:
							if(adj_matrix[tile][6]){
								grid_image_counter[tile] = 3;
								return this.tile_90[3];
							}else{
								grid_image_counter[tile] = 0;
								return this.tile_90[0];
							} //tile_90[array]
							break;
						default:
							break;
					}
				}
			}else if(tile === 3 || tile === 5){
				if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile] = 0;
					return tile_line[0]; //tile_t[array]
				}else{
					switch(tile){
						case 3:
							if(adj_matrix[tile][0]){
								grid_image_counter[tile] = 0;
								return this.tile_90[0];
							}else{
								grid_image_counter[tile] = 1;
								return this.tile_90[1];
							}
							break;
						case 5:
							if(adj_matrix[tile][2]){
								grid_image_counter[tile] = 3;
								return this.tile_90[3];
							}else{
								grid_image_counter[tile] = 2;
								return this.tile_90[2];
							} //tile_90[array]
							break;
						default:  
							break;
					}
				}
			}else if(tile === 4){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
					grid_image_counter[tile] = 1;
					return this.tile_line[1]; //tile_t[array]
				}else if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile] = 0;
					return this.tile_line[0]; //tile_t[array]
				}else{
					if(adj_matrix[tile][1] && adj_matrix[tile][5]){
						grid_image_counter[tile] = 0;
						return this.tile_90[0];
					}else if(adj_matrix[tile][5] && adj_matrix[tile][7]){
						grid_image_counter[tile] = 1;
						return this.tile_90[1];
					}else if(adj_matrix[tile][3] && adj_matrix[tile][7]){
						grid_image_counter[tile] = 2;
						return this.tile_90[2];
					}else{
						grid_image_counter[tile] = 3;
						return this.tile_90[3];
					}
				} 
			}
}
/**
 * Three Side Function is in working order! 
 * this function assigns a tile-t img accoridng to its connections .
 *
 * @version [1.0]
 * @return  {String}  [an array that will reassign the src of the tile image ]
 */
function threeSide(til){
	var tile = parseInt(til);
	//if it is connected to up, down, right
	if(adj_matrix[tile][tile - 3] && adj_matrix[tile][tile + 3] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = 1;
		return tile_t[1];
	//if it is connected to up, down, left
	}else if(adj_matrix[tile][tile - 3] && adj_matrix[tile][tile + 3] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile] = 3;
		return tile_t[3];
	//if it is connected to up, left, right 
	}else if(adj_matrix[tile][tile - 3] && adj_matrix[tile][tile-1] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = 0;
		return tile_t[0];
	// if it is connected to down, left, right
	}else if(adj_matrix[tile][tile-1] && adj_matrix[tile][tile + 3] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile] = 2;
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
*/

/**
 * THis function is in the works, please stay tuned. 
 * 
 * @return  {[type]}  [description]
 */
function randomlyReassign(){
	var ran = Math.floor(Math.random() * 4);
	grid_image[0] 
}

/**
 * This function is called upon the click of the image, and it will turn the image according 
 * to the number of exits it has and its current picture index in the array assinged. 
 * 
 * @param   {Number}  til [the number of the tile position]
 *
 */
function rotate(til){
var tile = parseInt(til);
		switch(tile_exit_counter[tile]){
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
				grid_image_positionId[tile].src = tile_cross;
			default:
				break;
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
	grid_image_positionId[tile].src = tile_nub[grid_image_counter[tile]];

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
				grid_image_positionId[tile].src = tile_90[grid_image_counter[tile]];
				
			}else if(tile === 1 ||tile === 7){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1) {
						grid_image_counter[tile] = 0;					
				}
					grid_image_positionId[tile].src = tile_line[grid_image_counter[tile]];	
						 //tile_lne [array]
				}else{
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>3){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].src = tile_90[grid_image_counter[tile]];

				}
			}else if(tile === 3 || tile === 5){
				if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].src = tile_line[grid_image_counter[tile]];
				}else{
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>3){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].src = tile_90[grid_image_counter[tile]];
				}
			}else if(tile === 4){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].src = tile_line[grid_image_counter[tile]];
				}else if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>1){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].src = tile_line[grid_image_counter[tile]];
				}else{
					grid_image_counter[tile]++;
					if(grid_image_counter[tile]>3){
						grid_image_counter[tile] = 0;
					}
					grid_image_positionId[tile].src = tile_90[grid_image_counter[tile]];
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
	grid_image_positionId[tile].src = tile_t[grid_image_counter[tile]];	
}