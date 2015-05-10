/***************************************************************************************
 * The program that will read the adj_matrix and assign tiles acoordingly. 
 *
 * 
 *  NOTE: this is a test to see how well the function for the tile assignments work 
 * in unison with hte adjacent matrix the tiles actually assigned are not going to rotate ; 
 * nor can you win form this . 
 * 
 * However, the images are going to be rendered as the array of image at index 0 
 * so please feel free to test this.  
 * 
 * @author Eva Yu
 * @version [1.0]
 ***************************************************************************************
 */
/**
 * [tile_90 description] Holds all the right angle tile images
 * [tile_nub] holds all the nub tile images
 * [tile_t] holds all the three-pronged tile images
 * [tile_line] holds all the line tile images
 * @type {Array} of image files  
 *
 *  [tile_cross] holds the cross tile images 
 *  @type {String} of image file ; 
 */
var tile_90 = ["../img/tile_90_0.jpg","../img/tile_90_1.jpg","../img/tile_90_2.jpg","../img/tile_90_3.jpg" ];
var tile_nub =["../img/tile_nub_0.jpg","../img/tile_nub_1.jpg","../img/tile_nub_2.jpg","../img/tile_nub_3.jpg" ];
var tile_t = ["../img/tile_t_0.jpg","../img/tile_t_1.jpg","../img/tile_t_2.jpg","../img/tile_t_3.jpg" ];
var tile_line = ["../img/tile_line_0.jpg","../img/tile_line_1.jpg"];
var tile_cross = "../img/tile_cross.jpg";

var tile_counter = new Array(9); // for a three by three matrix. May be adjust to fit differnt matrices' sizes' 

/**
 * This functiona intializes all the values in the counter to zero
 * 
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
			if(this.adj_matrix[i][ii]){
				tile_counter[i]++;
			}
		}
	}
}

/**
 * This function calls the tile_counterInit() function and tile_count function in this JS folder
 * Then the grid counter will analyze how many counts there were in the assocation tile space 
 * The number and index of the tile depends on the game board matrix size. However, this 
 * function is programmed for a 3x3 test. 
 * 
 * 	@param  {Number} var i is the index of the grid coutner in association to the src of the id of the img     
 */
function tileAssign(){
	tile_counterInit();
	tile_count();

	for(var i = 0; i < adj_matrix.length; i++){
		if (tile_counter[i] === 1){
			var image_array_0 = document.getElementById('tile_img_'+i);
			image_array_0.src = tile_nub[0];
		}else if (tile_counter[i] === 2){
			var image_array_1 = document.getElementById('tile_img_'+i);
			image_array_1.src = tile_90[0];
		}else if (tile_counter[i] === 3){
			var image_array_2 = document.getElementById('tile_img_'+i);
			image_array_2.src = tile_t[0];
		}else if (tile_counter[i] === 4){
			var image_array_3 = document.getElementById('tile_img_'+i);
			image_array_3.src = tile_cross[0];
		}

	}
}

