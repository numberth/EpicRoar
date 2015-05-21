
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
 * this function will also call the funcation that will change the adjaceny matrix of the user 
 * in accordance with the change of the tile 
 * 
 * @version [2.0]
 * @param   {Number}  til [The tile that represents the position of the grid (
 * vertex)]
 */
function rotate(til){
if(enable && !clock.pause2){
var tile = parseInt(til);
		switch(tile_exit_counter[tile]){
			case 1:
				var tileImg = oneSideRotate(tile);
				grid_image_positionId[tile].style.backgroundImage = "url('" + tileImg + "')" ;
				setAdjMatrixUser(tile, tileImg);
				break;
			case 2:
				var tileImg = twoSideRotate(tile);
				grid_image_positionId[tile].style.backgroundImage = "url('" + tileImg + "')" ;
				setAdjMatrixUser(tile, tileImg);
				break;
			case 3:
				var tileImg = threeSideRotate(tile);
				grid_image_positionId[tile].style.backgroundImage = "url('" + tileImg + "')" ;
				setAdjMatrixUser(tile, tileImg);
				break; 
			case 4:
				grid_image_positionId[tile].style.backgroundImage = "url('" + tile_cross + "')";
				setAdjMatrixUser(tile, tile_cross);
			default:
				break;
		}
	}
}

/**
 * If tile is connected to one of its surrounding tiles,
 *  the image will appear to rotate on click according to this function. 
 * @param   {number}  til [number of the tile]
 * @return  {Array String}  [returns the exact image in the Array as the grid counter increments]
 * @version 3.0
 */
function oneSideRotate(til){
	var tile = parseInt(til);
	grid_image_counter[tile]++;
	if(grid_image_counter[tile]>3){
		grid_image_counter[tile] = 0;
	}
	return tile_nub[grid_image_counter[tile]];

}

/**
 * If tile is connected to two of its surrounding tiles,
 *  the image will appear to rotate on click according to this function. 
 *  
 * @param   {number}  til [number of the tile]
 * @return  {Array String}  [returns the exact image in the Array as the grid counter increments]
 * @version 3.0
 */
function twoSideRotate(til){
	var tile = parseInt(til)
	if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		return tile_90[grid_image_counter[tile]];
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile+1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		return tile_90[grid_image_counter[tile]];		
	
	}else if(adj_matrix[tile][tile-MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		return tile_90[grid_image_counter[tile]];
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-1]){
		grid_image_counter[tile]++;
		if(grid_image_counter[tile]>3){
			grid_image_counter[tile] = 0;
		}
		return tile_90[grid_image_counter[tile]];
	
	}else if(adj_matrix[tile][tile+1] && adj_matrix[tile][tile-1]){
			grid_image_counter[tile]++;
			if(grid_image_counter[tile]>1) {
				grid_image_counter[tile] = 0;					
		}
			return tile_line[grid_image_counter[tile]];	
	
	
	}else if(adj_matrix[tile][tile+MAX] && adj_matrix[tile][tile-MAX]){
			grid_image_counter[tile]++;
			if(grid_image_counter[tile]>1) {
				grid_image_counter[tile] = 0;					
		}
			return tile_line[grid_image_counter[tile]];	
	} 
}


/**
 * If tile is connected to three of its surrounding tiles,
 *  the image will appear to rotate on click according to this function.
 *   
 * @param   {number}  til [number of the tile]
 * @return  {Array String}  [returns the exact image in the Array as the grid counter increments]
 * @version 3.0
 */
function threeSideRotate(til){
	var tile = parseInt(til);
	grid_image_counter[tile]++;
	
	if(grid_image_counter[tile]>3){
		grid_image_counter[tile] = 0;
	}
	return tile_t[grid_image_counter[tile]];	
}


/**
 * Hard coded tile functions for 2x2 grids.
 * @type {Array}
 */
	var tile_90x = ["img/tile_90_0.jpg","img/tile_90_1.jpg","img/tile_90_2.jpg","img/tile_90_3.jpg" ];
	var tile_nubx =["img/tile_nub_0.jpg","img/tile_nub_1.jpg","img/tile_nub_2.jpg","img/tile_nub_3.jpg" ];
	var tile_linex = ["img/tile_line_0.jpg","img/tile_line_1.jpg"];
	var tile_counterx = 0;
	
	function counterLoopx(){
		tile_counterx++;
		if(tile_counterx>3){
			tile_counterx = 0;
		}
	}

	function counterLoop2x(){
		tile_counterx++;
		if(tile_counterx>1){
			tile_counterx = 0;
		}
	}

	function rotate90x(img){
		if(enable){
		var tile_imagex = document.getElementById(img);
		tile_imagex.style.backgroundImage = "url('" + tile_90x[tile_counterx] + "')";
		counterLoopx();
		verifyx();
	}
	}

	function rotateNubx(img){
		if(enable){
		var tile_imagex = document.getElementById(img);
		tile_imagex.style.backgroundImage = "url('" + tile_nubx[tile_counterx] + "')";
		counterLoopx();
		verifyx();
	}
	}

	function rotateLinex(img){
		if(enable){
		var tile_imagex = document.getElementById(img);
		tile_imagex.style.backgroundImage = "url('" + tile_linex[tile_counterx] + "')";
		counterLoop2x();
		verifyx();
	}
	}


	function verifyx(){
		flipSound();
		var bg0 = $(twoByTwo_0).css('background-image');
		var bg1 = $(twoByTwo_1).css('background-image');
		var bg2 = $(twoByTwo_3).css('background-image');
		var cleanup = /\"|\'|\)/g;
		var bg00 = bg0.split('/').pop().replace(cleanup, '');
		var bg01 = bg1.split('/').pop().replace(cleanup, ''); 
		var bg02 = bg2.split('/').pop().replace(cleanup, '');

		if (bg00 == "tile_nub_1.jpg"){
			if(bg01 == "tile_90_2.jpg"){
				if(bg02 == "tile_nub_0.jpg"){
					//alert("Congratulations!")
					flipWin2();
				}
			}
		}
	}

	function rotate90x1(img){
		if(enable){
		var tile_imagex1 = document.getElementById(img);
		tile_imagex1.style.backgroundImage = "url('" + tile_90x[tile_counterx] + "')";
		counterLoopx();
		verifyx1();
	}
	}

	function rotateNubx1(img){
		if(enable){
		var tile_imagex1 = document.getElementById(img);
		tile_imagex1.style.backgroundImage = "url('" + tile_nubx[tile_counterx] + "')";
		counterLoopx();
		verifyx1();
	}
	}

	function rotateLinex1(img){
		if(enable){
		var tile_imagex1 = document.getElementById(img);
		tile_imagex1.style.backgroundImage = "url('" + tile_linex[tile_counterx] + "')";
		counterLoop2x();
		verifyx1();
	}
	}

	function verifyx1(){
		flipSound();
		var pic1 = $(twoByTwo_00).css('background-image');
		var pic2 = $(twoByTwo_02).css('background-image');
		var pic3 = $(twoByTwo_03).css('background-image');
		var cleanup = /\"|\'|\)/g;
		var pic01 = pic1.split('/').pop().replace(cleanup, '');
		var pic02 = pic2.split('/').pop().replace(cleanup, ''); 
		var pic03 = pic3.split('/').pop().replace(cleanup, '');

		if (pic01 == "tile_nub_2.jpg"){
			if(pic02 == "tile_90_0.jpg"){
				if(pic03 == "tile_nub_3.jpg"){
					//alert("Congratulations!")
					flipWin02();
				}
			}
		}
	}