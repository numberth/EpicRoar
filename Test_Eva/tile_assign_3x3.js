/******************************************************************************************
 * This program extends from the capabilties of "tile_assign.js" 
 * This program reads the adjacent matrix and values identified that are true in the adjacent matrix 
 * to assign values accordingly
 *
 * NOTE: I am having trouble finding a simple solution to degsinate tile_t. 
 * THe issue is the possiblity of tile to to connect to items more than once .  
 * 
 * @author Eva Yu
 * @version 1.0
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
 * Following varaibles are counters assigned to each array to loop thorugh array 
 */

var tile_90_counter;
var tile_nub_counter;
var tile_t_counter; 
var tile_line_counter; 
var tile_cross_counter;

/**
 * This function is called by the initAll function in init.js
 * this funtion will initialize and assign values i nthe tile_counters
 * and then assign the image accordingly by calling the tileAssign function. 
 *  
 */
function rotate(){
	tile_counterInit();
	tile_count();
	tileAssign();
}
/**
 * This function assigns each div tile image according to the solution path created from the session
 * by reasigning the src of the image.
 * 
 */
function tileAssign(){
	for(var i = 0; i < tile_counter.length; i++){
		var temp_grid_image = document.getElementById('tile_img_'+i);
		switch(tile_counter[i]){
			case 1: 
				temp_grid_image.src = oneSide(i);
				break;
			case 2:
				temp_grid_image.src = twoSide(i);
				break;
			case 3:
				temp_grid_image.src = threeSide(); 
				break;
			case 4:
				temp_grid_image.src = tile_cross;
			default:
				break;
		}
	}
}
/**
 * intializes all the counters in the counter 
 * @author Eva Yu
 * @version [version]
 */
function initTileCounters(){
	this.tile_90_counter = 0;
	this.tile_nub_counter = 0;
	this.tile_t_counter = 0; 
	this.tile_line_counter = 0; 
	this.tile_cross_counter = 0;
}

/**
 * This function that loops through, according to the type of tile, the possible "directions" the tile is pointing
 * to. It will make the tile appear to turn 90 degrees with every event trigger. 
 * 
 * @param {Number} img [the number assigned to each tile];
 */
var tile_counter = new Array(9);
/**
 * [tile_counterInit description]
 *
 * @return  {[type]}  [description]
 */
function tile_counterInit(){
	for (var i = 0; i < tile_counter.length; i++){
		tile_counter[i] = 0;
	}
}
/**
 * This functions takes the adjacent matrix and counts all the values in the atrix to see 
 * how many trues values per row. for eery true value, the associating tile_counter will increment.  
 * 
 */
function tile_count(){
	for(var i = 0; i < adj_matrix.length; i++){
		for(var ii = 0; ii < adj_matrix.length; ii++){
			if(adj_matrix[i][ii]){
				tile_counter[i]++;
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
		return this.tile_nub[1];
	}else if (adj_matrix[tile][tile-1]){
		return this.tile_nub[3];
	} else if( adj_matrix[tile][tile + 3]){
		return this.tile_nub[2];
	}else if ( adj_matrix[tile][tile - 3]){
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
						return this.tile_90[1];
					case 2:
						return this.tile_90[2];
					case 6:
						return this.tile_90[0];
					case 8:
						return this.tile_90[3];
				} //tile_90[array]
			}else if(tile === 1 ||tile === 7){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
						return this.tile_line[1];	
						 //tile_lne [array]
				}else{
					switch(tile){
						case 1:
							if(adj_matrix[tile][0]){
								return this.tile_90[2];
							}else{
								return this.tile_90[1];
							}
							break;
						case 7:
							if(adj_matrix[tile][6]){
								return this.tile_90[3];
							}else{
								return this.tile_90[0];
							} //tile_90[array]
							break;
						default:
							break;
					}
				}
			}else if(tile === 3 || tile === 5){
				if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					return tile_line[0]; //tile_t[array]
				}else{
					switch(tile){
						case 3:
							if(adj_matrix[tile][0]){
								return this.tile_90[0];
							}else{
								return this.tile_90[1];
							}
							break;
						case 5:
							if(adj_matrix[tile][2]){
								return this.tile_90[3];
							}else{
								return this.tile_90[2];
							} //tile_90[array]
							break;
						default:  
							break;
					}
				}
			}else if(tile === 4){
				if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile - 1]){
					return this.tile_line[1]; //tile_t[array]
				}else if(adj_matrix[tile][tile-3] && adj_matrix[tile][tile + 3]){
					return this.tile_line[0]; //tile_t[array]
				}else{
					if(adj_matrix[tile][1] && adj_matrix[tile][5]){
						return this.tile_90[0];
					}else if(adj_matrix[tile][5] && adj_matrix[tile][7]){
						return this.tile_90[1];
					}else if(adj_matrix[tile][3] && adj_matrix[tile][7]){
						return this.tile_90[2];
					}else{
						return this.tile_90[3];
					}
				} 
			}
}
/**
 * Three Side Function is in the works. Please await for version update.
 *
 * @version [1.0]
 * @return  {String}  [an array that will reassign the src of the tile image ]
 */
function threeSide(){
	return tile_t[0];
}



