
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


