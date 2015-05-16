
/******************************************************************************************
 * 
 * This Part of the program is part 2 : this is where I will implement rotation abilities 
 * and find the solution as well. 
 *
 * v 1.1 Change made in the rotation of the nub. Grid position 0 and grid position MAX^2 -1 
 * ( the last piece in the grid) are both turned into nub and hardcoded so they do not 
 * change positions regardless of the click 
 *
 * 
 * 
 * @author Eva Yu
 * @version 1.1
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
if(enable && clock.pause2 == false){
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
 *If the image if either the very first position or the very last postsion of the tile, they will cntinuously return the same 
 * iamge src that will make itappear to be  fixed images. 
 * 
 * v2.0: fixed bugs 
 * v3.0: the tiles of  grid position 0 and MAX^2 - 1 are hardcoded so they continusouly return the index 
 * in the nub image array, they will apeear to be hardcoded and immovable.  
 * 
 *@version 3.0
 *@param   {number}  til [number of the tile]
 * 
 */
function oneSideRotate(til){
	var tile = parseInt(til);
	if(tile === 0){
		if( grid_solution_tracer[grid_solution_tracer.length - 2] === 1){
			grid_image_counter[tile] = 1;
		}else if(grid_solution_tracer[grid_solution_tracer.length - 2] === MAX){
			grid_image_counter[tile] = 2;
		}
	}else if( tile === (MAX*MAX-1)){
		if (grid_solution_tracer[1] === (MAX*MAX - 2)){
			grid_image_counter[tile] = 3;
		}else if(grid_solution_tracer[1] === (MAX*MAX - MAX)){
			grid_image_counter[tile] = 0;
		} 
	}else{
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
	}
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
	if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";		
	
	}else if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		grid_image_positionId[tile].style.backgroundImage = "url('" + tile_90[grid_image_counter[tile]] + "')";
	
	}else if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile-1]){
			grid_image_counter[tile]++;
			if(grid_image_counter[tile]>1) {
				grid_image_counter[tile] = 0;					
		}
			grid_image_positionId[tile].style.backgroundImage = "url('" + tile_line[grid_image_counter[tile]] + "')";	
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-MAX]){
			grid_image_counter[tile]++;
			if(grid_image_counter[tile]>1) {
				grid_image_counter[tile] = 0;					
		}
			grid_image_positionId[tile].style.backgroundImage = "url('" + tile_line[grid_image_counter[tile]] + "')";	
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


