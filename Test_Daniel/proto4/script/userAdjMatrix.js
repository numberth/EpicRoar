/***************************************************************************************
 *   
 * This program sets and resets the dynamically changing adjaceny matrix. It
 * will only set the values that are in the limits of the grid and any path that connects to 
 * the border of the grid will not be given a value of true 
 * 
 * @author Eva Yu
 * @version [2.0]
 ***************************************************************************************
/**
 * This function is called with every rotation according the the tile ( vertex) position 
 * and the image array it currently has. 
 *
 * this function dynamically changes the adjaceny array of the user to implement the DFS algorithm 
 * in checkPath.js
 * 
 * @author Eva Yu
 * @version 1.0
 * @param   {Number}  til [the nubmer of the grid position]
 * @param   {Array}  img [the array and specific image that is being rotated]
 */
function setAdjMatrixUser(til, img){
	var tileImg = img;
	var tile = parseInt(til);
	
	resetMatrixRow(tile);

	switch(tileImg){
		case tile_nub[0]:
			if(checkBounds(tile-MAX)){
				adj_matrix_user[tile][tile-MAX] = true;
			}
			break;
		case tile_nub[1]:
			if(checkBounds(tile+1)){
				adj_matrix_user[tile][tile+1] = true;
			}
			break;
		case tile_nub[2]:
			if(checkBounds(tile+MAX)){
				adj_matrix_user[tile][tile+MAX] = true;
			}
			break;
		case tile_nub[3]:
			if(checkBounds(tile-1)){
				adj_matrix_user[tile][tile-1] = true;
			}	
			break;
		case tile_90[0]:
			if(checkBounds(tile-MAX)){
				adj_matrix_user[tile][tile-MAX] = true;
			}
			if(checkBounds(tile+1)){
				adj_matrix_user[tile][tile+1] = true;
			}
			break;
		case tile_90[1]:
			if(checkBounds(tile+1)){
				adj_matrix_user[tile][tile+1] = true;
			}
			if(checkBounds(tile+MAX)){
				adj_matrix_user[tile][tile+MAX] = true;
			}
			break;
		case tile_90[2]:
			if(checkBounds(tile+MAX)){
				adj_matrix_user[tile][tile+MAX] = true;
			}
			if(checkBounds(tile-1)){
				adj_matrix_user[tile][tile-1] = true;
			}
			break;
		case tile_90[3]:
			if(checkBounds(tile-1)){
				adj_matrix_user[tile][tile-1] = true;
			}
			if(checkBounds(tile-MAX)){
				adj_matrix_user[tile][tile-MAX] = true;
			}
			break;
		case tile_line[0]:
			if(checkBounds(tile+MAX)){
				adj_matrix_user[tile][tile+MAX] = true;
			}
			if(checkBounds(tile-MAX)){
				adj_matrix_user[tile][tile-MAX] = true;
			}
			break;
		case tile_line[1]:
			if(checkBounds(tile+1)){
				adj_matrix_user[tile][tile+1] = true;
			}
			if(checkBounds(tile-1)){
				adj_matrix_user[tile][tile-1] = true;
			}
			break;
		case tile_t[0]:
			if(checkBounds(tile-MAX)){
				adj_matrix_user[tile][tile-MAX] = true;
			}
			if(checkBounds(tile+1)){
				adj_matrix_user[tile][tile+1] = true;
			}
			if(checkBounds(tile-1)){
				adj_matrix_user[tile][tile-1] = true;
			}
			break;
		case tile_t[1]:
			if(checkBounds(tile+MAX)){
				adj_matrix_user[tile][tile+MAX] = true;
			}
			if(checkBounds(tile-MAX)){
				adj_matrix_user[tile][tile-MAX] = true;
			}
			if(checkBounds(tile+1)){
				adj_matrix_user[tile][tile+1] = true;
			}
			break;
		
		case tile_t[2]:
			if(checkBounds(tile+MAX)){
				adj_matrix_user[tile][tile+MAX] = true;
			}
			if(checkBounds(tile-1)){
				adj_matrix_user[tile][tile-1] = true;
			}
			if(checkBounds(tile+1)){
				adj_matrix_user[tile][tile+1] = true;
			}
			break;
		
		case tile_t[3]:
			if(checkBounds(tile+MAX)){
				adj_matrix_user[tile][tile+MAX] = true;
			}
			if(checkBounds(tile-MAX)){
				adj_matrix_user[tile][tile-MAX] = true;
			}
			if(checkBounds(tile-1)){
				adj_matrix_user[tile][tile-1] = true;
			}
			break;
		case tile_cross:
			adj_matrix_user[tile][tile+MAX] = true;
			adj_matrix_user[tile][tile-MAX] = true;		
			adj_matrix_user[tile][tile-1] = true;
			adj_matrix_user[tile][tile+1] = true;
			break;
	}
}
/**
 * this function goes throug hthe adjaceny matrix and resets all the values in the row to false
 * in order to reassign the new values 
 * 
 * @param   {number}  til [represents the vertex, or the grid iamge position]
 */
function resetMatrixRow(til){
	var tile = parseInt(til);
	for(var i = 0; i < adj_matrix_user[tile].length; i++){
			adj_matrix_user[tile][i] = false; 
	}
}
/**
 * This function makes sure the values that will be assigned true in the
 * adjaacency matrix are ensured to be i nthe boundaries of the min (0) and
 * max (MAX^2 -1 )
 * 
 */
function checkBounds(val){
	var num = parseInt(val);
	var maxTile = MAX*MAX-1;

	if(num <= maxTile && num >= 0){
		return true;
	}else{
		return false;
	}
}